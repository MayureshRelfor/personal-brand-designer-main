export interface TemplateDesign {
  id: string;
  name: string;
  fonts: {
    heading: string;
    body: string;
    headingWeight: string;
    bodyWeight: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    textLight: string;
    background: string;
    border: string;
  };
  layout: {
    type: "single-column" | "two-column" | "sidebar";
    spacing: string;
    sectionSpacing: string;
    contentPadding: string;
  };
  sections: {
    order: string[];
    showIcons: boolean;
    iconPosition: "left" | "inline";
  };
  header: {
    style: "centered" | "left" | "split";
    nameSize: string;
    titleSize: string;
    showPhoto: boolean;
    borderStyle: "none" | "bottom" | "full";
    backgroundColor?: string;
  };
  experience: {
    style: "timeline" | "minimal" | "boxed";
    accentStyle: "left-border" | "top-border" | "background" | "none";
    dateFormat: "inline" | "separate";
  };
  education: {
    style: "timeline" | "minimal" | "boxed";
    accentStyle: "left-border" | "top-border" | "background" | "none";
  };
  skills: {
    style: "pills" | "bars" | "list" | "grid";
    showLevel: boolean;
  };
  componentStyles: {
    cardShadow: string;
    borderRadius: string;
    sectionTitleStyle: string;
  };
}

