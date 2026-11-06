import React from 'react';
import { ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';

export interface NutritionFact {
  nutrient: string;
  amount: string;
  dailyValue?: string;
  benefit: string;
}

export const nutritionFacts: NutritionFact[] = [
  {
    nutrient: 'Energy / Calories',
    amount: '465 kcal',
    dailyValue: '23%',
    benefit: 'Sustained natural endurance from whole dates & dry fruits',
  },
  {
    nutrient: 'Plant Protein',
    amount: '9.8 g',
    dailyValue: '20%',
    benefit: 'Clean muscle recovery from roasted almonds & cashews',
  },
  {
    nutrient: 'Dietary Fiber',
    amount: '7.2 g',
    dailyValue: '26%',
    benefit: 'Supports healthy digestion & steady glucose absorption',
  },
  {
    nutrient: 'Added Refined Sugar',
    amount: '0.0 g',
    dailyValue: '0%',
    benefit: '100% guilt-free; zero white sugar, corn syrup, or chemicals',
  },
  {
    nutrient: 'Natural Fruit Carbs',
    amount: '52.0 g',
    dailyValue: '17%',
    benefit: 'Unrefined, wholesome carbohydrates naturally packed in Arabian dates',
  },
  {
    nutrient: 'Healthy Dietary Fats',
    amount: '24.5 g',
    dailyValue: '31%',
    benefit: 'Cardio-friendly unsaturated fats & pure desi cow ghee',
  },
  {
    nutrient: 'Natural Iron',
    amount: '3.4 mg',
    dailyValue: '24%',
    benefit: 'Essential for hemoglobin formation & combating everyday fatigue',
  },
  {
    nutrient: 'Calcium & Magnesium',
    amount: '110 mg',
    dailyValue: '15%',
    benefit: 'Fortifies bone density, mental calm & muscular endurance',
  },
];

export const NutritionTable: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10" id="nutrition-facts">
      <div className="bg-white rounded-3xl border border-light-beige p-6 sm:p-10 lg:p-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-light-beige">
          <div className="space-y-2">
            <span className="font-jost text-gold font-bold text-xs uppercase tracking-[0.22em] flex items-center gap-2">
              <span className="inline-block w-3 h-0.5 bg-gold/70"></span>
              CERTIFIED WHOLESOME LAB ANALYSIS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-deep-brown font-normal leading-tight">
              Nutritional Facts & Natural Health Profile
            </h3>
            <p className="text-muted-text text-sm sm:text-base max-w-2xl leading-relaxed">
              Serving Size: 100g (Approx. 3-4 slices). Every nutrient is 100% naturally derived from whole Arabian dates, California almonds, cashews, pistachios, and pure cow ghee.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-muted-green/10 text-muted-green text-xs font-bold border border-muted-green/20 self-start md:self-end">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>0% Added White Sugar • 100% Natural</span>
          </div>
        </div>

        {/* Nutrition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {nutritionFacts.map((item, idx) => (
            <div
              key={idx}
              className="bg-cream/60 rounded-2xl p-4 sm:p-5 border border-light-beige hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-text font-medium mb-1.5">
                  <span>{item.nutrient}</span>
                  {item.dailyValue && (
                    <span className="text-[10px] font-bold text-gold uppercase px-1.5 py-0.5 rounded bg-white border border-light-beige">
                      {item.dailyValue} DV
                    </span>
                  )}
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-deep-brown mb-2 tracking-tight">
                  {item.amount}
                </div>
              </div>
              <p className="text-xs text-muted-text leading-relaxed border-t border-light-beige/70 pt-2.5">
                {item.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote Trust Badge */}
        <div className="mt-8 pt-5 border-t border-light-beige/70 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-text">
          <div className="flex items-center gap-4 flex-wrap font-medium">
            <span className="flex items-center gap-1.5 text-deep-brown">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              Preservative-Free
            </span>
            <span className="flex items-center gap-1.5 text-deep-brown">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              Naturally Gluten-Free
            </span>
            <span className="flex items-center gap-1.5 text-deep-brown">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              Rich in Plant Antioxidants
            </span>
            <span className="flex items-center gap-1.5 text-deep-brown">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              Pure Vegetarian (Satvik)
            </span>
          </div>
          <div className="text-[11px] text-muted-text/80 italic">
            *Percent Daily Values (DV) are based on a 2,000 calorie diet.
          </div>
        </div>

      </div>
    </section>
  );
};

