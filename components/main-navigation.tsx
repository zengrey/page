"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function MainNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Community</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/community"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Community Hub</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Connect with other bio printing enthusiasts, share your experiences, and solve problems together.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/community/forums" title="Forums">
                Discuss issues, share tips, and connect with other users.
              </ListItem>
              <ListItem href="/community/models" title="Model Gallery">
                Browse and share 3D models created by the community.
              </ListItem>
              <ListItem href="/community/problems" title="Problem Solving">
                Post issues you're facing and get help from the community.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Customization</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/customization/marketplace" title="Marketplace">
                Browse and purchase custom printing plans.
              </ListItem>
              <ListItem href="/customization/requests" title="Custom Requests">
                Submit your specific requirements for custom solutions.
              </ListItem>
              <ListItem href="/customization/subscriptions" title="Subscriptions">
                Subscribe to premium plans for ongoing access.
              </ListItem>
              <ListItem href="/customization/create" title="Create & Sell">
                Create and sell your own custom printing plans.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/resources/tutorials" title="Tutorials">
                Learn how to get the most out of your bio printer.
              </ListItem>
              <ListItem href="/resources/documentation" title="Documentation">
                Technical specifications and user manuals.
              </ListItem>
              <ListItem href="/resources/faq" title="FAQ">
                Frequently asked questions about bio printing.
              </ListItem>
              <ListItem href="/resources/support" title="Support">
                Get help from our dedicated support team.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

