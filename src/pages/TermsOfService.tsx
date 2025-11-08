import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import { useState } from "react";

const sections = [
  { id: "agreement", title: "Agreement to Terms" },
  { id: "use-license", title: "Use License" },
  { id: "user-accounts", title: "User Accounts" },
  { id: "prohibited-uses", title: "Prohibited Uses" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "user-content", title: "User Generated Content" },
  { id: "payment-terms", title: "Payment Terms" },
  { id: "termination", title: "Termination" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
];

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("agreement");

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
                Terms of Service
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
              <section id="agreement" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  These Terms of Service ("Terms") govern your access to and use of ResumeBuilder's website,
                  services, and applications (collectively, the "Services"). By accessing or using our Services,
                  you agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground">
                  If you do not agree to these Terms, you may not access or use the Services. We reserve the right
                  to modify these Terms at any time, and such modifications will be effective immediately upon posting.
                </p>
              </section>

              <section id="use-license" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Use License</h2>
                <p className="text-muted-foreground">
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable,
                  and revocable license to access and use our Services for your personal or internal business purposes.
                </p>
                <p className="text-muted-foreground mt-4">This license does not include any right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes without our consent</li>
                  <li>Attempt to reverse engineer any software contained on our Services</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section id="user-accounts" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">User Accounts</h2>
                <p className="text-muted-foreground">
                  When you create an account with us, you must provide accurate, complete, and current information.
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintaining the confidentiality of your account and password</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.
                </p>
              </section>

              <section id="prohibited-uses" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground">You may not use our Services to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon or violate our intellectual property rights or the rights of others</li>
                  <li>Submit false or misleading information</li>
                  <li>Upload viruses or malicious code</li>
                  <li>Collect or track personal information of others</li>
                  <li>Spam, phish, or engage in similar activities</li>
                  <li>Interfere with or circumvent security features</li>
                  <li>Impersonate or misrepresent your affiliation with any person or entity</li>
                </ul>
              </section>

              <section id="intellectual-property" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The Services and their entire contents, features, and functionality (including but not limited to
                  all information, software, text, displays, images, video, and audio, and the design, selection, and
                  arrangement thereof) are owned by ResumeBuilder, its licensors, or other providers of such material
                  and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section id="user-content" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">User Generated Content</h2>
                <p className="text-muted-foreground">
                  You retain all rights to the content you submit, post, or display on or through the Services
                  ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free
                  license to use, reproduce, modify, and distribute your User Content in connection with operating and
                  providing the Services.
                </p>
                <p className="text-muted-foreground mt-4">
                  You represent and warrant that you own or have the necessary rights to submit your User Content and
                  that it does not violate any third-party rights or applicable laws.
                </p>
              </section>

              <section id="payment-terms" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Payment Terms</h2>
                <p className="text-muted-foreground">
                  Certain features of our Services may require payment. By purchasing a subscription or service,
                  you agree to pay all fees and charges associated with your purchase. All fees are non-refundable
                  unless otherwise stated.
                </p>
                <p className="text-muted-foreground mt-4">
                  We reserve the right to change our pricing at any time. Price changes will not affect existing
                  subscriptions until the next renewal period.
                </p>
              </section>

              <section id="termination" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Termination</h2>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account and access to the Services immediately, without prior
                  notice or liability, for any reason, including if you breach these Terms. Upon termination, your
                  right to use the Services will immediately cease.
                </p>
              </section>

              <section id="disclaimer" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
                <p className="text-muted-foreground">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                  OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES
                  OR OTHER HARMFUL COMPONENTS.
                </p>
              </section>

              <section id="limitation" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL RESUMEBUILDER BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
                  INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </section>

              <section id="governing-law" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California,
                  without regard to its conflict of law provisions. Any disputes arising from these Terms or the Services
                  shall be resolved in the courts located in San Francisco, California.
                </p>
              </section>

              <section id="changes" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
                  provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material
                  change will be determined at our sole discretion.
                </p>
                <p className="text-muted-foreground mt-4">
                  By continuing to access or use our Services after any revisions become effective, you agree to be
                  bound by the revised terms.
                </p>
              </section>

              <div className="mt-12 p-6 bg-accent/30 rounded-lg border-2">
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="font-semibold">ResumeBuilder</p>
                <p className="text-muted-foreground">Email: legal@resumebuilder.com</p>
                <p className="text-muted-foreground">Address: 123 Career Street, Suite 100, San Francisco, CA 94102</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
