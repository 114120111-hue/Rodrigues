window.tailwind = window.tailwind || {};
window.tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-primary-fixed": "#1a1c1c",
                "secondary-container": "#3a4a5f",
                "outline-variant": "#444748",
                "inverse-primary": "#5d5f5f",
                "surface-container-low": "#131b2e",
                "on-background": "#dae2fd",
                "surface-variant": "#2d3449",
                "outline": "#8e9192",
                "error": "#ffb4ab",
                "on-tertiary-fixed-variant": "#3c475a",
                "primary-container": "#e2e2e2",
                "on-surface-variant": "#c4c7c8",
                "on-tertiary-container": "#5a6579",
                "on-primary": "#2f3131",
                "inverse-on-surface": "#283044",
                "on-tertiary": "#263143",
                "inverse-surface": "#dae2fd",
                "surface-container-highest": "#2d3449",
                "on-primary-container": "#636565",
                "secondary": "#b7c8e1",
                "primary-fixed": "#e2e2e2",
                "on-error-container": "#ffdad6",
                "tertiary": "#ffffff",
                "on-secondary-container": "#a9bad3",
                "on-secondary": "#213145",
                "tertiary-container": "#d8e3fb",
                "background": "#0b1326",
                "on-tertiary-fixed": "#111c2d",
                "secondary-fixed-dim": "#b7c8e1",
                "surface": "#0b1326",
                "error-container": "#93000a",
                "surface-bright": "#31394d",
                "surface-container-lowest": "#060e20",
                "on-primary-fixed-variant": "#454747",
                "tertiary-fixed": "#d8e3fb",
                "on-surface": "#dae2fd",
                "secondary-fixed": "#d3e4fe",
                "surface-container": "#171f33",
                "surface-container-high": "#222a3d",
                "on-error": "#690005",
                "on-secondary-fixed-variant": "#38485d",
                "tertiary-fixed-dim": "#bcc7de",
                "primary": "#ffffff",
                "primary-fixed-dim": "#c6c6c7",
                "surface-tint": "#c6c6c7",
                "surface-dim": "#0b1326",
                "on-secondary-fixed": "#0b1c30"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            spacing: {
                "column-gap": "24px",
                gutter: "24px",
                "margin-sm": "16px",
                "margin-md": "40px",
                "base-unit": "4px",
                "margin-lg": "80px"
            },
            fontFamily: {
                "headline-xl": ["Geist"],
                "headline-lg-mobile": ["Geist"],
                "body-md": ["Inter"],
                "headline-lg": ["Geist"],
                "label-mono": ["JetBrains Mono"]
            },
            fontSize: {
                "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
                "headline-lg-mobile": ["24px", { lineHeight: "1.2", fontWeight: "600" }],
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
                "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }],
                "label-mono": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }]
            }
        }
    }
};

window.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const openButton = document.getElementById("mobile-menu-button");
    const closeButton = document.getElementById("mobile-menu-close");

    if (!mobileMenu || !openButton || !closeButton) {
        return;
    }

    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");
        document.body.classList.toggle("overflow-hidden");
    };

    openButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    mobileMenu.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            document.body.classList.remove("overflow-hidden");
        });
    });
});
