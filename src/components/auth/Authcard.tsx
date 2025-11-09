interface AuthCardProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

export const AuthCard = ({ children, title, subtitle }: AuthCardProps) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/30 via-cyan-600/30 to-blue-600/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-8 space-y-6 backdrop-blur-sm">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
                        )}
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
};
