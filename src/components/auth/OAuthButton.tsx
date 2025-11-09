interface OAuthButtonProps {
    icon: React.ReactNode;
    label: string;
    provider: string;
    onClick?: () => void;
}

export const OAuthButton = ({
    icon,
    label,
    provider,
    onClick,
}: OAuthButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="w-full group relative px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium transition-all duration-200 hover:border-blue-500 dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-cyan-400/20 hover:scale-105"
        >
            <div className="flex items-center justify-center gap-3">
                <div className="text-xl">{icon}</div>
                <span className="text-sm font-semibold">{label}</span>
            </div>
        </button>
    );
};
