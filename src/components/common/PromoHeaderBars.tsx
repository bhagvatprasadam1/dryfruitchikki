import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { PlayStoreIcon, AppStoreIcon } from './StoreIcons';

export const PromoHeaderBars: React.FC = () => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const announcements = [
    `FREE SHIPPING ON ORDERS ABOVE ${siteConfig.offers.freeShippingAbove}`,
    `FREE SHIPPING ON YOUR FIRST ORDER ABOVE ${siteConfig.offers.firstOrderFreeShippingAbove}`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % announcements.length);
        setFade(true);
      }, 300); // 300ms transition
    }, 3800); // ~3.8 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="w-full select-none">
      {/* LINE 1: Rotating Free Shipping Announcement Bar (Ultra-slim ~16-20px) */}
      <aside
        aria-label="Free Shipping Offers"
        className="w-full bg-deep-brown text-cream text-[10.5px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase py-0.5 px-3 border-b border-white/10 flex items-center justify-center text-center overflow-hidden leading-tight min-h-[20px]"
      >
        <span
          className={`transition-opacity duration-300 transform inline-block ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {announcements[tickerIndex]}
        </span>
      </aside>

      {/* LINE 2: Mobile App Discount Banner (Ultra-slim ~22-26px, exactly 1 line on mobile) */}
      <aside
        aria-label="Mobile App Discount"
        className="w-full bg-primary text-cream py-0.5 sm:py-1 px-2 sm:px-4 border-b border-gold/30 flex items-center justify-center leading-none min-h-[24px]"
      >
        <div className="max-w-[1600px] mx-auto w-full flex items-center justify-center gap-1.5 sm:gap-2.5 flex-nowrap text-[10px] sm:text-xs font-medium whitespace-nowrap">
          {/* Desktop Text */}
          <span className="hidden md:inline text-cream/90 font-jost tracking-wide">
            Install <strong className="text-cream font-bold">{siteConfig.apps.appName}</strong> App &amp; Get{' '}
            <span className="text-gold-light font-bold">2% Extra Discount</span> on App! Available on:
          </span>

          {/* Mobile Text (Concise 1 single line) */}
          <span className="inline md:hidden text-cream/90 font-jost text-[10px] tracking-tight">
            Install App &amp; Get <span className="text-gold-light font-bold">2% Off</span>:
          </span>

          {/* App Badges: Official Black Pill Buttons */}
          <div className="inline-flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
            <a
              href={siteConfig.apps.playStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on Google Play Store"
              className="inline-flex items-center gap-1 bg-black/90 hover:bg-black text-white text-[9.5px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border border-white/20 hover:border-gold/60 transition-all shadow-sm active:scale-95"
            >
              <PlayStoreIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
              <span>Play Store</span>
            </a>

            <a
              href={siteConfig.apps.appStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on Apple App Store"
              className="inline-flex items-center gap-1 bg-black/90 hover:bg-black text-white text-[9.5px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border border-white/20 hover:border-gold/60 transition-all shadow-sm active:scale-95"
            >
              <AppStoreIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white flex-shrink-0" />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default PromoHeaderBars;
