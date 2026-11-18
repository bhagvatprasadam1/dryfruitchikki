import React from 'react';
import { Check, X, Award } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const MarketComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Primary Sweetener',
      ourSweet: '100% Nutrient-Dense Arabian Dates (Khajur)',
      marketSweet: 'Industrial Liquid Glucose, Corn Syrup or Refined White Sugar',
      ourHighlight: true,
    },
    {
      feature: 'Nuts & Dry Fruits Ratio',
      ourSweet: 'Abundant Whole California Almonds, Cashews & Emerald Pistachios',
      marketSweet: 'Low-cost Peanuts (Singdana), Nut Fragments or Puffed Fillers',
      ourHighlight: true,
    },
    {
      feature: 'Fat & Cooking Medium',
      ourSweet: '100% Pure Clarified Cow Ghee (Desi Ghee)',
      marketSweet: 'Dalda, Hydrogenated Fats or Industrial Palm Oil',
      ourHighlight: true,
    },
    {
      feature: 'Artificial Additives & Shelf Preservatives',
      ourSweet: 'Zero Chemical Preservatives, Zero Artificial Essences or Sulfur',
      marketSweet: 'Synthetic Flavors, Stabilizers, Chemical Colors & Emulsifiers',
      ourHighlight: true,
    },
    {
      feature: 'Kitchen Sanctity & Purity',
      ourSweet: '100% Satvik Devotional Preparation by Bhagvat Prasadam',
      marketSweet: 'Mass Commercial Automated Factory Production',
      ourHighlight: true,
    },
    {
      feature: 'Digestive & Energy Impact',
      ourSweet: 'Sustained Clean Vitality with High Natural Fiber & Plant Protein',
      marketSweet: 'Rapid Blood Sugar Spikes & Sluggish Heavy After-Feel',
      ourHighlight: true,
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-cream" id="market-comparison">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="UNCOMPROMISED EXCELLENCE"
          title="Why Bhagvat Prasadam Stands Apart"
          subtitle="Not all chikki is created equal. Discover why our authentic Dry Fruit Punch (Dates) represents the highest echelon of purity and craftsmanship."
        />

        <div className="bg-white rounded-3xl border border-light-beige overflow-hidden">
          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-light-beige">
                  <th className="py-4 sm:py-5 px-6 font-jost text-xs uppercase tracking-[0.2em] text-muted-text font-bold w-1/3">
                    Quality Benchmark
                  </th>
                  <th className="py-4 sm:py-5 px-6 bg-primary/5 border-x border-primary/20 text-primary font-serif text-base sm:text-lg font-bold w-1/3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-gold flex-shrink-0" />
                      <span>Bhagvat Prasadam Dry Fruits Chikki</span>
                    </div>
                  </th>
                  <th className="py-4 sm:py-5 px-6 font-serif text-base sm:text-lg text-muted-text/80 font-normal w-1/3">
                    Commercial Supermarket Chikki
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-beige/70 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-deep-brown">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-primary/[0.02] border-x border-primary/10 font-medium text-dark-text">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-muted-green flex-shrink-0 mt-0.5" />
                        <span>{row.ourSweet}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-muted-text">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{row.marketSweet}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