export const resumeTemplates: Record<string, TemplateDesign> = {
  modern: {
    id: "modern",
    name: "Modern Blue",
    fonts: {
      heading: "font-sans",
      body: "font-sans",
      headingWeight: "font-bold",
      bodyWeight: "font-normal",
    },
    colors: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      accent: "hsl(221, 83%, 53%)",
      text: "hsl(222, 47%, 11%)",
      textLight: "hsl(215, 16%, 47%)",
      background: "hsl(0, 0%, 100%)",
      border: "hsl(214, 32%, 91%)",
    },
    layout: {
      type: "single-column",
      spacing: "space-y-6",
      sectionSpacing: "mb-6",
      contentPadding: "p-8",
    },
    sections: {
      order: ["personalInfo", "summary", "experience", "education", "skills"],
      showIcons: true,
      iconPosition: "inline",
    },
    header: {
      style: "left",
      nameSize: "text-3xl",
      titleSize: "text-lg",
      showPhoto: false,
      borderStyle: "bottom",
    },
    experience: {
      style: "timeline",
      accentStyle: "left-border",
      dateFormat: "inline",
    },
    education: {
      style: "timeline",
      accentStyle: "left-border",
    },
    skills: {
      style: "pills",
      showLevel: false,
    },
    componentStyles: {
      cardShadow: "shadow-xl",
      borderRadius: "rounded-lg",
      sectionTitleStyle: "border-b pb-2",
    },
  },

  classic: {
    id: "classic",
    name: "Classic Professional",
    fonts: {
      heading: "font-serif",
      body: "font-serif",
      headingWeight: "font-semibold",
      bodyWeight: "font-normal",
    },
    colors: {
      primary: "hsl(0, 0%, 20%)",
      secondary: "hsl(0, 0%, 40%)",
      accent: "hsl(0, 0%, 30%)",
      text: "hsl(0, 0%, 10%)",
      textLight: "hsl(0, 0%, 50%)",
      background: "hsl(0, 0%, 100%)",
      border: "hsl(0, 0%, 80%)",
    },
    layout: {
      type: "single-column",
      spacing: "space-y-5",
      sectionSpacing: "mb-5",
      contentPadding: "p-12",
    },
    sections: {
      order: ["personalInfo", "summary", "experience", "education", "skills"],
      showIcons: false,
      iconPosition: "left",
    },
    header: {
      style: "centered",
      nameSize: "text-4xl",
      titleSize: "text-xl",
      showPhoto: false,
      borderStyle: "full",
    },
    experience: {
      style: "minimal",
      accentStyle: "none",
      dateFormat: "separate",
    },
    education: {
      style: "minimal",
      accentStyle: "none",
    },
    skills: {
      style: "list",
      showLevel: false,
    },
    componentStyles: {
      cardShadow: "shadow-md",
      borderRadius: "rounded-none",
      sectionTitleStyle: "border-b-2 pb-2 mb-4",
    },
  },

  creative: {
    id: "creative",
    name: "Creative Bold",
    fonts: {
      heading: "font-sans",
      body: "font-sans",
      headingWeight: "font-extrabold",
      bodyWeight: "font-normal",
    },
    colors: {
      primary: "hsl(280, 85%, 50%)",
      secondary: "hsl(320, 85%, 55%)",
      accent: "hsl(340, 82%, 52%)",
      text: "hsl(240, 10%, 15%)",
      textLight: "hsl(240, 5%, 45%)",
      background: "hsl(0, 0%, 100%)",
      border: "hsl(280, 40%, 90%)",
    },
    layout: {
      type: "two-column",
      spacing: "space-y-6",
      sectionSpacing: "mb-6",
      contentPadding: "p-8",
    },
    sections: {
      order: ["personalInfo", "experience", "skills", "education", "summary"],
      showIcons: true,
      iconPosition: "inline",
    },
    header: {
      style: "left",
      nameSize: "text-4xl",
      titleSize: "text-xl",
      showPhoto: false,
      borderStyle: "none",
      backgroundColor: "hsl(280, 85%, 95%)",
    },
    experience: {
      style: "boxed",
      accentStyle: "background",
      dateFormat: "inline",
    },
    education: {
      style: "boxed",
      accentStyle: "background",
    },
    skills: {
      style: "pills",
      showLevel: false,
    },
    componentStyles: {
      cardShadow: "shadow-2xl",
      borderRadius: "rounded-xl",
      sectionTitleStyle: "bg-gradient-to-r from-primary/10 to-transparent px-3 py-2 -mx-3",
    },
  },

  minimal: {
    id: "minimal",
    name: "Minimal Clean",
    fonts: {
      heading: "font-sans",
      body: "font-sans",
      headingWeight: "font-medium",
      bodyWeight: "font-light",
    },
    colors: {
      primary: "hsl(0, 0%, 10%)",
      secondary: "hsl(0, 0%, 30%)",
      accent: "hsl(0, 0%, 20%)",
      text: "hsl(0, 0%, 15%)",
      textLight: "hsl(0, 0%, 55%)",
      background: "hsl(0, 0%, 100%)",
      border: "hsl(0, 0%, 90%)",
    },
    layout: {
      type: "single-column",
      spacing: "space-y-8",
      sectionSpacing: "mb-8",
      contentPadding: "p-10",
    },
    sections: {
      order: ["personalInfo", "experience", "education", "skills", "summary"],
      showIcons: false,
      iconPosition: "left",
    },
    header: {
      style: "left",
      nameSize: "text-2xl",
      titleSize: "text-base",
      showPhoto: false,
      borderStyle: "none",
    },
    experience: {
      style: "minimal",
      accentStyle: "top-border",
      dateFormat: "separate",
    },
    education: {
      style: "minimal",
      accentStyle: "top-border",
    },
    skills: {
      style: "list",
      showLevel: false,
    },
    componentStyles: {
      cardShadow: "shadow-none",
      borderRadius: "rounded-none",
      sectionTitleStyle: "uppercase tracking-wider text-sm mb-4",
    },
  },
};

// Helper function to get template by ID or return default
export const getTemplateById = (templateId: string | null): TemplateDesign => {
  if (!templateId || !resumeTemplates[templateId]) {
    return resumeTemplates.modern; // Default fallback
  }
  return resumeTemplates[templateId];
};

// Get all template IDs for easier iteration
export const getTemplateIds = (): string[] => {
  return Object.keys(resumeTemplates);
};
