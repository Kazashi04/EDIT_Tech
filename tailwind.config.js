/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "error": "#ffb4ab",
        "on-surface": "#e5e2e1",
        "surface-dim": "#131313",
        "on-tertiary": "#172284",
        "surface-tint": "#c6c6c6",
        "on-surface-variant": "#cfc4c5",
        "outline": "#988e90",
        "secondary-fixed": "#e8deff",
        "surface-container-lowest": "#0e0e0e",
        "on-primary-fixed-variant": "#474747",
        "tertiary-container": "#000000",
        "on-secondary-fixed": "#20005f",
        "surface-container-highest": "#353534",
        "secondary-container": "#5203d5",
        "on-background": "#e5e2e1",
        "error-container": "#93000a",
        "inverse-surface": "#e5e2e1",
        "on-secondary-container": "#c0acff",
        "on-tertiary-fixed-variant": "#323c9b",
        "secondary": "#cdbdff",
        "on-tertiary-fixed": "#000767",
        "on-error-container": "#ffdad6",
        "surface": "#131313",
        "surface-container-high": "#2a2a2a",
        "primary-container": "#000000",
        "surface-container": "#201f1f",
        "on-primary-fixed": "#1b1b1b",
        "surface-bright": "#393939",
        "tertiary": "#bdc2ff",
        "on-tertiary-container": "#626cce",
        "surface-container-low": "#1c1b1b",
        "outline-variant": "#4c4546",
        "inverse-primary": "#5e5e5e",
        "surface-variant": "#353534",
        "tertiary-fixed": "#dfe0ff",
        "primary-fixed-dim": "#c6c6c6",
        "inverse-on-surface": "#313030",
        "on-primary": "#303030",
        "primary-fixed": "#e2e2e2",
        "secondary-fixed-dim": "#cdbdff",
        "on-primary-container": "#757575",
        "on-error": "#690005",
        "tertiary-fixed-dim": "#bdc2ff",
        "on-secondary": "#370096",
        "background": "#131313",
        "primary": "#c6c6c6",
        "on-secondary-fixed-variant": "#4f00d0"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "unit": "4px",
        "panel-padding": "16px",
        "section-gap": "clamp(48px, 10vw, 80px)",
        "margin-safe": "clamp(16px, 5vw, 40px)",
        "gutter": "clamp(16px, 4vw, 24px)"
      },
      fontFamily: {
        "headline-lg-mobile": ["'Hanken Grotesk'", "sans-serif"],
        "label-sm": ["'JetBrains Mono'", "monospace"],
        "body-md": ["'Hanken Grotesk'", "sans-serif"],
        "code-md": ["'JetBrains Mono'", "monospace"],
        "headline-lg": ["'Hanken Grotesk'", "sans-serif"],
        "display": ["'Hanken Grotesk'", "sans-serif"]
      },
      fontSize: {
        "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "label-sm": ["12px", { "lineHeight": "1.4", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "code-md": ["13px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "headline-lg": ["clamp(24px, 4vw, 32px)", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "display": ["clamp(36px, 8vw, 64px)", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
