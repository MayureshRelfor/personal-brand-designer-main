import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal, X } from "lucide-react";

export interface FilterOptions {
  photo: "all" | "with" | "without";
  columns: "all" | "one" | "two" | "three";
  style: string[];
  industry: string[];
  atsFriendly: boolean;
  premiumOnly: boolean;
}

interface SidebarFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  isMobile?: boolean;
}

const FilterContent = ({ filters, onFilterChange }: Omit<SidebarFilterProps, "isMobile">) => {
  const handleStyleToggle = (style: string) => {
    const newStyles = filters.style.includes(style)
      ? filters.style.filter((s) => s !== style)
      : [...filters.style, style];
    onFilterChange({ ...filters, style: newStyles });
  };

  const handleIndustryToggle = (industry: string) => {
    const newIndustries = filters.industry.includes(industry)
      ? filters.industry.filter((i) => i !== industry)
      : [...filters.industry, industry];
    onFilterChange({ ...filters, industry: newIndustries });
  };

  const handleReset = () => {
    onFilterChange({
      photo: "all",
      columns: "all",
      style: [],
      industry: [],
      atsFriendly: false,
      premiumOnly: false,
    });
  };

  return (
    <div className="space-y-6">
      {/* Reset Button */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          <X className="h-4 w-4 mr-1" />
          Reset
        </Button>
      </div>

      <Separator />

      {/* Photo Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-foreground">Photo</Label>
        <RadioGroup value={filters.photo} onValueChange={(value: FilterOptions["photo"]) => onFilterChange({ ...filters, photo: value })}>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="photo-all" />
              <Label htmlFor="photo-all" className="font-normal cursor-pointer">All Templates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="with" id="photo-with" />
              <Label htmlFor="photo-with" className="font-normal cursor-pointer">With Photo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="without" id="photo-without" />
              <Label htmlFor="photo-without" className="font-normal cursor-pointer">Without Photo</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      {/* Columns Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-foreground">Layout Columns</Label>
        <RadioGroup value={filters.columns} onValueChange={(value: FilterOptions["columns"]) => onFilterChange({ ...filters, columns: value })}>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="columns-all" />
              <Label htmlFor="columns-all" className="font-normal cursor-pointer">All Layouts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one" id="columns-one" />
              <Label htmlFor="columns-one" className="font-normal cursor-pointer">Single Column</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="two" id="columns-two" />
              <Label htmlFor="columns-two" className="font-normal cursor-pointer">Two Columns</Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      {/* Style Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-foreground">Style</Label>
        <div className="space-y-2">
          {["Modern", "Minimal", "Creative", "Corporate", "Professional"].map((style) => (
            <div key={style} className="flex items-center space-x-2">
              <Checkbox
                id={`style-${style.toLowerCase()}`}
                checked={filters.style.includes(style.toLowerCase())}
                onCheckedChange={() => handleStyleToggle(style.toLowerCase())}
              />
              <Label htmlFor={`style-${style.toLowerCase()}`} className="font-normal cursor-pointer">
                {style}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Industry Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-foreground">Industry</Label>
        <div className="space-y-2">
          {["IT", "Sales", "Marketing", "Healthcare", "Finance", "Engineering", "HR", "Education"].map((industry) => (
            <div key={industry} className="flex items-center space-x-2">
              <Checkbox
                id={`industry-${industry.toLowerCase()}`}
                checked={filters.industry.includes(industry.toLowerCase())}
                onCheckedChange={() => handleIndustryToggle(industry.toLowerCase())}
              />
              <Label htmlFor={`industry-${industry.toLowerCase()}`} className="font-normal cursor-pointer">
                {industry}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Additional Filters */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-foreground">Additional</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="ats-friendly"
              checked={filters.atsFriendly}
              onCheckedChange={(checked) => onFilterChange({ ...filters, atsFriendly: !!checked })}
            />
            <Label htmlFor="ats-friendly" className="font-normal cursor-pointer">
              ATS-Friendly
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="premium-only"
              checked={filters.premiumOnly}
              onCheckedChange={(checked) => onFilterChange({ ...filters, premiumOnly: !!checked })}
            />
            <Label htmlFor="premium-only" className="font-normal cursor-pointer">
              Premium Only
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SidebarFilter = ({ filters, onFilterChange, isMobile = false }: SidebarFilterProps) => {
  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full md:hidden">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Filter Templates</SheetTitle>
          </SheetHeader>
          <div className="mt-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
            <FilterContent filters={filters} onFilterChange={onFilterChange} />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside className="hidden md:block w-64 shrink-0">
      <div className="sticky top-20 bg-card border border-border rounded-lg shadow-sm p-6 max-h-[calc(100vh-6rem)] overflow-y-auto">
        <FilterContent filters={filters} onFilterChange={onFilterChange} />
      </div>
    </aside>
  );
};
