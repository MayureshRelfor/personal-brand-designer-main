import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 transition-all hover:opacity-80 group"
          >
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md hover:scale-105 transition-transform"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              ResumeNest
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#features"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Features
            </a>
            <a
              href="/templates"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Templates
            </a>
            <a
              href="/builder"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
            >
              Resume Builder
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">
              Sign in
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200">
              Create Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
