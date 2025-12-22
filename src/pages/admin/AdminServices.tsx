import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Pencil, RefreshCcw, Plus, Trash2 } from 'lucide-react';

type ServiceFeature = { title: string; description: string };
type ProcessStep = { step: number; title: string; description: string };

type Service = {
  id: string;
  title: string;
  short_description: string;
  full_description: string;
  icon_name: string;
  accent_color: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  benefits: string[];
  display_order: number;
};

export default function AdminServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<Partial<Service>>({});
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: services, isLoading } = useQuery({
    queryKey: ['admin-services'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data as unknown as Service[];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: Partial<Service>) => {
      const { error } = await supabase
        .from('services')
        .update({
          title: data.title,
          short_description: data.short_description,
          full_description: data.full_description,
          icon_name: data.icon_name,
          accent_color: data.accent_color,
          features: data.features,
          process: data.process,
          benefits: data.benefits,
          display_order: data.display_order,
        })
        .eq('id', data.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-services'] });
      toast({ title: 'Success', description: 'Service updated successfully.' });
      handleClose();
    },
    onError: (error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    setEditingService(null);
    setFormData({});
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData(service);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMutation.mutate(formData);
  };

  const updateFeature = (index: number, field: 'title' | 'description', value: string) => {
    const features = [...(formData.features || [])];
    features[index] = { ...features[index], [field]: value };
    setFormData({ ...formData, features });
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...(formData.features || []), { title: '', description: '' }],
    });
  };

  const removeFeature = (index: number) => {
    const features = [...(formData.features || [])];
    features.splice(index, 1);
    setFormData({ ...formData, features });
  };

  const updateProcess = (index: number, field: 'title' | 'description', value: string) => {
    const process = [...(formData.process || [])];
    process[index] = { ...process[index], [field]: value };
    setFormData({ ...formData, process });
  };

  const updateBenefit = (index: number, value: string) => {
    const benefits = [...(formData.benefits || [])];
    benefits[index] = value;
    setFormData({ ...formData, benefits });
  };

  const addBenefit = () => {
    setFormData({
      ...formData,
      benefits: [...(formData.benefits || []), ''],
    });
  };

  const removeBenefit = (index: number) => {
    const benefits = [...(formData.benefits || [])];
    benefits.splice(index, 1);
    setFormData({ ...formData, benefits });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Services</h2>
        <p className="text-muted-foreground">Edit service content directly from here.</p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Service: {editingService?.title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="icon_name">Icon Name</Label>
                <Input
                  id="icon_name"
                  value={formData.icon_name || ''}
                  onChange={(e) => setFormData({ ...formData, icon_name: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="short_description">Short Description</Label>
              <Textarea
                id="short_description"
                value={formData.short_description || ''}
                onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="full_description">Full Description</Label>
              <Textarea
                id="full_description"
                value={formData.full_description || ''}
                onChange={(e) => setFormData({ ...formData, full_description: e.target.value })}
                rows={4}
                required
              />
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Features</Label>
                <Button type="button" variant="outline" size="sm" onClick={addFeature}>
                  <Plus className="h-4 w-4 mr-1" /> Add Feature
                </Button>
              </div>
              {formData.features?.map((feature, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Feature {index + 1}</Label>
                    <Button type="button" variant="ghost" size="icon" onClick={() => removeFeature(index)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <Input
                    placeholder="Title"
                    value={feature.title}
                    onChange={(e) => updateFeature(index, 'title', e.target.value)}
                  />
                  <Textarea
                    placeholder="Description"
                    value={feature.description}
                    onChange={(e) => updateFeature(index, 'description', e.target.value)}
                    rows={2}
                  />
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              <Label>Process Steps</Label>
              {formData.process?.map((step, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-2">
                  <Label>Step {step.step}</Label>
                  <Input
                    placeholder="Title"
                    value={step.title}
                    onChange={(e) => updateProcess(index, 'title', e.target.value)}
                  />
                  <Textarea
                    placeholder="Description"
                    value={step.description}
                    onChange={(e) => updateProcess(index, 'description', e.target.value)}
                    rows={2}
                  />
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Benefits</Label>
                <Button type="button" variant="outline" size="sm" onClick={addBenefit}>
                  <Plus className="h-4 w-4 mr-1" /> Add Benefit
                </Button>
              </div>
              {formData.benefits?.map((benefit, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={benefit}
                    onChange={(e) => updateBenefit(index, e.target.value)}
                    placeholder={`Benefit ${index + 1}`}
                  />
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeBenefit(index)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex gap-2 justify-end">
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
                  <TableHead>Title</TableHead>
                  <TableHead>Short Description</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services?.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>{service.display_order}</TableCell>
                    <TableCell className="font-medium">{service.title}</TableCell>
                    <TableCell className="max-w-md truncate">{service.short_description}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
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
