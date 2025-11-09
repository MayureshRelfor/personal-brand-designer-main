import { BarChart3, FileText, Wand2, Zap } from "lucide-react";

interface CreditUsage {
    action: string;
    credits: number;
    icon: React.ReactNode;
}

const creditUsage: CreditUsage[] = [
    {
        action: "Generate Resume",
        credits: 5,
        icon: <FileText className="h-5 w-5" />,
    },
    {
        action: "AI Rewrite",
        credits: 2,
        icon: <Wand2 className="h-5 w-5" />,
    },
    {
        action: "Format Optimization",
        credits: 1,
        icon: <BarChart3 className="h-5 w-5" />,
    },
];

export const AICreditInfo = () => {
    const totalUsed = creditUsage.reduce((sum, item) => sum + item.credits, 0);
    const remainingCredits = 50 - totalUsed;

    return (
        <section className="py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-300 dark:border-amber-700">
                        <Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <span className="text-sm font-semibold text-amber-900 dark:text-amber-300">
                            AI Credit System
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        How AI Credits Work
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Each action uses a specific number of credits. Purchase plans include
                        monthly credit allowances.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                            Credit Usage Examples
                        </h3>
                        {creditUsage.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:shadow-md transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                                        {item.icon}
                                    </div>
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {item.action}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50">
                                    <Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                                    <span className="font-bold text-amber-900 dark:text-amber-300">
                                        {item.credits}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                            Your Credit Balance
                        </h3>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800/50 space-y-4">
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        Available Credits
                                    </p>
                                    <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                                        {remainingCredits}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        This Month
                                    </p>
                                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                                        50
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-slate-600 dark:text-slate-400">
                                        Used This Month
                                    </span>
                                    <span className="font-semibold text-slate-900 dark:text-white">
                                        {totalUsed} / 50
                                    </span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-500"
                                        style={{ width: `${(totalUsed / 50) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 border border-green-200 dark:border-green-800/50 space-y-2">
                            <p className="text-sm font-semibold text-green-900 dark:text-green-300">
                                ✓ Unused credits roll over each month
                            </p>
                            <p className="text-sm text-green-800 dark:text-green-400">
                                Upgrade anytime to get more credits immediately
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
