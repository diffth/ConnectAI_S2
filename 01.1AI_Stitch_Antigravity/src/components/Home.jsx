import React from 'react';

function Home({ setPage }) {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen pb-20">
      <main className="px-margin-mobile md:px-margin-desktop pt-4 pb-8 space-y-8 max-w-container-max mx-auto">
        {/* Hero Banner */}
        <section className="relative rounded-xl overflow-hidden bg-gradient-to-r from-light-steel to-pure-white shadow-[rgba(0,0,0,0.08)_0px_4px_12px] p-6 flex items-center min-h-[200px]">
          <div className="z-10 w-full text-center">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2 tracking-tight">Welcome to Vivid Aura</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">Discover curated trends for you</p>
            <button 
              className="bg-primary text-pure-white font-label-md text-label-md px-6 py-3 rounded-lg font-semibold hover:bg-primary-container transition-colors shadow-sm inline-block" 
              onClick={() => setPage('categories')}
            >
              Shop Now
            </button>
          </div>
        </section>

        {/* Category Grid */}
        <section>
          <div className="flex overflow-x-auto gap-4 no-scrollbar pb-2">
            {['Fashion', 'Tech', 'Living', 'Beauty', 'Sports'].map((cat, idx) => {
              const icons = ['apparel', 'devices', 'chair', 'face_retouching_natural', 'sports_basketball'];
              return (
                <button 
                  key={cat}
                  onClick={() => setPage('categories')}
                  className="flex flex-col items-center min-w-[72px] gap-2 group focus:outline-none"
                >
                  <div className="w-16 h-16 rounded-full bg-pure-white shadow-sm flex items-center justify-center border border-light-steel group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary text-2xl">{icons[idx]}</span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface text-center">{cat}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Recommended Section */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">For Your Style</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Product Card 1 */}
            <div className="bg-pure-white rounded-xl shadow-[rgba(0,0,0,0.08)_0px_4px_12px] p-3 flex flex-col hover:scale-[1.02] transition-transform duration-200">
              <div className="w-full aspect-square bg-ghostly-gray rounded-lg mb-3 relative overflow-hidden">
                <img 
                  alt="Essential White Tee" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvjufOzpP9nCTKcmJVruz_0MP140YrYyb-fayVlqyKLwKuWYsxSqjl4lqRtbz5X4iDU9SGUGkf4JVI5mMsj0MtF26iMsbR0xtKYodJ1bzNBkTLjHlf_cMQuH02aCkXYs6OVmZVDVa7lNfQwQ5zi9PrG_xbgDjXYzV5LwskgGEVoEHarAWv_zZgFLDWlIvArauSxu-5qUGOLMrKjlf8rtRIKS9873HPRzbgFgAtdx4stLmjoUHPgPTA5ISjzFwOHSXjbqYKYlGjN1g" 
                />
                <span className="absolute top-2 left-2 bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full">Sale</span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface line-clamp-1 mb-1">Essential White Tee</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-body-md text-body-md font-semibold text-on-background">$24.00</span>
                <button 
                  className="bg-ghostly-gray hover:bg-primary hover:text-pure-white text-primary rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                  onClick={() => setPage('detail')}
                >
                  <span className="material-symbols-outlined text-sm font-bold">add</span>
                </button>
              </div>
            </div>

            {/* Product Card 2 (Crimson Velocity Kicks) */}
            <button 
              onClick={() => setPage('detail')}
              className="bg-pure-white rounded-xl shadow-[rgba(0,0,0,0.08)_0px_4px_12px] p-3 flex flex-col hover:scale-[1.02] transition-transform duration-200 text-left"
            >
              <div className="w-full aspect-square bg-ghostly-gray rounded-lg mb-3 relative overflow-hidden">
                <img 
                  alt="Crimson Velocity Kicks" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCW72-CCcUK-LiUaDxilNKW42Q7u-GY9A_LfPfmGhgPfNpg68zVp8lMd49lZmAc47-_P4tVqgdm6rcW6k8OFQlNJgaXesxyqdGowzJ8OYTjfu1Q0sqfsIP9L94995ixrKcXTeh180KPExWz8qx2bG4D27FlsP9tGlxRmN04TnnqVdMOPjpJQ6rvGf2wi4qb759hY3jcBJMfWasSscWLygRrsulLfILOfXDFALcmDZy6WTfE5gSNmoR5zeCg8qp0ivJ2q23x5RUAU0" 
                />
                <span className="absolute top-2 left-2 bg-secondary text-pure-white font-label-sm text-label-sm px-2 py-0.5 rounded-full">New</span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface line-clamp-1 mb-1">Crimson Velocity Kicks</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-body-md text-body-md font-semibold text-on-background">$110.00</span>
                <div className="bg-ghostly-gray hover:bg-primary hover:text-pure-white text-primary rounded-full w-8 h-8 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-sm font-bold">add</span>
                </div>
              </div>
            </button>

            {/* Product Card 3 */}
            <div className="bg-pure-white rounded-xl shadow-[rgba(0,0,0,0.08)_0px_4px_12px] p-3 flex flex-col hover:scale-[1.02] transition-transform duration-200">
              <div className="w-full aspect-square bg-ghostly-gray rounded-lg mb-3 relative overflow-hidden">
                <img 
                  alt="Aura Noise Cancelling" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsiC_CsU8GNi8dZ7P52nPQqrgSnDk9dGzhG9mDj9ELG60KdB-dnz60md8OqTbGKfRLXdRy_lIsPY-PFsyAhP37G2KJzjn658EelDzlkY96XNzRKZrHUsVgddErFOID0UJAaKtyM_Kv-X-XOC8xwUWQWPbn5Q4D4eprXOSzbJjhgRBP0I1K0rqYIjUZ63kb0i9ReSlcXunsT67btJ98dlO5DEYFL86wLjLrb6HOcYiVXlj4pptux4H8mzITq133BsO5NbqudgiBD8g" 
                />
              </div>
              <h3 className="font-label-md text-label-md text-on-surface line-clamp-1 mb-1">Aura Noise Cancelling</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-body-md text-body-md font-semibold text-on-background">$299.00</span>
                <button 
                  className="bg-ghostly-gray hover:bg-primary hover:text-pure-white text-primary rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                  onClick={() => setPage('detail')}
                >
                  <span className="material-symbols-outlined text-sm font-bold">add</span>
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-pure-white rounded-xl shadow-[rgba(0,0,0,0.08)_0px_4px_12px] p-3 flex flex-col hover:scale-[1.02] transition-transform duration-200">
              <div className="w-full aspect-square bg-ghostly-gray rounded-lg mb-3 relative overflow-hidden">
                <img 
                  alt="Echo Cylinder Smart" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTh7Rw_cpeUXtZSZDMWzMsY4DqMZGIjD9jYs37MytdnW7j9v9LNDWYsLUw6NgLEngWjx7Nx6_OqZp2E_DPFKab4sFut9cWyZXFxracJ6BCRByzkVqIfbvA1W0H52SefTZtRGDf9y_Ghg-zBL_kBdxKyM5af0gP9MgCIEkQgaiULyIcn5HrhoEzEY1--CdHYmYIouLI0cL4WYt1qJ2-z-KbNxfg7J2Kpzm92bIU10-KFrPlxovlQe6VVG7_DuS5qJpvEyRVBdskYs0" 
                />
              </div>
              <h3 className="font-label-md text-label-md text-on-surface line-clamp-1 mb-1">Echo Cylinder Smart</h3>
              <div className="flex justify-between items-center mt-auto">
                <span className="font-body-md text-body-md font-semibold text-on-background">$89.00</span>
                <button 
                  className="bg-ghostly-gray hover:bg-primary hover:text-pure-white text-primary rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                  onClick={() => setPage('detail')}
                >
                  <span className="material-symbols-outlined text-sm font-bold">add</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
