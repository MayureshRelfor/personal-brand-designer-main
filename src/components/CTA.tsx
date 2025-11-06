import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="container py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 md:px-16 md:py-20">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative z-10 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Ready to land your dream job?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of successful job seekers who got interviews with our resume builder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-base font-semibold" asChild>
              <Link to="/builder">
                Start building now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
