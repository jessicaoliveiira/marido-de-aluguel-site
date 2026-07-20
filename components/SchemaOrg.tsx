import { siteConfig } from '@/lib/config';

interface SchemaOrgProps {
  pageType?: 'home' | 'service' | 'about' | 'contact';
}

export default function SchemaOrg({ pageType = 'home' }: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://maridodealuguelsp.com.br',
    name: `${siteConfig.name} em ${siteConfig.city}`,
    description: `Serviços hidráulicos profissionais em ${siteConfig.city}: vazamentos, desentupimento, instalações, caixas-d’água e manutenção preventiva.`,
    url: 'https://maridodealuguelsp.com.br',
    telephone: `+${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5646162',
      longitude: '-46.6521985'
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
    sameAs: [siteConfig.instagram, siteConfig.facebook],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: siteConfig.city
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços Hidráulicos',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Caça Vazamentos'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desentupimento'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalações Hidráulicas'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: "Caixa-d'Água e Bombas"
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Hidráulica Preventiva'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
