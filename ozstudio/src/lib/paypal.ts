// ============================================================
// PayPal Configuration — @paypal/react-paypal-js 기반
// ============================================================
// 
// 설정 방법:
// 1. https://developer.paypal.com/dashboard 에서 앱 생성
// 2. Client ID를 .env 파일에 넣기:
//    VITE_PAYPAL_CLIENT_ID=실제_클라이언트_ID
// 3. 프로덕션: VITE_PAYPAL_CLIENT_ID에 Live Client ID 사용
//
// ============================================================

export const PAYPAL_CONFIG = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test',
  currency: 'USD',
  intent: 'capture' as const,
};

// ── 상품 타입 정의 ──

export interface PayPalProduct {
  id: string;
  name: string;
  description: string;
  price: string; // '29.99' 형식
  currency: string;
}

// ── 구독 플랜 타입 정의 ──

export interface PayPalSubscriptionPlan {
  id: string;
  name: string;
  description: string;
  planId: string; // PayPal에서 생성한 구독 Plan ID
  price: string;
  currency: string;
  interval: 'MONTH' | 'YEAR';
}

// ── 예시 상품 목록 — 여기를 수정하세요 ──

export const PRODUCTS: PayPalProduct[] = [
  {
    id: 'vita-daily-pack',
    name: 'Daily Multivitamin Pack',
    description: 'Essential daily vitamins & minerals - 30 day supply',
    price: '29.99',
    currency: 'USD',
  },
  {
    id: 'vita-premium-bundle',
    name: 'Premium Health Bundle',
    description: 'All-in-one daily multivitamin, pure omega-3, and probiotics',
    price: '89.99',
    currency: 'USD',
  },
  {
    id: 'vita-custom-kit',
    name: 'Personalized Monthly Kit',
    description: 'Custom formulated vitamins tailored to your cellular profile',
    price: '149.99',
    currency: 'USD',
  },
];

// ── 예시 구독 플랜 — 여기를 수정하세요 ──

export const SUBSCRIPTION_PLANS: PayPalSubscriptionPlan[] = [
  {
    id: 'vita-globe-monthly',
    name: 'VITA-GLOBE Monthly Membership',
    description: 'Monthly delivery of essential vitamins & health tips',
    planId: 'YOUR_PAYPAL_PLAN_ID',
    price: '24.99',
    currency: 'USD',
    interval: 'MONTH',
  },
  {
    id: 'vita-globe-yearly',
    name: 'VITA-GLOBE Annual Membership',
    description: 'Yearly delivery of premium health supplements — save 20%',
    planId: 'YOUR_PAYPAL_YEARLY_PLAN_ID',
    price: '239.99',
    currency: 'USD',
    interval: 'YEAR',
  },
];
