"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  LayoutDashboard,
  BriefcaseBusiness,
  Send,
  LoaderPinwheel,
  Target,
  Telescope,
  Tent
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "sam",
    email: "sam@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Leads",
      url: "/users",
      icon: BriefcaseBusiness,
      isActive: true,
      items: [
        {
          title: "Buyer",
          url: "#",
        },
        {
          title: "Seller",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Other",
      url: "#",
      icon: LoaderPinwheel,
      items: [
        {
          title: "SOI",
          url: "#",
        },
        {
          title: "Past Clients",
          url: "#",
        },
      ],
    },
    {
      title: "Messaging",
      url: "#",
      icon: Send,
      items: [
        {
          title: "Forms",
          url: "#",
        },
        {
          title: "Letters",
          url: "#",
        },
      ],
    },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}

      <SidebarContent>
        
        






      <SidebarMenu>
      <SidebarMenuButton asChild className="mt-2 ml-2">
              <a href="#">
                <LayoutDashboard />
                <span>Dashboard</span>
              </a>
            </SidebarMenuButton>

            {/* <SidebarMenuItem>
              Dashboard

            </SidebarMenuItem> */}
      </SidebarMenu>
      




















        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
