import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Award, Heart, Zap, CheckCircle, PackageCheck, Flame } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: '100% Natural Dates Sweetener',
      description: 'Sweetened solely with nutrient-dense Arabian black dates. Zero added white sugar, artificial syrups, or synthetic sweeteners.',
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Abundant Whole Premium Nuts',
      description: 'Copious quantities of whole California almonds, crunchy cashews, and vibrant pistachios in every single slice.',
    },
    {
      icon: <Flame className="w-6 h-6 text-primary" />,
      title: 'Pure Cow Ghee Roasting',
      description: 'Slow-simmered in pure desi cow ghee to gently toast the nuts to aromatic crispness and tenderize the date matrix.',
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'True Nutritional Powerhouse',
      description: 'Loaded with natural iron, dietary fiber, plant-based protein, and essential minerals for sustained all-day stamina.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: 'Sacred Satvik Preparation',
      description: 'Handcrafted fresh in small batches inspired by Nilkanthdham Poicha traditions with zero preservatives or chemical additives.',
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-primary" />,
      title: 'Luxury Keepsake Packaging',
      description: 'Airtight food-grade sealed pouches housed in regal gold-embossed keepsake boxes designed for freshness and festive gifting.',
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="why-choose-us">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DISTINCTIVE EXCELLENCE"
          title="Why Choose Our Dry Fruits Chikki?"
          subtitle="Every bite embodies devotion to pure satvik nutrition, authentic Gujarati tradition, and uncompromised quality."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {reasons.map((item, index) => (
            <Card key={index} className="!p-3.5 sm:!p-6 lg:!p-7 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-light-beige flex items-center justify-center mb-3 sm:mb-4 border border-gold/30 text-primary [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-lg lg:text-xl text-deep-brown mb-1 sm:mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-text text-xs sm:text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
