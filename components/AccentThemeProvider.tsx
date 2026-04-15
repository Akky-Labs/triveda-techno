"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type AccentTheme = "indigo";

interface AccentThemeContextType {
    accent: AccentTheme;
    setAccent: (theme: AccentTheme) => void;
}

const AccentThemeContext = createContext<AccentThemeContextType>({
    accent: "indigo",
    setAccent: () => {},
});

export const useAccentTheme = () => useContext(AccentThemeContext);

export const ACCENT_THEMES: {
    id: AccentTheme;
    name: string;
    color400: string;
    color500: string;
    color600: string;
    colorSecondary: string;
}[] = [
    { id: "indigo", name: "Indigo", color400: "#818cf8", color500: "#6366f1", color600: "#4f46e5", colorSecondary: "#22d3ee" },
];

export function AccentThemeProvider({ children }: { children: React.ReactNode }) {
    const [accent, setAccentState] = useState<AccentTheme>("indigo");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("accent-theme") as AccentTheme | null;
        if (stored && ACCENT_THEMES.some((t) => t.id === stored)) {
            setAccentState(stored);
            document.documentElement.setAttribute("data-accent", stored);
        }
    }, []);

    const setAccent = (theme: AccentTheme) => {
        setAccentState(theme);
        localStorage.setItem("accent-theme", theme);
        document.documentElement.setAttribute("data-accent", theme);
    };

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <AccentThemeContext.Provider value={{ accent, setAccent }}>
            {children}
        </AccentThemeContext.Provider>
    );
}
