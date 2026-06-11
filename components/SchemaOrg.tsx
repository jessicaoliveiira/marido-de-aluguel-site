import { siteConfig } from '@/lib/config';

interface SchemaOrgProps {
  pageType?: 'home' | 'service' | 'about' | 'contact';
}

export default function SchemaOrg({ pageType = 'home' }: SchemaOrgProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://maridodealuguel${siteConfig.city.toLowerCase().replace(/\s/g, '')}.com.br`,
    name: `Marido de Aluguel em ${siteConfig.city}`,
    description: `Serviços residenciais profissionais em ${siteConfig.city}: pequenos reparos, instalação elétrica, hidráulica, montagem de móveis, pintura e mais. Atendimento rápido e preço justo.`,
    url: `https://maridodealuguel${siteConfig.city.toLowerCase().replace(/\s/g, '')}.com.br`,
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
      name: 'Serviços de Marido de Aluguel',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pequenos Reparos Residenciais'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Instalação Elétrica'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Serviços Hidráulicos'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Montagem de Móveis'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pintura Residencial'
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
