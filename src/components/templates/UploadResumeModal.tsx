import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { FileText, Sparkles, Upload } from "lucide-react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UploadResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  templateId: string;
}

export const UploadResumeModal = ({ isOpen, onClose, templateId }: UploadResumeModalProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleStartFromScratch = () => {
    navigate(`/builder?template=${templateId}`);
    onClose();
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return;

    // Validate file type
    const validTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or DOCX file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Placeholder function - This would call an API to extract resume data
      await extractResumeData(file);

      toast({
        title: "Resume uploaded successfully!",
        description: "We've extracted your information. You can now edit it.",
      });

      // Navigate to builder with prefilled data flag
      navigate(`/builder?template=${templateId}&prefilled=true`);
      onClose();
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error processing your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Do you want to upload your existing resume?</DialogTitle>
          <DialogDescription>
            Upload your current resume and our AI will automatically extract your information to save you time.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          {/* Upload Area */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 hover:bg-accent/50"
              }`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Upload className="h-8 w-8 text-primary" />
              </div>

              <div>
                <p className="text-lg font-semibold text-foreground mb-1">
                  Drop your resume here
                </p>
                <p className="text-sm text-muted-foreground">
                  or click to browse (PDF or DOCX, max 10MB)
                </p>
              </div>

              <input
                type="file"
                id="resume-upload"
                accept=".pdf,.docx"
                onChange={handleFileSelect}
                className="hidden"
                disabled={isUploading}
              />

              <Button
                variant="outline"
                onClick={() => document.getElementById("resume-upload")?.click()}
                disabled={isUploading}
              >
                <FileText className="mr-2 h-4 w-4" />
                {isUploading ? "Processing..." : "Browse Files"}
              </Button>
            </div>
          </div>

          {/* Info Notice */}
          <div className="bg-accent/50 border border-border rounded-lg p-4">
            <div className="flex gap-3">
              <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">AI-Powered Extraction</p>
                <p className="text-muted-foreground">
                  Our AI automatically extracts your experience, skills, and education from your resume, saving you time on data entry.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              onClick={handleStartFromScratch}
              size="lg"
              className="w-full"
            >
              Start from Scratch
            </Button>

            <Button
              variant="ghost"
              onClick={onClose}
              size="sm"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Placeholder function for resume data extraction
// In production, this would call an API endpoint
async function extractResumeData(file: File): Promise<void> {
  return new Promise((resolve) => {
    // Simulate API call
    setTimeout(() => {
      console.log("Extracting data from file:", file.name);
      resolve();
    }, 2000);
  });
}
