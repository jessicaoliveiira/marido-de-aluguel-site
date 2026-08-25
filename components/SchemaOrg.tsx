import { services, siteConfig } from '@/lib/config';

interface SchemaOrgProps {
  pageType?: 'home' | 'service' | 'about' | 'contact';
}

export default function SchemaOrg({ pageType = 'home' }: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Plumber'],
    '@id': siteConfig.siteUrl,
    name: `${siteConfig.name} em ${siteConfig.city}`,
    description: siteConfig.slogan,
    url: siteConfig.siteUrl,
    telephone: `+${siteConfig.phone}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: 'BR'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00'
      }
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: siteConfig.city
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Manutenção e instalações hidráulicas',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          url: `${siteConfig.siteUrl}/servicos/${service.slug}`
        }
      }))
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
