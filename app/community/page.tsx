import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter, MessageSquare, Plus, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import MainNavigation from "@/components/main-navigation"

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">BP</span>
              </div>
              <span className="font-bold text-xl">BioPrint Hub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <MainNavigation />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Community</h1>
              <p className="text-muted-foreground">
                Connect, share, and solve problems with fellow bio printing enthusiasts
              </p>
            </div>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/community/new-post">
                  <Plus className="h-4 w-4 mr-2" />
                  New Post
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="space-y-4 sticky top-24">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search community..." className="pl-8" />
                </div>

                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Filters</h3>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        <span>Filter</span>
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer">
                          All
                        </Badge>
                        <Badge variant="secondary" className="cursor-pointer">
                          Problems
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Models
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Discussions
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Announcements
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer">
                          Vascular
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Bone
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Cardiac
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Neural
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Skin
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Status</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer">
                          All
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Solved
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Unsolved
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-3">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="problems">Problems</TabsTrigger>
                    <TabsTrigger value="models">Models</TabsTrigger>
                    <TabsTrigger value="discussions">Discussions</TabsTrigger>
                  </TabsList>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="hidden md:flex">
                      <Filter className="h-4 w-4 mr-2" />
                      <span>Sort: Latest</span>
                    </Button>
                  </div>
                </div>

                <TabsContent value="all" className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 bg-muted/30">
                          <div className="flex items-center gap-2 mb-4">
                            <Badge variant={i % 2 === 0 ? "secondary" : "outline"}>
                              {i % 2 === 0 ? "Problem" : "Discussion"}
                            </Badge>
                            {i % 3 === 0 && (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Solved
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-primary font-medium text-sm">U{i + 1}</span>
                            </div>
                            <div>
                              <p className="text-sm font-medium">User{i + 1}</p>
                              <p className="text-xs text-muted-foreground">
                                {i + 1} day{i !== 0 ? "s" : ""} ago
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 p-4">
                          <h3 className="text-lg font-medium mb-2">
                            <Link href="#" className="hover:underline">
                              {i % 2 === 0
                                ? `Issue with bio printing ${["vascular", "neural", "cardiac", "bone", "skin"][i % 5]} tissue`
                                : `Sharing my experience with ${["Model X3", "BioMatrix Pro", "CellPrint 2000", "TissueForge", "VitaPrint"][i % 5]}`}
                            </Link>
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {i % 2 === 0
                              ? `I'm having trouble with the ${["temperature", "pressure", "humidity", "calibration", "material flow"][i % 5]} settings when printing ${["vascular", "neural", "cardiac", "bone", "skin"][i % 5]} tissue. The cells aren't surviving the process.`
                              : `After several months of experimentation, I've optimized the settings for ${["vascular", "neural", "cardiac", "bone", "skin"][i % 5]} tissue printing. Here's what worked for me...`}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{(i + 1) * 7} replies</span>
                            </div>
                            <div>
                              <span>Views: {(i + 1) * 43}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}

                  <div className="flex justify-center mt-8">
                    <Button variant="outline">Load More</Button>
                  </div>
                </TabsContent>

                <TabsContent value="problems">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      Switch to the Problems tab to see technical issues and solutions.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="models">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Switch to the Models tab to see shared 3D models.</p>
                  </div>
                </TabsContent>

                <TabsContent value="discussions">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      Switch to the Discussions tab to see community conversations.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">BP</span>
              </div>
              <span className="font-bold">BioPrint Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">The ultimate platform for bio printing enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

