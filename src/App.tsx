import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";

// Eager load homepage for fastest initial render
import Index from "./pages/Index";

// Lazy load all other pages
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Auth = lazy(() => import("./pages/Auth"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load admin pages (largest bundle savings)
const AdminLayout = lazy(() => import("./components/admin/AdminLayout").then(m => ({ default: m.AdminLayout })));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminBlog = lazy(() => import("./pages/admin/AdminBlog"));
const AdminContacts = lazy(() => import("./pages/admin/AdminContacts"));
const AdminSEO = lazy(() => import("./pages/admin/AdminSEO"));
const AdminServices = lazy(() => import("./pages/admin/AdminServices"));
const AdminCaseStudies = lazy(() => import("./pages/admin/AdminCaseStudies"));
const AdminMFASetup = lazy(() => import("./pages/admin/AdminMFASetup"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/procurement" element={<Navigate to="/services/purchasing" replace />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/mikos" element={<Navigate to="/case-studies/mikes-building-scalable-infrastructure-for-rapid-multi-site-expansion" replace />} />
            <Route path="/case-studies/:caseId" element={<CaseStudyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="services" element={<AdminServices />} />
              <Route path="case-studies" element={<AdminCaseStudies />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="seo" element={<AdminSEO />} />
              <Route path="security" element={<AdminMFASetup />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
