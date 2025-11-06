import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background">
      <div className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-up space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                This resume builder gets you{" "}
                <span className="text-primary">an interview</span>
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Only 2% of resumes win. Yours will be one of them.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <Link to="/builder">
                  Create my resume
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link to="/upload">Upload my resume</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">39% more likely to land the job</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.4 out of 5 | 37,389 reviews</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <img
              src={heroImage}
              alt="Resume builder preview"
              className="relative rounded-2xl shadow-2xl border"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};
