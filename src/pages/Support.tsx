import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileQuestion, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const quickHelp = [
  {
    icon: FileQuestion,
    title: "FAQ",
    description: "Find quick answers to common questions",
    link: "/faq",
  },
  {
    icon: MessageSquare,
    title: "Career Guide",
    description: "Comprehensive guides and tutorials",
    link: "/career-guide",
  },
  {
    icon: HelpCircle,
    title: "Blog",
    description: "Tips, tricks, and career advice",
    link: "/blog",
  },
];

const Support = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Support form submitted");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="How can we help you?"
          description="Get the support you need to create your perfect resume"
        />

        {/* Quick Help Section */}
        <section className="container py-20 md:py-28">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Quick Help Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our resources for instant answers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {quickHelp.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full border-2 transition-all hover:border-primary hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container py-20 md:py-28 bg-accent/30">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-base">
                  Our support team typically responds within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or issue..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
