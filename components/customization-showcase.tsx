import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export default function CustomizationShowcase() {
  const customPlans = [
    {
      id: 1,
      title: "Advanced Tissue Engineering Suite",
      description:
        "Complete solution for complex tissue engineering with specialized bio-inks and optimized printing parameters.",
      price: "$299.99",
      subscription: "$49.99/month",
      creator: "BioPrint Inc.",
      official: true,
      rating: 4.8,
      reviews: 124,
      features: [
        "20+ specialized bio-ink formulations",
        "Custom parameter presets for all tissue types",
        "Advanced cell viability optimization",
        "Priority technical support",
      ],
      image: "/Cardiacmuscle.jpg?height=200&width=400",
      popular: true,
    },
    {
      id: 2,
      title: "Vascular Network Optimization Pack",
      description: "Specialized plan for creating complex vascular networks with high precision and cell viability.",
      price: "$149.99",
      subscription: "$24.99/month",
      creator: "Dr. Robert Chen",
      official: false,
      rating: 4.6,
      reviews: 87,
      features: [
        "Vascular-specific bio-ink formulations",
        "Optimized printing parameters for microvasculature",
        "Flow simulation tools",
        "Video tutorials and documentation",
      ],
      image: "/blood.jpg?height=200&width=400",
      popular: false,
    },
    {
      id: 3,
      title: "Bone & Cartilage Printing Bundle",
      description: "Comprehensive solution for orthopedic tissue engineering with specialized materials and settings.",
      price: "$199.99",
      subscription: "$34.99/month",
      creator: "OrthoTech Solutions",
      official: false,
      rating: 4.7,
      reviews: 92,
      features: [
        "Bone and cartilage-specific bio-inks",
        "Gradient printing parameters",
        "Mechanical testing protocols",
        "Post-processing guidelines",
      ],
      image: "/bone.jpg?height=200&width=400",
      popular: true,
    },
    {
      id: 4,
      title: "Research Lab Starter Pack",
      description: "Essential tools and parameters for academic research labs starting with bio printing.",
      price: "$99.99",
      subscription: "$19.99/month",
      creator: "BioPrint Inc.",
      official: true,
      rating: 4.5,
      reviews: 68,
      features: [
        "Basic bio-ink formulations",
        "Standard parameter presets",
        "Research protocol templates",
        "Academic license for data sharing",
      ],
      image: "/lab.jpg?height=200&width=400",
      popular: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {customPlans.map((plan) => (
          <Card key={plan.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative">
                <img
                  src={plan.image || "/placeholder.svg"}
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
                  <div className="text-xs text-muted-foreground pl-6">+{plan.features.length - 2} more features</div>
                )}
              </div>
              <Button className="w-full mt-2">View Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/customization/marketplace">Browse All Plans</Link>
        </Button>
      </div>
    </div>
  )
}

