export interface FAQItem {
  id: string;
  category: 'Product' | 'Ingredients' | 'Preparation' | 'Storage' | 'Delivery' | 'Gifting' | 'Bulk Orders';
  question: string;
  answer: string;
  featuredOnHome?: boolean;
}

export const faqsData: FAQItem[] = [
  {
    id: 'what-is-dry-fruits-chikki',
    category: 'Product',
    question: 'What is Dry Fruits Chikki (Dry Fruit Punch - Dates)?',
    answer: 'Dry Fruits Chikki, also celebrated as "Dry Fruit Punch" or "Khajur Pak", is a premium, traditional Gujarati sweet and natural nutritional punch. Handcrafted with an abundance of whole California almonds, crunchy cashews, and rich pistachios bound together by slow-simmered Arabian dates and pure cow ghee, it delivers a dense, chewy-yet-crunchy texture packed with natural vitamins, minerals, and healthy fats.',
    featuredOnHome: true,
  },
  {
    id: 'is-it-sugar-free',
    category: 'Ingredients',
    question: 'Does Dry Fruits Chikki contain refined white sugar?',
    answer: 'No! Our Dry Fruits Chikki relies entirely on the natural, unrefined sweetness of whole nutrient-dense dates (Khajur). There are zero added refined white sugars, artificial syrups, or synthetic sweeteners, making it a wholesome and guilt-free treat for all age groups.',
    featuredOnHome: true,
  },
  {
    id: 'what-ingredients-used',
    category: 'Ingredients',
    question: 'What ingredients are used in this Nutritional Punch?',
    answer: 'We use 100% natural and premium ingredients: Arabian whole black dates, California almonds (badam), whole cashews (kaju), vibrant green pistachios (pista), pure cow ghee, stone-ground green cardamom (elaichi), and a pinch of nutmeg for warmth and aroma. No artificial essences, colors, or chemical preservatives are ever added.',
    featuredOnHome: true,
  },
  {
    id: 'does-it-contain-ghee',
    category: 'Ingredients',
    question: 'Does it contain pure cow ghee?',
    answer: 'Yes! Slow-simmered pure cow ghee is used to gently roast the nuts and soften the dates. This enhances the nutty aroma, tenderizes the texture, and provides essential fat-soluble nutrients while naturally preserving freshness.',
    featuredOnHome: false,
  },
  {
    id: 'taste-and-texture',
    category: 'Product',
    question: 'What does Dry Fruits Chikki taste like?',
    answer: 'It has an irresistible deep, nutty sweetness balanced with the earthy warmth of slow-cooked dates and the delicate fragrance of green cardamom. The texture is soft, chewy, and fudgy, studded generously with the hearty crunch of slow-roasted almonds, cashews, and pistachios in every single bite.',
    featuredOnHome: true,
  },
  {
    id: 'shelf-life-and-storage',
    category: 'Storage',
    question: 'What is the shelf life and how should it be stored?',
    answer: 'Dry Fruits Chikki has a natural shelf life of up to 35 days at ambient room temperature, thanks to the natural low-moisture profile of dates, dry fruits, and pure ghee. Store it in a cool, dry place away from direct heat and moisture. Once opened, keep it sealed in an airtight container.',
    featuredOnHome: true,
  },
  {
    id: 'health-and-energy-benefits',
    category: 'Product',
    question: 'Why is it called a "Nutritional Punch"?',
    answer: 'Dates and dry fruits are renowned as nature’s powerhouses. Packed with dietary fiber, plant-based proteins, natural iron, potassium, magnesium, and essential antioxidants, a single slice provides sustained stamina and mental focus, making it a great pre/post workout energy bite and healthy snack for kids and elders.',
    featuredOnHome: true,
  },
  {
    id: 'festivals-and-gifting',
    category: 'Gifting',
    question: 'Can I order Dry Fruits Chikki for Diwali and festive gifting?',
    answer: 'Yes! Dry Fruits Chikki is one of our most popular festive gift items for Diwali, New Year, weddings, and sacred temple offerings. We offer premium gold-embossed keepsake boxes in 250g, 500g, and 1kg sizes that make an impressive and healthy royal gift.',
    featuredOnHome: false,
  },
  {
    id: 'pan-india-delivery',
    category: 'Delivery',
    question: 'Do you deliver across India?',
    answer: 'Yes, we provide express pan-India delivery. Every box is hygienically vacuum-sealed to maintain peak freshness and crunch during transit, arriving at your doorstep in pristine condition.',
    featuredOnHome: true,
  },
  {
    id: 'diabetic-suitability',
    category: 'Product',
    question: 'Can diabetics and health-conscious individuals eat Dry Fruits Chikki?',
    answer: 'Our Dry Fruits Chikki contains zero added refined white sugar, zero glucose syrup, and zero artificial sweeteners. It is naturally sweetened exclusively with whole Arabian dates, which have a lower glycemic index than refined sugar and are rich in dietary fiber that slows sugar absorption. While it is a far healthier alternative to conventional mithai, diabetic individuals should still consume it in moderation as part of their doctor-advised daily carbohydrate allowance.',
    featuredOnHome: true,
  },
  {
    id: 'difference-from-market-chikki',
    category: 'Product',
    question: 'How is Bhagvat Prasadam Dry Fruits Chikki different from supermarket chikki?',
    answer: 'Standard market chikki is typically made with low-cost peanuts, puffed grains, and heavy industrial liquid glucose or palm oil. Bhagvat Prasadam Dry Fruits Chikki is a true luxury sweet (often called "Dry Fruit Punch" or "Khajur Pak") crafted with 100% pure cow ghee, whole Arabian dates, California almonds, cashews, and green pistachios with zero artificial preservatives or dalda.',
    featuredOnHome: true,
  },
  {
    id: 'pregnancy-and-new-mothers',
    category: 'Product',
    question: 'Is Dry Fruits Chikki beneficial for pregnant women and new mothers?',
    answer: 'Yes! In traditional Gujarati ayurvedic cooking, dates and roasted nuts cooked in pure cow ghee are celebrated as a natural vitality booster for expecting and nursing mothers. Rich in natural iron (to support healthy hemoglobin), calcium, magnesium, and dietary fiber, it provides gentle nourishment and sustained energy during recovery and daily life.',
    featuredOnHome: false,
  },
  {
    id: 'fitness-and-workout-snack',
    category: 'Product',
    question: 'Can I use this Dry Fruit Punch as a gym workout or fitness energy bar?',
    answer: 'Absolutely. A single slice provides approx. 120–150 calories of pure, clean energy powered by natural complex carbohydrates from dates and 9.8g plant-based protein per 100g from almonds and cashews. It makes an ideal clean pre-workout fuel or post-workout recovery snack without synthetic protein powders or artificial fillers.',
    featuredOnHome: false,
  },
  {
    id: 'bulk-orders',
    category: 'Bulk Orders',
    question: 'Do you accept corporate and bulk orders?',
    answer: 'Yes, we regularly cater to corporate gifting hampers, wedding favor boxes, and festive bulk orders with custom branding sleeves and prioritized courier scheduling. You can connect with our team via WhatsApp or call for bulk quotes.',
    featuredOnHome: false,
  },
];
