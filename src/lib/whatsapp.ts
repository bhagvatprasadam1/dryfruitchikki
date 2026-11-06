import { siteConfig } from '../data/siteConfig';

export type WhatsAppContext = 'general' | 'hero' | 'product' | 'product_weight' | 'gifting' | 'bulk' | 'contact';

export interface WhatsAppOptions {
  context?: WhatsAppContext;
  weight?: string;
  customMessage?: string;
}

export function getWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const phone = siteConfig.whatsappNumber;
  let message = 'Hello! I would like to know more about your authentic Gujarati Dry Fruits Chikki (Dry Fruit Punch - Dates).';

  if (options.customMessage) {
    message = options.customMessage;
  } else if (options.context === 'hero') {
    message = 'Hello! I would like to enquire about ordering your authentic Dry Fruits Chikki (Dates Nutritional Punch).';
  } else if (options.context === 'product') {
    message = 'Hello! I am interested in your Traditional Gujarati Dry Fruits Chikki (Dry Fruit Punch - Dates). Please share pricing and dispatch availability.';
  } else if (options.context === 'product_weight') {
    message = `Hello! I am interested in ordering the ${options.weight || '500g'} pack of your Traditional Gujarati Dry Fruits Chikki (Nutritional Punch). Please share pricing and delivery details.`;
  } else if (options.context === 'gifting') {
    message = 'Hello! I am interested in Dry Fruits Chikki festive gift boxes for an upcoming celebration. Please share gift box options.';
  } else if (options.context === 'bulk') {
    message = 'Hello! I am looking to place a bulk Dry Fruits Chikki order for a corporate event / wedding celebration. Please share details.';
  } else if (options.context === 'contact') {
    message = 'Hello! I would like to enquire about your Dry Fruits Chikki sweets from Bhagvat Prasadam.';
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
