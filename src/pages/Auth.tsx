import { Github, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { AuthCard } from "../components/auth/Authcard.tsx";
import { OAuthButton } from "../components/auth/OAuthButton";
import { AuthInput } from './../components/auth/AuthInput';

const NODE_APP = import.meta.env.VITE_NODE_APP;

export const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            newErrors.email = "Invalid email address";

        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (isSignUp) {
            if (!confirmPassword)
                newErrors.confirmPassword = "Please confirm your password";
            else if (password !== confirmPassword)
                newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            alert(`${isSignUp ? "Sign Up" : "Sign In"} successful!`);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleOAuth = (provider: string) => {
        window.location.href = `${NODE_APP}/auth/${provider}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-4 py-12 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-300/10 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 w-full max-w-md animate-fade-in">
                <AuthCard
                    title={isSignUp ? "Create Account" : "Welcome Back"}
                    subtitle={
                        isSignUp
                            ? "Build your professional resume in minutes"
                            : "Sign in to continue creating"
                    }
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AuthInput
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            icon={<Mail className="h-5 w-5" />}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={errors.email}
                        />

                        <AuthInput
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            icon={<Lock className="h-5 w-5" />}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={errors.password}
                            showPasswordToggle
                        />

                        {isSignUp && (
                            <AuthInput
                                label="Confirm Password"
                                type="password"
                                placeholder="••••••••"
                                icon={<Lock className="h-5 w-5" />}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                error={errors.confirmPassword}
                                showPasswordToggle
                            />
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-600 dark:hover:to-blue-700 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading
                                ? "Loading..."
                                : isSignUp
                                    ? "Create Account"
                                    : "Sign In"}
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <OAuthButton
                            icon="🔍"
                            label="Google"
                            provider="Google"
                            onClick={() => handleOAuth("google")}
                        />
                        <OAuthButton
                            icon={<Github className="h-5 w-5" />}
                            label="GitHub"
                            provider="GitHub"
                            onClick={() => handleOAuth("gitHub")}
                        />
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                            <button
                                type="button"
                                onClick={() => {
                                    setIsSignUp(!isSignUp);
                                    setErrors({});
                                }}
                                className="font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
                            >
                                {isSignUp ? "Sign In" : "Sign Up"}
                            </button>
                        </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-slate-700/50 rounded-lg p-4 space-y-2 border border-blue-200 dark:border-slate-600">
                        <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                            <span className="text-green-600 dark:text-green-400">✓</span>
                            Your data is secure and encrypted
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                            We never share your information. By signing up, you agree to our{" "}
                            <a href="/terms" className="underline hover:no-underline">
                                Terms
                            </a>{" "}
                            and{" "}
                            <a href="/privacy" className="underline hover:no-underline">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </AuthCard>

                <p className="text-center text-slate-600 dark:text-slate-400 text-xs mt-6">
                    © 2024 ResumeBuilder. All rights reserved.
                </p>
            </div>
        </div>
    );
};
