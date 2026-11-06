export interface ProductWeightOption {
  weight: string;
  price: string;
  originalPrice: string;
  discount: string;
  pieces: string;
  serving: string;
  idealFor: string;
  popular?: boolean;
}

export interface ProductDetail {
  id: string;
  title: string;
  hindiTitle: string;
  regionalName: string;
  vendor: string;
  productUrl: string;
  tagline: string;
  description: string;
  origin: string;
  textureDescription: string;
  weights: ProductWeightOption[];
  shelfLife: string;
  storage: string;
  packaging: string;
  ingredients: string[];
  allergens: string;
  highlights: string[];
  imageUrl: string;
  galleryImages: string[];
  videoUrl?: string;
}

export const dryFruitsChikkiProduct: ProductDetail = {
  id: 'dry-fruits-chikki-dry-fruit-punch-dates-nutritional-punch-premium-gujarati-sweet',
  title: 'Dry Fruits Chikki (Dry Fruit Punch - Dates) | Nutritional Punch',
  hindiTitle: 'ड्राई फ्रूट्स चिक्की (खजूर पंच)',
  regionalName: 'ડ્રાયફ્રૂટ્સ ચીકી (ખજૂર પંચ)',
  vendor: 'Bhagvat Prasadam',
  productUrl: 'https://bhagvatprasadam.com/products/dry-fruits-chikki-dry-fruit-punch-dates-nutritional-punch-premium-gujarati-sweet?variant=45431469408405',
  tagline: 'Pure & Wholesome Nutritional Punch by Bhagvat Prasadam',
  description: 'Pure rich taste of Dry Fruits Chikki (Dry Fruit Punch - Dates), an authentic, guilt-free Gujarati sweet handcrafted with love by Bhagvat Prasadam. Prepared with a nutrient-dense powerhouse of whole Arabian dates, crunchy California almonds, creamy cashews, and rich pistachios simmered gently with pure cow ghee. Packed with natural vitamins, minerals, iron, dietary fiber, and healthy antioxidants without refined white sugar, it provides an instant natural energy punch. Perfect for festive celebrations, Diwali gifting, sacred puja offerings, winter nourishment, and everyday wellness.',
  origin: 'Gujarat, India (Inspired by Nilkanthdham Poicha)',
  textureDescription: 'Substantial, delightfully nutty and soft-fudgy bite from slow-simmered dates blended seamlessly with a crisp, aromatic crunch of roasted whole dry fruits in every slice.',
  weights: [
    {
      weight: '250gm',
      price: '₹275',
      originalPrice: '₹350',
      discount: '21% OFF',
      pieces: '8 - 10 Slices',
      serving: '2 - 3 Persons',
      idealFor: 'Personal health snacking & evening tea time',
    },
    {
      weight: '500gm',
      price: '₹530',
      originalPrice: '₹690',
      discount: '23% OFF',
      pieces: '16 - 20 Slices',
      serving: '5 - 6 Persons',
      idealFor: 'Family festivals, winter energy & thoughtful gifting',
      popular: true,
    },
    {
      weight: '1kg',
      price: '₹1,038',
      originalPrice: '₹1,370',
      discount: '24% OFF',
      pieces: '32 - 40 Slices',
      serving: '10 - 12 Persons',
      idealFor: 'Grand festive celebrations, wedding hampers & corporate gifting',
    },
  ],
  shelfLife: '35 days at ambient room temperature (naturally long shelf life thanks to dried dates and pure ghee)',
  storage: 'Store in a cool, dry place away from direct sunlight and humidity. Keep in an airtight container after opening.',
  packaging: 'Food-grade moisture-barrier sealed inner packaging encased in a luxury keepsake gold-embossed gift box.',
  ingredients: [
    'Premium Arabian Whole Dates (Khajur)',
    'California Almonds (Badam)',
    'Crunchy Whole Cashews (Kaju)',
    'Vibrant Green Pistachios (Pista)',
    '100% Pure Cow Ghee',
    'Stone-Ground Green Cardamom (Elaichi)',
    'Aromatic Nutmeg & Mace (Jaiphal-Javantri)',
    'Pure Jaggery / Natural Honey Touch',
  ],
  allergens: 'Contains Tree Nuts (Almonds, Cashews, Pistachios) and Dairy (Pure Ghee). Prepared in a sacred, 100% Satvik kitchen.',
  highlights: [
    'Handcrafted with Love by Bhagvat Prasadam',
    'Wholesome Nutritional Punch - Natural Energy Booster',
    'Naturally Sweetened with Dates (No Refined Sugar)',
    'Loaded with Roasted Almonds, Cashews & Pistachios',
    '100% Pure Premium Cow Ghee',
    'Zero Artificial Flavors, Chemical Preservatives or Fillers',
  ],
  imageUrl: '/dry-fruits-chikki/dry-fruits-chikki-product.webp',
  galleryImages: [
    '/dry-fruits-chikki/dry-fruits-chikki-product.webp',
    '/dry-fruits-chikki/dry-fruits-chikki-ingredients.webp',
    '/dry-fruits-chikki/dry-fruits-chikki-banner.webp',
    '/images/hero-dry-fruits-chikki.webp',
    '/images/dry-fruits-chikki-banner.webp',
    '/images/dry-fruits-chikki.webp',
    'https://bhagvatprasadam.com/cdn/shop/files/ChatGPT_Image_Jun_27_2026_11_25_38_AM.webp?v=1786190575',
  ],
  videoUrl: '',
};
