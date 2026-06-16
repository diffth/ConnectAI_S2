import React, { useState } from 'react';

function ProductDetail({ setPage }) {
  const [selectedSize, setSelectedSize] = useState('9');
  const [selectedColor, setSelectedColor] = useState('Action Raspberry');

  const sizes = ['7', '8', '8.5', '9', '9.5', '10', '11', '12'];

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen pb-24 pt-4 selection:bg-primary selection:text-on-primary">
      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image Gallery (Bento Style) */}
          <div className="space-y-4">
            <div className="relative w-full aspect-[4/5] md:aspect-square bg-ghostly-gray rounded-[12px] overflow-hidden group">
              <img 
                alt="Crimson Velocity Sneakers Main Image" 
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2rxcdkBeJqbP05_OHoGW4toKHAejZNu3c3FqiB7ygMz0yU2P9yA6viX4iT1NXrNPqLwUU_JYc0HyLaQw-NcGZj0qV6ch9mFj9G0QlUu_YAWO8oU40_SLeRKnzW0zEF3qzcz6gOc_gpYLCEo0hfTn-rhvHX9JnbYoUIxFDejfLHbVEwLYrTgUfeW2fe8_tIWXb52Us77o29AUWY-6u12UHjMYDGSKXECduqEmXlXUUAeDVUM0flF8cw678X-g6oYi9A0dztLt2PDA" 
              />
              <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                Bestseller
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-ghostly-gray rounded-[12px] overflow-hidden cursor-pointer border-2 border-primary">
                <img 
                  alt="Sneaker Detail 1" 
                  className="object-cover w-full h-full" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAjuoIvuzwvuY3hOgGrEZvZxtwPV_GQjEm_x4Km-sBxjEMl2xRyGzhpSFpEx9ON53JJ4AgD8jgeW0i0_KkJsoSVnevQWQOZhq1iEyfJeAJx5Dr6ANeX6QApenVdolYjkh4GzMKV_6cL1KOcIAjMgjrsrSYyIOJvVfI6KsVP-7btAa7TtJeQI57DsB3kcPGtptzSEzfDD5YqZTW-ZJVnyKVDPlSOsL320uRMiPCy5STeodZOUjUyknPLSXOOvg0XVRi6UqffunoKfk" 
                />
              </div>
              <div className="aspect-square bg-ghostly-gray rounded-[12px] overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  alt="Sneaker Detail 2" 
                  className="object-cover w-full h-full" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDncYmjUgR4hCc5UAtaEV-PjVS8-gy2qbhEDxbJjjUnMNFgU90Z5OMntp6nNrUGhtZ_bWZz50coqqqLuQ9uc8fhkSxzyPBCLTzHi4TCNGrxgfzHDMDELzmC2p8IMd6_FgEi1_bM8RcZMFJol8ahFAGUSmfEKWPyznCW7bSRDqkWddYg2wz9orJxrEDNP-5He5AZSk6b6e1wBZDB3ZxnGj2jma3_oY9zjtsQZuN-rLmadKuWviDJyfRKU9AwEYPvKoEb6t6k0JcR9G4" 
                />
              </div>
              <div className="aspect-square bg-ghostly-gray rounded-[12px] overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center bg-surface-variant">
                <span className="material-symbols-outlined text-outline">play_circle</span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">Crimson Velocity Sneakers</h2>
                <button className="text-outline hover:text-primary transition-colors p-2 -mr-2">
                  <span className="material-symbols-outlined">favorite_border</span>
                </button>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-primary-container">
                  <span className="material-symbols-outlined filled-icon text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined filled-icon text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined filled-icon text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined filled-icon text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]">star_half</span>
                  <span className="ml-2 font-label-md text-label-md text-on-surface-variant">(128 Reviews)</span>
                </div>
              </div>
              <div className="font-display-xl text-display-xl text-on-surface mb-6">
                $110.00
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Engineered for momentum, the Crimson Velocity features an ultra-responsive foam midsole and a breathable, adaptive mesh upper. Whether you're hitting the pavement or navigating city streets, these sneakers deliver unparalleled comfort and striking visual impact.
              </p>
            </div>

            <div className="space-y-8 mb-10 flex-grow">
              {/* Color Selection */}
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Color</h3>
                  <span className="font-body-md text-body-md text-on-surface-variant">{selectedColor}</span>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedColor('Action Raspberry')}
                    className={`w-12 h-12 rounded-full p-1 focus:outline-none transition-all ${selectedColor === 'Action Raspberry' ? 'border-2 border-primary scale-105' : 'border border-light-steel'}`}
                  >
                    <div className="w-full h-full rounded-full bg-[#e32652]"></div>
                  </button>
                  <button 
                    onClick={() => setSelectedColor('Dark Charcoal')}
                    className={`w-12 h-12 rounded-full p-1 focus:outline-none transition-all ${selectedColor === 'Dark Charcoal' ? 'border-2 border-primary scale-105' : 'border border-light-steel'}`}
                  >
                    <div className="w-full h-full rounded-full bg-charcoal-canvas"></div>
                  </button>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Select Size</h3>
                  <button className="font-label-sm text-label-sm text-primary underline hover:text-primary-container">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {sizes.map(size => {
                    const isNotAllowed = size === '7';
                    const isActive = selectedSize === size;
                    return (
                      <button
                        key={size}
                        disabled={isNotAllowed}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 rounded-[8px] font-label-md text-label-md focus:outline-none transition-colors ${
                          isNotAllowed 
                            ? 'border border-light-steel bg-ghostly-gray text-outline cursor-not-allowed' 
                            : isActive 
                            ? 'border-2 border-primary bg-pure-white text-primary font-bold scale-105 transform' 
                            : 'border border-light-steel text-on-surface hover:border-primary hover:bg-ghostly-gray'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Add to Cart Action */}
            <div className="mt-auto">
              <button 
                onClick={() => setPage('checkout')}
                className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-4 rounded-[8px] flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-[0_4px_12px_rgba(227,38,82,0.3)] active:scale-[0.98] duration-150"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                Add to Cart - $110.00
              </button>
              <div className="mt-4 flex items-center justify-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">local_shipping</span>
                  Free Shipping
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">sync</span>
                  30-Day Returns
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
