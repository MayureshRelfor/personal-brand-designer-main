import { ArrowRight, CheckCircle } from "lucide-react";
import React, { useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

const PaymentSuccessPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const order_id = searchParams.get("order_id");

  // ✅ Auto redirect after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 10000);

    return () => clearTimeout(timer);
  }, []);


  if (!order_id) {
    return <Navigate to="/pricing" replace />;
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6 
                    bg-gradient-to-br from-slate-100 to-white 
                    dark:bg-gradient-to-br dark:from-slate-900 dark:to-black
                    text-slate-900 dark:text-white relative overflow-hidden">

      {/* Background Glow (auto-adjusts in dark mode) */}
      <div className="absolute inset-0 
                      bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.15),transparent_40%)] 
                      dark:bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.25),transparent_40%)]">
      </div>
      <div className="absolute inset-0 
                      bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_40%)] 
                      dark:bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_40%)]">
      </div>

      {/* Card */}
      <div className="relative z-10 max-w-md w-full 
                      bg-white/90 backdrop-blur-xl 
                      dark:bg-white/5 dark:backdrop-blur-xl 
                      border border-slate-200 dark:border-white/10
                      shadow-2xl rounded-2xl p-10 text-center">

        {/* Success Icon */}
        <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full 
                        bg-green-500/10 dark:bg-green-500/20
                        border border-green-400/30 mb-6">
          <CheckCircle className="text-green-500" size={50} strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Payment Successful
        </h1>

        <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
          Thank you! Your payment was processed successfully. Your premium access is now active.
        </p>

        <div className="bg-slate-100 dark:bg-white/10 
                        border border-slate-200 dark:border-white/10 
                        rounded-lg py-3 px-4 mb-8">
          <p className="text-xs text-slate-500 dark:text-gray-400 mb-1">Order ID</p>
          <p className="text-sm font-semibold tracking-wide">
            {order_id}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/start"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                       bg-gradient-to-r from-blue-600 to-cyan-500 text-white
                       font-semibold shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            Start Building Resume
            <ArrowRight size={16} />
          </Link>

          <Link
            to="/account/payments"
            className="flex items-center justify-center px-6 py-3 rounded-lg
                       bg-white border border-slate-300 
                       dark:bg-white/10 dark:border-white/20
                       hover:bg-slate-100 dark:hover:bg-white/20
                       transition-all duration-200 font-semibold shadow-lg"
          >
            View Details
          </Link>

        </div>

      </div>
    </div>
  );
};

export default PaymentSuccessPage;
