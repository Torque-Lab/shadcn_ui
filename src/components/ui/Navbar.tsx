"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DollarSign,
  icons,
  LogOut,
  Moon,
  Settings,
  Square,
  SquareMenu,
  SubscriptIcon,
  Sun,
  ToggleLeftIcon,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "./sidebar";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <nav className="p-4 flex items-center justify-between">
      {/* collaspseButton left */}
      {/* <SidebarTrigger/> */}

      <Button variant={"outline"} className="ml-0 " onClick={toggleSidebar}>
        <ToggleLeftIcon />
      </Button>
      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashborad</Link>
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <div className="h-12 w-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                {/* read more */}
                <AvatarFallback>CN</AvatarFallback>
              </div>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={6}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DollarSign className="h-[1.2rem] w-[1.2rem] mr-2" />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem variant={"destructive"}>
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* as child menus dropdown bydefult create button so we can't make our button inside ,by doing as child we saying render only given button */}
            <Button variant={"outline"} size={"icon"}>
              <SquareMenu />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
