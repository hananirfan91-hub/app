import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Palette, Code, Search, FileText, Video, Image, 
  PenTool, BookOpen, Monitor, ThumbsUp, Clock, Users, 
  MessageCircle, Mail, Phone, ArrowRight,
  Sparkles, Zap, Play, CheckCircle, Star, Award,
  TrendingUp, Globe, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import gsap from 'gsap';

const services = [
  {
    icon: Palette,
    title: 'Professional Logo & Brand Identity Design',
    description: 'Custom logo design, brand guidelines, business cards, stationery, and complete visual identity systems that make your business unforgettable.',
    keywords: 'logo design Pakistan, brand identity design, business card design, stationery design, visual identity',
    link: '/services#graphic-design'
  },
  {
    icon: Code,
    title: 'Custom Website Development & Design',
    description: 'Responsive WordPress websites, e-commerce stores, landing pages, and web applications built for speed, SEO, and conversions.',
    keywords: 'web development Pakistan, WordPress developer, website design, e-commerce development',
    link: '/services#web-development'
  },
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO) Services',
    description: 'Data-driven SEO strategies including keyword research, on-page optimization, link building, and technical SEO to rank higher on Google.',
    keywords: 'SEO services Pakistan, search engine optimization, Google ranking, keyword research',
    link: '/services#seo-services'
  },
  {
    icon: FileText,
    title: 'Microsoft Office Document Services',
    description: 'Professional Word documents, PowerPoint presentations, Excel spreadsheets, data entry, and template creation services.',
    keywords: 'PowerPoint design, Excel spreadsheets, Word document formatting, data entry services',
    link: '/services#office-services'
  },
  {
    icon: Monitor,
    title: 'Presentation & Pitch Deck Design',
    description: 'Stunning PowerPoint and Google Slides presentations, investor pitch decks, and corporate presentations that captivate audiences.',
    keywords: 'presentation design, pitch deck design, PowerPoint designer, corporate presentation',
    link: '/services#presentations'
  },
  {
    icon: Video,
    title: 'Professional Video Editing Services',
    description: 'YouTube video editing, social media videos, promotional content, motion graphics, and post-production services.',
    keywords: 'video editing Pakistan, YouTube video editor, social media video editing, motion graphics',
    link: '/services#video-editing'
  },
  {
    icon: Image,
    title: 'YouTube Thumbnail & Social Media Graphics',
    description: 'Click-worthy YouTube thumbnails, Instagram posts, Facebook banners, and social media graphics that boost engagement.',
    keywords: 'YouTube thumbnail design, social media graphics, Instagram post design, Facebook banner',
    link: '/services#thumbnails'
  },
  {
    icon: PenTool,
    title: 'SEO Content Writing & Copywriting',
    description: 'Blog posts, website copy, product descriptions, and SEO-optimized content that ranks and converts visitors into customers.',
    keywords: 'content writing Pakistan, SEO content writer, blog writing services, copywriting',
    link: '/services#content-writing'
  },
  {
    icon: BookOpen,
    title: 'Academic Writing & Assignment Help',
    description: 'Essay writing, research papers, thesis assistance, homework help, and academic support for students worldwide.',
    keywords: 'assignment help Pakistan, essay writing service, research paper help, academic writing',
    link: '/services#academic-help'
  },
  {
    icon: Sparkles,
    title: 'Custom Digital Solutions',
    description: 'Have a unique project? We handle any digital task with custom solutions tailored to your specific requirements.',
    keywords: 'custom digital services, bespoke solutions, specialized services',
    link: '/contact'
  },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'Most projects delivered within 24-48 hours. Rush orders available for urgent deadlines.',
  },
  {
    icon: Users,
    title: 'Expert Team of Professionals',
    description: 'Skilled designers, developers, and writers with 5+ years of industry experience.',
  },
  {
    icon: MessageCircle,
    title: '24/7 Customer Support',
    description: 'Always available via WhatsApp, email, or phone. Get responses within 1 hour.',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction Guarantee',
    description: 'Unlimited revisions until you are completely satisfied with the final result.',
  },
];

