import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronDown, Search, Star } from "lucide-react"
import Link from "next/link"
import MainNavigation from "@/components/main-navigation"

export default function MarketplacePage() {
  const plans = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: [
      "Advanced Tissue Engineering Suite",
      "Vascular Network Optimization Pack",
      "Bone & Cartilage Printing Bundle",
      "Neural Pathway Template Pack",
      "Skin Tissue Engineering Kit",
      "Organ-on-Chip Printing Solution",
      "Cell Viability Optimization Suite",
      "Research Lab Starter Pack",
    ][i % 8],
    description: "Specialized bio printing plan with optimized parameters and materials for professional results.",
    price: ["$299.99", "$149.99", "$199.99", "$249.99", "$179.99", "$349.99", "$129.99", "$99.99"][i % 8],
    subscription: [
      "$49.99/month",
      "$24.99/month",
      "$34.99/month",
      "$39.99/month",
      "$29.99/month",
      "$59.99/month",
      "$19.99/month",
      "$14.99/month",
    ][i % 8],
    creator: [
      "BioPrint Inc.",
      "Dr. Robert Chen",
      "OrthoTech Solutions",
      "NeuroPrint Labs",
      "DermaTech Innovations",
      "OrganSystems",
      "CellTech Solutions",
      "BioPrint Inc.",
    ][i % 8],
    official: [true, false, false, false, false, false, false, true][i % 8],
    rating: [4.8, 4.6, 4.7, 4.5, 4.3, 4.9, 4.4, 4.5][i % 8],
    reviews: [124, 87, 92, 76, 58, 103, 64, 68][i % 8],
    features: [
      "Specialized bio-ink formulations",
      "Optimized printing parameters",
      "Technical support",
      "Documentation and tutorials",
    ],
    image: ["/Cardiacmuscle.jpg?height=200&width=400","/Blood.jpg?height=200&width=400","/bone.jpg?height=200&width=400","/n.jpg?height=200&width=400","/c.jpg?height=200&width=400","/organ-on-chip.jpg?height=200&width=400","/cell.jpg?height=200&width=400","/lab.jpg?height=200&width=400"],
    popular: [true, false, true, false, false, true, false, false][i % 8],
    category: ["Tissue Engineering", "Vascular", "Orthopedic", "Neural", "Dermal", "Organ", "Research", "Starter"][
      i % 8
    ],
  }))

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
              <h1 className="text-3xl font-bold tracking-tight">Customization Marketplace</h1>
              <p className="text-muted-foreground">Browse, purchase, or subscribe to custom printing plans</p>
            </div>
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/customization/create">Create & Sell Plan</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="space-y-4 sticky top-24">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search plans..." className="pl-8" />
                </div>

                <Card>
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Filters</h3>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-primary">
                        Reset
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Categories</h4>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer">
                          All
                        </Badge>
                        <Badge variant="secondary" className="cursor-pointer">
                          Tissue Engineering
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Vascular
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                          Orthopedic
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Price Range</h4>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Min" type="number" />
                        <Input placeholder="Max" type="number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Rating</h4>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col gap-1">
                        {[4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`rating-${rating}`}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            <label htmlFor={`rating-${rating}`} className="text-sm flex items-center gap-1">
                              {rating}+ <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Creator</h4>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="official" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="official" className="text-sm">
                            Official Plans
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="community" className="h-4 w-4 rounded border-gray-300" />
                          <label htmlFor="community" className="text-sm">
                            Community Plans
                          </label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:col-span-3">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <TabsList>
                    <TabsTrigger value="all">All Plans</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                    <TabsTrigger value="new">New</TabsTrigger>
                    <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
                  </TabsList>

                  <div className="flex items-center gap-2">
                    <select className="text-sm border rounded-md px-2 py-1">
                      <option>Sort: Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating: High to Low</option>
                      <option>Newest</option>
                    </select>
                  </div>
                </div>

                <TabsContent value="all" className="space-y-4">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                      <Card key={plan.id} className="flex flex-col">
                        <CardHeader className="p-0">
                          <div className="relative">
                            <img
                              src={plan.image[plan.id-1] || "/placeholder.svg"}
                              alt={plan.title}
                              className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <div className="absolute top-2 left-2 flex gap-1">
                              {plan.official && <Badge variant="default">Official</Badge>}
                              {plan.popular && <Badge variant="secondary">Popular</Badge>}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 flex-1">
                          <h3 className="font-bold text-lg mb-1">{plan.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{plan.description}</p>
                          <div className="flex items-center gap-1 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(plan.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium">{plan.rating}</span>
                            <span className="text-xs text-muted-foreground">({plan.reviews})</span>
                          </div>
                          <p className="text-sm mb-1">
                            By{" "}
                            <Link href="#" className="text-primary hover:underline">
                              {plan.creator}
                            </Link>
                          </p>
                          <div className="mt-3 space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">One-time purchase:</span>
                              <span className="font-bold">{plan.price}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">Subscription:</span>
                              <span className="font-bold">{plan.subscription}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex flex-col gap-2">
                          <div className="w-full text-sm space-y-1">
                            {plan.features.slice(0, 2).map((feature, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                            {plan.features.length > 2 && (
                              <div className="text-xs text-muted-foreground pl-6">
                                +{plan.features.length - 2} more features
                              </div>
                            )}
                          </div>
                          <Button className="w-full mt-2">View Plan</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button variant="outline">Load More</Button>
                  </div>
                </TabsContent>

                <TabsContent value="popular">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Switch to the Popular tab to see trending plans.</p>
                  </div>
                </TabsContent>

                <TabsContent value="new">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Switch to the New tab to see recently added plans.</p>
                  </div>
                </TabsContent>

                <TabsContent value="subscriptions">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      Switch to the Subscriptions tab to see subscription-based plans.
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

