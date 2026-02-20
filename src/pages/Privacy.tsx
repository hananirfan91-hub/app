import { useEffect, useRef } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Shield, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import gsap from 'gsap';

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: `Welcome to Hanan Irfan Digital Group ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.

By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.

This policy applies to all information collected through our website, mobile applications, and any related services.`,
  },
  {
    id: 'information-collect',
    title: '2. Information We Collect',
    content: `We collect several types of information from and about users of our services:

Personal Information: This includes your name, email address, phone number, billing address, and any other information you provide when contacting us, creating an account, or placing an order.

Usage Data: We automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, time spent on pages, referring website, and other diagnostic data.

Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience and analyze website traffic.

Project Information: Details about your projects, requirements, and communications with our team.`,
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    content: `We use the information we collect for various purposes:

• To provide and maintain our services
• To process your orders and requests efficiently
• To communicate with you about your projects and updates
• To send you updates, marketing materials, and promotional offers (with your consent)
• To improve our website, services, and user experience
• To detect, prevent, and address technical issues and security threats
• To comply with legal obligations and protect our rights
• To analyze usage patterns and optimize our offerings`,
  },
  {
    id: 'information-sharing',
    title: '4. Information Sharing and Disclosure',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With trusted service providers who assist us in operating our business (payment processors, hosting providers)
• To comply with legal requirements, court orders, or government requests
• To protect our rights, property, or safety, or that of our users or others
• In connection with a merger, acquisition, or sale of assets (with prior notice)
• With your consent or at your direction

All third-party service providers are contractually obligated to protect your information.`,
  },
  {
    id: 'cookies',
    title: '5. Cookies and Tracking Technologies',
    content: `We use cookies and similar tracking technologies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.

Types of cookies we use:
• Essential cookies: Required for the website to function properly
• Preference cookies: Remember your settings and preferences
• Analytics cookies: Help us understand how visitors interact with our website
• Marketing cookies: Used to deliver relevant advertisements and measure their effectiveness

You can manage cookie preferences through your browser settings.`,
  },
  {
    id: 'data-security',
    title: '6. Data Security Measures',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• SSL/TLS encryption for data in transit
• Secure data storage with access controls
• Regular security assessments and updates
• Multi-factor authentication for admin accounts
• Staff training on data protection practices
• Regular backup and disaster recovery procedures

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.`,
  },
  {
    id: 'your-rights',
    title: '7. Your Privacy Rights',
    content: `Depending on your location, you may have certain rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request that we correct inaccurate or incomplete information
• Deletion: Request that we delete your personal information (right to be forgotten)
• Restriction: Request that we restrict the processing of your information
• Portability: Request a copy of your data in a structured, machine-readable format
• Objection: Object to the processing of your personal information for marketing
• Withdraw Consent: Withdraw consent where processing is based on consent

To exercise these rights, please contact us using the information provided at the end of this policy. We will respond within 30 days.`,
  },
  {
    id: 'children-privacy',
    title: '8. Children\'s Privacy',
    content: `Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can take appropriate action.`,
  },
 
  {
    id: 'data-retention',
    title: '10. Data Retention Policy',
    content: `We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to:

• Comply with our legal obligations
• Resolve disputes and enforce our agreements
• Maintain business records as required by law
• Provide ongoing support for completed projects

When we no longer need your personal information, we will securely delete or anonymize it. Project files are typically retained for 1 year after project completion.`,
  },
  {
    id: 'changes',
    title: '11. Changes to This Privacy Policy',
    content: `We may update our Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any changes by:

• Posting the new Privacy Policy on this page
• Updating the "Last Updated" date
• Sending an email notification for significant changes

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

Last Updated: February 2026`,
  },
  {
    id: 'contact',
    title: '12. Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

Email: hananirfan91@gmail.com
Phone/WhatsApp: +92 310 6359235
Address: Abu Dhabi Road, Rahim Yar Khan, Punjab, Pakistan

We are committed to addressing your concerns and will respond to your inquiry within 48 hours.

For data protection inquiries, please include "Privacy Request" in the subject line.`,
  },
];

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy - Hanan Irfan Digital Group',
  description: 'Learn how Hanan Irfan Digital Group collects, uses, and protects your personal information. Our comprehensive privacy policy for digital services in Pakistan.',
  url: 'https://hidigitalgroup.vercel.app/privacy',
  lastReviewed: '2026-02-20'
};

export default function Privacy() {
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
        title="Privacy Policy - Data Protection | Hanan Irfan Digital Group"
        description="Learn how we collect, use, and protect your personal information. Our comprehensive privacy policy for web development, graphic design, and digital services in Pakistan. GDPR compliant."
        keywords="privacy policy, data protection Pakistan, GDPR compliance, personal information security, cookie policy, digital agency privacy, web development privacy, data retention policy, user rights privacy"
        canonical="https://hidigitalgroup.vercel.app/privacy"
        schema={privacySchema}
        ogImage="https://hidigitalgroup.vercel.app/og-privacy.jpg"
      />
      
      <div ref={sectionRef} className="w-full">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#15151f] to-[#0b0b12]">
            <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#6c5dd3]/15 rounded-full blur-[100px] sm:blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Shield className="w-4 h-4" />
              Legal & Compliance
            </span>
            <h1 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Privacy Policy
            </h1>
            <p className="animate-in text-sm sm:text-base lg:text-lg text-[#b0b0c8] max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information when you use our digital services.
            </p>
            <p className="animate-in text-[#666] text-xs sm:text-sm mt-4">Last Updated: February 2026</p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-10 sm:py-12 bg-[#15151f] border-y border-[#2b2b3a] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="animate-in text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Table of Contents</h2>
            <div className="animate-in grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[#b0b0c8] hover:text-[#b2a5ff] transition-colors text-sm sm:text-base py-1"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10 sm:space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="animate-in scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{section.title}</h2>
                <div className="text-[#b0b0c8] leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#15151f] px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="animate-in inline-block text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">Related Pages</span>
              <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Explore More Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: 'Terms & Conditions', href: '/terms', desc: 'Read our terms of service and usage policies' },
                { title: 'Our Services', href: '/services', desc: 'Explore our complete range of digital services' },
                { title: 'Contact Us', href: '/contact', desc: 'Get in touch for privacy-related inquiries' },
                { title: 'How We Work', href: '/how-it-works', desc: 'Learn about our project process' },
                { title: 'FAQ', href: '/faq', desc: 'Find answers to common questions' },
                { title: 'Sitemap', href: '/sitemap', desc: 'Navigate all pages on our website' },
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

        {/* Contact Cards */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#0b0b12] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="animate-in text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Contact Us About Privacy</h2>
            <div className="animate-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <a href="mailto:hananirfan91@gmail.com" className="p-4 sm:p-5 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-colors text-center">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#6c5dd3] mx-auto mb-2 sm:mb-3" />
                <h4 className="text-white font-medium mb-1 text-sm sm:text-base">Email</h4>
                <p className="text-xs sm:text-sm text-[#b0b0c8]">hananirfan91@gmail.com</p>
              </a>
              <a href="tel:+923106359235" className="p-4 sm:p-5 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-colors text-center">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#6c5dd3] mx-auto mb-2 sm:mb-3" />
                <h4 className="text-white font-medium mb-1 text-sm sm:text-base">Phone</h4>
                <p className="text-xs sm:text-sm text-[#b0b0c8]">+92 310 6359235</p>
              </a>
              <a href="https://wa.me/923106359235" target="_blank" rel="noopener noreferrer" className="p-4 sm:p-5 bg-[#15151f] border border-[#2b2b3a] rounded-xl hover:border-[#6c5dd3] transition-colors text-center">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#25D366] mx-auto mb-2 sm:mb-3" />
                <h4 className="text-white font-medium mb-1 text-sm sm:text-base">WhatsApp</h4>
                <p className="text-xs sm:text-sm text-[#b0b0c8]">+92 310 6359235</p>
              </a>
              <div className="p-4 sm:p-5 bg-[#15151f] border border-[#2b2b3a] rounded-xl text-center">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#6c5dd3] mx-auto mb-2 sm:mb-3" />
                <h4 className="text-white font-medium mb-1 text-sm sm:text-base">Address</h4>
                <p className="text-xs sm:text-sm text-[#b0b0c8]">Rahim Yar Khan, Pakistan</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