const howItWorks = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description: 'Contact us via WhatsApp, email, or our contact form with your project details.',
  },
  {
    number: '02',
    title: 'Get a Free Quote',
    description: 'We analyze your needs and provide a transparent quote with timeline and pricing.',
  },
  {
    number: '03',
    title: 'We Create & Deliver',
    description: 'Our experts work on your project with regular updates and progress reports.',
  },
  {
    number: '04',
    title: 'Review & Approve',
    description: 'Request unlimited revisions until you are 100% satisfied with the results.',
  },
];

const testimonials = [
  {
    quote: "Hanan Irfan Digital Group transformed our online presence completely. Their web development and SEO services helped us rank #1 on Google and reach new customers globally. Highly recommended!",
    author: "Ashir",
    role: "Amazon Worker",
    rating: 5
  },
  {
    quote: "The team delivered exceptional graphic design work for our marketing campaign. Fast, professional, and exactly what we needed. Our social media engagement increased by 300%!",
    author: "Muhammad Shumail",
    role: "Marketing Director, Lahore",
    rating: 5
  },
  {
    quote: "Outstanding video editing services! They turned our raw footage into professional content that boosted our YouTube channel subscribers from 1K to 50K in just 3 months.",
    author: "Mohammad Ali",
    role: "Muhammad Shahmerr, Mulatn",
    rating: 5
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed', icon: CheckCircle },
  { value: '120+', label: 'Happy Clients', icon: Users },
  { value: '98%', label: 'Success Rate', icon: TrendingUp },
  { value: '24/7', label: 'Support Available', icon: Clock },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-animate'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }
  }, []);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Hanan Irfan Digital Group',
    description: 'Pakistan\'s leading digital agency offering graphic design, web development, SEO, video editing, and content writing services.',
    url: 'https://hidigitalgroup.vercel.app/',
    logo: 'https://hidigitalgroup.vercel.app/logo.png',
    image: 'https://hidigitalgroup.vercel.app/og-image.png',
    telephone: '+92-310-6359235',
    email: 'hananirfan91@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Abu Dhabi Road',
      addressLocality: 'Rahim Yar Khan',
      addressRegion: 'Punjab',
      postalCode: '64200',
      addressCountry: 'PK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.4204',
      longitude: '70.2952'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '23:00'
      }
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description
        }
      }))
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120'
    },
    sameAs: [
      'https://facebook.com/hananirfan91',
      'https://instagram.com/hananirfan91',
      'https://youtube.com/@hananirfan91',
      'https://linkedin.com/in/hananirfan91',
      'https://twitter.com/hananirfan91'
    ]
  };

  return (
    <>
      <SEO 
        title="Digital Agency Pakistan | Graphic Design, Web Development, SEO Services"
        description="Hanan Irfan Digital Group - Pakistan's #1 digital agency for graphic design, web development, SEO, video editing & content writing. 500+ projects delivered. 24/7 support. Get a free quote today!"
        keywords="digital agency Pakistan, graphic design Pakistan, web development Pakistan, SEO services Pakistan, video editing Pakistan, content writing Pakistan, logo design Pakistan, WordPress developer Pakistan, freelance services Pakistan, Rahim Yar Khan digital agency"
        canonical="https://hidigitalgroup.vercel.app/"
        schema={serviceSchema}
      />
      
      <div className="w-full">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#15151f] to-[#0b0b12]">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6c5dd3]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff9ec7]/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 bg-[#6c5dd3]/20 rounded-full mb-6">
                  <Star className="w-4 h-4 text-[#b2a5ff]" />
                  <span className="text-sm text-[#b2a5ff]">500+ Projects Delivered</span>
                </div>
                
                <h1 className="hero-animate text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Pakistan&apos;s #1{' '}
                  <span className="bg-gradient-to-r from-[#6c5dd3] via-[#b2a5ff] to-[#ff9ec7] bg-clip-text text-transparent">
                    Digital Agency
                  </span>{' '}
                  for Creative Solutions
                </h1>
                
                <p className="hero-animate text-lg text-[#b0b0c8] mb-8 max-w-xl mx-auto lg:mx-0">
                  We provide professional graphic design, web development, SEO, video editing, and content writing services. Transform your ideas into reality with our expert team.
                </p>

                {/* Stats */}
                <div className="hero-animate grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl font-bold text-[#6c5dd3]">{stat.value}</div>
                      <div className="text-xs text-[#b0b0c8]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/contact">
                    <Button size="lg" className="bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full px-8">
                      Get Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-[#2b2b3a] text-white hover:bg-[#2b2b3a] rounded-full px-8">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content - Video */}
              <div className="hero-animate relative">
                <div className="relative aspect-video bg-gradient-to-br from-[#6c5dd3]/30 to-[#ff9ec7]/20 rounded-2xl overflow-hidden border border-[#2b2b3a]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href="https://youtube.com/shorts/9aTOO_PHFNs?feature=share" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-20 h-20 bg-[#6c5dd3] rounded-full flex items-center justify-center hover:bg-[#5a4dc0] transition-colors group"
                    >
                      <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">Watch Our Showreel</p>
                    <p className="text-[#b0b0c8] text-xs">See what we can do for you</p>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl p-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#6c5dd3]" />
                    <span className="text-white text-sm font-medium">Top Rated</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-[#15151f] border border-[#2b2b3a] rounded-xl p-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#b2a5ff]" />
                    <span className="text-white text-sm font-medium">Global Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#b2a5ff] text-sm font-medium mb-4">Our Services</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-[#b0b0c8] max-w-2xl mx-auto">
                From design to development, we offer end-to-end digital services to help your business grow online.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl hover:border-[#6c5dd3] hover:shadow-lg hover:shadow-[#6c5dd3]/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center mb-4 group-hover:bg-[#6c5dd3]/30 transition-colors">
                    <service.icon className="w-6 h-6 text-[#b2a5ff]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-[#b0b0c8] leading-relaxed">{service.description}</p>
                </Link>
              ))}
            </div>

            {/* Internal Link */}
            <div className="text-center mt-10">
              <Link to="/services" className="inline-flex items-center gap-2 text-[#b2a5ff] hover:text-white transition-colors">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#b2a5ff] text-sm font-medium mb-4">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                The HIDG Advantage
              </h2>
              <p className="text-[#b0b0c8] max-w-2xl mx-auto">
                Trusted by 120+ clients worldwide for quality digital services delivered on time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl text-center hover:border-[#6c5dd3]/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-[#6c5dd3]/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#b2a5ff]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#b0b0c8]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#b2a5ff] text-sm font-medium mb-4">Our Process</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                How We Work
              </h2>
              <p className="text-[#b0b0c8] max-w-2xl mx-auto">
                Simple 4-step process from idea to delivery. Get started in minutes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step) => (
                <div
                  key={step.number}
                  className="relative p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl"
                >
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#6c5dd3] flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 mt-2">{step.title}</h3>
                  <p className="text-sm text-[#b0b0c8]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#b2a5ff] text-sm font-medium mb-4">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#6c5dd3] fill-[#6c5dd3]" />
                    ))}
                  </div>
                  <p className="text-[#f0f0f7] mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#6c5dd3]/20 flex items-center justify-center">
                      <span className="text-[#b2a5ff] font-semibold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-sm text-[#b0b0c8]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-[#b2a5ff] text-sm font-medium mb-4">Watch & Learn</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                See Our Work in Action
              </h2>
              <p className="text-[#b0b0c8]">
                Watch this short video to learn more about our services and how we can help your business grow.
              </p>
            </div>
            
            <div className="relative aspect-video bg-[#15151f] border border-[#2b2b3a] rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://youtube.com/shorts/9aTOO_PHFNs?feature=share"
                title="Hanan Irfan Digital Group - Our Services"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-12 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 border border-[#6c5dd3]/30 rounded-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-[#b0b0c8] mb-8 max-w-xl mx-auto">
                Get a free quote today. No obligations, no hidden fees. Just professional digital services delivered on time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

              <div className="flex flex-wrap items-center justify-center gap-6 text-[#b0b0c8]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#6c5dd3]" />
                  <span className="text-sm">100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#6c5dd3]" />
                  <span className="text-sm">Money Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#6c5dd3]" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-[#0b0b12] border-t border-[#2b2b3a] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-8 text-[#b0b0c8]">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#6c5dd3]" />
                <span className="text-sm">Serving in Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#6c5dd3]" />
                <span className="text-sm">120+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#6c5dd3]" />
                <span className="text-sm">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#6c5dd3]" />
                <span className="text-sm">+92 310 6359235</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
