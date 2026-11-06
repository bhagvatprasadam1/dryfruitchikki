import { siteConfig } from '../data/siteConfig';
import { dryFruitsChikkiProduct } from '../data/products';
import { faqsData } from '../data/faqs';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo.png`,
    description: siteConfig.subTagline,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Gujarati', 'Hindi'],
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
    ],
  };
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Dry Fruits Chikki (Dry Fruit Punch - Dates) | Nutritional Punch | Premium Gujarati Sweet',
    image: `${siteConfig.siteUrl}${dryFruitsChikkiProduct.imageUrl}`,
    description: dryFruitsChikkiProduct.description,
    brand: {
      '@type': 'Brand',
      name: dryFruitsChikkiProduct.vendor,
    },
    category: 'Food & Beverage > Sweets & Desserts > Healthy Indian Sweets',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1420',
      bestRating: '5',
      worstRating: '1',
    },
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '100g (Approx. 3-4 slices)',
      calories: '465 calories',
      proteinContent: '9.8g',
      fatContent: '24.5g',
      carbohydrateContent: '52.0g',
      fiberContent: '7.2g',
      sugarContent: '0.0g added sugar',
    },
    suitableForDiet: [
      'https://schema.org/VegetarianDiet',
      'https://schema.org/GlutenFreeDiet',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '275.00',
      highPrice: '1038.00',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
      url: dryFruitsChikkiProduct.productUrl,
      seller: {
        '@type': 'Organization',
        name: dryFruitsChikkiProduct.vendor,
      },
    },
  };
}

export function getFAQPageSchema(category?: string) {
  const items = category
    ? faqsData.filter((f) => f.category === category)
    : faqsData.filter((f) => f.featuredOnHome);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.brandName,
    image: `${siteConfig.siteUrl}${dryFruitsChikkiProduct.imageUrl}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.2389',
      longitude: '72.8427',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    priceRange: '₹₹',
  };
}
