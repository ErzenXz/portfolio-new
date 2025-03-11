import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  featured?: boolean
  tags?: string[]
}

export default function ProjectCard({ title, description, link, featured, tags }: ProjectCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all duration-500 hover:shadow-2xl group ${featured ? "border-primary/20" : ""} rounded-xl`}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 backdrop-blur-sm px-3 py-1"
            >
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <CardHeader className="relative z-10 -mt-6 bg-background/80 backdrop-blur-sm rounded-t-xl transition-all duration-500 group-hover:-mt-24 border-t border-border/50">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 pb-4">
        {tags && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-background/50 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-background pt-0">
        <Button asChild variant="outline" className="w-full group-hover:bg-primary/10 transition-colors rounded-full">
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            View Project <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

