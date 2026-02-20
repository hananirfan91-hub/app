import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Sitemap', href: '/sitemap' },
];

const services = [
  { label: 'Graphic Design', href: '/services' },
  { label: 'Web Development', href: '/services' },
  { label: 'SEO Services', href: '/services' },
  { label: 'Video Editing', href: '/services' },
  { label: 'Content Writing', href: '/services' },
  { label: 'Presentations', href: '/services' },
  { label: 'Assignments', href: '/services' },
  { label: 'Thumbnails', href: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b12] border-t border-[#2b2b3a]">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">
                Hanan Irfan <span className="text-[#6c5dd3]">Digital</span>
              </span>
            </Link>
            <p className="text-[#b0b0c8] text-sm mb-6 leading-relaxed">
              Your one-stop digital agency for graphic design, web development, SEO, 
              video editing, content writing, and more. We solve & deliver.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/hananirfan91"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#15151f] border border-[#2b2b3a] flex items-center justify-center text-[#b0b0c8] hover:text-white hover:border-[#6c5dd3] hover:bg-[#6c5dd3]/20 transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/hananirfan91"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#15151f] border border-[#2b2b3a] flex items-center justify-center text-[#b0b0c8] hover:text-white hover:border-[#6c5dd3] hover:bg-[#6c5dd3]/20 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@hananirfan91"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#15151f] border border-[#2b2b3a] flex items-center justify-center text-[#b0b0c8] hover:text-white hover:border-[#6c5dd3] hover:bg-[#6c5dd3]/20 transition-all"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://wa.me/923106359235"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#15151f] border border-[#2b2b3a] flex items-center justify-center text-[#b0b0c8] hover:text-white hover:border-[#6c5dd3] hover:bg-[#6c5dd3]/20 transition-all"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#b0b0c8] text-sm hover:text-[#b2a5ff] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-[#b0b0c8] text-sm hover:text-[#b2a5ff] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#6c5dd3] mt-0.5 flex-shrink-0" />
                <span className="text-[#b0b0c8] text-sm">
                  Abu Dhabi Road, Rahim Yar Khan,<br />
                  Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#6c5dd3] flex-shrink-0" />
                <a href="tel:+923106359235" className="text-[#b0b0c8] text-sm hover:text-[#b2a5ff]">
                  +92 310 6359235
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#6c5dd3] flex-shrink-0" />
                <a href="mailto:hananirfan91@gmail.com" className="text-[#b0b0c8] text-sm hover:text-[#b2a5ff]">
                  hananirfan91@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="text-[#6c5dd3] flex-shrink-0" />
                <a href="https://wa.me/923106359235" className="text-[#b0b0c8] text-sm hover:text-[#b2a5ff]">
                  WhatsApp: +92 310 6359235
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2b2b3a]">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#b0b0c8] text-sm text-center md:text-left">
              © {new Date().getFullYear()} Hanan Irfan Digital Group. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-[#b0b0c8] text-sm hover:text-[#b2a5ff]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#b0b0c8] text-sm hover:text-[#b2a5ff]">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-[#b0b0c8] text-sm hover:text-[#b2a5ff]">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
