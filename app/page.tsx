import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import FeaturedModels from "@/components/featured-models"
import CommunityHighlights from "@/components/community-highlights"
import CustomizationShowcase from "@/components/customization-showcase"
import MainNavigation from "@/components/main-navigation"

export default function Home() {
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
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search models, plans..."
                className="rounded-md border border-input bg-background px-3 py-2 pl-8 text-sm ring-offset-background"
              />
            </div>
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Bio Printing Experience
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Share models, solve problems, and discover custom printing plans in our growing community of bio
                    printing enthusiasts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/explore">Explore Models</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/community">Join Community</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="aspect-video overflow-hidden rounded-xl bg-muted/30 border">
                  <img
                    src="/printer-full-picture-grey-rechts.png?height=720&width=1280"
                    alt="Bio printer in action"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-12 md:px-6">
          <Tabs defaultValue="featured" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold tracking-tight">Discover Content</h2>
              <TabsList>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="featured" className="space-y-4">
              <FeaturedModels />
            </TabsContent>

            <TabsContent value="community" className="space-y-4">
              <CommunityHighlights />
            </TabsContent>

            <TabsContent value="marketplace" className="space-y-4">
              <CustomizationShowcase />
            </TabsContent>
          </Tabs>
        </section>

        <section className="container px-4 py-12 md:px-6 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Share 3D Models</h3>
                <p className="text-muted-foreground">
                  Upload and share your bio printing models with the community. Get feedback and recognition for your
                  work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Solve Problems Together</h3>
                <p className="text-muted-foreground">
                  Encounter an issue with your bio printer? Post your problem and get help from experienced community
                  members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-2">
                <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 2H2v10h10V2Z"></path>
                    <path d="M22 12h-10v10h10V12Z"></path>
                    <path d="M12 12H2v10h10V12Z"></path>
                    <path d="M22 2h-10v10h10V2Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Custom Printing Plans</h3>
                <p className="text-muted-foreground">
                  Browse, buy, or subscribe to custom printing plans from the company or other users to enhance your bio
                  printing capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
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
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

