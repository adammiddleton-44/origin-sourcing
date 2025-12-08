import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Plus, Pencil, Trash2, RefreshCcw } from 'lucide-react';

type PageSEO = {
  id: string;
  page_path: string;
  seo_title: string | null;
  meta_description: string | null;
  og_image: string | null;
  canonical_url: string | null;
  noindex: boolean;
};

const emptySEO: Omit<PageSEO, 'id'> = {
  page_path: '',
  seo_title: null,
  meta_description: null,
  og_image: null,
  canonical_url: null,
  noindex: false,
};

export default function AdminSEO() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingSEO, setEditingSEO] = useState<PageSEO | null>(null);
  const [formData, setFormData] = useState<Omit<PageSEO, 'id'>>(emptySEO);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: seoEntries, isLoading } = useQuery({
    queryKey: ['admin-page-seo'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_seo')
        .select('*')
        .order('page_path');
      if (error) throw error;
      return data as PageSEO[];
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (data: Omit<PageSEO, 'id'> & { id?: string }) => {
      if (data.id) {
        const { error } = await supabase.from('page_seo').update(data).eq('id', data.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('page_seo').insert(data);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-page-seo'] });
      toast({ title: 'Success', description: 'SEO settings saved successfully.' });
      handleClose();
    },
    onError: (error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('page_seo').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-page-seo'] });
      toast({ title: 'Deleted', description: 'SEO entry deleted successfully.' });
    },
    onError: (error) => {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    setEditingSEO(null);
    setFormData(emptySEO);
  };

  const handleEdit = (seo: PageSEO) => {
    setEditingSEO(seo);
    setFormData(seo);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = editingSEO ? { ...formData, id: editingSEO.id } : formData;
    saveMutation.mutate(data);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Page SEO Settings</h2>
          <p className="text-muted-foreground">Manage SEO metadata for each page.</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setFormData(emptySEO)}>
              <Plus className="h-4 w-4 mr-2" /> New Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editingSEO ? 'Edit SEO' : 'Create SEO Entry'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="page_path">Page Path</Label>
                <Input
                  id="page_path"
                  placeholder="/about"
                  value={formData.page_path}
                  onChange={(e) => setFormData({ ...formData, page_path: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seo_title">SEO Title</Label>
                <Input
                  id="seo_title"
                  value={formData.seo_title ?? ''}
                  onChange={(e) => setFormData({ ...formData, seo_title: e.target.value || null })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="meta_description">Meta Description</Label>
                <Textarea
                  id="meta_description"
                  value={formData.meta_description ?? ''}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value || null })}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="og_image">OG Image URL</Label>
                <Input
                  id="og_image"
                  value={formData.og_image ?? ''}
                  onChange={(e) => setFormData({ ...formData, og_image: e.target.value || null })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="canonical_url">Canonical URL</Label>
                <Input
                  id="canonical_url"
                  value={formData.canonical_url ?? ''}
                  onChange={(e) => setFormData({ ...formData, canonical_url: e.target.value || null })}
                />
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  id="noindex"
                  checked={formData.noindex}
                  onCheckedChange={(checked) => setFormData({ ...formData, noindex: checked })}
                />
                <Label htmlFor="noindex">No Index (hide from search engines)</Label>
              </div>
              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={handleClose}>Cancel</Button>
                <Button type="submit" disabled={saveMutation.isPending}>
                  {saveMutation.isPending && <RefreshCcw className="h-4 w-4 mr-2 animate-spin" />}
                  Save
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : seoEntries?.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">No SEO entries yet.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Page Path</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Indexed</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {seoEntries?.map((seo) => (
                  <TableRow key={seo.id}>
                    <TableCell className="font-medium">{seo.page_path}</TableCell>
                    <TableCell className="max-w-xs truncate">{seo.seo_title ?? '-'}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${seo.noindex ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {seo.noindex ? 'No' : 'Yes'}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(seo)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteMutation.mutate(seo.id)}
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
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
