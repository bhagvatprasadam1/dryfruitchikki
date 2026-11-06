import React from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import { getBreadcrumbSchema } from "../lib/seo";
import { SectionHeading } from "../components/common/SectionHeading";
import { Button } from "../components/common/Button";
import { ArrowRight, Heart, Award, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Our Story", path: "/about" },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        canonicalPath={seoData.about.canonicalPath}
        ogImage={seoData.about.ogImage}
        schema={schemas}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Our Story</span>
        </nav>

        {/* Master Our Story Hero Banner */}
        <div className="mb-8 sm:mb-10 lg:mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-light-beige bg-cream-card">
          <img
            src="/dry-fruits-chikki/dry-fruits-chikki-about.webp"
            alt="Our Story • A Legacy of Tradition, Crafted with Love"
            width="1024"
            height="409"
            className="w-full h-auto block select-none"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="font-jost text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-primary flex items-center justify-center gap-2 mb-3">
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
            ANCESTRAL CRAFTSMANSHIP & HEALTH
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-deep-brown font-normal tracking-tight leading-tight">
            Preserving Purity & Wholesome Tradition
          </h1>
          <p className="mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            In an era of industrial sweets loaded with refined sugars and
            artificial additives, we safeguard the sanctified Gujarati tradition
            of authentic Dry Fruits Chikki (Dry Fruit Punch - Dates) by Bhagvat
            Prasadam.
          </p>
        </div>

        {/* Narrative Block 1: The Origin */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-light-beige mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-gold fill-gold" />
                THE ROOTS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-deep-brown font-bold">
                Why We Champion Dry Fruits Chikki (Nutritional Punch)
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Most modern sweets are overloaded with processed white sugar,
                corn syrups, and synthetic essences. In the process, the ancient
                ayurvedic wisdom of nutrient-dense dates and roasted dry fruits
                was often forgotten.
              </p>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Inspired by the sanctified prasad traditions of Nilkanthdham
                Poicha, we dedicated our craft to creating the ultimate
                guilt-free delicacy: slow-roasted California almonds, whole
                cashews, and pistachios in pure cow ghee, bound naturally with
                rich Arabian dates. Zero refined sugar, 100% natural energy.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-gold/40">
                <img
                  src="/images/dry-fruits-chikki.webp"
                  alt="Ancestral Gujarati Dry Fruits Chikki craftsmanship by Bhagvat Prasadam"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Three Guiding Philosophies */}
        <div className="mb-8 sm:mb-10 lg:mb-12" id="philosophy">
          <SectionHeading
            eyebrow="OUR FOUNDING PILLARS"
            title="The Philosophy of Craftsmanship"
            subtitle="The uncompromising standards that guide every single batch we prepare."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Ingredient Sanctity
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  Pure desi cow ghee, whole Arabian dates, California almonds,
                  cashews, pistachios, and fresh cardamom. Never any dalda, palm
                  oil, refined white sugar, or chemical preservatives.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Patience Over Scale
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  Slow-roasting whole dry fruits and tenderizing dates over
                  gentle heat requires meticulous patience. We never rush heat,
                  ensuring each nut achieves its peak aromatic crunch and
                  maximum nutrient retention.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-light-beige text-primary flex items-center justify-center mb-4 sm:mb-5 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown mb-2 sm:mb-2.5">
                  Small-Batch Freshness
                </h3>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  We prepare our sweets fresh in limited satvik batches. Every
                  slab is hand-rolled, naturally cooled, precision sliced into
                  bite-sized pieces, and hygienically sealed for express
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Heritage Grid: 2 columns on all devices */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/40 bg-white">
            <img
              src="/dry-fruits-chikki/dry-fruits-chikki-banner.webp"
              alt="Festive Gujarati Dry Fruits Chikki gift box with Diwali lamps and marigolds"
              className="w-full h-44 sm:h-72 lg:h-80 object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/40 bg-white">
            <img
              src="/images/dry-fruits-chikki.webp"
              alt="Artisanal Dry Fruits Chikki slices with dates, almonds, cashews, and pistachios"
              className="w-full h-44 sm:h-72 lg:h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Modern Presentation & D2C Quality */}
        <div className="bg-deep-brown text-cream rounded-3xl p-8 sm:p-12 border border-gold/40 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-gold font-bold text-xs uppercase tracking-widest">
              HERITAGE MEETS MODERN WELLNESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Bringing Pure Gujarati Sweetness to Modern Tables
            </h2>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed">
              While our recipe draws from sacred Gujarati culinary heritage, our
              packaging is designed for modern celebrations and wellness
              lifestyles. Sealed in airtight gold-foiled keepsake boxes, our Dry
              Fruits Chikki reaches homes and corporate tables across India with
              unmatched freshness and pure ghee aroma.
            </p>
            <div className="pt-4">
              <Button
                to="/"
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Experience Our Dry Fruits Chikki
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
