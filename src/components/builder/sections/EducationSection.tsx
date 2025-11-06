import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeData } from "@/pages/Builder";
import { GraduationCap, Plus, Trash2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface EducationSectionProps {
  resumeData: ResumeData;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
}

export const EducationSection = ({ resumeData, setResumeData }: EducationSectionProps) => {
  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Date.now().toString(),
          school: "",
          degree: "",
          field: "",
          location: "",
          graduationDate: "",
          description: "",
        },
      ],
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </CardTitle>
          <Button onClick={addEducation} size="sm" variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Education
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {resumeData.education.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-8">
            No education added yet. Click "Add Education" to get started.
          </p>
        ) : (
          resumeData.education.map((edu) => (
            <div key={edu.id} className="space-y-4 p-4 border rounded-lg relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => removeEducation(edu.id)}
              >
                <Trash2 className="h-4 w-4 text-destructive" />
              </Button>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>School/University *</Label>
                  <Input
                    placeholder="University Name"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Degree *</Label>
                  <Input
                    placeholder="Bachelor's, Master's, etc."
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Field of Study *</Label>
                  <Input
                    placeholder="Computer Science, Business, etc."
                    value={edu.field}
                    onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Location</Label>
                  <Input
                    placeholder="City, State"
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, "location", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Graduation Date</Label>
                <Input
                  type="month"
                  value={edu.graduationDate}
                  onChange={(e) => updateEducation(edu.id, "graduationDate", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Additional Information</Label>
                <Textarea
                  placeholder="GPA, honors, relevant coursework..."
                  rows={3}
                  value={edu.description}
                  onChange={(e) => updateEducation(edu.id, "description", e.target.value)}
                />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
};
