// ============================================================
// Site Content Configuration — 텍스트/데이터 관리
// ============================================================
// 사이트에 표시되는 모든 텍스트를 여기서 수정할 수 있습니다.
// ============================================================

export const SITE_CONFIG = {
  // 브랜드
  brandName: 'VITA-GLOBE',
  copyright: '© 2026 VITA-GLOBE. All rights reserved.',

  // 히어로 섹션
  hero: {
    titleLeft: ['Pure', 'Vitamins'],
    titleRight: ['Global', 'Delivery'],
    watermark: 'VITALITY',
    description:
      'Premium dietary supplements sourced from pristine natural ingredients. VITA-GLOBE delivers scientifically formulated daily vitamins, antioxidants, and organic minerals directly to your doorstep, anywhere in the world.',
  },

  // 시네마틱 텍스트 섹션
  cinematic: {
    text: 'We believe in absolute purity and scientific precision. VITA-GLOBE sources raw materials from certified ecological farms and processes them using advanced low-temperature extraction technology. Every batch is third-party lab tested for heavy metals, potency, and purity. We bypass middle-men to deliver maximum strength bioavailable nutrients directly to your home, establishing a new global benchmark for daily health.',
  },

  // 성능 지표 섹션
  metrics: {
    subtitle: 'Global Trust Metrics',
    items: [
      { value: '99.9%', label: 'Ingredient Purity' },
      { value: '120+', label: 'Countries Shipped' },
      { value: '3.5M+', label: 'Bottles Delivered' },
    ],
  },

  // 기술 섹션 (품질/제조 기준)
  technology: {
    title: ['Scientific', 'Formulation'],
    description:
      'Our proprietary cold-extraction technology preserves vital co-factors and enzymes, ensuring maximum absorption and cellular bioavailability.',
    features: [
      {
        title: 'Bio-Enhanced Absorption',
        desc: 'Formulated with organic absorption enhancers to maximize cellular uptake.',
      },
      {
        title: 'Third-Party Verification',
        desc: 'Every single batch is independently tested and verified for absolute transparency.',
      },
      {
        title: 'Zero Synthetic Fillers',
        desc: '100% clean, non-GMO ingredients with no artificial binders, colors, or preservatives.',
      },
      {
        title: 'Eco-Friendly Sourcing',
        desc: 'Sourced sustainably from verified organic farms committed to carbon-neutral production.',
      },
    ],
  },

  // 아키텍처 섹션 (생산 단계)
  architecture: {
    subtitle: 'Sourcing & Standards',
    heading: 'Three steps. Pure goodness.',
    description:
      'We manage our entire supply chain. From organic farming to state-of-the-art sterile bottling and worldwide temperature-controlled shipping.',
    layers: [
      { num: 1, name: 'Ethical Sourcing' },
      { num: 2, name: 'Cold Processing' },
      { num: 3, name: 'Global Shipping' },
    ],
  },

  // 푸터
  footer: {
    tagline:
      'The ultimate standard in global wellness. Formulated for those who seek uncompromising quality and pure cellular vitality.',
  },

  // 네비게이션
  nav: {
    links: [
      { label: 'About', scrollMultiplier: 1 },
      { label: 'Quality', scrollMultiplier: 2 },
    ],
    downloadLabel: 'Shop Now',
  },
};
