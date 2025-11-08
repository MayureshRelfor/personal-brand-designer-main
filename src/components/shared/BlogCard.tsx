import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export const BlogCard = ({ id, title, excerpt, date, readTime, tags }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`} className="block group">
      <Card className="h-full border-2 transition-all hover:border-primary hover:shadow-lg">
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base line-clamp-3">
            {excerpt}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
