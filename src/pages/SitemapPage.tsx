import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ExternalLink, Map, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import gsap from 'gsap';

const sitemapLinks = {
  'Main Pages': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Projects & Portfolio', href: '/projects' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  'Our Services': [
    { label: 'Graphic Design Services', href: '/services' },
    { label: 'Web Development', href: '/services' },
    { label: 'SEO Services', href: '/services' },
    { label: 'Video Editing', href: '/services' },
    { label: 'Content Writing', href: '/services' },
    { label: 'Presentation Design', href: '/services' },
    { label: 'Word/PPT/Excel Services', href: '/services' },
    { label: 'Thumbnail Creation', href: '/services' },
    { label: 'Image Resizing', href: '/services' },
    { label: 'YouTube Content Creation', href: '/services' },
    { label: 'Assignment Help', href: '/services' },
    { label: 'Custom Digital Solutions', href: '/services' },
  ],
  'Account & Dashboard': [
    { label: 'Login / Sign Up', href: '/login' },
    { label: 'Client Dashboard', href: '/dashboard' },
    { label: 'My Profile', href: '/dashboard?tab=profile' },
    { label: 'My Orders', href: '/dashboard?tab=orders' },
    { label: 'Account Settings', href: '/dashboard?tab=settings' },
  ],
  'Company Information': [
    { label: 'About Our Company', href: '/about' },
    { label: 'Our Story', href: '/about' },
    { label: 'Our Mission & Vision', href: '/about' },
    { label: 'Core Values', href: '/about' },
    { label: 'Meet the Team', href: '/about' },
  ],
  'Contact & Support': [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Frequently Asked Questions', href: '/faq' },
    { label: 'WhatsApp Support', href: 'https://wa.me/923106359235' },
    { label: 'Email Support', href: 'mailto:hananirfan91@gmail.com' },
    { label: 'Phone Support', href: 'tel:+923106359235' },
  ],
  'Legal & Technical': [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'HTML Sitemap', href: '/sitemap' },
    { label: 'XML Sitemap', href: '/sitemap.xml' },
    { label: 'Robots.txt', href: '/robots.txt' },
  ],
};

const sitemapSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sitemap - Hanan Irfan Digital Group',
  description: 'Complete sitemap of Hanan Irfan Digital Group website. Navigate all pages including services, portfolio, about us, contact, and legal pages.',
  url: 'https://hidigitalgroup.vercel.app/sitemap',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hidigitalgroup.vercel.app/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sitemap',
        item: 'https://hidigitalgroup.vercel.app/sitemap'
      }
    ]
  }
};

export default function SitemapPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-in'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <>
      <SEO 
        title="Sitemap - Complete Website Navigation | Hanan Irfan Digital Group"
        description="Complete sitemap of Hanan Irfan Digital Group. Navigate all pages including web development services, graphic design portfolio, about us, contact information, FAQ, and legal pages."
        keywords="sitemap, website navigation, page directory, site structure, web pages, services pages, portfolio pages, contact page, about page, FAQ page, privacy policy, terms and conditions"
        canonical="https://hidigitalgroup.vercel.app/sitemap"
        schema={sitemapSchema}
        ogImage="https://hidigitalgroup.vercel.app/og-sitemap.jpg"
      />
      
      <div ref={sectionRef} className="w-full">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#15151f] to-[#0b0b12]">
            <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#6c5dd3]/15 rounded-full blur-[100px] sm:blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Map className="w-4 h-4" />
              Website Navigation
            </span>
            <h1 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Sitemap
            </h1>
            <p className="animate-in text-sm sm:text-base lg:text-lg text-[#b0b0c8] max-w-2xl mx-auto">
              A complete overview of all pages on our website. Use this sitemap to quickly navigate to any section of Hanan Irfan Digital Group.
            </p>
          </div>
        </section>

        {/* Sitemap Grid */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Object.entries(sitemapLinks).map(([category, links]) => (
                <div key={category} className="animate-in">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-4 pb-2 border-b border-[#2b2b3a]">
                    {category}
                  </h2>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        {link.href.startsWith('http') || link.href.startsWith('mailto') || link.href.startsWith('tel') ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#b0b0c8] hover:text-[#b2a5ff] transition-colors text-sm sm:text-base"
                          >
                            {link.label}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="text-[#b0b0c8] hover:text-[#b2a5ff] transition-colors text-sm sm:text-base"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* XML Sitemap Notice */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="animate-in text-center p-6 sm:p-8 bg-[#15151f] border border-[#2b2b3a] rounded-2xl">
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-[#6c5dd3] mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">XML Sitemap</h2>
              <p className="text-[#b0b0c8] text-sm sm:text-base mb-6">
                For search engines and crawlers, we also provide an XML sitemap that helps with better indexing of our website. This improves our visibility in search results.
              </p>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full transition-colors text-sm sm:text-base"
              >
                <FileText className="w-4 h-4" />
                View XML Sitemap
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Sparkles className="w-4 h-4" />
                Popular Pages
              </span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Most Visited Pages
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: 'Our Services', href: '/services', desc: 'Explore what we offer' },
                { title: 'View Portfolio', href: '/projects', desc: 'See our latest work' },
                { title: 'Contact Us', href: '/contact', desc: 'Get in touch today' },
                { title: 'How It Works', href: '/how-it-works', desc: 'Learn our process' },
              ].map((link, index) => (
                <Link 
                  key={index} 
                  to={link.href}
                  className="animate-in p-5 sm:p-6 bg-[#0b0b12] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-all group text-center"
                >
                  <h3 className="text-white font-semibold group-hover:text-[#b2a5ff] transition-colors mb-1">{link.title}</h3>
                  <p className="text-[#b0b0c8] text-sm">{link.desc}</p>
                  <ArrowRight className="w-5 h-5 text-[#666] group-hover:text-[#b2a5ff] mx-auto mt-3 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Can not Find What You Are Looking For?
            </h2>
            <p className="animate-in text-[#b0b0c8] text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
              If you cannot find the page you are looking for, please contact us directly. We are happy to help.
            </p>
            <div className="animate-in flex flex-wrap justify-center gap-3 sm:gap-4">
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#6c5dd3] text-white rounded-full font-medium hover:bg-[#5a4dc0] transition-colors"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Us
              </a>
              <a 
                href="/faq"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#15151f] border border-[#2b2b3a] text-white rounded-full font-medium hover:border-[#6c5dd3] transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
