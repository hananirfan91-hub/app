import { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, Mail, MapPin, Clock, Facebook, 
  Instagram, Youtube, Send, CheckCircle, ArrowRight,
  Phone, Globe, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import SEO from '@/components/SEO';
import gsap from 'gsap';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  'Graphic Design',
  'Web Development',
  'SEO Services',
  'Word/PPT/Excel',
  'Presentation Maker',
  'Video Editing',
  'Thumbnail Creator',
  'Image Resizer',
  'YouTube Content Creator',
  'Content Writing',
  'Assignment/Homework',
  'Custom Request',
];

const faqs = [
  {
    question: 'What digital services do you offer in Pakistan?',
    answer: 'We offer comprehensive digital services including professional graphic design, custom web development, SEO optimization, video editing, content writing, academic assistance, presentation design, and YouTube content creation. Our team serves clients across Pakistan and internationally with 24/7 support.',
  },
  {
    question: 'How quickly can you complete my project?',
    answer: 'Turnaround time depends on project complexity. Simple tasks like logo design or image resizing complete within 24-48 hours. Web development projects typically take 1-2 weeks. SEO campaigns show results within 4-8 weeks. We always provide a detailed timeline before starting and keep you updated throughout.',
  },
  {
    question: 'What are your payment terms and methods?',
    answer: 'We require 50% advance payment to begin work, with the remaining 50% due upon completion. We accept bank transfers, EasyPaisa, JazzCash . All payments are secure and we provide detailed invoices for every transaction.',
  },
  {
    question: 'Do you offer unlimited revisions?',
    answer: 'Yes, we offer unlimited revisions on all design and development projects until you are completely satisfied. Your satisfaction is our top priority. We work closely with you through each revision cycle to ensure the final result exceeds your expectations.',
  },

  {
    question: 'Is my project information kept confidential?',
    answer: 'Yes, we take data privacy very seriously. We can sign NDAs (Non-Disclosure Agreements) for sensitive projects. All client information, project files, and communications are kept strictly confidential and never shared with third parties.',
  },
  {
    question: 'Why should I choose Hanan Irfan Digital Group?',
    answer: 'With 2+ years of experience, 500+ completed projects, and a 98% client satisfaction rate, we deliver quality results on time. Our team combines creativity with technical expertise, offering affordable pricing without compromising quality. We provide 24/7 support and free consultations.',
  },
];

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Hanan Irfan Digital Group - Best Digital Agency in Pakistan',
  description: 'Contact the leading digital agency in Pakistan for graphic design, web development, SEO services, and more. Get free quotes and 24/7 support. WhatsApp: +92-310-6359235',
  url: 'https://hidigitalgroup.vercel.app/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Hanan Irfan Digital Group',
    alternateName: 'HI Digital Group',
    telephone: '+92-310-6359235',
    email: 'hananirfan91@gmail.com',
    url: 'https://hidigitalgroup.vercel.app',
    logo: 'https://hidigitalgroup.vercel.app/logo.png',
    sameAs: [
      'https://facebook.com/hananirfan91',
      'https://instagram.com/hananirfan91',
      'https://youtube.com/@hananirfan91',
      'https://linkedin.com/in/hananirfan91',
      'https://twitter.com/hananirfan91'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Abu Dhabi Road, Near Chenab College',
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-310-6359235',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Urdu'],
      areaServed: ['PK', 'US', 'GB', 'CA', 'AE', 'AU']
    }
  }
};

