import React from 'react';

function Categories({ setPage }) {
  return (
    <div className="bg-pure-white text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      {/* Main Content Canvas */}
      <main className="flex-grow pt-4 pb-[80px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative flex items-center w-full h-12 rounded-lg bg-ghostly-gray border border-light-steel focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200 px-4">
            <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md placeholder-on-surface-variant outline-none" 
              placeholder="Search categories..." 
              type="text" 
            />
          </div>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Categories</h2>
        
        {/* Bento Grid / Masonry Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-gutter">
          {/* Category Card 1: Fashion (Large Feature) */}
          <button 
            className="group relative rounded-xl overflow-hidden bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] col-span-2 row-span-2 h-[300px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 text-left" 
            onClick={() => setPage('home')}
          >
            <img 
              alt="Fashion Category" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1yoWz4Wqk1M9Dwb_1hFTiJqlCxgzp2-XsOxy2m8aJEItUswa0SSYQb_ZjuYbgDtqVtDLY1qSobR1WcYVVlHuyb3mbrTf2s0P4mY-Qp6sY2tryXTDFIAugHwSDUtZUk3h6uYrvewgeLX3tYw1Tohu6nfJlSss37bRRpLi8IWuLA54aqrWSdWxEJGKtdYgtAZ-epXOAvW0p6sjxYaBHp7zdfzkvLtZE851hDMhiZsyxFyR4CduitfHKzrmxYic-VUzULgjAm3w0zJY" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-canvas/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="font-headline-md text-headline-md text-pure-white font-bold group-hover:text-primary-fixed-dim transition-colors">Fashion</h3>
              <p className="font-body-md text-body-md text-surface-variant mt-1 opacity-90">Trending styles</p>
            </div>
          </button>

          {/* Category Card 2: Electronics */}
          <button 
            className="group relative rounded-xl overflow-hidden bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] h-[142px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 text-left" 
            onClick={() => setPage('home')}
          >
            <img 
              alt="Electronics Category" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW3tksqe9-1goHBNe0tUNM23LJiX4Y9psRn25D2O75S5yYjHzWcX-7QhwEf43Mn4JURzCuu0zIm8wchlFqEBAI1AqiODGYp0IZ4n56CL4CXQpx6MOBSFtQxY3DHtIAuedn5nLwgB7o4OFxm4OWMs9cK_psLsA9sW7UpfgcDz6udV8YVTZN5UuejsRxF11uHow4riI4S85UriSzfwsYg7S1XwN58259z4RfUIZGxKEjvprq056exVL-cvRx8GWvma_zs-Z9gtZ0Vd4" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-canvas/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3">
              <h3 className="font-label-md text-label-md text-pure-white font-bold">Electronics</h3>
            </div>
          </button>

          {/* Category Card 3: Home & Living */}
          <button 
            className="group relative rounded-xl overflow-hidden bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] h-[142px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 text-left" 
            onClick={() => setPage('home')}
          >
            <img 
              alt="Home & Living Category" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByX9VV0oRigYpUQiBJVDEgqtyFa9ndGUUenl9BpnkE5efi-5q5XASQGTMv4tqNHKiTzOHs-DwNiX21HCccUnlipCystsHM-Pxz8oiG5-A1CmdAF9sPaHhndExUKZRGwFsVd6iN18Q7SwBU1uBYmaTc6ysG-4jhwcAIVDJHYuyzUjnNdeH-z4_HJ_jZmOgXunRJgeRgVWXjTvHB03MB-LnlW2HHrh7U4ZWLqW2j4CXgPoMm0gRjPQI7blYK2gyfsB3l5ftZKFIsTkc" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-canvas/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3">
              <h3 className="font-label-md text-label-md text-pure-white font-bold">Home &amp; Living</h3>
            </div>
          </button>

          {/* Category Card 4: Beauty */}
          <button 
            className="group relative rounded-xl overflow-hidden bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] col-span-2 md:col-span-1 h-[142px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 text-left" 
            onClick={() => setPage('home')}
          >
            <img 
              alt="Beauty Category" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmMH80_CKd292ns93dr64ZeDO5_4G7hX7dZBmNfJakXZ4_im1sNycGf6zSRf2TLfnO0NqlAdDV_My-TsmP5zhnYUhQBvs1nHwHQES3g4TlcoDHP-cgvA_eEnFuU0f_gKXM2U4KC2Jbk8xTtT6gT7yX6OdILxkNVOkUV86WKsEniDB99IVJaKpj578xKwthijhMy3n5JfSMTz2ek8m0cVh96E7IUlX3Lb5OluLcy4muQUFMl3NEDaQcJjIqMMVaNz_pVM1muyklyTg" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-canvas/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3">
              <h3 className="font-label-md text-label-md text-pure-white font-bold">Beauty</h3>
            </div>
          </button>

          {/* Category Card 5: Sports */}
          <button 
            className="group relative rounded-xl overflow-hidden bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] h-[142px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 text-left" 
            onClick={() => setPage('home')}
          >
            <img 
              alt="Sports Category" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn3CR5pynvKcoO-_4C_k4knXty7CjO-uD1o-mGnULCOyDk456MtXEsVsFedDOoT8nmwdIwzSrKM4TxsFU2leHsBjlItLzDHKIUXw3uA8H_XKkFcw68RVSdG0KfPNa2nU0G_2YBVOVaJRY97x8pODl9dgEyrSckJmnoaTmpqOWbkXsgVvYPIXeMHI39wxdWC9wXhoI5Fk9vxiuL-6daX6utc8nKxQ8ihF2RyKqs5Sm7wj4ZQl358UGg9yUkWiFz4qY4LGomnfE4CxA" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-canvas/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3">
              <h3 className="font-label-md text-label-md text-pure-white font-bold">Sports</h3>
            </div>
          </button>

          {/* Category Card 6: Books */}
          <button 
            className="group relative rounded-xl overflow-hidden bg-pure-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] h-[142px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-300 text-left" 
            onClick={() => setPage('home')}
          >
            <img 
              alt="Books Category" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrHTDQvwzGaEFbdR1ixt2yiUmGy_9nwi_JXIBTXc8lNWK-GggcOwKma7x3SzQNhBJjveZ-K1EC9eSND4F8wDrrEmglTlurs1mXHgUIS-gUMCGOyzFD38QPqIBbyuJY2p7uohESVs2EUZ5r4gce-YRkPRTK6ijmkZM0mgzhaTrf8r7rfpdUmO1S2_RrGqE1gbb3XO7dBB3Y9GuDuxFIePXGzrb3hEWXdsrHvd0LetGvOFRtsCTAl83gpXX9cAkYXIvDUMcJ52mr7Pk" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-canvas/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-3">
              <h3 className="font-label-md text-label-md text-pure-white font-bold">Books</h3>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Categories;
