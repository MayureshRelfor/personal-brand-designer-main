import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface AuthInputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    icon?: React.ReactNode;
    showPasswordToggle?: boolean;
}

export const AuthInput = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    icon,
    showPasswordToggle = false,
}: AuthInputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = showPasswordToggle && showPassword ? "text" : type;

    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                {label}
            </label>
            <div className="relative group">
                <div className="absolute left-0 inset-y-0 flex items-center pointer-events-none">
                    {icon && (
                        <div className="ml-3 text-slate-400 dark:text-slate-500 group-focus-within:text-blue-600 dark:group-focus-within:text-cyan-400 transition-colors">
                            {icon}
                        </div>
                    )}
                </div>
                <input
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full px-4 ${icon ? "pl-10" : ""} py-3 rounded-lg border-2 transition-all duration-200 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 ${error
                        ? "border-red-500 focus:border-red-600 focus:ring-red-500/20"
                        : "border-slate-200 dark:border-slate-700 focus:border-blue-600 dark:focus:border-cyan-400 focus:ring-blue-500/20 dark:focus:ring-cyan-400/20"
                        }`}
                />
                {showPasswordToggle && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 inset-y-0 flex items-center text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                        {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                        ) : (
                            <Eye className="h-5 w-5" />
                        )}
                    </button>
                )}
            </div>
            {error && (
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
};
