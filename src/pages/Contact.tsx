import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "support@resumebuilder.com",
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "123 Career Street, Suite 100",
    description: "San Francisco, CA 94102",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday",
    description: "9:00 AM - 6:00 PM PST",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Get in Touch"
          description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-up">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours
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
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
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

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  Choose the way that works best for you to get in touch with our team
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{info.title}</CardTitle>
                          <p className="text-base font-medium text-foreground">{info.content}</p>
                          <CardDescription className="text-sm">{info.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="border-2 overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground">Map Location</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
