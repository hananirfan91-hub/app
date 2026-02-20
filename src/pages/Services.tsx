import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, Code, Search, FileText, Video, Image, 
  PenTool, BookOpen, Monitor, CheckCircle, ArrowRight,
  MessageCircle, Mail, Star, TrendingUp,
  Zap, Shield, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import gsap from 'gsap';

const mainServices = [
  {
    id: 'graphic-design',
    icon: Palette,
    title: 'Professional Graphic Design Services',
    shortTitle: 'Graphic Design',
    description: 'Transform your brand with stunning visual designs. From logos to complete brand identity, we create designs that captivate and convert.',
    features: [
      'Custom Logo Design & Brand Identity',
      'Social Media Graphics & Posts',
      'Banner & Poster Design',
      'Business Cards & Stationery',
      'Infographics & Visual Content',
      'UI/UX Design for Apps & Websites',
      'Packaging & Label Design',
      'Brochure & Flyer Design'
    ],
    benefits: [
      'Unlimited revisions until satisfied',
      'Source files included (AI, PSD, PNG)',
      '24-48 hour delivery',
      '100% original designs'
    ],
    keywords: 'graphic design Pakistan, logo design services, brand identity design, social media graphics, banner design, poster design, business cards, infographics, UI UX design',
    price: 'Depend on Order'
  },
  {
    id: 'web-development',
    icon: Code,
    title: 'Custom Website Development & Design',
    shortTitle: 'Web Development',
    description: 'Build a powerful online presence with our professional web development services. Responsive, fast, and SEO-optimized websites that drive results.',
    features: [
      'Responsive Website Design',
      'Landing Pages that Convert',
      'E-commerce Solutions (Shopify, WooCommerce)',
      
      'Custom Web Applications',
      'Website Maintenance & Support',
      'Website Redesign Services',
      'Core Web Vitals Optimization'
    ],
    benefits: [
      'Mobile-friendly design',
      'SEO optimized code',
      'Fast loading speed'
      
    ],
    keywords: 'web development Pakistan, website design, WordPress developer, landing page design, e-commerce website, custom web apps, responsive web design',
    price: 'Depend on Deal'
  },
  {
    id: 'seo-services',
    icon: Search,
    title: 'Search Engine Optimization (SEO) Services',
    shortTitle: 'SEO Services',
    description: 'Rank higher on Google and drive organic traffic to your website. Our data-driven SEO strategies deliver measurable results.',
    features: [
      'Comprehensive Keyword Research',
      'On-Page SEO Optimization',
      'Off-Page SEO & Link Building',
      'Technical SEO Audit',
      'Local SEO for Businesses',
      'E-commerce SEO',
      'Monthly SEO Reporting',
      'Competitor Analysis'
    ],
    benefits: [
      'Higher Google rankings',
      'Increased organic traffic',
      'Better conversion rates',
      'Long-term results'
    ],
    keywords: 'SEO services Pakistan, search engine optimization, keyword research, on-page SEO, off-page SEO, technical SEO, local SEO, Google ranking',
    price: 'Depend on Agreement'
  },
  {
    id: 'video-editing',
    icon: Video,
    title: 'Professional Video Editing Services',
    shortTitle: 'Video Editing',
    description: 'Transform raw footage into professional videos that engage your audience. From YouTube to social media, we edit it all.',
    features: [
      'YouTube Video Editing',
      'Social Media Video Content',
      'Promotional & Ad Videos',
      'Product Demo Videos',
      'Professional Color Grading',
      'Motion Graphics & Titles',
      'Video Transitions & Effects',
      'Subtitle & Caption Addition'
    ],
    benefits: [
      'Cinematic quality output',
      'Fast turnaround time',
      'Unlimited revisions',
      'All formats supported'
    ],
    keywords: 'video editing Pakistan, YouTube video editor, social media videos, promotional video editing, motion graphics, video post-production',
    price: 'Depend on Deal'
  },
  {
    id: 'content-writing',
    icon: PenTool,
    title: 'SEO Content Writing & Copywriting',
    shortTitle: 'Content Writing',
    description: 'Engaging, SEO-optimized content that ranks on Google and converts readers into customers. From blogs to website copy.',
    features: [
      'SEO-Optimized Blog Posts',
      'Website Copy & Content',
      'Product Descriptions',
      'Social Media Content',
      'Email Newsletters',
      'Creative Copywriting',
      'Technical Writing',
      'Press Releases'
    ],
    benefits: [
      'Plagiarism-free content',
      'Keyword optimized',
      'Engaging & readable',
      'Quick delivery'
    ],
    keywords: 'content writing Pakistan, SEO content writer, blog writing services, website copywriting, product descriptions, creative writing',
    price: 'Depend on Order'
  },
  {
    id: 'presentations',
    icon: Monitor,
    title: 'Presentation & Pitch Deck Design',
    shortTitle: 'Presentations',
    description: 'Stunning presentations that captivate your audience. From investor pitch decks to corporate presentations.',
    features: [
      'PowerPoint Presentations',
      'Google Slides Design',
      'Investor Pitch Decks',
      'Corporate Presentations',
      'Animated Slide Transitions',
      'Professional Template Design',
      'Data Visualization',
      'Chart & Graph Design'
    ],
    benefits: [
      'Professional design',
      'Engaging visuals',
      'Data-driven layouts',
      'Editable templates'
    ],
    keywords: 'presentation design services, PowerPoint designer, pitch deck creation, corporate presentation, Google Slides, animated presentations',
    price: 'Depend on Communication'
  }
];

