import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">ResumeBuilder</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/builder" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Resume Builder
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild>
            <Link to="/builder">Create my resume</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
