import React from "react";
import { Link } from "react-router-dom";

export const FullWidthBanner: React.FC = () => {
  return (
    <section
      aria-label="Pure Traditional Gujarati Dry Fruits Chikki Banner"
      className="py-6 sm:py-8 lg:py-9 bg-cream"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-light-beige bg-cream-card">
          <Link
            to="/about"
            className="block w-full relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-label="Explore Authentic Traditional Gujarati Dry Fruits Chikki (Dry Fruit Punch - Dates)"
          >
            <img
              src="/images/dry-fruits-chikki-banner.webp"
              alt="Dry Fruits Traditional Sweets • Premium Gujarati Dry Fruits Chikki • Rich in Taste, Rooted in Tradition"
              width="1000"
              height="390"
              className="w-full h-auto block select-none"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullWidthBanner;
