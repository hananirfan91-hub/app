import { useEffect, useRef } from 'react';
import { 
  MessageSquare, Calculator, Code, CheckCircle, Send,
  Clock, Users, RefreshCw, MessageCircle, Mail, ArrowRight,
  Play, Shield, Zap, Award, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SEO from '@/components/SEO';
import gsap from 'gsap';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Contact Us With Your Requirements',
    description: 'Reach out via WhatsApp, email, or our contact form. Tell us about your project goals, specific requirements, budget, and desired timeline. We respond within 1 hour during business hours and within 4 hours after hours.',
    details: [
      'WhatsApp: +92 310 6359235 (Fastest response)',
      'Email: hananirfan91@gmail.com',
      'Contact form available 24/7',
      'Free initial consultation'
    ],
    keywords: 'contact digital agency, hire web developer, get quote Pakistan'
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Receive Detailed Quote & Timeline',
    description: 'Our team analyzes your requirements thoroughly and provides a comprehensive quote with transparent pricing, clear project timeline, milestone breakdown, and detailed scope of work. No hidden fees ever.',
    details: [
      'Transparent, competitive pricing',
      'Clear project timeline with milestones',
      'Detailed scope of work document',
      'Flexible payment options available'
    ],
    keywords: 'web development pricing Pakistan, graphic design cost, SEO packages'
  },
  {
    number: '03',
    icon: Code,
    title: 'We Create & Develop Your Project',
    description: 'Our expert designers and developers get to work on your project using industry-best practices. We keep you updated with regular progress reports, share work-in-progress previews, and maintain open communication throughout.',
    details: [
      'Regular progress updates every 2-3 days',
      'Quality assurance at every stage',
      'Expert craftsmanship by specialists',
      'Access to work-in-progress previews'
    ],
    keywords: 'professional web development, quality design services, expert developers Pakistan'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Review, Revise & Perfect',
    description: 'Review the completed work and request unlimited revisions if needed. We refine and polish until you are 100% satisfied with the final results. Your satisfaction is our guarantee.',
    details: [
      'Unlimited revisions included',
      'Quick turnaround on feedback',
      'Perfect results guaranteed',
      'Collaborative refinement process'
    ],
    keywords: 'unlimited revisions, satisfaction guarantee, quality assurance'
  },
  {
    number: '05',
    icon: Send,
    title: 'Final Delivery & Ongoing Support',
    description: 'Receive your completed project with all source files, documentation, and assets included. We provide 30 days of free post-delivery support and are always available for future updates and assistance.',
    details: [
      'All source files and assets included',
      '30 days free post-delivery support',
      'Project documentation provided',
      'Future updates and maintenance available'
    ],
    keywords: 'project delivery, source files included, ongoing support Pakistan'
  },
];

const features = [
  {
    icon: Clock,
    title: 'Fast Response Time',
    description: 'We respond to all inquiries within 1 hour during business hours. Quick project turnaround without compromising quality.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    description: 'Your satisfaction is our top priority. We listen, adapt, and collaborate closely throughout your project journey.',
  },
  {
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    description: 'We work until you are completely happy. No extra charges for revisions - your perfect result is guaranteed.',
  },
  {
    icon: Shield,
    title: '100% Satisfaction Guarantee',
    description: 'Not satisfied? We will keep refining until you are. Your happiness with the final result is our commitment.',
  },
  {
    icon: Zap,
    title: 'Quick Turnaround',
    description: 'Fast delivery times without sacrificing quality. We respect your deadlines and deliver on time, every time.',
  },
  {
    icon: Award,
    title: 'Expert Quality',
    description: '2+ years of experience delivering 500+ successful projects. Quality craftsmanship you can trust.',
  },
];

const faqs = [
  {
    question: 'How quickly can you start working on my project?',
    answer: 'We can typically start within 24 hours of project confirmation and initial payment. For urgent requests, we offer expedited services with same-day start for an additional fee. Our team is always ready to accommodate tight deadlines when needed.',
  },
  {
    question: 'What are your payment terms and methods?',
    answer: 'We require a 50% deposit to begin work, with the remaining 50% due upon project completion and your approval. For larger projects Depends on Deal, we can arrange milestone-based payments. We accept bank transfers, EasyPaisa, JazzCash.',
  },
  {
    question: 'What if I am not satisfied with the work?',
    answer: 'We offer unlimited revisions until you are completely satisfied. If after multiple revisions you are still not happy, we have a fair refund policy based on the work completed. Your satisfaction is our priority, and we will work with you to find a solution.',
  },
  {
    question: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    answer: 'Yes, absolutely. We are happy to sign NDAs to protect your confidential information, business ideas, and intellectual property. We take client confidentiality very seriously and maintain strict privacy standards.',
  },
  {
    question: 'What file formats will I receive upon completion?',
    answer: 'We provide all relevant source files and export formats based on your needs. For design work: PSD, AI, PNG, JPG, SVG, PDF. For web projects: complete source code with documentation. For video: MP4, MOV, project files. You own all rights to the delivered work.',
  },
  {
    question: 'Can I see samples of your previous work?',
    answer: 'Absolutely! Visit our Projects page to see our complete portfolio, or contact us for specific examples related to your project type. We have completed 500+ projects across various industries and are happy to share relevant case studies.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes, we offer various maintenance packages for websites and ongoing support for all our services. This includes regular updates, security patches, content updates, and technical support. Contact us for customized maintenance plans.',
  },
];

const howItWorksSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Work with Hanan Irfan Digital Group - Complete Process Guide',
  description: 'Learn our simple 5-step process from initial contact to project delivery. Transparent workflow for web development, graphic design, SEO, and all digital services.',
  image: 'https://hidigitalgroup.vercel.app/how-it-works-og.jpg',
  totalTime: 'P1W',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '100-5000'
  },
  supply: [
    'Project requirements document',
    'Brand assets (if available)',
    'Reference materials'
  ],
  tool: [
    'WhatsApp or email for communication',
    'Project management dashboard'
  ],
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.description,
    url: `https://hidigitalgroup.vercel.app/how-it-works#step-${index + 1}`,
    image: `https://hidigitalgroup.vercel.app/step-${index + 1}.jpg`
  }))
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'How We Work at Hanan Irfan Digital Group - Our 5-Step Process',
  description: 'Watch how our team delivers exceptional digital projects from start to finish. Learn about our proven workflow for web development, design, and marketing services.',
  thumbnailUrl: 'https://hidigitalgroup.vercel.app/process-video-thumb.jpg',
  uploadDate: '2024-01-20',
  duration: 'PT4M15S',
  contentUrl: 'https://www.youtube.com/embed/process-video',
  embedUrl: 'https://www.youtube.com/embed/process-video'
};

