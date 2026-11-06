export interface IngredientItem {
  id: string;
  name: string;
  gujaratiName: string;
  category: string;
  shortDesc: string;
  detailedRole: string;
  sourcing: string;
}

export const ingredientsData: IngredientItem[] = [
  {
    id: 'dates',
    name: 'Arabian Whole Dates (Khajur)',
    gujaratiName: 'પ્રીમિયમ ખજૂર (ખારેક)',
    category: 'The Natural Sweetener & Binder',
    shortDesc: 'Succulent, naturally sweet black dates slow-simmered into a lush, caramelised base.',
    detailedRole: 'Acts as the 100% natural binder and unrefined sweetener in place of white sugar or heavy syrup. Rich in iron, fiber, and natural minerals, providing the signature chewy, fudgy body.',
    sourcing: 'Hand-sorted, premium seeded black dates selected for moisture balance and deep honeyed flavor.',
  },
  {
    id: 'almonds',
    name: 'California Almonds (Badam)',
    gujaratiName: 'કેલિફોર્નિયા બદામ',
    category: 'The Nutty Foundation',
    shortDesc: 'Crisp, nutrient-dense whole almonds lightly roasted in pure cow ghee.',
    detailedRole: 'Adds a hearty, clean snap and roasted nuttiness in every bite. Loaded with plant-based protein, dietary fiber, and healthy Vitamin E.',
    sourcing: 'Grade-A whole California nonpareil almonds roasted in small artisanal batches.',
  },
  {
    id: 'cashews',
    name: 'Crunchy Whole Cashews (Kaju)',
    gujaratiName: 'સફેદ કાજુ',
    category: 'Velvety Richness',
    shortDesc: 'Creamy, golden-roasted cashew nuts adding smooth buttery depth.',
    detailedRole: 'Provides a luscious richness and melts gently on the tongue while balancing the chewy texture of dates with a delicate sweetness.',
    sourcing: 'Finest whole W320 cashews sustainably harvested from premier western coastal orchards.',
  },
  {
    id: 'pistachios',
    name: 'Vibrant Green Pistachios (Pista)',
    gujaratiName: 'લીલી પિસ્તા',
    category: 'Royal Essence & Color',
    shortDesc: 'Vivid green slivered pistachios providing visual elegance and subtle floral nuttiness.',
    detailedRole: 'Enhances the visual mosaic of the chikki slices while delivering high levels of antioxidants, lutein, and potassium.',
    sourcing: 'Carefully sorted, sun-dried green kernel pistachios.',
  },
  {
    id: 'ghee',
    name: 'Pure Desi Cow Ghee',
    gujaratiName: 'શુદ્ધ દેશી ગાયનું ઘી',
    category: 'The Soul of Roasting',
    shortDesc: 'Slow-simmered golden clarified butter cooked slowly to release deep nutty notes.',
    detailedRole: 'Gently roasts the whole nuts to their peak aromatic crunch and softens the date pulp, ensuring long shelf life without synthetic preservatives.',
    sourcing: 'Pure cow milk fat prepared through time-honored traditional churning methods.',
  },
  {
    id: 'cardamom',
    name: 'Stone-Pounded Green Cardamom (Elaichi)',
    gujaratiName: 'લીલી ઈલાયચી',
    category: 'Aromatic Harmony',
    shortDesc: 'Freshly de-seeded green cardamom pods ground into fragrant aromatic powder.',
    detailedRole: 'Cuts through the dense richness of nuts and dates with a refreshing, citrusy sweet spice lift that defines authentic Gujarati celebratory confectionery.',
    sourcing: 'Hand-picked green cardamom pods from the hills of the Western Ghats.',
  },
];
