import React from "react";

export const Index: Record<
  string,
  React.LazyExoticComponent<(props: any) => React.JSX.Element>
> = {
  "fancy-button-demo": React.lazy(() => import("@/example/fancy-button-demo")),
  "sparkles-button-demo": React.lazy(
    () => import("@/example/sparkles-button-demo")
  ),
  "subscribe-demo": React.lazy(() => import("@/example/subscribe-demo")),
  "flip-text-demo": React.lazy(() => import("@/example/flip-text-demo")),
  "polka-dot-mask-demo": React.lazy(
    () => import("@/example/polka-dot-mask-demo")
  ),
  "clip-path-block-demo": React.lazy(
    () => import("@/example/clip-path-block-demo")
  ),
  "hover-gallery-demo": React.lazy(
    () => import("@/example/hover-gallery-demo")
  ),
  "spotlight-card-demo": React.lazy(
    () => import("@/example/spotlight-card-demo")
  ),
  "gradient-progress-demo": React.lazy(
    () => import("@/example/gradient-progress-demo")
  ),
  "inner-glow-demo": React.lazy(() => import("@/example/inner-glow-demo")),
  "pricing-demo": React.lazy(() => import("@/example/pricing-demo")),
  "neumorphism-box-demo": React.lazy(
    () => import("@/example/neumorphism-box-demo")
  ),
  "canvas-like-demo": React.lazy(() => import("@/example/canvas-like-demo")),
  "stack-card-demo": React.lazy(() => import("@/example/stack-card-demo")),
  "text-dispersion-demo": React.lazy(
    () => import("@/example/text-dispersion-demo")
  ),
  "select-model-demo": React.lazy(() => import("@/example/select-model-demo")),
};
