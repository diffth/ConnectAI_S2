import React from 'react';

function MyPage({ setPage }) {
  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col pt-4">
      {/* Main Content */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6">
        {/* Profile Card */}
        <section className="bg-pure-white rounded-[12px] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-6 flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary-container">
            <img 
              alt="User Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoreAs0Lb1trahV3Wd3nnht4VN32xR5i5yL9Gj3KBmNHtg1SMW7nueD1tSzU68h25T-lr_bUlm-h_XAITxwQr9VKhNE1vLaLdG58BL-sbqpdOaMu9xXmShUmgeS2oPUX5XJDteKdOHLRnVhPWbptqWdD24KLFPtK9mcQekxQopRr8fdAO_MBgqFAMNSr2uVMEz_5xupZFCilJu6LkHHUR_VxTlwIJ-AVaKAsf0PuUWa_eQ5bOMmllls2YS_taEyZanuRMkDJ9hdEU" 
            />
            <button className="absolute bottom-0 right-0 bg-primary-container text-pure-white p-1 rounded-full shadow-sm hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[16px]">edit</span>
            </button>
          </div>
          <div className="text-center md:text-left flex-grow">
            <h2 className="font-headline-md text-headline-md mb-1">Alexandria Vance</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">alexandria.v@example.com</p>
            <div className="mt-3 inline-flex items-center bg-secondary-fixed-dim text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[14px] mr-1">workspace_premium</span>
              Gold Member
            </div>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="bg-transparent border border-light-steel text-on-surface hover:bg-ghostly-gray transition-colors font-label-md text-label-md px-4 py-2 rounded-lg">Edit Profile</button>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-pure-white rounded-[12px] p-4 text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all cursor-pointer">
            <span className="font-headline-md text-headline-md text-primary block mb-1">2,450</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Points</span>
          </div>
          <div className="bg-pure-white rounded-[12px] p-4 text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all cursor-pointer">
            <span className="font-headline-md text-headline-md text-primary block mb-1">4</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Coupons</span>
          </div>
          <div className="bg-pure-white rounded-[12px] p-4 text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all cursor-pointer">
            <span className="font-headline-md text-headline-md text-primary block mb-1">12</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Reviews</span>
          </div>
        </section>

        {/* Menu List */}
        <section className="bg-pure-white rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden">
          <ul className="divide-y divide-light-steel">
            <li>
              <button 
                onClick={() => {}} 
                className="w-full flex items-center justify-between p-4 hover:bg-ghostly-gray transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="settings">settings</span>
                  <span className="font-body-md text-body-md text-on-surface">Account Settings</span>
                </div>
                <span className="material-symbols-outlined text-light-steel group-hover:text-on-surface-variant transition-colors">chevron_right</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => {}} 
                className="w-full flex items-center justify-between p-4 hover:bg-ghostly-gray transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="favorite">favorite</span>
                  <span className="font-body-md text-body-md text-on-surface">Wishlist</span>
                </div>
                <span className="material-symbols-outlined text-light-steel group-hover:text-on-surface-variant transition-colors">chevron_right</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => {}} 
                className="w-full flex items-center justify-between p-4 hover:bg-ghostly-gray transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="local_shipping">local_shipping</span>
                  <span className="font-body-md text-body-md text-on-surface">Address Book</span>
                </div>
                <span className="material-symbols-outlined text-light-steel group-hover:text-on-surface-variant transition-colors">chevron_right</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => {}} 
                className="w-full flex items-center justify-between p-4 hover:bg-ghostly-gray transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors" data-icon="support_agent">support_agent</span>
                  <span className="font-body-md text-body-md text-on-surface">Customer Service</span>
                </div>
                <span className="material-symbols-outlined text-light-steel group-hover:text-on-surface-variant transition-colors">chevron_right</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => {}} 
                className="w-full flex items-center justify-between p-4 hover:bg-error-container transition-colors group mt-2 border-t border-light-steel text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-error" data-icon="logout">logout</span>
                  <span className="font-body-md text-body-md text-error font-medium">Logout</span>
                </div>
              </button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default MyPage;
