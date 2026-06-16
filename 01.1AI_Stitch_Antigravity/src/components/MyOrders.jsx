import React from 'react';

function MyOrders({ setPage }) {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen pt-4">
      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-margin-mobile py-8 md:px-margin-desktop">
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-2">My Orders</h2>
          <p className="font-body-md text-on-surface-variant">Track, return, or buy items again.</p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {/* Order Card 1: In Transit */}
          <div className="bg-pure-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-light-steel overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            <div className="bg-ghostly-gray px-4 py-3 border-b border-light-steel flex justify-between items-center flex-wrap gap-2">
              <div className="flex gap-4">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Order Placed</span>
                  <span className="font-body-md text-body-md text-on-background">Oct 24, 2023</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Total</span>
                  <span className="font-body-md text-body-md text-on-background">$129.99</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Order #</span>
                <span className="font-body-md text-body-md text-on-background">VA-84729-A</span>
              </div>
            </div>
            <div className="p-4 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded bg-surface-container flex-shrink-0 overflow-hidden relative">
                <img 
                  alt="Product thumbnail" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB8SlVOU0K2fHjIzGfnI6QD23lMYS4qNH23kIBLjZGAXtrE4GrtDeJuWG922vOdvOzf4O7_3Q56CrtPHG0NZheqeKSUeoosrsPfAK7Jg9Os_0xbVQuybn-9wgq3Jxhyg89Pb8-YlRoQcsBIiRqlUNaFRfUub0VV_koudmTP8E1pdcwUJZC_pz4y1cIc9rh20m3RJtm-uY_eps5UVApeXxdB_0fpb1u20uXxSJ4etassbTwlU5DZRpWdlmB5j0L3GXKSudvr3aVl34" 
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  <span className="font-label-md text-label-md text-secondary">In Transit</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-1">Aura Speed Runner Pro</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Estimated delivery: Oct 28</p>
                <div className="flex gap-3">
                  <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded shadow-sm hover:bg-surface-tint transition-colors active:scale-95">Track Package</button>
                  <button className="bg-transparent border border-light-steel text-on-background font-label-md text-label-md px-4 py-2 rounded hover:bg-ghostly-gray transition-colors active:scale-95">View Details</button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Card 2: Delivered */}
          <div className="bg-pure-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-light-steel overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            <div className="bg-ghostly-gray px-4 py-3 border-b border-light-steel flex justify-between items-center flex-wrap gap-2">
              <div className="flex gap-4">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Order Placed</span>
                  <span className="font-body-md text-body-md text-on-background">Sep 15, 2023</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Total</span>
                  <span className="font-body-md text-body-md text-on-background">$85.50</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Order #</span>
                <span className="font-body-md text-body-md text-on-background">VA-73812-B</span>
              </div>
            </div>
            <div className="p-4 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded bg-surface-container flex-shrink-0 overflow-hidden relative">
                <img 
                  alt="Product thumbnail" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaFfPXyxDz-7bPxm8_WipzOtlXXqYGNt5Iifr2hzwV_hnmcflEpCSLjFNyR0sjWx8aM5lj5K1IIUiBHj7O4tVlX0Hxvmrkil3AUrGXVyb3CN7botONIhZKshPBIRmz4ffVdDQUhBaYLTNcUEobubmvq6_hhfSNOVaT2m6vq6xcKIxLrvmBVQlKdCdKQBFIYi879b6Xi0mvNVgOB6tj2El-yU4glXpnxyt1__BGmPGf3O45t8KAXjiV3fFoyZoXj1hz18jSCTi1D4c" 
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-label-md text-label-md text-on-background">Delivered</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-1">Vivid Timepiece V2</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Delivered on Sep 18, 2023</p>
                <div className="flex gap-3">
                  <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded shadow-sm hover:bg-surface-tint transition-colors active:scale-95">Buy Again</button>
                  <button className="bg-transparent border border-light-steel text-on-background font-label-md text-label-md px-4 py-2 rounded hover:bg-ghostly-gray transition-colors active:scale-95">Write Review</button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Card 3: Processing */}
          <div className="bg-pure-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-light-steel overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            <div className="bg-ghostly-gray px-4 py-3 border-b border-light-steel flex justify-between items-center flex-wrap gap-2">
              <div className="flex gap-4">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Order Placed</span>
                  <span className="font-body-md text-body-md text-on-background">Oct 26, 2023</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Total</span>
                  <span className="font-body-md text-body-md text-on-background">$210.00</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Order #</span>
                <span className="font-body-md text-body-md text-on-background">VA-91024-C</span>
              </div>
            </div>
            <div className="p-4 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded bg-surface-container flex-shrink-0 overflow-hidden relative">
                <img 
                  alt="Product thumbnail" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2VDOKKcQ0c1eGQ6dXvWjdMvOBZuCUyh8uYAp2lJLwd-qQORiwUly6ewmbJ3waLhxzKesaX-ji_XyIWz8eKqmd2baPKSwwWQuwYAZUflEN3_GFw_l6nXbSaTKwPurFAFjIhyP8F_Hw2YxweBHi5a6kmQQ3dv-sqMADxyDjP3RGDgtZlDbJQbyf6CAIa1GcxvFOApWmLvI_N4KH3hsWIixsDz3lvpJzu3fLh_s-cRRSl3-RdzXPHiXCtrtA2Se-vjXWtfSzjSjnc0A" 
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-iron-gray">pending</span>
                  <span className="font-label-md text-label-md text-on-background">Processing</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-1">Aura Sound Studio ANC</h3>
                <p className="font-body-md text-on-surface-variant mb-4">Preparing for shipment</p>
                <div className="flex gap-3">
                  <button className="bg-transparent border border-light-steel text-on-background font-label-md text-label-md px-4 py-2 rounded hover:bg-ghostly-gray transition-colors active:scale-95">Cancel Order</button>
                  <button 
                    onClick={() => setPage('checkout')}
                    className="bg-primary-container text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg shadow-sm hover:opacity-90 transition-colors active:scale-95 flex items-center justify-center"
                    style={{ backgroundColor: "rgb(227, 38, 82)", color: "rgb(255, 255, 255)", borderRadius: "8px" }}
                  >
                    결제하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyOrders;
