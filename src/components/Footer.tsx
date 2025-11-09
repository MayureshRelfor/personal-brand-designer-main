import logo from "@/assets/logo.png";
import { Github, Linkedin, Twitter } from "lucide-react";
const footerLinks = {
  product: [
    { name: "Resume Templates", href: "/templates" },
    { name: "Resume Builder", href: "/start" },
    { name: "Cover Letter Builder", href: "/cover-letter-builder" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Career Guide", href: "/career-guide" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <a href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-md hover:scale-105 transition-transform"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                ResumeNest
              </span>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Build professional resumes that get you hired. Join thousands of
              successful job seekers who landed their dream careers with our
              AI-powered builder.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                className="p-2 text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                className="p-2 text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} ResumeNest. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Terms
              </a>
              <a
                href="/cookies"
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
