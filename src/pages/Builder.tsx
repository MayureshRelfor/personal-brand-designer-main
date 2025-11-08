import { Header } from "@/components/Header";
import { ResumeForm } from "@/components/builder/ResumeForm";
import { ResumeRenderer } from "@/components/builder/ResumeRenderer";
import { Button } from "@/components/ui/button";
import { getTemplateById, TemplateDesign } from "@/config/resumeTemplates";
import { useToast } from "@/hooks/use-toast";
import { Download, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    title: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    field: string;
    location: string;
    graduationDate: string;
    description: string;
  }>;
  skills: string[];
}

const Builder = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get("template");

  const [currentDesign, setCurrentDesign] = useState<TemplateDesign>(() =>
    getTemplateById(templateId)
  );

  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      title: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: [],
  });

  // Update design when templateId changes (dynamic template switching)
  useEffect(() => {
    const newDesign = getTemplateById(templateId);
    setCurrentDesign(newDesign);

    if (templateId) {
      toast({
        title: "Template loaded",
        description: `Using ${newDesign.name} template design`,
      });
    }
  }, [templateId, toast]);

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your resume is being prepared for download.",
    });
  };

  const handleSave = () => {
    toast({
      title: "Resume saved",
      description: "Your resume has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />

      <div className="sticky top-16 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <h1 className="text-lg font-semibold">Resume Builder</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button size="sm" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
          </div>

          <div className="lg:sticky lg:top-32 lg:h-fit">
            {/* <ResumePreview resumeData={resumeData} /> */}
            <ResumeRenderer design={currentDesign} data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
