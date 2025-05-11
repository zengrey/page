import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Heart, MessageSquare, Share2 } from "lucide-react"
import Link from "next/link"

export default function FeaturedModels() {
  const featuredModels = [
    {
      id: 1,
      title: "Vascular Network Structure",
      description: "A complex vascular network model optimized for bio printing with high precision.",
      author: "Dr. Emily Chen",
      likes: 342,
      comments: 56,
      downloads: 189,
      image: "/blood.jpg?height=300&width=400",
      tags: ["Vascular", "Medical", "Featured"],
    },
    {
      id: 2,
      title: "Cardiac Tissue Scaffold",
      description: "Specialized scaffold design for cardiac tissue engineering with integrated channels.",
      author: "Prof. Michael Rodriguez",
      likes: 287,
      comments: 42,
      downloads: 156,
      image: "/Cardiacmuscle.jpg?height=300&width=400",
      tags: ["Cardiac", "Scaffold", "Premium"],
    },
    {
      id: 3,
      title: "Bone Regeneration Matrix",
      description: "Customizable bone matrix design with optimized porosity for cell growth.",
      author: "Dr. Sarah Johnson",
      likes: 215,
      comments: 38,
      downloads: 127,
      image: "/bone.jpg?height=300&width=400",
      tags: ["Bone", "Regenerative", "Open Source"],
    },
    {
      id: 4,
      title: "Neural Pathway Template",
      description: "Precise neural pathway template for advanced neural tissue engineering.",
      author: "Dr. James Wilson",
      likes: 198,
      comments: 29,
      downloads: 112,
      image: "/n.jpg?height=300&width=400",
      tags: ["Neural", "Research", "Featured"],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {featuredModels.map((model) => (
        <Card key={model.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative">
              <img src={model.image || "/placeholder.svg"} alt={model.title} className="w-full h-48 object-cover" />
              <div className="absolute top-2 right-2 flex gap-1">
                {model.tags.map((tag, index) => (
                  <Badge key={index} variant={tag === "Premium" ? "default" : "secondary"}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-1 line-clamp-1">{model.title}</h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{model.description}</p>
            <p className="text-sm">
              By{" "}
              <Link href="#" className="text-primary hover:underline">
                {model.author}
              </Link>
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <div className="flex gap-3 text-muted-foreground text-sm">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" /> {model.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" /> {model.comments}
              </span>
              <span className="flex items-center gap-1">
                <Download className="h-4 w-4" /> {model.downloads}
              </span>
            </div>
            <Button size="icon" variant="ghost">
              <Share2 className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

