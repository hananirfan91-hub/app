import { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, Code, Palette, Video, FileText, 
  ArrowRight, Play, MessageCircle, Sparkles, Eye,
  TrendingUp, Users, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import SEO from '@/components/SEO';
import gsap from 'gsap';

type Category = 'all' | 'websites' | 'graphic' | 'video' | 'seo';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: Category;
  tags: string[];
  image: string;
  link?: string;
  results?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hadith Wisdom Hub - Islamic Platform',
    description: 'Comprehensive Islamic knowledge platform with daily hadiths and collections',
    fullDescription: 'A comprehensive Islamic knowledge platform featuring daily hadiths, searchable collections, and user-friendly interface. Built with modern web technologies for optimal performance and accessibility. The platform serves thousands of users daily with authenticated Islamic content.',
    category: 'websites',
    tags: ['Web Development', 'React', 'Firebase', 'Islamic Content', 'SEO'],
    image: '/project-hadith.jpg',
    link: 'https://hadithwisdomhub0.vercel.app',
    results: '10,000+ monthly active users, 95% user satisfaction'
  },
  {
    id: 2,
    title: 'Hanan Irfan Portfolio Website',
    description: 'Professional portfolio showcasing digital services and skills',
    fullDescription: 'A modern, responsive portfolio website designed to showcase professional skills, projects, and services. Features smooth animations, dark theme, optimized performance, and SEO best practices. Built with React and Tailwind CSS for maximum performance.',
    category: 'websites',
    tags: ['Web Development', 'Portfolio', 'React', 'Responsive Design', 'GSAP'],
    image: '/project-portfolio.jpg',
    link: 'https://hananirfanportfolio.vercel.app',
    results: 'Top Google rankings for key service keywords'
  },
  {
    id: 3,
    title: 'Quick Image Resizer Tool',
    description: 'Free online tool for quick image resizing and optimization',
    fullDescription: 'A web-based tool that allows users to quickly resize images for various platforms. Supports bulk processing, multiple formats, and social media presets. Optimized for speed and ease of use with client-side processing for privacy.',
    category: 'websites',
    tags: ['Web Tool', 'JavaScript', 'Image Processing', 'Free Tool', 'Utility'],
    image: '/project-resizer.jpg',
    link: 'https://image-resizer0.vercel.app',
    results: '1,000+ images processed monthly'
  },
  {
    id: 4,
    title: 'QuickWorks IT Center Website',
    description: 'Professional corporate website for IT services company',
    fullDescription: 'Professional website for an IT services company featuring service listings, contact forms, and company information. Designed with a clean, corporate aesthetic that builds trust and converts visitors into leads.',
    category: 'websites',
    tags: ['Web Development', 'Business Website', 'Corporate', 'Lead Generation'],
    image: '/project-quickworks.jpg',
    link: 'https://quickworkitcenter.lovable.app',
    results: '40% increase in client inquiries'
  },
  {
    id: 5,
    title: 'AI Technology Blog Platform',
    description: 'Modern blog platform with AI-focused technology content',
    fullDescription: 'A modern blog platform focused on AI and technology content. Features article management, SEO optimization, and responsive design for all devices. Built with performance and search visibility in mind.',
    category: 'websites',
    tags: ['Web Development', 'Blog', 'SEO', 'Content Management', 'React'],
    image: '/project-blog.jpg',
    link: 'https://aiblogs0.vercel.app',
    results: '200% increase in organic traffic'
  },
  {
    id: 6,
    title: 'Tech Startup Brand Identity',
    description: 'Complete brand identity package including logo and guidelines',
    fullDescription: 'Comprehensive brand identity package including logo design, color palette, typography guidelines, and brand assets for a tech startup. The design communicates innovation, trust, and professionalism.',
    category: 'graphic',
    tags: ['Graphic Design', 'Branding', 'Logo Design', 'Brand Guidelines', 'Identity'],
    image: '/project-brand.jpg',
    results: 'Successful brand launch and recognition'
  },
  {
    id: 7,
    title: 'E-Commerce Social Media Campaign',
    description: 'Complete marketing graphics for product launch campaign',
    fullDescription: 'A series of social media graphics designed for a product launch campaign. Includes Instagram posts, stories, Facebook banners, and promotional materials. All designs optimized for engagement and conversions.',
    category: 'graphic',
    tags: ['Graphic Design', 'Social Media', 'Marketing', 'E-commerce', 'Advertising'],
    image: '/project-social.jpg',
    results: '300% increase in social engagement'
  },
  {
    id: 8,
    title: 'YouTube Channel Branding Package',
    description: 'Complete channel branding including thumbnails and graphics',
    fullDescription: 'Full YouTube channel branding including banner, profile picture, thumbnail templates, and intro video graphics for a tech review channel. Designed to increase click-through rates and subscriber growth.',
    category: 'video',
    tags: ['Video Editing', 'YouTube', 'Branding', 'Thumbnails', 'Channel Art'],
    image: '/project-youtube.jpg',
    results: '150% increase in CTR, 10K new subscribers'
  },
  {
    id: 9,
    title: 'Mobile App Product Demo Video',
    description: 'Professional promotional video with motion graphics',
    fullDescription: 'Professional product demonstration video showcasing features and benefits of a mobile application. Includes motion graphics, professional voiceover, and engaging transitions to maximize viewer retention.',
    category: 'video',
    tags: ['Video Editing', 'Motion Graphics', 'Marketing', 'Product Demo', 'App Promotion'],
    image: '/project-demo.jpg',
    results: '50,000+ views, 5% conversion rate'
  },
  {
    id: 10,
    title: 'E-Commerce SEO Campaign',
    description: 'Comprehensive SEO optimization with proven results',
    fullDescription: 'Comprehensive SEO campaign for an e-commerce website resulting in significant increase in organic traffic and top rankings for key search terms. Included technical SEO, content optimization, and link building.',
    category: 'seo',
    tags: ['SEO', 'E-commerce', 'Analytics', 'Content Strategy', 'Link Building'],
    image: '/project-seo.jpg',
    results: '150% increase in organic traffic, top 3 rankings'
  },
  {
    id: 11,
    title: 'SaaS Content Strategy',
    description: 'End-to-end blog content and SEO strategy implementation',
    fullDescription: 'End-to-end content strategy including keyword research, blog post creation, and on-page SEO optimization for a SaaS company blog. Resulted in sustained organic growth and lead generation.',
    category: 'seo',
    tags: ['Content Writing', 'SEO', 'Strategy', 'Blogging', 'Lead Generation'],
    image: '/project-content.jpg',
    results: '300% increase in blog traffic, 50+ qualified leads'
  },
  {
    id: 12,
    title: 'Tech Conference Poster Series',
    description: 'Eye-catching promotional posters for technology event',
    fullDescription: 'Series of eye-catching posters designed for a technology conference. Features modern design elements and consistent branding across all materials. Optimized for both print and digital distribution.',
    category: 'graphic',
    tags: ['Graphic Design', 'Print Design', 'Event Marketing', 'Posters', 'Branding'],
    image: '/project-poster.jpg',
    results: 'Sold out event, 500+ attendees'
  },
];

