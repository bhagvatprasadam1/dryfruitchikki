export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogImage: string;
}

export const seoData: Record<string, PageSEO> = {
  home: {
    title: 'Dry Fruits Chikki (Dry Fruit Punch - Dates) | 100% Sugar-Free Gujarati Sweet | Bhagvat Prasadam',
    description: 'Taste authentic handcrafted Dry Fruits Chikki (Dry Fruit Punch - Dates) by Bhagvat Prasadam. Packed with California almonds, crunchy cashews, pistachios, Arabian dates, and pure cow ghee. Zero added white sugar. Express pan-India delivery.',
    keywords: 'Dry Fruits Chikki, Dry Fruit Punch Dates, Nutritional Punch, Sugar Free Dry Fruit Chikki, Khajur Pak, Dates Dry Fruit Barfi, Bhagvat Prasadam sweets, Nilkanthdham Poicha prasad sweets, pure cow ghee sweets, diabetic friendly Indian sweets, healthy Diwali sweets gift, protein energy sweet, ડ્રાયફ્રૂટ્સ ચીકી, ખજૂર પાક, बिना चीनी की ड्राई फ्रूट चिक्की',
    canonicalPath: '/',
    ogImage: '/dry-fruits-chikki/dry-fruits-chikki-product.webp',
  },
  product: {
    title: 'Buy Dry Fruits Chikki (Dry Fruit Punch - Dates) | 250gm, 500gm, 1kg | Bhagvat Prasadam',
    description: 'Order authentic Dry Fruits Chikki (Dates Nutritional Punch) by Bhagvat Prasadam online. Handcrafted Gujarati sweet packed with almonds, cashews, pistachios, dates, and pure ghee. Fast express pan-India dispatch.',
    keywords: 'Dry Fruits Chikki 250gm, Dry Fruits Chikki 500gm, Dry Fruits Chikki 1kg, Dry Fruit Punch Dates price, Khajur Dry Fruit Chikki, Bhagvat Prasadam Dry Fruits Chikki, Diwali gift box sweets, protein energy sweet, sugarless mithai online',
    canonicalPath: '/',
    ogImage: '/dry-fruits-chikki/dry-fruits-chikki-product.webp',
  },
  about: {
    title: 'Our Story & Heritage | Sacred Satvik Dry Fruits Chikki Craftsmanship',
    description: 'Learn about our sacred culinary heritage inspired by Nilkanthdham Poicha, our devotion to authentic Satvik Dry Fruits Chikki crafting, and our dedication to whole dates, California nuts, and pure desi cow ghee.',
    keywords: 'Dry Fruits Chikki story, Gujarati sweets heritage, Bhagvat Prasadam craftsmanship, healthy traditional sweets, Nilkanthdham Poicha prasad sweets, Satvik sweets Gujarat',
    canonicalPath: '/about',
    ogImage: '/dry-fruits-chikki/dry-fruits-chikki-about.webp',
  },
  ingredients: {
    title: 'Dry Fruits Chikki Nutrition & Ingredients | 100% Natural Dates & Nuts Breakdown',
    description: 'Discover the pure ingredients and certified nutrition facts of our Dry Fruits Chikki: Arabian black dates, California almonds, premium cashews, vibrant pistachios, and pure cow ghee without refined sugar or additives.',
    keywords: 'Dry Fruits Chikki ingredients, what is dry fruit punch made of, dry fruits chikki calories, protein in dates sweet, dates sweet ingredients, almonds cashews pistachios, pure cow ghee sweets, sugar free dry fruit chikki nutrition',
    canonicalPath: '/ingredients',
    ogImage: '/dry-fruits-chikki/dry-fruits-chikki-ingredients.webp',
  },
  process: {
    title: 'How Dry Fruits Chikki Is Made | 6-Step Traditional Ghee Roasting Process',
    description: 'Discover our artisanal 6-step preparation: date de-seeding, nut slow roasting in pure cow ghee, warming date reduction, gentle rolling, setting, and precision artisanal slicing by Bhagvat Prasadam.',
    keywords: 'Dry Fruits Chikki recipe process, how dry fruit punch is made, Khajur pak preparation, traditional dry fruit chikki making, Bhagvat Prasadam recipe, pure ghee roasting',
    canonicalPath: '/process',
    ogImage: '/dry-fruits-chikki/dry-fruits-chikki-product.webp',
  },
  faq: {
    title: 'Dry Fruits Chikki FAQ | Sugar-Free, Calories, Shelf Life & Fast Delivery',
    description: 'Find answers to all frequently asked questions about Dry Fruits Chikki: dates nutritional punch ingredients, 35-day shelf life, zero added sugar, diabetic suitability, and pan-India express courier.',
    keywords: 'Dry Fruits Chikki FAQ, dry fruit punch shelf life, is dry fruit chikki sugar free, dry fruit chikki calories, how to store dry fruits chikki, Bhagvat Prasadam delivery',
    canonicalPath: '/faq',
    ogImage: '/dry-fruits-chikki/dry-fruits-chikki-product.webp',
  },
  contact: {
    title: 'Contact Us | Dry Fruits Chikki Inquiries, WhatsApp & Bulk Orders',
    description: 'Connect with Bhagvat Prasadam for personal orders, festive corporate gift hampers, and custom bulk inquiries. WhatsApp or call our team for fast delivery across India.',
    keywords: 'Contact Dry Fruits Chikki, order dry fruit punch WhatsApp, Bhagvat Prasadam sweet inquiry, bulk dry fruit chikki order',
    canonicalPath: '/contact',
    ogImage: '/images/dry-fruits-chikki.webp',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Authentic Gujarati Dry Fruits Chikki',
    description: 'Our customer data privacy policy regarding personal inquiries, WhatsApp interactions, and website contact forms.',
    keywords: 'Privacy policy, customer data protection, Dry Fruits Chikki privacy',
    canonicalPath: '/privacy-policy',
    ogImage: '/images/dry-fruits-chikki.webp',
  },
  terms: {
    title: 'Terms & Conditions | Authentic Gujarati Dry Fruits Chikki',
    description: 'Terms of service, inquiry policies, delivery guidelines, and packaging standards for our handcrafted sweet brand.',
    keywords: 'Terms and conditions, delivery terms, order inquiries terms',
    canonicalPath: '/terms',
    ogImage: '/images/dry-fruits-chikki.webp',
  },
  shippingPolicy: {
    title: 'Shipping & Delivery Policy | Authentic Gujarati Dry Fruits Chikki',
    description: 'Information on pan-India courier dispatch, airtight packaging freshness, 35-day shelf life transit, and delivery timelines.',
    keywords: 'Dry Fruits Chikki shipping, sweet delivery timeline, pan India mithai courier, packaging freshness',
    canonicalPath: '/shipping-policy',
    ogImage: '/images/dry-fruits-chikki.webp',
  },
  returnPolicy: {
    title: 'Return & Refund Policy | Authentic Gujarati Dry Fruits Chikki',
    description: 'Our transparent return, refund, and transit damage replacement policy for Dry Fruits Chikki (Dry Fruit Punch - Dates) by Bhagvat Prasadam.',
    keywords: 'Dry Fruits Chikki return policy, refund policy, transit damage replacement, food safety returns Bhagvat Prasadam, sweet refund guarantee',
    canonicalPath: '/return-policy',
    ogImage: '/dry-fruits-chikki/dry-fruits-chikki-product.webp',
  },
  notFound: {
    title: '404: Sweet Not Found | Authentic Gujarati Dry Fruits Chikki',
    description: 'The page you were looking for seems to have gone missing. Return home to discover our authentic Gujarati Dry Fruits Chikki.',
    keywords: '404, not found, Dry Fruits Chikki',
    canonicalPath: '/404',
    ogImage: '/images/dry-fruits-chikki.webp',
  },
};
