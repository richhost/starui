interface Navigation {
  name: string;
  path: string;
  isNew?: boolean;
}

interface NavigationGroup {
  name: string;
  items: Navigation[];
}

export const COMPONENTS: Navigation[] = [
  {
    name: "Fancy Button",
    path: "/docs/components/fancy-button",
  },
  {
    name: "Sparkles Button",
    path: "/docs/components/sparkles-button",
  },
  {
    name: "Subscribe",
    path: "/docs/components/subscribe",
  },
  {
    name: "Flip Text",
    path: "/docs/components/flip-text",
  },
  {
    name: "Polka Dot Mask",
    path: "/docs/components/polka-dot-mask",
  },
  {
    name: "Clip Path Block",
    path: "/docs/components/clip-path-block",
  },
  {
    name: "Hover Gallery",
    path: "/docs/components/hover-gallery",
  },
  {
    name: "Spotlight Card",
    path: "/docs/components/spotlight-card",
  },
  {
    name: "Gradient Progress",
    path: "/docs/components/gradient-progress",
  },
  {
    name: "Inner Glow",
    path: "/docs/components/inner-glow",
  },
  {
    name: "Scroll Island",
    path: "/docs/components/scroll-island",
  },
  {
    name: "Pricing",
    path: "/docs/components/pricing",
  },
  {
    name: "Neumorphism Box",
    path: "/docs/components/neumorphism-box",
  },
  {
    name: "Canvas Like",
    path: "/docs/components/canvas-like",
  },
  {
    name: "Stack Card",
    path: "/docs/components/stack-card",
  },
  {
    name: "Select Model",
    path: "/docs/components/select-model",
  },
  {
    name: "Light Weight Cards",
    path: "/docs/components/light-weight-cards",
  },
  {
    name: "Word Galaxy",
    path: "/docs/components/word-galaxy",
  },
  {
    name: "FAQ Spring",
    path: "/docs/components/faq-spring",
  },
  {
    name: "Button Steps",
    path: "/docs/components/button-steps",
    isNew: true,
  },
];

export const NAVIGATION_CONFIG: NavigationGroup[] = [
  {
    name: "Getting Started",
    items: [
      {
        name: "Installation",
        path: "/docs/getting-started/installation",
      },
    ],
  },
  {
    name: "Components",
    items: COMPONENTS,
  },
];
