import { sendRequest } from "@/util/Api";
import { Crown, Sparkles, Zap } from "lucide-react";
import { AICreditInfo } from "../components/pricing/AICreditInfo";
import { PricingBenefits } from "../components/pricing/PricingBenefit";
import { PricingCard } from "../components/pricing/PricingCard";

const pricingPlans = [
    {
        name: "Free",
        price: 0,
        period: "forever",
        description: "Perfect for getting started",
        icon: <Sparkles className="h-6 w-6" />,
        credits: 5,
        cta: "Get Started",
        features: [
            { name: "1 Resume Template", included: true },
            { name: "Basic resume builder", included: true },
            { name: "5 AI credits/month", included: true },
            { name: "Limited downloads", included: true },
            { name: "Email support", included: false },
            { name: "ATS optimization", included: false },
            { name: "Premium templates", included: false },
            { name: "Priority support", included: false },
        ],
    },
    {
        name: "Premium",
        price: 9,
        period: "/month",
        description: "For serious job seekers",
        icon: <Crown className="h-6 w-6" />,
        credits: 50,
        cta: "Start Free Trial",
        isPopular: true,
        features: [
            { name: "All templates", included: true },
            { name: "Unlimited resumes", included: true },
            { name: "50 AI credits/month", included: true },
            { name: "Unlimited downloads", included: true },
            { name: "Email support", included: true },
            { name: "ATS optimization", included: true },
            { name: "Premium templates", included: true },
            { name: "Priority support", included: false },
        ],
    },
    {
        name: "Pro",
        price: 29,
        period: "/month",
        description: "For career maximizers",
        icon: <Zap className="h-6 w-6" />,
        credits: 500,
        cta: "Upgrade to Pro",
        features: [
            { name: "All templates", included: true },
            { name: "Unlimited resumes", included: true },
            { name: "500 AI credits/month", included: true },
            { name: "Unlimited downloads", included: true },
            { name: "Email support", included: true },
            { name: "ATS optimization", included: true },
            { name: "Premium templates", included: true },
            { name: "Priority support", included: true },
        ],
    },
];

export const PricingPage = () => {
    const handleSelectPlan = async (planName: string) => {
        const selectedPlan = pricingPlans.find(i => i.name === planName);
        try {
            const body = {
                name: selectedPlan.name,
                amount: selectedPlan.price,
                currency: "INR",
                receipt: `receipt#${Date.now()}`,
                note: {},
            };
            const order = await sendRequest(
                "/payment/razorpay/create-order",
                "POST",
                body
            );

            // Open Razorpay Checkout
            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "Mayuresh Developers",
                description: "Test Transaction",
                order_id: order.id,
                callback_url: `${import.meta.env.VITE_NODE_APP
                    }/payment/razorpay/payment-success?order_id=${order.id}`,
                prefill: {
                    name: "Mayuresh",
                    email: "mayureshpatil533@gamil.com",
                    contact: "8329365669",
                },
                theme: {
                    color: "#F37254",
                },
                handler: function (response) {
                    fetch(
                        `${import.meta.env.VITE_NODE_APP
                        }/payment/razorpay/verify-payment`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            }),
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.status === "ok") {
                                window.location.href = `${import.meta.env.VITE_NODE_APP
                                    }/payment/razorpay/payment-success?order_id=${order.id}`;
                            } else {
                                alert("Payment verification failed");
                            }
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                            alert("Error verifying payment");
                        });
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-cyan-300/10 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center mb-16 space-y-4 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-300 dark:border-blue-700">
                            <Sparkles className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
                            <span className="text-sm font-semibold text-blue-900 dark:text-cyan-300">
                                Simple, Transparent Pricing
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
                            Choose Your Plan
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Start free, upgrade when you need to. No hidden fees, cancel
                            anytime.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {pricingPlans.map((plan, idx) => (
                            <div key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                                <PricingCard
                                    {...plan}
                                    onSelect={() => handleSelectPlan(plan.name)}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mb-12 py-8 bg-blue-50 dark:bg-slate-800/50 rounded-2xl border border-blue-200 dark:border-slate-700">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                            All plans include
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            24/7 customer support • Secure data encryption • No credit card
                            required on free plan
                        </p>
                    </div>

                    <PricingBenefits />

                    <AICreditInfo />

                    <div className="mt-20 text-center space-y-4 py-12">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Have questions?
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Check our FAQ or contact our support team
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/faq"
                                className="px-6 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:border-blue-600 dark:hover:border-cyan-400 transition-all"
                            >
                                View FAQ
                            </a>
                            <a
                                href="/contact"
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