const categories: { value: Category; label: string; icon: typeof Code }[] = [
  { value: 'all', label: 'All Projects', icon: Code },
  { value: 'websites', label: 'Web Development', icon: Code },
  { value: 'graphic', label: 'Graphic Design', icon: Palette },
  { value: 'video', label: 'Video & Thumbnails', icon: Video },
  { value: 'seo', label: 'SEO & Content', icon: FileText },
];

const stats = [
  { icon: Award, value: '500+', label: 'Projects Completed' },
  { icon: Users, value: '300+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate' },
 
];

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Portfolio - Web Design, Graphic Design, Video Projects Pakistan',
  description: 'Explore our portfolio of 500+ successful projects across web development, graphic design, video editing, and digital marketing. See real results and case studies from Pakistan\'s leading digital agency.',
  url: 'https://hidigitalgroup.vercel.app/projects',
  image: 'https://hidigitalgroup.vercel.app/portfolio-og.jpg',
  hasPart: projects.map((project) => ({
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    genre: project.category,
    keywords: project.tags.join(', '),
    url: project.link && project.link !== '#' ? project.link : 'https://hidigitalgroup.vercel.app/projects'
  }))
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Our Portfolio Showcase - Hanan Irfan Digital Group',
  description: 'Watch our portfolio showcase featuring web development, graphic design, video editing, and SEO projects. See real results from 1000+ completed projects.',
  thumbnailUrl: 'https://hidigitalgroup.vercel.app/portfolio-video-thumb.jpg',
  uploadDate: '2024-01-25',
  duration: 'PT5M00S',
  contentUrl: 'https://www.youtube.com/@ancientmystery-0',
  embedUrl: 'https://www.youtube.com/@ancientmystery-0'
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-in'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.project-card'),
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [activeCategory]);

  return (
    <>
      <SEO 
        title="Our Portfolio - 500+ Projects | Web Design, Graphic Design Pakistan"
        description="View our portfolio of 1000+ successful projects. Web development, graphic design, video editing, SEO campaigns with proven results. Pakistan's leading digital agency portfolio. See real case studies and client success stories."
        keywords="portfolio Pakistan, web design portfolio, graphic design portfolio, video editing projects, SEO case studies, website examples, design showcase, Pakistan freelancer portfolio, web development projects, logo design portfolio, YouTube thumbnail portfolio, digital marketing case studies, successful projects Pakistan, best digital agency portfolio, creative work showcase"
        canonical="https://hidigitalgroup.vercel.app/projects"
        schema={[portfolioSchema, videoSchema]}
        ogImage="https://hidigitalgroup.vercel.app/og-projects.jpg"
      />
      
      <div ref={sectionRef} className="w-full">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#15151f] to-[#0b0b12]">
            <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#6c5dd3]/15 rounded-full blur-[100px] sm:blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ff9ec7]/10 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4" />
              Our Work & Achievements
            </span>
            <h1 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Our Portfolio —{' '}
              <span className="bg-gradient-to-r from-[#6c5dd3] via-[#b2a5ff] to-[#ff9ec7] bg-clip-text text-transparent">
                500+ Projects
              </span>{' '}
              Delivered
            </h1>
            <p className="animate-in text-sm sm:text-base lg:text-lg text-[#b0b0c8] max-w-2xl mx-auto mb-6">
              Explore our portfolio of successful projects across web development, graphic design, video editing, and digital marketing. Real results, real clients, real success stories.
            </p>
            
            {/* Stats */}
            <div className="animate-in flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#6c5dd3]" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-[#b0b0c8] text-xs sm:text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-6 sm:py-8 bg-[#15151f] border-y border-[#2b2b3a] px-4 sm:px-6 lg:px-8 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === cat.value
                      ? 'bg-[#6c5dd3] text-white shadow-lg shadow-[#6c5dd3]/30'
                      : 'bg-[#0b0b12] text-[#b0b0c8] hover:text-white hover:bg-[#2b2b3a]'
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#15151f] border border-[#2b2b3a] hover:border-[#6c5dd3] transition-all duration-300 hover:shadow-xl hover:shadow-[#6c5dd3]/10">
                    {/* Image placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/20 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-[#6c5dd3]/30 flex items-center justify-center">
                        {project.category === 'websites' && <Code className="w-6 h-6 sm:w-8 sm:h-8 text-[#b2a5ff]" />}
                        {project.category === 'graphic' && <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-[#b2a5ff]" />}
                        {project.category === 'video' && <Video className="w-6 h-6 sm:w-8 sm:h-8 text-[#b2a5ff]" />}
                        {project.category === 'seo' && <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-[#b2a5ff]" />}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-[#b2a5ff] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#b0b0c8] mb-2 sm:mb-3 line-clamp-2">{project.description}</p>
                      
                      {project.results && (
                        <div className="mb-2 sm:mb-3">
                          <span className="text-[10px] sm:text-xs text-[#6c5dd3] font-medium">{project.results}</span>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 bg-[#6c5dd3]/20 text-[#b2a5ff] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#6c5dd3]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-[#6c5dd3] text-white text-sm font-medium rounded-full flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Play className="w-4 h-4" />
                Portfolio Video
              </span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Watch Our Work in Action
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base max-w-2xl mx-auto">
                See highlights from our recent projects and learn how we deliver exceptional results for our clients.
              </p>
            </div>

            <div className="animate-in aspect-video bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl overflow-hidden shadow-2xl shadow-[#6c5dd3]/10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/portfolio-showcase"
                title="Hanan Irfan Digital Group - Portfolio Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="animate-in mt-8 text-center">
              <a 
                href="https://www.youtube.com/@ancientmystery-0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#b2a5ff] hover:text-white transition-colors"
              >
                <Play className="w-5 h-5" />
                Subscribe to our YouTube for more project showcases
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Explore More</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Discover Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: 'Our Services', href: '/services', desc: 'Explore our complete range of digital services and solutions' },
                { title: 'How We Work', href: '/how-it-works', desc: 'Learn about our proven 5-step project process' },
                { title: 'About Our Company', href: '/about', desc: 'Learn about our story, mission, and experienced team' },
                { title: 'Contact Us', href: '/contact', desc: 'Get in touch for a free consultation and project quote' },
                { title: 'Client FAQ', href: '/faq', desc: 'Find answers to common questions about our services' },
                { title: 'Start Your Project', href: '/contact', desc: 'Ready to begin? Contact us and let us discuss your needs' },
              ].map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="animate-in p-5 sm:p-6 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold group-hover:text-[#b2a5ff] transition-colors">{link.title}</h3>
                    <ArrowRight className="w-5 h-5 text-[#666] group-hover:text-[#b2a5ff] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-[#b0b0c8] text-sm">{link.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="animate-in text-[#b0b0c8] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
              Let us create something amazing together. Contact us today for a free consultation and project quote.
            </p>
            <div className="animate-in flex flex-wrap justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/923106359235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 sm:py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Start on WhatsApp
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 sm:py-4 bg-[#15151f] border border-[#2b2b3a] text-white rounded-full font-medium hover:border-[#6c5dd3] transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                View Contact Page
              </a>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-lg sm:max-w-2xl bg-[#15151f] border-[#2b2b3a] text-white mx-4 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold">{selectedProject?.title}</DialogTitle>
              <DialogDescription className="text-[#b0b0c8] text-sm sm:text-base">
                {selectedProject?.description}
              </DialogDescription>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-4 sm:space-y-6">
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-[#6c5dd3]/30 flex items-center justify-center">
                    {selectedProject.category === 'websites' && <Code className="w-7 h-7 sm:w-10 sm:h-10 text-[#b2a5ff]" />}
                    {selectedProject.category === 'graphic' && <Palette className="w-7 h-7 sm:w-10 sm:h-10 text-[#b2a5ff]" />}
                    {selectedProject.category === 'video' && <Video className="w-7 h-7 sm:w-10 sm:h-10 text-[#b2a5ff]" />}
                    {selectedProject.category === 'seo' && <FileText className="w-7 h-7 sm:w-10 sm:h-10 text-[#b2a5ff]" />}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-[#b2a5ff] mb-1.5 sm:mb-2">About This Project</h4>
                  <p className="text-[#f0f0f7] text-sm sm:text-base">{selectedProject.fullDescription}</p>
                </div>

                {selectedProject.results && (
                  <div className="p-4 bg-[#6c5dd3]/10 border border-[#6c5dd3]/30 rounded-xl">
                    <h4 className="text-xs sm:text-sm font-medium text-[#b2a5ff] mb-1.5">Results Achieved</h4>
                    <p className="text-white text-sm sm:text-base font-medium">{selectedProject.results}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-[#b2a5ff] mb-1.5 sm:mb-2">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#6c5dd3]/20 text-[#b2a5ff] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.link && selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white text-sm sm:text-base">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Project
                    </Button>
                  </a>
                )}

                <a href="/contact">
                  <Button variant="outline" className="w-full border-[#2b2b3a] text-white hover:bg-[#2b2b3a] text-sm sm:text-base mt-2">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start a Similar Project
                  </Button>
                </a>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
