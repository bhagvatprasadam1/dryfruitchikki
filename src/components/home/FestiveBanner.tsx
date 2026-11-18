import React from 'react';

export const FestiveBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="festive-banner">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Clean Full-Display Image (All Text & Overlays Removed) */}
        <div className="relative rounded-3xl overflow-hidden border border-light-beige bg-deep-brown">
          <img
            src="/dry-fruits-chikki/dry-fruits-chikki-banner.webp"
            alt="Royal Gujarati Dry Fruits Chikki Festive Collection"
            className="w-full h-auto block select-none object-cover"
            loading="lazy"
            width="990"
            height="768"
          />
        </div>

      </div>
    </section>
  );
};

export default FestiveBanner;
