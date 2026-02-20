import { useState, useEffect, useRef } from 'react';
import { 
  Search, MessageCircle, Mail, Phone, ChevronDown, 
  ArrowRight, Play, Sparkles, HelpCircle, FileQuestion
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import SEO from '@/components/SEO';
import gsap from 'gsap';

type Category = 'all' | 'general' | 'services' | 'process' | 'payment' | 'technical';

interface FAQItem {
  question: string;
  answer: string;
  category: Category;
}

const faqs: FAQItem[] = [
  {
    question: 'What digital services does Hanan Irfan Digital Group offer in Pakistan?',
    answer: 'We offer a comprehensive range of digital services including professional graphic design (logos, banners, social media graphics), custom web development (websites, landing pages, WordPress, e-commerce), SEO optimization and digital marketing, professional video editing and YouTube content creation, content writing and copywriting, presentation design (PowerPoint, Google Slides), academic assistance and assignment help, thumbnail creation and image editing, and much more. Visit our Services page for the complete list of 25+ services we provide.',
    category: 'general',
  },
  {
    question: 'How do I get started with my project?',
    answer: 'Getting started is simple and straightforward. Contact us via WhatsApp at +92 310 6359235 (fastest response), email us at hananirfan91@gmail.com, or fill out our contact form. Share your project requirements, goals, budget, and timeline. We will provide a free, detailed quote and timeline estimate within 2 hours. Once you approve, we begin work immediately after receiving the initial deposit.',
    category: 'general',
  },
  {
    question: 'What is your typical project turnaround time?',
    answer: 'Turnaround time depends on project scope and complexity. Simple tasks like thumbnails, image resizing, or small edits complete within 24 hours. Logo designs take 2-3 days. Website landing pages take 3-5 days. Full websites take 1-2 weeks. SEO campaigns show initial results within 4-8 weeks. We always provide a detailed timeline estimate before starting and keep you updated throughout the process.',
    category: 'process',
  },
  {
    question: 'How much do your digital services cost?',
    answer: 'Our pricing is competitive and varies based on project requirements. Logo design starts from $50, website development from $200, SEO packages from $150/month, video editing from $30, and content writing from $20 per article. We provide detailed, transparent quotes before starting any work with no hidden fees. Contact us for a free, no-obligation quote tailored to your specific needs and budget.',
    category: 'services',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept multiple secure payment methods including bank transfers (all major Pakistani banks), PayPal (for international clients), Wise (TransferWise) for low-cost international transfers, cryptocurrency (Bitcoin, Ethereum, USDT), and JazzCash/EasyPaisa for Pakistan-based clients. For most projects, we require a 50% deposit to begin work, with the remaining 50% due upon completion and your approval.',
    category: 'payment',
  },
  {
    question: 'Do you offer unlimited revisions on projects?',
    answer: 'Yes, absolutely! We offer unlimited revisions until you are completely satisfied with the final result. Your satisfaction is our top priority. We work closely with you through each revision cycle, incorporating your feedback to ensure the deliverables meet and exceed your expectations. There are no extra charges for revisions - it is all included in our service.',
    category: 'process',
  },
  {
    question: 'Can you work with international clients outside Pakistan?',
    answer: 'Absolutely! We work with clients worldwide including USA, UK, UAE, Canada, Australia, Europe, and more. We communicate primarily via WhatsApp and email, making collaboration easy regardless of your location or time zone. We have successfully completed 500+ international projects and understand the nuances of working across borders.',
    category: 'general',
  },
  {
    question: 'Is my project information and data secure with you?',
    answer: 'Yes, we take data privacy and security very seriously. We can sign NDAs (Non-Disclosure Agreements) for sensitive projects, and all client information is kept strictly confidential. We never share your data, ideas, or project details with third parties. Our systems are secure and we follow best practices for data protection.',
    category: 'technical',
  },
  {
    question: 'What happens if I am not satisfied with the work?',
    answer: 'We offer unlimited revisions to ensure your complete satisfaction. If you are still not happy after multiple revision cycles, we have a fair refund policy based on the work completed. Your satisfaction is guaranteed, and we will work with you to find a solution that meets your needs. Our 98% client satisfaction rate speaks to our commitment to quality.',
    category: 'payment',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we provide 30 days of free post-delivery support for all projects. This includes minor adjustments, bug fixes, and guidance on using the deliverables. Extended support and maintenance packages are also available for long-term collaboration at affordable monthly rates. We are always here to help even after project completion.',
    category: 'services',
  },
  {
    question: 'What file formats will I receive upon project completion?',
    answer: 'We provide all relevant source files and export formats. For design work: PSD, AI, EPS, PNG, JPG, SVG, PDF. For web projects: complete source code with documentation. For video: MP4, MOV, project files. For documents: DOCX, PDF, PPTX. We ensure you have everything needed for future edits and usage across different platforms.',
    category: 'technical',
  },
  {
    question: 'Can I see samples of your previous work and portfolio?',
    answer: 'Of course! Visit our Projects page to see our complete portfolio showcasing web development, graphic design, video editing, and SEO projects. You can also contact us for specific examples related to your project type or industry. We have completed 1000+ projects for clients worldwide and are happy to share relevant case studies.',
    category: 'general',
  },
  {
    question: 'Do you offer rush or expedited services for urgent projects?',
    answer: 'Yes, we offer expedited services for urgent projects. Rush fees may apply depending on the timeline and project complexity. Same-day delivery is available for simple tasks. Contact us to discuss your urgent requirements and we will do our best to accommodate your deadline while maintaining our quality standards.',
    category: 'process',
  },
  {
    question: 'How do I track the progress of my project?',
    answer: 'We provide regular progress updates throughout your project via your preferred communication channel (WhatsApp, email, or video calls). For larger projects, we set up milestone-based updates with work-in-progress previews. You will always know the current status and what is coming next. Transparency is key to our process.',
    category: 'process',
  },
  {
    question: 'Do you offer discounts for bulk orders or recurring work?',
    answer: 'Yes, we offer special pricing for bulk orders and long-term clients. We can create custom monthly retainer packages for ongoing work, providing significant savings compared to individual project pricing. Contact us to discuss your ongoing needs and we will create a package that fits your budget and requirements.',
    category: 'payment',
  },
  {
    question: 'What makes Hanan Irfan Digital Group different from other agencies?',
    answer: 'We combine 5+ years of experience with a client-first approach. Our 98% satisfaction rate, 1000+ completed projects, and 24/7 support set us apart. We offer unlimited revisions, transparent pricing, quick turnaround times, and personalized service. Unlike larger agencies, you work directly with experts who care about your success.',
    category: 'general',
  },
  {
    question: 'Do you offer website maintenance and updates?',
    answer: 'Yes, we offer comprehensive website maintenance packages including regular updates, security patches, content updates, performance optimization, and technical support. Maintenance packages start from $50/month. We ensure your website stays secure, fast, and up-to-date with the latest technologies.',
    category: 'services',
  },
  {
    question: 'Can you help improve my website Google rankings?',
    answer: 'Absolutely! Our SEO services are designed to improve your search engine rankings. We use white-hat SEO techniques including technical optimization, keyword research, content optimization, and quality link building. Our clients typically see significant improvements in rankings within 2-3 months of starting an SEO campaign.',
    category: 'services',
  },
  {
    question: 'Do you create content for YouTube channels?',
    answer: 'Yes, we offer complete YouTube content creation services including video editing, thumbnail design, channel art, intro/outro creation, and SEO-optimized titles and descriptions. We have helped many YouTubers grow their channels with professional, engaging content that attracts views and subscribers.',
    category: 'services',
  },
  {
    question: 'What is your refund policy?',
    answer: 'We have a fair refund policy based on work completed. If you are not satisfied after multiple revisions, we offer partial refunds depending on the stage of completion. For projects not yet started, full refunds are provided. We believe in fairness and transparency in all our dealings with clients.',
    category: 'payment',
  },
];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Questions' },
  { value: 'general', label: 'General' },
  { value: 'services', label: 'Services & Pricing' },
  { value: 'process', label: 'Process & Delivery' },
  { value: 'payment', label: 'Payment & Refunds' },
  { value: 'technical', label: 'Technical' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'Frequently Asked Questions - Hanan Irfan Digital Group',
  description: 'Find answers to common questions about our digital services, pricing, process, payment options, and more. Comprehensive FAQ for web development, graphic design, SEO services in Pakistan.',
  url: 'https://hidigitalgroup.vercel.app/faq',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Hanan Irfan Digital Group - Frequently Asked Questions Explained',
  description: 'Watch our FAQ video to learn more about our services, process, pricing, and how we can help with your digital projects.',
  thumbnailUrl: 'https://hidigitalgroup.vercel.app/faq-video-thumb.jpg',
  uploadDate: '2024-01-22',
  duration: 'PT6M30S',
  contentUrl: 'https://www.youtube.com/embed/faq-video',
  embedUrl: 'https://www.youtube.com/embed/faq-video'
};

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.animate-in'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, []);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions | Digital Services Pakistan"
        description="Find answers to common questions about our digital services, pricing, process, payment options, and more. Comprehensive FAQ for web development, graphic design, SEO services in Pakistan. 24/7 support available."
        keywords="FAQ digital agency Pakistan, frequently asked questions web development, graphic design FAQ, SEO services questions, pricing questions Pakistan, payment methods, revision policy, project timeline questions, hire freelancer FAQ, digital services questions, website development FAQ, video editing questions, content writing FAQ, Rahim Yar Khan digital agency questions"
        canonical="https://hidigitalgroup.vercel.app/faq"
        schema={[faqSchema, videoSchema]}
        ogImage="https://hidigitalgroup.vercel.app/og-faq.jpg"
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
              <HelpCircle className="w-4 h-4" />
              Help Center & Support
            </span>
            <h1 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#6c5dd3] via-[#b2a5ff] to-[#ff9ec7] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="animate-in text-sm sm:text-base lg:text-lg text-[#b0b0c8] max-w-2xl mx-auto">
              Find comprehensive answers to common questions about our digital services, pricing, process, and policies. Can not find what you are looking for? Contact us directly.
            </p>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-6 sm:py-8 bg-[#15151f] border-y border-[#2b2b3a] px-4 sm:px-6 lg:px-8 sticky top-0 z-20">
          <div className="max-w-3xl mx-auto">
            {/* Search */}
            <div className="animate-in relative mb-4 sm:mb-6">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#666]" />
              <Input
                type="text"
                placeholder="Search for answers to your questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 sm:pl-12 py-4 sm:py-6 bg-[#0b0b12] border-[#2b2b3a] text-white text-sm sm:text-base placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3] rounded-xl"
              />
            </div>

            {/* Category Tabs */}
            <div className="animate-in flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === cat.value
                      ? 'bg-[#6c5dd3] text-white shadow-lg shadow-[#6c5dd3]/30'
                      : 'bg-[#0b0b12] text-[#b0b0c8] hover:text-white hover:bg-[#2b2b3a]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Grid */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="animate-in text-center py-10 sm:py-12">
                <FileQuestion className="w-12 h-12 sm:w-16 sm:h-16 text-[#6c5dd3] mx-auto mb-4" />
                <p className="text-white text-base sm:text-lg font-medium mb-2">No questions found matching your search.</p>
                <p className="text-[#b0b0c8] text-sm sm:text-base">Try different keywords or browse all categories.</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="animate-in bg-[#15151f] border border-[#2b2b3a] rounded-xl overflow-hidden hover:border-[#6c5dd3]/50 transition-colors"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                    >
                      <span className="text-white font-medium pr-4 text-sm sm:text-base">{faq.question}</span>
                      <ChevronDown 
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#6c5dd3] flex-shrink-0 transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                        <p className="text-[#b0b0c8] text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                <Play className="w-4 h-4" />
                Video FAQ
              </span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Watch Our FAQ Video
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base max-w-2xl mx-auto">
                Get quick answers to the most common questions in this comprehensive FAQ video.
              </p>
            </div>

            <div className="animate-in aspect-video bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl overflow-hidden shadow-2xl shadow-[#6c5dd3]/10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/faq-video"
                title="Hanan Irfan Digital Group - FAQ Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Learn More</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Explore More Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: 'Our Services', href: '/services', desc: 'Explore our complete range of digital services' },
                { title: 'How We Work', href: '/how-it-works', desc: 'Learn about our proven 5-step process' },
                { title: 'View Portfolio', href: '/projects', desc: 'See our latest projects and case studies' },
                { title: 'About Our Company', href: '/about', desc: 'Learn about our story and mission' },
                { title: 'Contact Us', href: '/contact', desc: 'Get in touch for personalized assistance' },
                { title: 'Start Your Project', href: '/contact', desc: 'Ready to begin? Contact us today' },
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

        {/* Still Have Questions */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-in text-center">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-[#6c5dd3] mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Still Have Questions?
              </h2>
              <p className="text-[#b0b0c8] text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
                Can not find the answer you are looking for? Our team is here to help. Reach out to us directly and we will get back to you within 2 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="https://wa.me/923106359235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl transition-colors text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>WhatsApp Us</span>
                </a>
                <a 
                  href="mailto:hananirfan91@gmail.com"
                  className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-[#15151f] border border-[#2b2b3a] hover:border-[#6c5dd3] text-white rounded-xl transition-colors text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Email Us</span>
                </a>
                <a 
                  href="tel:+923106359235"
                  className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-[#15151f] border border-[#2b2b3a] hover:border-[#6c5dd3] text-white rounded-xl transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
