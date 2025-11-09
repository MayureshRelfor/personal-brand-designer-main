import { ArrowRight, CheckCircle2, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                AI-Powered Resume Builder
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-7xl leading-tight">
                This resume builder gets you{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  an interview
                </span>
              </h1>
              <p className="text-xl text-slate-600 md:text-2xl leading-relaxed max-w-xl">
                Only 2% of resumes win. Yours will be one of them.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200">
                <Link to="/start">Create my resume</Link>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-xl hover:border-slate-400 hover:shadow-lg transition-all duration-200">
                <Link to="/templates">Browse Templates</Link>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  39% more likely to land the job
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600">
                  4.4 out of 5 | 37,389 reviews
                </span>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-2xl mx-auto animate-fade-in delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-2xl opacity-60"></div>
            <div className="relative backdrop-blur-xl bg-white/70 dark:bg-slate-900/40 border border-white/30 shadow-2xl rounded-3xl p-10 space-y-10">
              {/* Header */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-4/5"></div>
                  <div className="h-4 bg-slate-100 dark:bg-slate-600 rounded w-3/5"></div>
                </div>
              </div>
              {/* Body */}
              <div className="space-y-4">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/5"></div>
              </div>
              {/* Footer */}
              <div className="pt-6 border-t border-slate-300/50 dark:border-slate-700/50 space-y-4">
                {["blue-500", "cyan-500", "blue-500"].map((dot, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-3 h-3 bg-${dot} rounded-full`}></div>
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
    </section>
  );
};
