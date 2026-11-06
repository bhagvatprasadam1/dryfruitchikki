export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  gujaratiTitle: string;
  summary: string;
  details: string;
  duration: string;
  craftSecret: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    number: 'Step 01',
    title: 'Date Selection & Hand De-seeding',
    gujaratiTitle: 'ખજૂર વીણીને બી કાઢવા',
    summary: 'Meticulously hand-cleaning and de-seeding premium Arabian black dates.',
    details: 'Each date is individually checked for plumpness and moisture before the pit is removed by hand. The flesh is then gently chopped to ensure even softening during the cooking stage.',
    duration: '30 mins',
    craftSecret: 'Choosing naturally moist dates eliminates any need for artificial syrups or refined sugars.',
  },
  {
    step: '02',
    number: 'Step 02',
    title: 'Slow Pure Ghee Nut Roasting',
    gujaratiTitle: 'શુદ્ધ ઘીમાં ડ્રાયફ્રૂટ્સ શેકવા',
    summary: 'Roasting whole almonds, cashews, and pistachios in pure cow ghee.',
    details: 'The premium dry fruits are gently toasted in heavy-bottomed brass pans over low heat until they turn pale golden and release an irresistible nutty aroma.',
    duration: '25 mins',
    craftSecret: 'Gentle, even heat toasts the core of each nut without scorching the outer skin, keeping the crunch intact for weeks.',
  },
  {
    step: '03',
    number: 'Step 03',
    title: 'Warming Date Pulp Reduction',
    gujaratiTitle: 'ધીમા તાપે ખજૂર પકવવો',
    summary: 'Softening the dates in pure ghee to create a thick, glossy caramelised paste.',
    details: 'The chopped dates are transferred to the warm ghee kadai and stirred continuously until they break down into a glossy, fragrant, naturally sweet paste.',
    duration: '20 mins',
    craftSecret: 'Careful temperature management prevents the natural date sugars from scorching or caramelizing excessively.',
  },
  {
    step: '04',
    number: 'Step 04',
    title: 'The Nut & Date Fusion',
    gujaratiTitle: 'ડ્રાયફ્રૂટ અને ખજૂરનું મિશ્રણ',
    summary: 'Folding the roasted golden nuts into the warm date mixture.',
    details: 'The crisp almonds, cashews, and pistachios are folded into the luscious date reduction while still warm, ensuring that every single nut is coated in the natural date binder.',
    duration: '15 mins',
    craftSecret: 'A high nut-to-date ratio is maintained so that every bite is dense with crunch and protein.',
  },
  {
    step: '05',
    number: 'Step 05',
    title: 'Cardamom & Spice Infusion',
    gujaratiTitle: 'ઈલાયચી અને જાયફળ મિશ્રણ',
    summary: 'Stone-crushed green cardamom and fresh nutmeg folded into the warm mixture.',
    details: 'Freshly ground green cardamom and a hint of nutmeg are folded into the dough, filling the sweet with an exquisite royal aroma that balances the rich ghee.',
    duration: '10 mins',
    craftSecret: 'Spices are added at the very end of cooking to lock in their delicate volatile oils and aroma.',
  },
  {
    step: '06',
    number: 'Step 06',
    title: 'Artisanal Rolling, Cooling & Slicing',
    gujaratiTitle: 'રોલ કરીને ચોરસ સ્લાઇસ બનાવવી',
    summary: 'Hand-rolling into compact logs, natural resting, and precision slicing.',
    details: 'The warm mixture is transferred onto granite slabs, hand-rolled into uniform slabs or logs, allowed to cool naturally, and precision-cut into bite-sized slices revealing a stunning dry fruit mosaic.',
    duration: '60 mins',
    craftSecret: 'Patience during cooling ensures clean cut edges and prevents the nuts from separating from the date matrix.',
  },
];