export default function HowItWorks() {
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

  return (
    <>
      <SEO 
        title="How It Works - Our 5-Step Process | Hanan Irfan Digital Group"
        description="Discover our proven 5-step process: Contact → Quote → Create → Review → Deliver. Learn how we deliver web development, graphic design, SEO services with 100% satisfaction guarantee. Free consultation."
        keywords="how it works digital agency, web development process Pakistan, graphic design workflow, hire freelancer process, project workflow digital services, SEO process steps, video editing workflow, content creation process, digital agency methodology, project delivery process, web design timeline, design revision process, quality assurance digital services"
        canonical="https://hidigitalgroup.vercel.app/how-it-works"
        schema={[howItWorksSchema, videoSchema]}
        ogImage="https://hidigitalgroup.vercel.app/og-how-it-works.jpg"
      />
      
      <div ref={sectionRef} className="w-full">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#15151f] to-[#0b0b12]">
            <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#6c5dd3]/15 rounded-full blur-[100px] sm:blur-[120px]" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#ff9ec7]/10 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4" />
              Our Proven Process
            </span>
            <h1 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              How We Work — From Your{' '}
              <span className="bg-gradient-to-r from-[#6c5dd3] via-[#b2a5ff] to-[#ff9ec7] bg-clip-text text-transparent">
                Idea to Delivery
              </span>
            </h1>
            <p className="animate-in text-sm sm:text-base lg:text-lg text-[#b0b0c8] max-w-2xl mx-auto mb-6">
              A simple, transparent 5-step process designed to deliver exceptional results every time. We have refined this workflow over 1000+ successful projects.
            </p>
            <div className="animate-in flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-[#6c5dd3]/20 text-[#b2a5ff] rounded-full text-xs sm:text-sm">5 Simple Steps</span>
              <span className="px-3 py-1 bg-[#6c5dd3]/20 text-[#b2a5ff] rounded-full text-xs sm:text-sm">100% Satisfaction</span>
              <span className="px-3 py-1 bg-[#6c5dd3]/20 text-[#b2a5ff] rounded-full text-xs sm:text-sm">On-Time Delivery</span>
            </div>
          </div>
        </section>

        {/* Steps Timeline */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Step-by-Step Guide</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Our 5-Step Project Workflow
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base max-w-2xl mx-auto">
                From your initial inquiry to final delivery, here is exactly how we work together
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  id={`step-${index + 1}`}
                  className="animate-in relative flex gap-4 sm:gap-6 lg:gap-10"
                >
                  {/* Timeline line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 sm:left-6 lg:left-8 top-12 sm:top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#6c5dd3] to-[#2b2b3a]" />
                  )}
                  
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#6c5dd3] to-[#b2a5ff] flex items-center justify-center shadow-lg shadow-[#6c5dd3]/30">
                    <span className="text-white font-bold text-sm sm:text-base lg:text-xl">{step.number}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-6 sm:pb-8">
                    <div className="p-4 sm:p-5 lg:p-6 bg-[#0b0b12] border border-[#2b2b3a] rounded-xl sm:rounded-2xl hover:border-[#6c5dd3]/50 transition-all group">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#6c5dd3]/20 flex items-center justify-center">
                          <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-[#b2a5ff] transition-colors">{step.title}</h3>
                      </div>
                      <p className="text-sm sm:text-base text-[#b0b0c8] mb-3 sm:mb-4">{step.description}</p>
                      <ul className="space-y-1.5">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-xs sm:text-sm text-[#b0b0c8]">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#6c5dd3] flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Play className="w-4 h-4" />
                Watch Our Process
              </span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                See How We Deliver Excellence
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base max-w-2xl mx-auto">
                Watch this video to understand our workflow, quality standards, and how we ensure your project success from start to finish.
              </p>
            </div>

            <div className="animate-in aspect-video bg-[#15151f] border border-[#2b2b3a] rounded-2xl overflow-hidden shadow-2xl shadow-[#6c5dd3]/10">
              <iframe
                width="100%"
                height="100%"
                src="https://youtu.be/D_28Hn4azWc?si=x7q2VDONX3I-R-Gg"
                title="How We Work at Hanan Irfan Digital Group - Our 5-Step Process"
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
                Watch more videos on our YouTube channel
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Quick Recap Grid */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Quick Overview</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                The Process at a Glance
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base">
                Here is a summary of our 5-step workflow
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="animate-in p-3 sm:p-4 bg-[#0b0b12] border border-[#2b2b3a] rounded-xl text-center hover:border-[#6c5dd3]/50 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6c5dd3]/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                  </div>
                  <div className="text-[#6c5dd3] font-bold text-xs sm:text-sm mb-1">{step.number}</div>
                  <h4 className="text-white font-medium text-xs sm:text-sm">{step.title.split(' ').slice(0, 3).join(' ')}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Why Choose Us</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                What Makes Our Process Different
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base max-w-2xl mx-auto">
                We combine efficiency, quality, and client satisfaction in every project
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="animate-in p-5 sm:p-6 bg-[#15151f] border border-[#2b2b3a] rounded-2xl hover:border-[#6c5dd3]/50 transition-all group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6c5dd3]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#6c5dd3]/30 transition-colors">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#b2a5ff]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-[#b0b0c8]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Explore More</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Discover Our Services & Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: 'Our Services', href: '/services', desc: 'Explore our complete range of digital services and solutions' },
                { title: 'View Portfolio', href: '/projects', desc: 'See our latest projects and successful client work' },
                { title: 'About Our Company', href: '/about', desc: 'Learn about our story, mission, and team' },
                { title: 'Contact Us', href: '/contact', desc: 'Get in touch for a free consultation and quote' },
                { title: 'Client FAQ', href: '/faq', desc: 'Find answers to common questions about our services' },
                { title: 'Start Your Project', href: '/contact', desc: 'Ready to begin? Contact us and let us get started' },
              ].map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="animate-in p-5 sm:p-6 bg-[#0b0b12] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-all group"
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

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Common Questions</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base">
                Everything you need to know about working with us
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="animate-in bg-[#15151f] border border-[#2b2b3a] rounded-xl px-4 sm:px-6 data-[state=open]:border-[#6c5dd3]/50"
                >
                  <AccordionTrigger className="text-white hover:text-[#b2a5ff] py-3 sm:py-4 text-left text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#b0b0c8] pb-3 sm:pb-4 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-in text-center p-6 sm:p-8 lg:p-12 bg-[#0b0b12]/80 border border-[#6c5dd3]/30 rounded-2xl sm:rounded-3xl backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-[#b0b0c8] text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
                Experience our proven process firsthand. Contact us today for a free consultation and quote.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="https://wa.me/923106359235" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-6 sm:px-8">
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Start on WhatsApp
                  </Button>
                </a>
                <a href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#2b2b3a] text-white hover:bg-[#2b2b3a] rounded-full px-6 sm:px-8">
                    <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Send Us a Message
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
