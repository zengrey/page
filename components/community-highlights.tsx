import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommunityHighlights() {
  const discussionPosts = [
    {
      id: 1,
      title: "Issues with temperature regulation on Model X3",
      content:
        "I've been experiencing inconsistent temperature readings on my Model X3 bio printer. The fluctuations are affecting my cell viability. Has anyone else encountered this issue?",
      author: {
        name: "Alex Thompson",
        avatar: "/icon.jpg?height=40&width=40",
        initials: "AT",
      },
      replies: 23,
      likes: 17,
      tags: ["Technical Issue", "Model X3"],
      solved: false,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      title: "Successfully printed functional liver tissue!",
      content:
        "After months of optimization, I've finally managed to print functional liver tissue with 90% viability. I'm sharing my protocol and settings for anyone interested.",
      author: {
        name: "Dr. Maria Garcia",
        avatar: "/icon.jpg?height=40&width=40",
        initials: "MG",
      },
      replies: 45,
      likes: 89,
      tags: ["Success Story", "Liver Tissue"],
      solved: true,
      timeAgo: "1 day ago",
    },
    {
      id: 3,
      title: "Looking for collaborators on cartilage printing project",
      content:
        "Our lab is starting a new project on bio printing cartilage for joint repair. We're looking for collaborators with experience in chondrocyte culture and scaffold design.",
      author: {
        name: "Prof. David Kim",
        avatar: "/icon.jpg?height=40&width=40",
        initials: "DK",
      },
      replies: 12,
      likes: 34,
      tags: ["Collaboration", "Cartilage"],
      solved: false,
      timeAgo: "3 days ago",
    },
  ]

  return (
    <div className="space-y-6">
      <Tabs defaultValue="discussions">
        <TabsList className="mb-4">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="problems">Problems</TabsTrigger>
          <TabsTrigger value="models">Recent Models</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-4">
          {discussionPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{post.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">{post.author.name}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                  {post.solved && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Solved
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm line-clamp-2">{post.content}</p>
                <div className="flex gap-2 mt-3">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="gap-1 h-8">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1 h-8">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.replies}</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/community/discussions/${post.id}`}>View Discussion</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/community/discussions">View All Discussions</Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="problems" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                Switch to the Problems tab to see technical issues and solutions from the community.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                Switch to the Models tab to see recently shared 3D models from the community.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

