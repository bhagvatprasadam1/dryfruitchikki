import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { WhatsAppButton } from "../common/WhatsAppButton";
import { Gift, Check, ExternalLink } from "lucide-react";
import { dryFruitsChikkiProduct } from "../../data/products";

export const GiftingTeaser: React.FC = () => {
  const occasions = [
    "Diwali & Bestu Varas",
    "Weddings & Favors",
    "Raksha Bandhan",
    "Janmashtami Offering",
    "Puja & Housewarming",
    "Corporate Gifting",
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="gifting-teaser">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CELEBRATIONS & GIFTS"
          title="Made For Sweet Moments"
          subtitle="Packaged in rigid keepsake gift boxes with gold foil embossing, our Dry Fruits Chikki (Dry Fruit Punch - Dates) makes a memorable and healthy impression for life's most meaningful celebrations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-gold/40 bg-white">
              <img
                src="/dry-fruits-chikki/dry-fruits-chikki-product.webp"
                alt="Luxury premium festive presentation of authentic Gujarati Dry Fruits Chikki sweets on antique brass platter"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="mt-3 text-center text-xs text-muted-text italic">
              Premium rigid drawer box with food-grade airtight seal
            </div>
          </div>

          {/* Details & Occasions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-primary font-serif font-bold text-xl">
              <Gift className="w-5 h-5 text-gold" />
              <span>The Quintessential Healthy Celebration Gift</span>
            </div>

            <p className="text-muted-text text-base sm:text-lg leading-relaxed">
              Move beyond generic chocolates and overly sweet confectionery. Gifting
              authentic, freshly handcrafted Dry Fruits Chikki honors your recipients
              with the wholesome goodness of pure cow ghee, whole dates, crunchy California
              almonds, cashews, and traditional artistry.
            </p>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-3">
                Celebrated Across Auspicious Occasions:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {occasions.map((occ, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-light-beige text-xs font-medium text-dark-text"
                  >
                    <Check className="w-3.5 h-3.5 text-muted-green flex-shrink-0" />
                    <span className="truncate">{occ}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <WhatsAppButton context="gifting" size="md">
                Enquire About Gifting
              </WhatsAppButton>

              <a
                href={dryFruitsChikkiProduct.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
              >
                <span>Order on Bhagvat Prasadam</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingTeaser;
