export interface SiteConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  siteUrl: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    region: string;
    full: string;
  };
  announcement: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    whatsapp: string;
  };
  apps: {
    playStore: string;
    appStore: string;
    appName: string;
  };
  offers: {
    freeShippingAbove: string;
    firstOrderFreeShippingAbove: string;
    appDiscount: string;
  };
  businessHours: string;
  originYear: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'Dry Fruits Chikki',
  tagline: 'Authentic Gujarati Dry Fruits Chikki & Dates Nutritional Punch',
  subTagline: 'Wholesome, crunchy, and naturally sweet, handcrafted with premium nuts, dates, and pure ghee by Bhagvat Prasadam.',
  siteUrl: 'https://dryfruitschikki.in',
  phone: '+918850011652',
  displayPhone: '+91 88500 11652',
  whatsappNumber: '918850011652',
  email: 'info@megascale.in',
  address: {
    street: '411-412, New Escon Plaza, Chhaprabhatha Road, Amroli',
    city: 'Surat',
    state: 'Gujarat',
    postalCode: '394107',
    country: 'India',
    region: 'Western India',
    full: '411-412, New Escon Plaza, Chhaprabhatha Road, Amroli, Surat, Gujarat - 394107',
  },
  announcement: 'Authentic Gujarati Dry Fruits Chikki (Dry Fruit Punch - Dates) • Pure Nutritional Punch • Pan India Delivery',
  socials: {
    instagram: 'https://www.instagram.com/_megascale_?igsh=c2NzYTV2eDQ3M3Uw',
    facebook: 'https://www.facebook.com/megascale.surat.96',
    youtube: 'https://youtube.com/@dryfruitschikki_gujarat',
    whatsapp: 'https://wa.me/918850011652',
  },
  apps: {
    playStore: 'https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share',
    appStore: 'https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354',
    appName: 'Bhagvat Prasadam',
  },
  offers: {
    freeShippingAbove: '₹999',
    firstOrderFreeShippingAbove: '₹599',
    appDiscount: '2% EXTRA OFF',
  },
  businessHours: 'Mon to Sun: 9:00 AM to 9:00 PM IST',
  originYear: '1974',
};
