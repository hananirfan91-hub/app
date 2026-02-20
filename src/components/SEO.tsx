import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  schema?: object;
}

const defaultKeywords = 'digital agency, graphic design, web development, SEO services, video editing, content writing, presentation design, assignment help, thumbnail design, image resizer, YouTube content creator, Pakistan, Rahim Yar Khan, freelance services, online services, digital marketing, logo design, website design, WordPress development, social media graphics, banner design, business cards, flyer design, brochure design, poster design, infographics, UI UX design, mobile app design, e-commerce website, landing page design, search engine optimization, keyword research, on-page SEO, off-page SEO, technical SEO, local SEO, video production, video post-production, motion graphics, animation, explainer videos, promotional videos, ad creatives, copywriting, blog writing, article writing, academic writing, essay writing, research papers, thesis help, homework assistance, online tutoring, PowerPoint presentation, Google Slides, Keynote, Excel spreadsheets, data entry, virtual assistant, administrative support, transcription services, translation services, Urdu to English, English to Urdu, Pakistani freelancer, affordable digital services, cheap web design, best SEO company Pakistan, top digital agency, web designer Pakistan, graphic designer Pakistan, video editor Pakistan, content writer Pakistan, SEO expert Pakistan, digital marketing agency, online business solutions, remote work services, freelance Pakistan, Fiverr alternative, Upwork alternative, best freelancer Pakistan, professional services, business solutions, startup services, SME services, enterprise solutions';

export default function SEO({ 
  title, 
  description, 
  keywords = defaultKeywords,
  ogImage = 'https://hidigitalgroup.vercel.app/og-image.png',
  canonical = 'https://hidigitalgroup.vercel.app/',
  schema
}: SEOProps) {
  const fullTitle = `${title} | Hanan Irfan Digital Group - We Solve & Deliver`;
  
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hanan Irfan Digital Group',
    url: 'https://hidigitalgroup.vercel.app/',
    logo: 'https://hidigitalgroup.vercel.app/logo.png',
    description: 'Your one-stop digital agency for graphic design, web development, SEO, video editing, content writing, and more.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Abu Dhabi Road',
      addressLocality: 'Rahim Yar Khan',
      addressRegion: 'Punjab',
      addressCountry: 'PK'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-310-6359235',
      contactType: 'customer service',
      availableLanguage: ['English', 'Urdu']
    },
    sameAs: [
      'https://facebook.com/hananirfan91',
      'https://instagram.com/hananirfan91',
      'https://youtube.com/@hananirfan91'
    ]
  };

  const pageSchema = schema || defaultSchema;

  useEffect(() => {
    // Update title
    document.title = fullTitle;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Hanan Irfan Digital Group', true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', canonical);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Update or create schema script
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(pageSchema);
    
    return () => {
      // Cleanup not needed as we want to keep the meta tags
    };
  }, [title, description, keywords, ogImage, canonical, pageSchema, fullTitle]);

  return null;
}
