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
    <div className="border-y bg-accent/30">
      <div className="container py-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-primary">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <div className="text-4xl font-bold md:text-5xl">
              {count.toLocaleString()}
            </div>
          </div>
          <p className="mt-2 text-lg text-muted-foreground">resumes created today</p>
        </div>
      </div>
    </div>
  );
};
