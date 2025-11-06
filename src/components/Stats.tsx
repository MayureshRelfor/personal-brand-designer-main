import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export const Stats = () => {
  const [count, setCount] = useState(31000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-y border-slate-200 bg-gradient-to-r from-blue-50/50 via-cyan-50/50 to-blue-50/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-blue-600">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <div className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {count.toLocaleString()}
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600">
              resumes created today
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                89%
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600">
              success rate for interviews
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <svg
                className="h-6 w-6 text-amber-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="text-4xl font-extrabold md:text-5xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                4.4
              </div>
            </div>
            <p className="text-sm font-medium text-slate-600">
              average rating from users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
