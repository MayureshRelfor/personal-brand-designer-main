import {
  CheckCircle,
  FileCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import pic1 from "@/assets/users/pic1.jpg";
import pic2 from "@/assets/users/pic2.jpg";
import pic3 from "@/assets/users/pic3.jpg";
import pic4 from "@/assets/users/pic4.jpg";
import pic5 from "@/assets/users/pic5.jpg";

const features = [
  {
    icon: Sparkles,
    title: "A draft in 10 mins",
    description:
      "The AI builder is 10x faster than doing it on your own. Get a polished resume ready in minutes.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: CheckCircle,
    title: "Zero mistakes",
    description:
      "Don't stress over typos; you'll sound great! Our AI checks grammar and formatting automatically.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: FileCheck,
    title: "ATS templates",
    description:
      "Your resume will be 100% compliant. Recruiters will see you. Beat applicant tracking systems.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    title: "Get paid 7% more",
    description:
      "We can help you negotiate a higher starting salary with proven strategies and templates.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
  },
];

const imgArr = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5
];

export const Features = () => {
  return (
    <section id="features" className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 shadow-sm">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-900">
            Powerful Features
          </span>
        </div>
        <h2 className="p-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          Every tool you need is here
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Build, optimize, and land your dream job with our comprehensive suite
          of tools
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative space-y-4">
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-slate-600 text-lg mb-4">
          Helping thousands of professionals build better resumes
        </p>

        <div className="flex justify-center items-center gap-5 flex-wrap">

          {/* Profile circles */}
          <div className="flex -space-x-2">
            {imgArr.map((s, i) => (
              <img
                key={i}
                src={s}
                alt="User"
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>

          {/* Text */}
          <span className="text-slate-700 text-base font-semibold">
            50K+ satisfied users
          </span>
        </div>
      </div>

    </section>
  );
};
