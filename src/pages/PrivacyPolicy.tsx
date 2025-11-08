import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import { useState } from "react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-collection", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "your-rights", title: "Your Rights" },
  { id: "cookies", title: "Cookies and Tracking" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background">
          <div className="container py-16 md:py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </section>

        <section className="container py-12 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav className="space-y-1">
                <p className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wide">
                  On This Page
                </p>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "block w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                      activeSection === section.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <section id="introduction" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to ResumeBuilder ("we," "our," or "us"). We are committed to protecting your personal
                  information and your right to privacy. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you use our website and services.
                </p>
                <p className="text-muted-foreground">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                  please do not access the site or use our services.
                </p>
              </section>

              <section id="information-collection" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Create an account and profile</li>
                  <li>Use our resume builder and other services</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Contact us for customer support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  The types of information we may collect include your name, email address, phone number,
                  resume content, payment information, and any other information you choose to provide.
                </p>
              </section>

              <section id="how-we-use" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing and promotional communications (with your consent)</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                </ul>
              </section>

              <section id="information-sharing" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>With your consent:</strong> We may share your information with your explicit consent</li>
                  <li><strong>Service providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                  <li><strong>Legal requirements:</strong> We may disclose information if required by law or in response to legal requests</li>
                  <li><strong>Business transfers:</strong> Information may be transferred in connection with a merger, sale, or acquisition</li>
                </ul>
              </section>

              <section id="data-security" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                  over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section id="your-rights" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
                <p className="text-muted-foreground">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct or update your information</li>
                  <li>Delete your information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Data portability</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to collect and track information about your use
                  of our services. You can control cookies through your browser settings and other tools. However,
                  blocking cookies may affect your ability to use certain features of our services.
                </p>
              </section>

              <section id="children" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for children under the age of 13. We do not knowingly collect
                  personal information from children under 13. If you are a parent or guardian and believe your
                  child has provided us with personal information, please contact us.
                </p>
              </section>

              <section id="changes" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                  the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review
                  this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section id="contact" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-accent/30 rounded-lg border-2">
                  <p className="font-semibold">ResumeBuilder</p>
                  <p className="text-muted-foreground mt-2">Email: privacy@resumebuilder.com</p>
                  <p className="text-muted-foreground">Address: 123 Career Street, Suite 100, San Francisco, CA 94102</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
