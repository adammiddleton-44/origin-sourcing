import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Pencil, RefreshCcw, Plus, Trash2 } from 'lucide-react';

type KeyMetric = { label: string; value: string; icon: string; context?: string };
type TimelinePhase = { title: string; duration: string; description: string };
type ClientQuote = { quote: string; author: string; role: string; company: string };
type SolutionSection = { title: string; items: string[] };
type StructuredSolution = { intro: string; sections: SolutionSection[] };

type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  image: string | null;
  challenge: string;
  solution: string;
  testimonial: string | null;
  full_challenge: string[];
  full_solution: string[] | null;
  structured_solution: StructuredSolution | null;
  key_metrics: KeyMetric[];
  timeline: TimelinePhase[];
  client_quote: ClientQuote | null;
  related_services: string[];
  display_order: number;
  published: boolean;
};

export default function AdminCaseStudies() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingCase, setEditingCase] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState<Partial<CaseStudy>>({});
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ['admin-case-studies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data as unknown as CaseStudy[];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: Partial<CaseStudy>) => {
      const { error } = await supabase
        .from('case_studies')
        .update({
          client: data.client,
          industry: data.industry,
          image: data.image,
          challenge: data.challenge,
          solution: data.solution,
          testimonial: data.testimonial,
          full_challenge: data.full_challenge,
          full_solution: data.full_solution,
          structured_solution: data.structured_solution,
          key_metrics: data.key_metrics,
          timeline: data.timeline,
          client_quote: data.client_quote,
          related_services: data.related_services,
          display_order: data.display_order,
          published: data.published,
        })
        .eq('id', data.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      toast({ title: 'Success', description: 'Case study updated successfully.' });
      handleClose();
    },
    onError: (error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    setEditingCase(null);
    setFormData({});
  };

  const handleEdit = (caseStudy: CaseStudy) => {
    setEditingCase(caseStudy);
    setFormData(caseStudy);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMutation.mutate(formData);
  };

  // Full Challenge helpers
  const updateFullChallenge = (index: number, value: string) => {
    const arr = [...(formData.full_challenge || [])];
    arr[index] = value;
    setFormData({ ...formData, full_challenge: arr });
  };

  const addFullChallenge = () => {
    setFormData({ ...formData, full_challenge: [...(formData.full_challenge || []), ''] });
  };

  const removeFullChallenge = (index: number) => {
    const arr = [...(formData.full_challenge || [])];
    arr.splice(index, 1);
    setFormData({ ...formData, full_challenge: arr });
  };

  // Timeline helpers
  const updateTimeline = (index: number, field: keyof TimelinePhase, value: string) => {
    const arr = [...(formData.timeline || [])];
    arr[index] = { ...arr[index], [field]: value };
    setFormData({ ...formData, timeline: arr });
  };

  // Key Metrics helpers
  const updateMetric = (index: number, field: keyof KeyMetric, value: string) => {
    const arr = [...(formData.key_metrics || [])];
    arr[index] = { ...arr[index], [field]: value };
    setFormData({ ...formData, key_metrics: arr });
  };

  // Client Quote helpers
  const updateClientQuote = (field: keyof ClientQuote, value: string) => {
    setFormData({
      ...formData,
      client_quote: { ...(formData.client_quote || { quote: '', author: '', role: '', company: '' }), [field]: value },
    });
  };

  // Structured Solution helpers
  const updateSolutionIntro = (value: string) => {
    setFormData({
      ...formData,
      structured_solution: {
        ...(formData.structured_solution || { intro: '', sections: [] }),
        intro: value,
      },
    });
  };

  const updateSolutionSection = (sectionIndex: number, field: 'title', value: string) => {
    const sections = [...(formData.structured_solution?.sections || [])];
    sections[sectionIndex] = { ...sections[sectionIndex], [field]: value };
    setFormData({
      ...formData,
      structured_solution: { ...(formData.structured_solution || { intro: '', sections: [] }), sections },
    });
  };

  const updateSolutionItem = (sectionIndex: number, itemIndex: number, value: string) => {
    const sections = [...(formData.structured_solution?.sections || [])];
    const items = [...(sections[sectionIndex]?.items || [])];
    items[itemIndex] = value;
    sections[sectionIndex] = { ...sections[sectionIndex], items };
    setFormData({
      ...formData,
      structured_solution: { ...(formData.structured_solution || { intro: '', sections: [] }), sections },
    });
  };

  const addSolutionItem = (sectionIndex: number) => {
    const sections = [...(formData.structured_solution?.sections || [])];
    sections[sectionIndex] = {
      ...sections[sectionIndex],
      items: [...(sections[sectionIndex]?.items || []), ''],
    };
    setFormData({
      ...formData,
      structured_solution: { ...(formData.structured_solution || { intro: '', sections: [] }), sections },
    });
  };

  const removeSolutionItem = (sectionIndex: number, itemIndex: number) => {
    const sections = [...(formData.structured_solution?.sections || [])];
    const items = [...(sections[sectionIndex]?.items || [])];
    items.splice(itemIndex, 1);
    sections[sectionIndex] = { ...sections[sectionIndex], items };
    setFormData({
      ...formData,
      structured_solution: { ...(formData.structured_solution || { intro: '', sections: [] }), sections },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Case Studies</h2>
        <p className="text-muted-foreground">Edit case study content directly from here.</p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Case Study: {editingCase?.client}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="challenge">Challenge</TabsTrigger>
                <TabsTrigger value="solution">Solution</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="quote">Quote</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="client">Client Name</Label>
                    <Input
                      id="client"
                      value={formData.client || ''}
                      onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      value={formData.industry || ''}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image || ''}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="challenge">Summary Challenge</Label>
                  <Textarea
                    id="challenge"
                    value={formData.challenge || ''}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="solution">Summary Solution</Label>
                  <Textarea
                    id="solution"
                    value={formData.solution || ''}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="published"
                    checked={formData.published || false}
                    onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                  />
                  <Label htmlFor="published">Published</Label>
                </div>
              </TabsContent>

              <TabsContent value="challenge" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <Label>Full Challenge Paragraphs</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addFullChallenge}>
                    <Plus className="h-4 w-4 mr-1" /> Add Paragraph
                  </Button>
                </div>
                {formData.full_challenge?.map((para, index) => (
                  <div key={index} className="flex gap-2">
                    <Textarea
                      value={para}
                      onChange={(e) => updateFullChallenge(index, e.target.value)}
                      rows={3}
                      className="flex-1"
                    />
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeFullChallenge(index)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="solution" className="space-y-4 mt-4">
                {formData.structured_solution ? (
                  <>
                    <div className="space-y-2">
                      <Label>Solution Intro</Label>
                      <Textarea
                        value={formData.structured_solution?.intro || ''}
                        onChange={(e) => updateSolutionIntro(e.target.value)}
                        rows={3}
                      />
                    </div>
                    {formData.structured_solution?.sections?.map((section, sIndex) => (
                      <div key={sIndex} className="p-4 border rounded-lg space-y-3">
                        <Input
                          value={section.title}
                          onChange={(e) => updateSolutionSection(sIndex, 'title', e.target.value)}
                          placeholder="Section Title"
                          className="font-medium"
                        />
                        <div className="space-y-2">
                          {section.items?.map((item, iIndex) => (
                            <div key={iIndex} className="flex gap-2">
                              <Input
                                value={item}
                                onChange={(e) => updateSolutionItem(sIndex, iIndex, e.target.value)}
                                placeholder={`Item ${iIndex + 1}`}
                              />
                              <Button type="button" variant="ghost" size="icon" onClick={() => removeSolutionItem(sIndex, iIndex)}>
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          ))}
                          <Button type="button" variant="outline" size="sm" onClick={() => addSolutionItem(sIndex)}>
                            <Plus className="h-4 w-4 mr-1" /> Add Item
                          </Button>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-muted-foreground">This case study uses simple solution paragraphs (edit full_solution in database if needed).</p>
                )}
              </TabsContent>

              <TabsContent value="results" className="space-y-4 mt-4">
                <Label>Key Metrics</Label>
                {formData.key_metrics?.map((metric, index) => (
                  <div key={index} className="p-4 border rounded-lg grid grid-cols-2 gap-3">
                    <Input
                      value={metric.label}
                      onChange={(e) => updateMetric(index, 'label', e.target.value)}
                      placeholder="Label (e.g., Cost Savings)"
                    />
                    <Input
                      value={metric.value}
                      onChange={(e) => updateMetric(index, 'value', e.target.value)}
                      placeholder="Value (e.g., £310K)"
                    />
                    <Input
                      value={metric.context || ''}
                      onChange={(e) => updateMetric(index, 'context', e.target.value)}
                      placeholder="Context (optional)"
                      className="col-span-2"
                    />
                  </div>
                ))}

                <Label className="mt-6 block">Timeline</Label>
                {formData.timeline?.map((phase, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        value={phase.title}
                        onChange={(e) => updateTimeline(index, 'title', e.target.value)}
                        placeholder="Phase Title"
                      />
                      <Input
                        value={phase.duration}
                        onChange={(e) => updateTimeline(index, 'duration', e.target.value)}
                        placeholder="Duration (e.g., 4 weeks)"
                      />
                    </div>
                    <Textarea
                      value={phase.description}
                      onChange={(e) => updateTimeline(index, 'description', e.target.value)}
                      placeholder="Description"
                      rows={2}
                    />
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="quote" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Client Quote</Label>
                  <Textarea
                    value={formData.client_quote?.quote || ''}
                    onChange={(e) => updateClientQuote('quote', e.target.value)}
                    rows={4}
                    placeholder="The testimonial quote..."
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Author Name</Label>
                    <Input
                      value={formData.client_quote?.author || ''}
                      onChange={(e) => updateClientQuote('author', e.target.value)}
                      placeholder="Jack Anderson"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Input
                      value={formData.client_quote?.role || ''}
                      onChange={(e) => updateClientQuote('role', e.target.value)}
                      placeholder="Chief Operating Officer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input
                      value={formData.client_quote?.company || ''}
                      onChange={(e) => updateClientQuote('company', e.target.value)}
                      placeholder="Sessions"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex gap-2 justify-end pt-4 border-t">
              <Button type="button" variant="outline" onClick={handleClose}>Cancel</Button>
              <Button type="submit" disabled={saveMutation.isPending}>
                {saveMutation.isPending && <RefreshCcw className="h-4 w-4 mr-2 animate-spin" />}
                Save Changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {caseStudies?.map((cs) => (
                  <TableRow key={cs.id}>
                    <TableCell>{cs.display_order}</TableCell>
                    <TableCell className="font-medium">{cs.client}</TableCell>
                    <TableCell>{cs.industry}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${cs.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {cs.published ? 'Published' : 'Draft'}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(cs)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
