import React, { useState } from 'react';
import Home from './components/Home';
import Categories from './components/Categories';
import ProductDetail from './components/ProductDetail';
import MyPage from './components/MyPage';
import MyOrders from './components/MyOrders';
import Checkout from './components/Checkout';

function App() {
  // 사용 가능한 페이지: 'home', 'categories', 'detail', 'profile', 'orders', 'checkout'
  const [page, setPage] = useState('home');
  const [prevPage, setPrevPage] = useState('home');

  const navigateTo = (newPage) => {
    setPrevPage(page);
    setPage(newPage);
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={navigateTo} />;
      case 'categories':
        return <Categories setPage={navigateTo} />;
      case 'detail':
        return <ProductDetail setPage={navigateTo} />;
      case 'profile':
        return <MyPage setPage={navigateTo} />;
      case 'orders':
        return <MyOrders setPage={navigateTo} />;
      case 'checkout':
        return <Checkout setPage={navigateTo} />;
      default:
        return <Home setPage={navigateTo} />;
    }
  };

  // Checkout 페이지가 아닐 때만 하단 탭 바 및 데스크톱 네비게이션 바 표시
  const showNav = page !== 'checkout';

  return (
    <div className="min-h-screen bg-background text-on-background antialiased font-body-md flex flex-col pt-16 pb-20 md:pb-0">
      {/* 글로벌 Header */}
      <header className="fixed top-0 w-full z-50 bg-pure-white dark:bg-charcoal-canvas shadow-sm shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 w-full max-w-container-max mx-auto">
          {/* 좌측 버튼 (뒤로가기 또는 메뉴) */}
          <div className="flex items-center">
            {page === 'checkout' ? (
              <button 
                onClick={() => navigateTo(prevPage)}
                className="text-primary dark:text-primary-fixed-dim hover:bg-ghostly-gray dark:hover:bg-iron-gray transition-colors active:scale-95 duration-200 p-2 -ml-2 rounded-full flex items-center justify-center"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            ) : page === 'detail' ? (
              <button 
                onClick={() => navigateTo('home')}
                className="text-primary dark:text-primary-fixed-dim hover:bg-ghostly-gray dark:hover:bg-iron-gray transition-colors active:scale-95 duration-200 p-2 -ml-2 rounded-full flex items-center justify-center"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            ) : (
              <button 
                className="text-primary dark:text-primary-fixed-dim hover:bg-ghostly-gray dark:hover:bg-iron-gray transition-colors active:scale-95 duration-200 p-2 -ml-2 rounded-full flex items-center justify-center md:hidden"
                onClick={() => navigateTo('home')}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            )}
          </div>

          {/* 중앙 로고 / 타이틀 */}
          <div className="flex-grow flex justify-center md:justify-start">
            {page === 'checkout' ? (
              <h1 className="font-headline-md text-headline-md tracking-tight text-on-background">Checkout</h1>
            ) : (
              <button 
                onClick={() => navigateTo('home')} 
                className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-extrabold text-primary dark:text-primary-container hover:opacity-85 transition-opacity"
              >
                Vivid Aura
              </button>
            )}
          </div>

          {/* 데스크톱 상단 네비게이션 메뉴 */}
          {showNav && (
            <nav className="hidden md:flex items-center space-x-8 mr-8">
              <button 
                className={`font-label-md text-label-md transition-colors ${page === 'home' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`} 
                onClick={() => navigateTo('home')}
              >
                Home
              </button>
              <button 
                className={`font-label-md text-label-md transition-colors ${page === 'categories' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`} 
                onClick={() => navigateTo('categories')}
              >
                Categories
              </button>
              <button 
                className={`font-label-md text-label-md transition-colors ${page === 'orders' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`} 
                onClick={() => navigateTo('orders')}
              >
                Orders
              </button>
              <button 
                className={`font-label-md text-label-md transition-colors ${page === 'profile' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`} 
                onClick={() => navigateTo('profile')}
              >
                Profile
              </button>
            </nav>
          )}

          {/* 우측 쇼핑백 버튼 */}
          <div className="flex items-center">
            <button 
              onClick={() => navigateTo('orders')} 
              aria-label="Shopping Cart" 
              className="text-primary dark:text-primary-fixed-dim hover:bg-ghostly-gray dark:hover:bg-iron-gray transition-colors active:scale-95 duration-200 p-2 -mr-2 rounded-full flex items-center justify-center relative"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-1 right-1 bg-primary text-pure-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
            </button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-grow w-full">
        {renderPage()}
      </main>

      {/* 모바일 하단 탭 바 (Mobile Only) */}
      {showNav && (
        <nav className="fixed bottom-0 left-0 w-full z-50 bg-pure-white dark:bg-charcoal-canvas border-t border-light-steel dark:border-iron-gray shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
          <div className="flex justify-around items-center py-2 px-margin-mobile">
            <button 
              className={`flex flex-col items-center justify-center transition-transform duration-150 active:scale-90 w-16 ${page === 'home' ? 'text-primary dark:text-primary-container font-semibold' : 'text-on-surface-variant dark:text-surface-variant hover:text-primary'}`} 
              onClick={() => navigateTo('home')}
            >
              <span className="material-symbols-outlined mb-1 text-[24px]" style={{ fontVariationSettings: page === 'home' ? "'FILL' 1" : "'FILL' 0" }}>home</span>
              <span className="font-label-sm text-label-sm">Home</span>
            </button>
            <button 
              className={`flex flex-col items-center justify-center transition-transform duration-150 active:scale-90 w-16 ${page === 'categories' ? 'text-primary dark:text-primary-container font-semibold' : 'text-on-surface-variant dark:text-surface-variant hover:text-primary'}`} 
              onClick={() => navigateTo('categories')}
            >
              <span className="material-symbols-outlined mb-1 text-[24px]" style={{ fontVariationSettings: page === 'categories' ? "'FILL' 1" : "'FILL' 0" }}>grid_view</span>
              <span className="font-label-sm text-label-sm">Categories</span>
            </button>
            <button 
              className={`flex flex-col items-center justify-center transition-transform duration-150 active:scale-90 w-16 ${page === 'orders' ? 'text-primary dark:text-primary-container font-semibold' : 'text-on-surface-variant dark:text-surface-variant hover:text-primary'}`} 
              onClick={() => navigateTo('orders')}
            >
              <span className="material-symbols-outlined mb-1 text-[24px]" style={{ fontVariationSettings: page === 'orders' ? "'FILL' 1" : "'FILL' 0" }}>shopping_bag</span>
              <span className="font-label-sm text-label-sm">Orders</span>
            </button>
            <button 
              className={`flex flex-col items-center justify-center transition-transform duration-150 active:scale-90 w-16 ${page === 'profile' ? 'text-primary dark:text-primary-container font-semibold' : 'text-on-surface-variant dark:text-surface-variant hover:text-primary'}`} 
              onClick={() => navigateTo('profile')}
            >
              <span className="material-symbols-outlined mb-1 text-[24px]" style={{ fontVariationSettings: page === 'profile' ? "'FILL' 1" : "'FILL' 0" }}>person</span>
              <span className="font-label-sm text-label-sm">Profile</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

export default App;
