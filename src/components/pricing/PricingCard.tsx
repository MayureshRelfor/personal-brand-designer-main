import { Check, Zap } from "lucide-react";

interface PricingFeature {
    name: string;
    included: boolean;
}

interface PricingCardProps {
    name: string;
    price: number;
    period: string;
    description: string;
    features: PricingFeature[];
    cta: string;
    icon: React.ReactNode;
    isPopular?: boolean;
    credits: number;
    onSelect?: () => void;
}

export const PricingCard = ({
    name,
    price,
    period,
    description,
    features,
    cta,
    icon,
    isPopular = false,
    credits,
    onSelect,
}: PricingCardProps) => {
    return (
        <div
            className={`group relative rounded-2xl transition-all duration-300 animate-fade-in ${isPopular
                ? "lg:scale-105 lg:shadow-2xl lg:shadow-blue-500/30"
                : "hover:shadow-lg"
                }`}
        >
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                        Most Popular
                    </div>
                </div>
            )}

            <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${isPopular
                    ? "from-blue-600/50 via-cyan-600/50 to-blue-600/50"
                    : "from-slate-200/30 to-slate-200/30"
                    } dark:${isPopular
                        ? "from-cyan-500/30 via-blue-500/30 to-cyan-500/30"
                        : "from-slate-700/20 to-slate-700/20"
                    } rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity`}
            ></div>

            <div
                className={`relative rounded-2xl border-2 transition-all duration-300 ${isPopular
                    ? "border-blue-500 dark:border-cyan-400 bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-slate-900/50"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-cyan-400"
                    } p-8 space-y-6 h-full`}
            >
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div
                            className={`p-3 rounded-lg transition-all ${isPopular
                                ? "bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg"
                                : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                                }`}
                        >
                            {icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            {name}
                        </h3>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        {description}
                    </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                            ${price}
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                            {period}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                        <Zap className="h-4 w-4 text-amber-500" />
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                            {credits.toLocaleString()} AI credits
                        </span>
                    </div>
                </div>

                <button
                    onClick={onSelect}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${isPopular
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105"
                        : "border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-blue-600 dark:hover:border-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                        }`}
                >
                    {cta}
                </button>

                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <Check
                                className={`h-5 w-5 mt-0.5 flex-shrink-0 transition-colors ${feature.included
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-slate-300 dark:text-slate-600"
                                    }`}
                            />
                            <span
                                className={`text-sm transition-colors ${feature.included
                                    ? "text-slate-900 dark:text-slate-100 font-medium"
                                    : "text-slate-500 dark:text-slate-500 line-through"
                                    }`}
                            >
                                {feature.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
