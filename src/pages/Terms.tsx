import { useEffect, useRef } from 'react';
import { FileText, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import SEO from '@/components/SEO';
import gsap from 'gsap';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing and using the services provided by Hanan Irfan Digital Group ("we," "our," or "us"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These Terms apply to all visitors, users, and others who access or use our services. By using our services, you represent that you have read, understood, and agree to be bound by these Terms.

We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.`,
  },
  {
    id: 'services-description',
    title: '2. Services Description',
    content: `Hanan Irfan Digital Group provides various digital services including but not limited to:

• Graphic Design (logos, banners, social media graphics, branding, print design)
• Web Development (websites, web applications, landing pages, e-commerce)
• SEO Services (search engine optimization, keyword research, content optimization)
• Video Editing (YouTube videos, promotional videos, ads, motion graphics)
• Content Writing (blog posts, articles, copywriting, technical writing)
• Presentation Design (PowerPoint, Google Slides, Keynote)
• Document Services (Word, Excel, PowerPoint formatting and design)
• Academic Assistance (assignments, homework help, research assistance)
• Thumbnail Creation (YouTube, social media, advertising)
• Image Resizing and Optimization
• YouTube Channel Management and Growth
• Custom Digital Solutions tailored to your needs

The specific scope, deliverables, and timeline for each project will be agreed upon in writing before work begins.`,
  },
  {
    id: 'eligibility',
    title: '3. Eligibility and Account Registration',
    content: `By using our services, you represent and warrant that:

• You are at least 13 years of age
• You have the legal capacity to enter into binding contracts
• You will provide accurate and complete information when requested
• Your use of our services does not violate any applicable laws or regulations
• You are not prohibited from receiving services under applicable laws

If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms. You are responsible for maintaining the confidentiality of your account credentials.`,
  },
  {
    id: 'quotations',
    title: '4. Quotations and Pricing',
    content: `All prices quoted are depend on Communication unless otherwise specified. Quotes are valid for 30 days from the date of issue unless otherwise stated.

Pricing depends on:
• Project complexity and scope of work
• Required turnaround time and urgency
• Number of revisions and iterations requested
• Additional features or services beyond standard offering
• Level of customization required

We reserve the right to revise quotes if project requirements change significantly after the initial agreement. Any changes will be discussed and agreed upon in writing before proceeding. All prices are exclusive of applicable taxes unless stated otherwise.`,
  },
  {
    id: 'payment',
    title: '5. Payment Terms and Methods',
    content: `Payment Structure:
• A 50% deposit is required before work begins on any project
• The remaining 50% is due upon project completion and client approval
• Rush orders may require full payment upfront

Accepted Payment Methods:
• Bank Transfer (all major Pakistani banks)
• JazzCash/EasyPaisa (for Pakistan-based clients)

Late Payment Policy:
• Projects may be paused if payment is not received within 7 days of the due date
• A late fee of 5% per week may be applied to overdue balances
• Deliverables may be withheld until full payment is received
• We reserve the right to terminate services for non-payment`,
  },
  {
    id: 'refund',
    title: '6. Refund and Cancellation Policy',
    content: `We strive for 100% client satisfaction. Our refund policy is as follows:

Before Work Begins:
• Full refund available if you cancel before we start working
• Refund processed within 7 business days

During the Project:
• If you are not satisfied after multiple revisions, we may offer a partial refund based on work completed
• No refund for work already delivered and accepted
• Refund percentage depends on project completion stage

After Completion:
• No refunds for completed and delivered projects that meet agreed specifications
• Exceptional cases will be reviewed on an individual basis
• We may offer store credit for future services

Refund Process:
• Refund requests must be submitted in writing with reasons
• Refunds will be processed within 14 business days of approval
• Transaction fees may be deducted from the refund amount
• Original payment method will be used for refunds where possible`,
  },
  {
    id: 'delivery',
    title: '7. Delivery, Revisions, and Acceptance',
    content: `Delivery Terms:
• Deliverables will be provided in agreed-upon formats
• Source files may be provided at an additional cost unless specified in the agreement
• Delivery timeline starts after receiving the deposit and all required materials from client
• We are not responsible for delays caused by client not providing required information

Revision Policy:
• We offer unlimited revisions until you are satisfied
• Revisions must be requested within 14 days of delivery
• Major scope changes beyond original agreement may incur additional charges
• Revision turnaround time depends on the complexity of changes requested
• All revisions must be requested in writing

Rush Orders:
• Expedited delivery is available for an additional fee (typically 25-50% of project cost)
• Rush fee varies based on project size and urgency
• Same-day delivery available for simple tasks at premium rates`,
  },
  {
    id: 'intellectual-property',
    title: '8. Intellectual Property Rights',
    content: `Ownership and Rights:
• Upon full payment, you own the final deliverables and all rights to use them
• We retain the right to use the work in our portfolio unless otherwise agreed in writing
• Source files are provided only if specified in the agreement
• We retain ownership of our proprietary tools, methods, and processes

Materials Provided by You:
• You warrant that you have the rights to any materials you provide to us
• You grant us a license to use your materials solely for the purpose of completing your project
• You are responsible for ensuring you have proper licenses for any third-party content you provide

Third-Party Assets:
• We may use licensed stock images, fonts, or other assets in our work
• These assets are subject to their respective licenses
• We will inform you of any usage restrictions on third-party assets
• You are responsible for obtaining extended licenses if needed for your usage`,
  },
  {
    id: 'confidentiality',
    title: '9. Confidentiality and Non-Disclosure',
    content: `Our Commitment to Confidentiality:
• All project-related information is kept strictly confidential
• We do not share your business information, ideas, or project details with third parties
• We can sign NDAs (Non-Disclosure Agreements) upon request
• Your contact information is never sold, rented, or shared with marketers
• Our team members are bound by confidentiality agreements

Your Responsibilities:
• You agree to keep our pricing and proprietary methods confidential
• You agree not to share project files with competitors
• You agree to obtain our permission before publicly disclosing our working relationship (if required)
• You are responsible for maintaining confidentiality of any proprietary information we share`,
  },
  {
    id: 'limitation-liability',
    title: '10. Limitation of Liability',
    content: `To the maximum extent permitted by law:

• We are not liable for any indirect, incidental, special, or consequential damages
• Our total liability shall not exceed the amount paid for the specific project
• We are not responsible for delays caused by factors beyond our control (force majeure)
• We do not guarantee specific results from SEO or marketing services
• We are not responsible for issues arising from client-provided materials or instructions

You agree to indemnify and hold us harmless from any claims arising from:
• Your use of our services
• Content you provide to us
• Your violation of these Terms
• Your infringement of any third-party rights

We make no warranties, express or implied, about the services except as explicitly stated.`,
  },
  {
    id: 'termination',
    title: '11. Termination of Services',
    content: `We may terminate or suspend your access to our services immediately, without prior notice, for:

• Breach of these Terms and Conditions
• Non-payment of fees or repeated late payments
• Abusive, threatening, or inappropriate behavior towards our team
• Fraudulent activities or misrepresentation
• Requesting services for illegal purposes

Upon termination:
• All outstanding payments become immediately due
• You remain liable for all amounts incurred prior to termination
• Any work completed but not paid for remains our property
• Provisions that by their nature should survive termination shall survive (intellectual property, confidentiality, liability)

You may terminate services by providing written notice. Refunds will be processed according to our refund policy.`,
  },

  {
    id: 'dispute-resolution',
    title: '12. Dispute Resolution Process',
    content: `In the event of any dispute:

1. Negotiation: Both parties agree to first attempt to resolve the dispute through good-faith negotiation for at least 30 days
2. Mediation: If negotiation fails, parties agree to non-binding mediation with a mutually agreed mediator
3. Arbitration: If mediation fails, disputes will be resolved through binding arbitration in Rahim Yar Khan, Pakistan

We prefer amicable resolution and will always attempt to address your concerns before any formal proceedings. Our goal is to maintain positive relationships with all clients.
`,
  },
  {
    id: 'changes',
    title: '13. Changes to Terms and Conditions',
    content: `We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website.

Your continued use of our services after any changes indicates your acceptance of the modified Terms. We encourage you to review these Terms periodically.

For significant changes, we will:
• Post a notice on our website
• Send an email notification to registered users
• Update the "Last Updated" date

Last Updated: February 2026`,
  },
  {
    id: 'contact',
    title: '14. Contact Information',
    content: `If you have any questions about these Terms and Conditions, please contact us:

Email: hananirfan91@gmail.com
Phone/WhatsApp: +92 310 6359235
Address: Abu Dhabi Road, Rahim Yar Khan, Punjab, Pakistan
Business Hours: Monday - Saturday, 9:00 AM - 11:00 PM PKT

We are committed to addressing your concerns and will respond as soon as possible, typically within 24 hours during business days.

For legal inquiries, please include "Legal Inquiry" in the subject line of your email.`,
  },
];

const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms and Conditions - Hanan Irfan Digital Group',
  description: 'Read our Terms and Conditions for using Hanan Irfan Digital Group services. Learn about our policies on payments, refunds, intellectual property, and more.',
  url: 'https://hidigitalgroup.vercel.app/terms',
  lastReviewed: '2026-02-20'
};

export default function Terms() {
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
        title="Terms & Conditions - Service Agreement | Hanan Irfan Digital Group"
        description="Read our Terms and Conditions for web development, graphic design, and digital services. Learn about our payment terms, refund policy, intellectual property rights, and service agreements."
        keywords="terms and conditions, service agreement, payment terms, refund policy, intellectual property rights, digital agency terms, web development contract, graphic design terms, cancellation policy, privacy terms"
        canonical="https://hidigitalgroup.vercel.app/terms"
        schema={termsSchema}
        ogImage="https://hidigitalgroup.vercel.app/og-terms.jpg"
      />
      
      <div ref={sectionRef} className="w-full">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#15151f] to-[#0b0b12]">
            <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#6c5dd3]/15 rounded-full blur-[100px] sm:blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="animate-in inline-flex items-center gap-2 text-[#b2a5ff] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <FileText className="w-4 h-4" />
              Legal Agreement
            </span>
            <h1 className="animate-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Terms & Conditions
            </h1>
            <p className="animate-in text-sm sm:text-base lg:text-lg text-[#b0b0c8] max-w-2xl mx-auto">
              Please read these terms carefully before using our digital services. By using our services, you agree to these terms.
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
                { title: 'Privacy Policy', href: '/privacy', desc: 'Learn how we protect your personal information' },
                { title: 'Our Services', href: '/services', desc: 'Explore our complete range of digital services' },
                { title: 'How We Work', href: '/how-it-works', desc: 'Learn about our project process and workflow' },
                { title: 'FAQ', href: '/faq', desc: 'Find answers to common questions' },
                { title: 'Contact Us', href: '/contact', desc: 'Get in touch for legal inquiries' },
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

        {/* Contact Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#6c5dd3]/20 to-[#ff9ec7]/10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="animate-in text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Questions About Our Terms?
            </h2>
            <p className="animate-in text-[#b0b0c8] text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
              If you have any questions about our Terms and Conditions, please contact us. We are happy to clarify any concerns.
            </p>
            <div className="animate-in flex flex-wrap justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/923106359235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp Us
              </a>
              <a 
                href="mailto:hananirfan91@gmail.com"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#15151f] border border-[#2b2b3a] text-white rounded-full font-medium hover:border-[#6c5dd3] transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