const additionalServices = [
  {
    icon: Image,
    title: 'YouTube Thumbnails',
    description: 'Click-worthy thumbnails that boost CTR',
    price: 'Depend on Order'
  },
  {
    icon: FileText,
    title: 'Microsoft Office',
    description: 'Word, Excel, PowerPoint documents',
    price: 'Depend on Order'
  },
  {
    icon: BookOpen,
    title: 'Academic Help',
    description: 'Essays, assignments, research papers',
    price: 'Depend on Order'
  }
];

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Contact Us',
    description: 'Share your project requirements via WhatsApp or email'
  },
  {
    icon: CheckCircle,
    title: 'Get Quote',
    description: 'Receive a detailed quote with timeline and pricing'
  },
  {
    icon: Zap,
    title: 'We Deliver',
    description: 'Our experts work on your project with regular updates'
  },
  {
    icon: Star,
    title: 'Review & Approve',
    description: 'Request unlimited revisions until satisfied'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-in'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Hanan Irfan Digital Group Services',
    itemListElement: mainServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        offers: {
          '@type': 'Offer',
          price: service.price.replace(/[^0-9]/g, ''),
          priceCurrency: 'USD'
        }
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Digital Services Pakistan | Graphic Design, Web Dev, SEO, Video Editing"
        description="Explore our comprehensive digital services: graphic design, web development, SEO, video editing, content writing, and more. Affordable prices, professional quality. Get a free quote today!"
        keywords="digital services Pakistan, graphic design services, web development services, SEO services, video editing services, content writing services, presentation design, affordable digital agency"
        canonical="https://hidigitalgroup.vercel.app/services"
        schema={serviceSchema}
      />
      
      <div ref={sectionRef} className="w-full">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#15151f] to-[#0b0b12]">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#6c5dd3]/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff9ec7]/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="animate-in inline-block text-[#b2a5ff] text-sm font-medium mb-4">Our Services</span>
            <h1 className="animate-in text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Digital Services{' '}
              <span className="bg-gradient-to-r from-[#6c5dd3] via-[#b2a5ff] to-[#ff9ec7] bg-clip-text text-transparent">
                for Every Need
              </span>
            </h1>
            <p className="animate-in text-lg text-[#b0b0c8] max-w-2xl mx-auto mb-8">
              From design to development, we offer end-to-end digital solutions to help your business grow online. Quality work, affordable prices, on-time delivery.
            </p>
            <div className="animate-in flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full px-8">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://wa.me/923106359235" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-[#2b2b3a] text-white hover:bg-[#2b2b3a] rounded-full px-8">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-[#b0b0c8] max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`animate-in grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-[#b2a5ff]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-[#b0b0c8] mb-6">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="text-white font-medium mb-2">What&apos;s Included:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-[#b0b0c8]">
                              <CheckCircle className="w-4 h-4 text-[#6c5dd3] mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2 text-sm text-[#b0b0c8]">
                              <Star className="w-4 h-4 text-[#6c5dd3] mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-[#b2a5ff] font-medium">{service.price}</span>
                      <Link to="/contact">
                        <Button className="bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 rounded-2xl flex items-center justify-center border border-[#2b2b3a]">
                      <service.icon className="w-20 h-20 text-[#6c5dd3]/50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-[#b0b0c8]">
                More ways we can help your business succeed
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {additionalServices.map((service) => (
                <div key={service.title} className="animate-in p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl hover:border-[#6c5dd3] transition-colors">
                  <service.icon className="w-10 h-10 text-[#b2a5ff] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-[#b0b0c8] mb-4">{service.description}</p>
                  <span className="text-[#b2a5ff] text-sm">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-[#b0b0c8]">
                Simple 4-step process to get your project started
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="animate-in text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-[#6c5dd3]/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-[#b2a5ff]" />
                  </div>
                  <div className="text-[#6c5dd3] font-bold mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#b0b0c8]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                See Our Services in Action
              </h2>
              <p className="text-[#b0b0c8]">
                Watch how we deliver professional digital services to clients worldwide
              </p>
            </div>
            
            <div className="relative aspect-video bg-[#15151f] border border-[#2b2b3a] rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://youtube.com/shorts/9aTOO_PHFNs?si=6rWpSB05p9zx-sQY"
                title="Our Services Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Clients Choose Us
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="animate-in p-6 bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl text-center">
                <Clock className="w-10 h-10 text-[#6c5dd3] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
                <p className="text-sm text-[#b0b0c8]">Most projects delivered within 24-48 hours</p>
              </div>
              <div className="animate-in p-6 bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl text-center">
                <Shield className="w-10 h-10 text-[#6c5dd3] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-[#b0b0c8]">100% satisfaction or money back</p>
              </div>
              <div className="animate-in p-6 bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl text-center">
                <TrendingUp className="w-10 h-10 text-[#6c5dd3] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Results Driven</h3>
                <p className="text-sm text-[#b0b0c8]">Focused on delivering measurable results</p>
              </div>
              <div className="animate-in p-6 bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl text-center">
                <Zap className="w-10 h-10 text-[#6c5dd3] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-sm text-[#b0b0c8]">5+ years of industry experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-12 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 border border-[#6c5dd3]/30 rounded-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-[#b0b0c8] mb-8 max-w-xl mx-auto">
                Contact us today for a free quote. No obligations, just professional service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/923106359235" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href="mailto:hananirfan91@gmail.com">
                  <Button size="lg" variant="outline" className="border-[#2b2b3a] text-white hover:bg-[#2b2b3a] rounded-full px-8">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
