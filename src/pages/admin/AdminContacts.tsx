import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { format } from 'date-fns';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string;
  message: string;
  created_at: string;
};

export default function AdminContacts() {
  const { data: submissions, isLoading } = useQuery({
    queryKey: ['admin-contact-submissions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data as ContactSubmission[];
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Contact Submissions</h2>
        <p className="text-muted-foreground">View all contact form submissions.</p>
      </div>

      <Card>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : submissions?.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">No submissions yet.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions?.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell className="font-medium">{submission.name}</TableCell>
                    <TableCell>{submission.email}</TableCell>
                    <TableCell>{submission.company}</TableCell>
                    <TableCell>{format(new Date(submission.created_at), 'MMM d, yyyy HH:mm')}</TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Contact Submission</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Name</p>
                              <p className="text-foreground">{submission.name}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Email</p>
                              <p className="text-foreground">{submission.email}</p>
                            </div>
                            {submission.phone && (
                              <div>
                                <p className="text-sm font-medium text-muted-foreground">Phone</p>
                                <p className="text-foreground">{submission.phone}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Company</p>
                              <p className="text-foreground">{submission.company}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Message</p>
                              <p className="text-foreground whitespace-pre-wrap">{submission.message}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground">Submitted</p>
                              <p className="text-foreground">
                                {format(new Date(submission.created_at), 'MMMM d, yyyy at HH:mm')}
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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
