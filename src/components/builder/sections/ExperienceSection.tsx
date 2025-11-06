import { Dispatch, SetStateAction } from "react";
import { ResumeData } from "@/pages/Builder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Briefcase, Plus, Trash2 } from "lucide-react";

interface ExperienceSectionProps {
  resumeData: ResumeData;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
}

export const ExperienceSection = ({ resumeData, setResumeData }: ExperienceSectionProps) => {
  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now().toString(),
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const updateExperience = (id: string, field: string, value: string | boolean) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-primary" />
            Work Experience
          </CardTitle>
          <Button onClick={addExperience} size="sm" variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Experience
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {resumeData.experience.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">
            No work experience added yet. Click "Add Experience" to get started.
          </p>
        ) : (
          resumeData.experience.map((exp) => (
            <div key={exp.id} className="space-y-4 p-4 border rounded-lg relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeExperience(exp.id)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Company *</Label>
                  <Input
                    placeholder="Company Name"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Position *</Label>
                  <Input
                    placeholder="Job Title"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  placeholder="City, State"
                  value={exp.location}
                  onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Start Date *</Label>
                  <Input
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                    disabled={exp.current}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onCheckedChange={(checked) =>
                    updateExperience(exp.id, "current", checked as boolean)
                  }
                />
                <Label htmlFor={`current-${exp.id}`} className="text-sm font-normal">
                  I currently work here
                </Label>
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  placeholder="Describe your responsibilities and achievements..."
                  rows={4}
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};
