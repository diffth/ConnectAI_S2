import React from 'react';

function Checkout({ setPage }) {
  const handlePayment = () => {
    alert('결제가 완료되었습니다! 주문 내역 페이지로 이동합니다. 😊');
    setPage('orders');
  };

  return (
    <div className="bg-background text-on-background font-body-md antialiased pb-[120px] min-h-screen pt-4">
      <main className="pt-8 px-margin-mobile max-w-lg mx-auto flex flex-col gap-6">
        {/* Order Summary */}
        <section className="bg-pure-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-4 border border-surface-variant">
          <h2 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Order Summary</h2>
          <div className="flex flex-col gap-4">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-ghostly-gray flex-shrink-0 overflow-hidden border border-surface-variant">
                <img 
                  alt="Crimson Velocity Sneakers" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCT_qDZZbQgKnXvdYJgsRKNmO6P8LlDiPy7s-jlJcOkz7RItmRFpSolDJWaCB7sQX9BD3ScxIEhYG81PS7g_Y4pGc2ZprEifiev8QyeitmWkXT_kRzW045Gijl9gOaOarVI3mIYgt77Tw65ST2fTI9Z36kg5biJyza36C4p8mWxSm866YJALHUb0yQoiZ9X9E-a7QARa-24PeGJMPVJ5PiTA25kwYU-3bWDOMpRNaLDlTIYZKGJjmJTXYRoGBlt2RuAUeoEtyWp-Y" 
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-body-md text-body-md font-semibold text-on-background">Crimson Velocity Sneakers</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Qty: 1</p>
              </div>
              <div className="font-headline-md text-[18px] text-on-background font-bold">
                $150.00
              </div>
            </div>
            {/* Divider */}
            <div className="h-px w-full bg-surface-variant"></div>
            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-ghostly-gray flex-shrink-0 overflow-hidden border border-surface-variant">
                <img 
                  alt="Aura Sound Studio ANC" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgd8MD5KqRVRPLdxcUQvEpRXTZAyG0luRVCQHqHqGxje-ojvENljaoEERD6FVHANbfGTgqBVBn3OR3lI_18w3CaMz7T2Y7CVYUXy2-MbKJ2v6xJzKaTfSwsysZC2x9-u-gKohYD8SOkmoHON-dnOCJ0wmEze3K8JlY5Ueowf9cpDaj6WvQP3yroBRJGzMBcdcWj7iGVWdo0Jmd8YPgu7t_69KTDWjx0-aWPAz9hdnNfc4fGxaThgfocYMfnlLlTpFoz7ftEMKsdLU" 
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-body-md text-body-md font-semibold text-on-background">Aura Sound Studio ANC</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Qty: 1</p>
              </div>
              <div className="font-headline-md text-[18px] text-on-background font-bold">
                $150.00
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Information */}
        <section className="bg-pure-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-4 border border-surface-variant">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Shipping Information</h2>
            <button className="text-secondary font-label-md text-label-sm hover:underline">Edit</button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input 
                className="w-full bg-transparent border border-light-steel rounded text-on-background font-body-md p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-on-surface-variant/50" 
                id="fullName" 
                placeholder="Full Name" 
                type="text" 
                defaultValue="Jane Doe" 
              />
              <label className="absolute -top-2 left-2 bg-pure-white px-1 font-label-sm text-[10px] text-on-surface-variant" htmlFor="fullName">Full Name</label>
            </div>
            <div className="relative">
              <input 
                className="w-full bg-transparent border border-light-steel rounded text-on-background font-body-md p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-on-surface-variant/50" 
                id="address" 
                placeholder="Address" 
                type="text" 
                defaultValue="123 Aura Boulevard, Apt 4B, Minimal City, NY 10001" 
              />
              <label className="absolute -top-2 left-2 bg-pure-white px-1 font-label-sm text-[10px] text-on-surface-variant" htmlFor="address">Address</label>
            </div>
            <div className="relative">
              <input 
                className="w-full bg-transparent border border-light-steel rounded text-on-background font-body-md p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-on-surface-variant/50" 
                id="phone" 
                placeholder="Phone Number" 
                type="tel" 
                defaultValue="+1 (555) 123-4567" 
              />
              <label className="absolute -top-2 left-2 bg-pure-white px-1 font-label-sm text-[10px] text-on-surface-variant" htmlFor="phone">Phone Number</label>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="bg-pure-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-4 border border-surface-variant">
          <h2 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Payment Method</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-between p-3 border-2 border-primary rounded-lg bg-primary-fixed/10 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary icon-fill">payments</span>
                <span className="font-body-md text-on-background font-semibold">PayPal</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
              </div>
            </label>
            {/* Method 1 */}
            <label className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors border border-light-steel">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
                <span className="font-body-md text-on-background">Credit/Debit Card</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-light-steel"></div>
            </label>
            {/* Method 2 */}
            <label className="flex items-center justify-between p-3 border border-light-steel rounded-lg hover:bg-ghostly-gray cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">account_balance_wallet</span>
                <span className="font-body-md text-on-background">Apple Pay</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-light-steel"></div>
            </label>
            {/* Method 3 */}
            <label className="flex items-center justify-between p-3 border border-light-steel rounded-lg hover:bg-ghostly-gray cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">account_balance</span>
                <span className="font-body-md text-on-background">Bank Transfer</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-light-steel"></div>
            </label>
          </div>
        </section>

        {/* Price Summary */}
        <section className="bg-pure-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] p-4 border border-surface-variant mb-6">
          <h2 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase tracking-wider">Price Summary</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="font-body-md text-on-surface-variant">Subtotal</span>
              <span className="font-body-md font-semibold text-on-background">$300.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body-md text-on-surface-variant">Shipping Fee</span>
              <span className="font-body-md font-semibold text-on-background">$20.00</span>
            </div>
            <div className="h-px w-full bg-surface-variant my-2"></div>
            <div className="flex justify-between items-center">
              <span className="font-headline-md text-[20px] text-on-background font-bold">Total</span>
              <span className="font-headline-md text-[20px] text-primary font-bold tracking-tight">$320.00</span>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Bottom Action Area */}
      <div className="fixed bottom-0 w-full z-50 bg-pure-white/95 backdrop-blur-sm border-t border-surface-variant p-margin-mobile pb-[max(16px,env(safe-area-inset-bottom))] shadow-[0px_-4px_16px_rgba(0,0,0,0.05)]">
        <div className="max-w-lg mx-auto">
          <button 
            id="pay-btn" 
            onClick={handlePayment}
            className="w-full bg-primary text-pure-white font-headline-md text-[18px] py-4 rounded-lg shadow-[0px_4px_12px_rgba(189,0,61,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
          >
            PayPal로 결제하기 
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
