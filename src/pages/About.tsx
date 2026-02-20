import { useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users, Award, Clock, MessageCircle, Mail, ArrowRight, TrendingUp, Globe, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import gsap from 'gsap';

const storyCards = [
  {
    icon: Heart,
    title: 'Our Story',
    description: 'Founded in 2020 in Rahim Yar Khan, Pakistan, Hanan Irfan Digital Group began with a simple mission: to provide high-quality digital services at affordable prices. What started as a small freelance operation has grown into a full-service digital agency serving clients across all over Pakistan currently.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses and individuals with innovative digital solutions that drive growth, enhance visibility, and create lasting impact. We believe everyone deserves access to professional digital services regardless of their location or budget. Our goal is to bridge the digital divide and help our clients succeed in the online world.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To become the most trusted digital agency in Pakistan and beyond, known for our reliability, creativity, and commitment to excellence. We envision a world where technology bridges gaps and creates opportunities for everyone, where businesses of all sizes can access world-class digital services at competitive prices.',
  },
];

const coreValues = [
  {
    icon: Users,
    title: 'Client First',
    description: 'Your success is our priority. We listen, understand, and deliver solutions that meet your unique needs.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never cut corners. Every project receives our full attention and commitment to excellence.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time. On-time delivery is not just a promise, it is our standard.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description: 'Clear, honest updates throughout your project. No surprises, no hidden fees.',
  },
];

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '120+', label: 'Happy Clients' },
  { value: '98%', label: 'Success Rate' },
  { value: 'Reach', label: 'All over Pakistan' },
 
];

const milestones = [
  { year: '2024', title: 'Company Founded', description: 'Started as a freelance operation in Rahim Yar Khan' },
  { year: '2024', title: 'First 50 Clients', description: 'Expanded services to include web development and SEO' },

  { year: '2026', title: '200+ Projects', description: 'Reached milestone of 500 completed projects' },
  { year: '2026', title: 'Full-Service Agency', description: 'Expanded team and service offerings' },
];

export default function About() {
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

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Hanan Irfan Digital Group',
    description: 'Learn about our story, mission, vision, and core values. Pakistan\'s trusted digital agency for graphic design, web development, and more.',
    url: 'https://hidigitalgroup.vercel.app/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'Hanan Irfan Digital Group',
      foundingDate: '2020',
      founders: [
        {
          '@type': 'Person',
          name: 'Hanan Irfan'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Abu Dhabi Road',
        addressLocality: 'Rahim Yar Khan',
        addressRegion: 'Punjab',
        addressCountry: 'PK'
      },
      sameAs: [
        'https://facebook.com/HananIrfan001',
        'https://instagram.com/tearswithhanan/',
        'https://www.youtube.com/@ancientmystery-0',
        'https://x.com/hananirfan91'
      ]
    }
  };

  return (
    <>
      <SEO 
        title="About Us | Pakistan's Leading Digital Agency - Hanan Irfan Digital Group"
        description="Learn about Hanan Irfan Digital Group - Pakistan's trusted digital agency since 2020. Our story, mission, vision, and commitment to delivering excellence in graphic design, web development, and digital services."
        keywords="about Hanan Irfan Digital Group, digital agency Pakistan, web design company Pakistan, graphic design agency, SEO company Pakistan, Rahim Yar Khan digital agency, Pakistan freelancer, best digital agency Pakistan, about us"
        canonical="https://hidigitalgroup.vercel.app/about"
        schema={aboutSchema}
      />
      
      <div ref={sectionRef} className="w-full">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#15151f] to-[#0b0b12]">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#6c5dd3]/15 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="animate-in inline-block text-[#b2a5ff] text-sm font-medium mb-4">About Us</span>
            <h1 className="animate-in text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              We Are{' '}
              <span className="bg-gradient-to-r from-[#6c5dd3] via-[#b2a5ff] to-[#ff9ec7] bg-clip-text text-transparent">
                Problem Solvers
              </span>{' '}
              & Digital Partners
            </h1>
            <p className="animate-in text-lg text-[#b0b0c8] max-w-2xl mx-auto">
              Founded in Rahim Yar Khan, Pakistan, we serve clients with passion, precision, and a commitment to excellence in every project we undertake.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-[#15151f] border-y border-[#2b2b3a] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="animate-in text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#6c5dd3] to-[#b2a5ff] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#b0b0c8]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story/Mission/Vision Section */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {storyCards.map((card) => (
                <div
                  key={card.title}
                  className="animate-in p-8 bg-[#15151f] border border-[#2b2b3a] rounded-2xl hover:border-[#6c5dd3]/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-[#b2a5ff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
                  <p className="text-[#b0b0c8] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
       

        {/* Core Values Section */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[#b2a5ff] text-sm font-medium mb-4">Our Principles</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Core Values That Drive Us
              </h2>
              <p className="text-[#b0b0c8] max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="animate-in p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl text-center hover:border-[#6c5dd3]/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-[#6c5dd3]/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-[#b2a5ff]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-[#b0b0c8]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-[#b0b0c8]">
                Key milestones in our growth story
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="animate-in flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#6c5dd3] flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[#2b2b3a] mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-[#b2a5ff] font-medium">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{milestone.title}</h3>
                    <p className="text-[#b0b0c8] text-sm mt-1">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-[#b2a5ff] text-sm font-medium mb-4">Why Choose Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  The HIDG Difference
                </h2>
                <p className="text-[#b0b0c8] mb-8">
                  We are not just another digital agency. We are your partners in success, committed to delivering results that matter.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#6c5dd3] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-medium">Experienced Team</h4>
                      <p className="text-sm text-[#b0b0c8]">2+ years of industry experience across all services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#6c5dd3] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-medium">Affordable Pricing</h4>
                      <p className="text-sm text-[#b0b0c8]">Competitive rates without compromising on quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#6c5dd3] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-medium">Whole Pakistan Reach</h4>
                      <p className="text-sm text-[#b0b0c8]">Serving clients all over Pakistan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#6c5dd3] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-medium">Satisfaction Guaranteed</h4>
                      <p className="text-sm text-[#b0b0c8]">Unlimited revisions until you are 100% satisfied</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/services">
                    <Button className="bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl text-center">
                  <Globe className="w-10 h-10 text-[#6c5dd3] mx-auto mb-3" />
                  <h4 className="text-white font-medium">Clients</h4>
                  <p className="text-sm text-[#b0b0c8]">All over Pakistan Countries</p>
                </div>
                <div className="p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl text-center">
                  <Star className="w-10 h-10 text-[#6c5dd3] mx-auto mb-3" />
                  <h4 className="text-white font-medium">5-Star Rated</h4>
                  <p className="text-sm text-[#b0b0c8]">By 120+ Clients</p>
                </div>
                <div className="p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl text-center">
                  <TrendingUp className="w-10 h-10 text-[#6c5dd3] mx-auto mb-3" />
                  <h4 className="text-white font-medium">98% Success</h4>
                  <p className="text-sm text-[#b0b0c8]">Project Completion</p>
                </div>
                <div className="p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl text-center">
                  <Clock className="w-10 h-10 text-[#6c5dd3] mx-auto mb-3" />
                  <h4 className="text-white font-medium">24/7 Support</h4>
                  <p className="text-sm text-[#b0b0c8]">Always Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center p-12 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 border border-[#6c5dd3]/30 rounded-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-[#b0b0c8] mb-8 max-w-xl mx-auto">
                Let&apos;s collaborate and bring your ideas to life. Contact us today for a free consultation.
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
