import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (typeof window !== "undefined" || savedTheme === "dark") {
            return savedTheme ? savedTheme === "dark" : document.documentElement.classList.contains("dark");
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <button
            onClick={toggleTheme}
            className="group fixed top-2 right-2 z-50 p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-5 w-5 text-amber-500 group-hover:rotate-90 transition-transform" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700 group-hover:rotate-90 transition-transform" />
            )}
        </button>
    );
};