const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Hanan Irfan Digital Group - Our Services Explained',
  description: 'Learn about our comprehensive digital services including web development, graphic design, SEO, and more. Watch how we help businesses grow online.',
  thumbnailUrl: 'https://hidigitalgroup.vercel.app/video-thumbnail.jpg',
  uploadDate: '2024-01-15',
  duration: 'PT3M30S',
  contentUrl: 'https://www.youtube.com/embed/intro-video',
  embedUrl: 'https://www.youtube.com/embed/intro-video'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date(),
        status: 'new',
      });
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again or contact us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Hire Best Digital Agency Pakistan | Free Quote"
        description="Contact Hanan Irfan Digital Group for professional graphic design, web development, SEO services in Pakistan. Get free consultation. WhatsApp: +92 310 6359235. 24/7 support available. Serving Rahim Yar Khan and worldwide clients."
        keywords="contact digital agency Pakistan, hire web developer Pakistan, graphic design services contact, SEO services Pakistan, freelance services contact, Rahim Yar Khan digital agency, best digital marketing agency Pakistan, web design company contact, logo design services Pakistan, video editing services contact, content writing services Pakistan, affordable web development Pakistan, digital agency WhatsApp, online services Pakistan, hire freelancer Pakistan"
        canonical="https://hidigitalgroup.vercel.app/contact"
        schema={[contactSchema, videoSchema]}
        ogImage="https://hidigitalgroup.vercel.app/og-contact.jpg"
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
              Get in Touch - 24/7 Support Available
            </span>
            <h1 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Contact{' '}
              <span className="bg-gradient-to-r from-[#6c5dd3] via-[#b2a5ff] to-[#ff9ec7] bg-clip-text text-transparent">
                Hanan Irfan Digital Group
              </span>
              {' '}— Get Your Free Quote Today
            </h1>
            <p className="animate-in text-sm sm:text-base lg:text-lg text-[#b0b0c8] max-w-2xl mx-auto mb-6">
              Ready to transform your digital presence? Contact Pakistan&apos;s leading digital agency for professional web development, graphic design, SEO services, and more. We respond within 2 hours.
            </p>
            <div className="animate-in flex flex-wrap justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/923106359235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a 
                href="tel:+923106359235"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#6c5dd3] text-white rounded-full font-medium hover:bg-[#5a4dc0] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Left: Contact Info */}
              <div className="animate-in">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Let&apos;s Discuss Your Project — Free Consultation
                </h2>
                <p className="text-[#b0b0c8] text-sm sm:text-base mb-6 sm:mb-8">
                  Whether you need a stunning website, eye-catching graphics, or better Google rankings, we&apos;re here to help. Fill out the form and we&apos;ll get back to you within 2 hours. Or reach out directly using the contact information below.
                </p>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1 text-sm sm:text-base">WhatsApp / Phone</h3>
                      <a href="tel:+923106359235" className="text-[#b0b0c8] hover:text-[#b2a5ff] transition-colors text-sm sm:text-base">
                        +92 310 6359235
                      </a>
                      <p className="text-[#666] text-xs mt-1">Available 24/7 for urgent projects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1 text-sm sm:text-base">Email Addresses</h3>
                      <a href="mailto:hananirfan91@gmail.com" className="text-[#b0b0c8] hover:text-[#b2a5ff] transition-colors block text-sm sm:text-base">
                        hananirfan91@gmail.com
                      </a>
                      <a href="mailto:hananirfan81@gmail.com" className="text-[#b0b0c8] hover:text-[#b2a5ff] transition-colors block text-sm sm:text-base">
                        hananirfan81@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1 text-sm sm:text-base">Office Location</h3>
                      <p className="text-[#b0b0c8] text-sm sm:text-base">
                        Abu Dhabi Road, Near Chenab College,<br />
                        Rahim Yar Khan, Punjab, Pakistan 64200
                      </p>
                      <p className="text-[#666] text-xs mt-1">Serving clients all over Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1 text-sm sm:text-base">Working Hours</h3>
                      <p className="text-[#b0b0c8] text-sm sm:text-base">
                        Monday - Saturday: 9:00 AM - 11:00 PM PKT<br />
                        Sunday: Available for urgent projects
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#6c5dd3]/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#b2a5ff]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1 text-sm sm:text-base">Service Areas</h3>
                      <p className="text-[#b0b0c8] text-sm sm:text-base">
                        Pakistan: Rahim Yar Khan, Lahore, Karachi, Islamabad<br />
                        
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">Connect With Us on Social Media</h3>
                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href="https://facebook.com/HananIrfan001"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Hanan Irfan on Facebook"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b0b12] border border-[#2b2b3a] flex items-center justify-center text-[#b0b0c8] hover:text-white hover:border-[#6c5dd3] hover:bg-[#1877F2] transition-all"
                    >
                      <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                    <a
                      href="https://instagram.com/tearswithhanan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Hanan Irfan on Instagram"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b0b12] border border-[#2b2b3a] flex items-center justify-center text-[#b0b0c8] hover:text-white hover:border-[#6c5dd3] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-all"
                    >
                      <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                    <a
                      href="https://www.youtube.com/@ancientmystery-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Subscribe to Hanan Irfan on YouTube"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b0b12] border border-[#2b2b3a] flex items-center justify-center text-[#b0b0c8] hover:text-white hover:border-[#6c5dd3] hover:bg-[#FF0000] transition-all"
                    >
                      <Youtube size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                    <a
                      href="https://wa.me/923106359235"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with us on WhatsApp"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b0b12] border border-[#2b2b3a] flex items-center justify-center text-[#b0b0c8] hover:text-white hover:border-[#6c5dd3] hover:bg-[#25D366] transition-all"
                    >
                      <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="animate-in">
                <div className="p-5 sm:p-6 lg:p-8 bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Send Us Your Project Details</h3>
                  <p className="text-[#b0b0c8] text-sm mb-4 sm:mb-6">Get a free quote within 2 hours. No obligation.</p>
                  
                  {submitSuccess ? (
                    <div className="p-5 sm:p-6 bg-[#6c5dd3]/20 border border-[#6c5dd3]/50 rounded-xl text-center">
                      <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#6c5dd3] mx-auto mb-3 sm:mb-4" />
                      <h4 className="text-white font-semibold mb-2 text-base sm:text-lg">Message Sent Successfully!</h4>
                      <p className="text-[#b0b0c8] text-sm sm:text-base">Thank you for reaching out. We&apos;ll get back to you within 2 hours with a detailed quote.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div>
                        <Label htmlFor="name" className="text-[#b0b0c8] mb-1.5 sm:mb-2 block text-sm">Your Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="e.g., Ahmed Khan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-[#15151f] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3] text-sm"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-[#b0b0c8] mb-1.5 sm:mb-2 block text-sm">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-[#15151f] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3] text-sm"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-[#b0b0c8] mb-1.5 sm:mb-2 block text-sm">Service You Need *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger className="bg-[#15151f] border-[#2b2b3a] text-white focus:ring-[#6c5dd3] text-sm">
                            <SelectValue placeholder="Select the service you need" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#15151f] border-[#2b2b3a]">
                            {services.map((service) => (
                              <SelectItem 
                                key={service} 
                                value={service}
                                className="text-white hover:bg-[#2b2b3a] focus:bg-[#2b2b3a] text-sm"
                              >
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-[#b0b0c8] mb-1.5 sm:mb-2 block text-sm">Project Details *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project, requirements, budget, and timeline..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={4}
                          className="bg-[#15151f] border-[#2b2b3a] text-white placeholder:text-[#666] focus:border-[#6c5dd3] focus:ring-[#6c5dd3] resize-none text-sm"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#6c5dd3] hover:bg-[#5a4dc0] text-white rounded-full py-5 sm:py-6 text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          'Sending Your Message...'
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Get Free Quote Now
                          </>
                        )}
                      </Button>

                      <p className="text-[#666] text-xs text-center">
                        By submitting, you agree to our <a href="/privacy" className="text-[#b2a5ff] hover:underline">Privacy Policy</a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Watch Our Story</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                See How We Transform Businesses Digitally
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base max-w-2xl mx-auto">
                Watch this video to learn more about our services, process, and how we&apos;ve helped our clients achieve their digital goals.
              </p>
            </div>

            <div className="animate-in aspect-video bg-[#15151f] border border-[#2b2b3a] rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/placeholder-intro"
                title="Hanan Irfan Digital Group - Our Services Explained"
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
                <Youtube className="w-5 h-5" />
                Subscribe to our YouTube channel for more videos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-10 sm:py-12 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="animate-in h-48 sm:h-64 lg:h-80 bg-[#0b0b12] border border-[#2b2b3a] rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6c5dd3]/10 to-[#ff9ec7]/10" />
              <div className="text-center px-4 relative z-10">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-[#6c5dd3] mx-auto mb-3 sm:mb-4" />
                <p className="text-white font-medium text-base sm:text-lg">Rahim Yar Khan, Punjab, Pakistan</p>
                <p className="text-[#b0b0c8] text-xs sm:text-sm mt-1">Serving clients across Pakistan and worldwide</p>
                <a 
                  href="https://maps.google.com/?q=Rahim+Yar+Khan,Pakistan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#b2a5ff] hover:text-white text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Why Clients Trust Us</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Why Choose Hanan Irfan Digital Group?
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base max-w-2xl mx-auto">
                We combine creativity, technical expertise, and dedication to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: '2+ Years Experience', desc: 'Proven track record in digital services' },
                { title: '500+ Projects', desc: 'Successfully delivered worldwide' },
                { title: '98% Satisfaction', desc: 'Happy clients across the globe' },
                { title: '24/7 Support', desc: 'Always available for your needs' },
                { title: 'Affordable Pricing', desc: 'Quality services at fair rates' },
                { title: 'Quick Turnaround', desc: 'Fast delivery without compromise' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="animate-in p-5 sm:p-6 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3]/50 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-[#6c5dd3] mb-3" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#b0b0c8] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Explore Our Services</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Discover What We Can Do For You
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: 'Our Services', href: '/services', desc: 'Explore our complete range of digital services' },
                { title: 'How We Work', href: '/how-it-works', desc: 'Learn about our proven 5-step process' },
                { title: 'Our Portfolio', href: '/projects', desc: 'See our latest projects and case studies' },
                { title: 'About Our Company', href: '/about', desc: 'Learn about our story and mission' },
                { title: 'Client FAQ', href: '/faq', desc: 'Find answers to common questions' },
                { title: 'Get a Quote', href: '#', desc: 'Contact us for a free consultation' },
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
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Got Questions?</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="animate-in text-[#b0b0c8] text-sm sm:text-base">
                Find answers to common questions about our services, process, and pricing
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

            <div className="animate-in mt-8 text-center">
              <p className="text-[#b0b0c8] text-sm mb-4">Still have questions?</p>
              <a 
                href="https://wa.me/923106359235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#6c5dd3] text-white rounded-full font-medium hover:bg-[#5a4dc0] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat With Us on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="animate-in text-[#b0b0c8] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
              Get a free consultation and quote within 2 hours. Let&apos;s discuss how we can help grow your business online.
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
                href="mailto:hananirfan91@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 sm:py-4 bg-[#15151f] border border-[#2b2b3a] text-white rounded-full font-medium hover:border-[#6c5dd3] transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
