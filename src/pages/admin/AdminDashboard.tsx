import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const { data: blogCount } = useQuery({
    queryKey: ['admin-blog-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true });
      return count ?? 0;
    },
  });

  const { data: contactCount } = useQuery({
    queryKey: ['admin-contact-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true });
      return count ?? 0;
    },
  });

  const { data: seoCount } = useQuery({
    queryKey: ['admin-seo-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('page_seo')
        .select('*', { count: 'exact', head: true });
      return count ?? 0;
    },
  });

  const stats = [
    { title: 'Blog Posts', count: blogCount, icon: FileText, href: '/admin/blog', color: 'text-blue-500' },
    { title: 'Contact Submissions', count: contactCount, icon: Mail, href: '/admin/contacts', color: 'text-green-500' },
    { title: 'Page SEO Entries', count: seoCount, icon: Search, href: '/admin/seo', color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Welcome to Admin Dashboard</h2>
        <p className="text-muted-foreground">Manage your website content and settings.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Link key={stat.title} to={stat.href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.count ?? '-'}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
