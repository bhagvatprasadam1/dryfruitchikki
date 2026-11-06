import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "../common/Button";

export const ProductIntro: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="what-is-dry-fruits-chikki">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HERITAGE & ESSENCE"
          title="What Is Dry Fruits Chikki (Dry Fruit Punch)?"
          subtitle="A wholesome traditional Gujarati sweet and natural nutritional powerhouse born from whole dates and roasted nuts."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-gold/30 bg-white">
              <img
                src="/images/dry-fruits-chikki.webp"
                alt="Close-up of authentic Gujarati Dry Fruits Chikki showing dense roasted nuts bound in succulent dates"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            {/* Cultural caption */}
            <div className="mt-4 p-4 rounded-xl bg-light-beige/70 border border-gold/30 text-xs sm:text-sm text-deep-brown">
              <span className="font-semibold block font-serif text-primary flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary fill-primary" />
                Natural Energy & Sacred Purity:
              </span>
              <span>
                Inspired by the sanctified prasad traditions of Nilkanthdham Poicha, combining wholesome nutrition with time-honored Gujarati craftsmanship.
              </span>
            </div>
          </div>

          {/* Detailed SEO Storytelling */}
          <div className="lg:col-span-6 space-y-6 text-muted-text text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-deep-brown font-serif">Dry Fruits Chikki</strong>{" "}
              (often known as <strong className="text-deep-brown">Dry Fruit Punch</strong> or <strong className="text-deep-brown">Khajur Pak</strong>) is an iconic, guilt-free traditional confection handcrafted across Gujarat. Celebrated as a daily nutritional powerhouse and festive luxury, it brings together the ancient ayurvedic wisdom of combining wholesome dates with nutrient-packed nuts.
            </p>
            <p>
              Unlike conventional hard-brittle chikkis made with heavy jaggery or sugar syrups, our dates-based Dry Fruit Punch has a satisfyingly soft, fudgy bite interspersed with a copious abundance of whole California almonds, crisp cashews, and vibrant green pistachios. Slow-simmered in pure cow ghee and fragrant cardamom, every slice delivers natural vitality and steady, long-lasting energy.
            </p>

            <div className="space-y-3 pt-2 text-sm text-dark-text">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  100% naturally sweetened with whole Arabian dates — zero refined sugar or syrups
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  Rich in iron, plant proteins, dietary fiber, and healthy antioxidant fats
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  Gently roasted in pure desi cow ghee and infused with green cardamom & nutmeg
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Button
                to="/ingredients"
                variant="primary"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View Wholesome Ingredients
              </Button>
              <Button
                to="/about"
                variant="outline"
              >
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
