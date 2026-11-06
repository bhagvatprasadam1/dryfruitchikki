import React from "react";
import { motion } from "framer-motion";
import { Star, Truck, ShieldCheck, Zap, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { dryFruitsChikkiProduct } from "../../data/products";
import { WhatsAppButton } from "../common/WhatsAppButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-3 sm:pt-5 lg:pt-6 pb-6 sm:pb-8 lg:pb-9 flex items-center">
      <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Column: Focused SEO Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-3 sm:space-y-4 text-center lg:text-left flex flex-col justify-center"
          >
            {/* Elegant Text Kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 font-jost text-xs sm:text-sm font-bold tracking-[0.22em] text-gold-dark uppercase">
              <span className="w-6 h-px bg-gold/60" />
              <span>100% Natural • Dates & Nuts Nutritional Punch</span>
            </div>

            {/* Primary SEO Heading */}
            <div className="space-y-1">
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-deep-brown font-normal tracking-tight leading-[1.15]">
                Traditional{" "}
                <span className="block text-primary italic font-serif">
                  Dry Fruits Chikki
                </span>
              </h1>
              <p className="font-serif italic text-gold-dark text-xs sm:text-sm tracking-wide">
                Natural • Nutritious • Delicious • Premium Gujarati Sweet
              </p>
            </div>

            {/* High-Impact SEO Description */}
            <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Wholesome <strong className="text-deep-brown font-semibold">"Khajur Nutritional Punch"</strong> handcrafted with rich dates, slow-roasted California almonds, crunchy cashews, pistachios, and walnuts in pure cow ghee. Zero added sugar, 100% pure natural vitality.
            </p>

            {/* Clean Keyword Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-deep-brown pt-0.5">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                100% Pure Cow Ghee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-gold fill-gold" />
                Naturally Sweetened with Dates
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Almonds, Cashews, Pista & Walnuts
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Zero Added Sugar & Preservatives
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <WhatsAppButton
                context="hero"
                size="md"
                className="w-full sm:w-auto font-semibold justify-center"
              >
                Order on WhatsApp
              </WhatsAppButton>

              <a
                href={dryFruitsChikkiProduct.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <span>Buy on Bhagvat Prasadam</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={dryFruitsChikkiProduct.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-bold hover:underline py-1 sm:py-0 inline-flex items-center gap-1"
              >
                <span>View 250g, 500g & 1kg Packs</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Reassurance & Social Proof */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-xs text-muted-text">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-deep-brown">4.9/5 Rating</span>
                <span>(1,400+ Reviews)</span>
              </div>
              <span className="hidden sm:inline text-gold/60">•</span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-primary" />
                Pan India Express Delivery
              </span>
            </div>
          </motion.div>

          {/* Right Column: Magnified, Full-Scale Showcase Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            <div className="w-full flex items-center justify-center relative">
              <img
                src="/images/hero-dry-fruits-chikki.webp"
                alt="Traditional Gujarati Dry Fruits Chikki served on an antique brass thali with the signature gift box, dates, almonds, cashews, and walnuts"
                className="w-full h-auto max-w-[320px] sm:max-w-md lg:max-w-lg xl:max-w-[560px] object-contain select-none relative z-10"
                loading="eager"
                fetchPriority="high"
                width="1000"
                height="880"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
