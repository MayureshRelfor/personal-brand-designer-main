import {
    BarChart3,
    Download,
    Headphones,
    Lock,
    Sparkles,
    Zap,
} from "lucide-react";

const benefits = [
    {
        icon: <Download className="h-6 w-6" />,
        title: "Unlimited Downloads",
        description: "Download your resumes in PDF, Word, or other formats",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "AI-Powered Tools",
        description: "Get AI assistance for content, formatting, and optimization",
        color: "from-amber-500 to-orange-600",
    },
    {
        icon: <Lock className="h-6 w-6" />,
        title: "ATS Optimization",
        description: "Beat applicant tracking systems with optimized formatting",
        color: "from-green-500 to-emerald-600",
    },
    {
        icon: <Headphones className="h-6 w-6" />,
        title: "Priority Support",
        description: "Get help from our support team within 24 hours",
        color: "from-purple-500 to-pink-600",
    },
    {
        icon: <Sparkles className="h-6 w-6" />,
        title: "Premium Templates",
        description: "Access to 100+ professionally designed templates",
        color: "from-cyan-500 to-blue-600",
    },
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Career Analytics",
        description: "Track your job search progress and insights",
        color: "from-red-500 to-rose-600",
    },
];

export const PricingBenefits = () => {
    return (
        <section className="py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                        Everything Included
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Get access to powerful tools and resources to land your dream job
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="group relative rounded-xl transition-all duration-300 hover:shadow-lg animate-fade-in"
                            style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                            <div
                                className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.color} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity`}
                            ></div>

                            <div className="relative bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-cyan-400 transition-colors h-full">
                                <div
                                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${benefit.color} text-white mb-4 shadow-lg`}
                                >
                                    {benefit.icon}
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                    {benefit.title}
                                </h3>

                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
