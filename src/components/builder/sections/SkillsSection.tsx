import { Dispatch, SetStateAction, useState } from "react";
import { ResumeData } from "@/pages/Builder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Plus, X } from "lucide-react";

interface SkillsSectionProps {
  resumeData: ResumeData;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
}

export const SkillsSection = ({ resumeData, setResumeData }: SkillsSectionProps) => {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() && !resumeData.skills.includes(skillInput.trim())) {
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button onClick={addSkill} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {resumeData.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="pl-3 pr-2 py-1.5">
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 hover:text-destructive transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-muted-foreground py-4">
            No skills added yet. Add skills to showcase your expertise.
          </p>
        )}
      </CardContent>
    </Card>
  );
};
