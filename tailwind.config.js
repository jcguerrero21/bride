// Build: npx tailwindcss@3 -i ./src/tailwind.css -o ./output.css --minify
module.exports = {
    content: ["./*.html", "./scripts.js"],
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "tertiary-fixed": "#d0e9d4",
                "on-tertiary-fixed-variant": "#364c3c",
                "on-tertiary-container": "#576e5c",
                "tertiary-container": "#d6efda",
                "secondary": "#7a5642",
                "surface-variant": "#e3e2e0",
                "surface-bright": "#faf9f6",
                "inverse-surface": "#2f312f",
                "surface": "#faf9f6",
                "background": "#faf9f6",
                "on-surface-variant": "#4b463d",
                "on-secondary": "#ffffff",
                "on-background": "#1a1c1a",
                "secondary-fixed-dim": "#ecbda4",
                "primary": "#685d4a",
                "inverse-primary": "#d3c5ad",
                "on-primary-fixed": "#221b0b",
                "outline-variant": "#cec5ba",
                "on-primary": "#ffffff",
                "on-secondary-fixed": "#2e1506",
                "error-container": "#ffdad6",
                "on-tertiary-fixed": "#0b2013",
                "primary-container": "#f7e7ce",
                "on-tertiary": "#ffffff",
                "surface-dim": "#dbdad7",
                "primary-fixed": "#f0e0c8",
                "on-error-container": "#93000a",
                "surface-container-high": "#e9e8e5",
                "inverse-on-surface": "#f2f1ee",
                "on-primary-fixed-variant": "#4f4533",
                "on-error": "#ffffff",
                "surface-container-low": "#f4f3f1",
                "surface-tint": "#685d4a",
                "outline": "#7d766c",
                "on-primary-container": "#726753",
                "on-secondary-fixed-variant": "#603f2d",
                "on-secondary-container": "#795541",
                "error": "#ba1a1a",
                "surface-container-highest": "#e3e2e0",
                "primary-fixed-dim": "#d3c5ad",
                "secondary-container": "#fecdb4",
                "on-surface": "#1a1c1a",
                "tertiary-fixed-dim": "#b4cdb8",
                "tertiary": "#4d6453",
                "surface-container-lowest": "#ffffff",
                "surface-container": "#efeeeb",
                "secondary-fixed": "#ffdbca"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "spacing": {
                "unit": "8px",
                "margin-desktop": "64px",
                "margin-mobile": "20px",
                "gutter": "24px",
                "container-max": "1140px"
            },
            "fontFamily": {
                "display-lg": ["Playfair Display"],
                "label-caps": ["Plus Jakarta Sans"],
                "headline-sm": ["Playfair Display"],
                "body-lg": ["Plus Jakarta Sans"],
                "display-lg-mobile": ["Playfair Display"],
                "headline-md": ["Playfair Display"],
                "body-md": ["Plus Jakarta Sans"]
            },
            "fontSize": {
                "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600" }],
                "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "600" }],
                "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "display-lg-mobile": ["36px", { "lineHeight": "1.2", "fontWeight": "600" }],
                "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "500" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
            }
        }
    }
};
