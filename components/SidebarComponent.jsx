"use client";

import React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"; 
import { MessageCircle, Calendar, User, Star, LogOut } from "lucide-react";
import { GiUnicorn } from "react-icons/gi";

const SidebarComponent = () => {
  return (
    <SidebarProvider>
      <Sidebar className="bg-[#F9F5FF] text-[#4B3F6B] min-h-screen w-64">
      
        <SidebarHeader className="px-6 py-6">
          <div className="flex items-center gap-2">
          
          
              <span className="text-2xl text-purple-500"><GiUnicorn></GiUnicorn></span>
          
            <h1 className="text-xl font-bold text-purple-500">BRIDLE</h1>
          </div>
        </SidebarHeader>

        {/* Sidebar Content */}
        <SidebarContent className="px-4">
          <SidebarMenu className="space-y-2">
        
            <SidebarMenuItem>
              <SidebarMenuButton isActive={true}>
                <Calendar className="w-5 h-5 text-purple-500" />
                <span>Browse Events</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

         
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Calendar className="w-5 h-5 text-[#4B3F6B]" />
                <span>My Events</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

         
            <SidebarMenuItem>
              <SidebarMenuButton>
                <MessageCircle className="w-5 h-5 text-[#4B3F6B]" />
                <div className="flex items-center justify-between w-full">
                  <span>Messages</span>
                  <div className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    1
                  </div>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton>
                <GiUnicorn className="w-5 h-5 text-[#4B3F6B]" /> {/* Unicorn Icon */}
                <span>My Horses</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

         
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Star className="w-5 h-5 text-[#4B3F6B]" />
                <span>My Points</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

      
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User className="w-5 h-5 text-[#4B3F6B]" />
                <span>My Profile</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>

        {/* Sidebar Footer */}
        <SidebarFooter className="px-4 py-6">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <LogOut className="w-5 h-5 text-[#4B3F6B]" />
                <span>Sign Out</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

  
      <SidebarTrigger className="absolute top-4 left-4 md:hidden" />
    </SidebarProvider>
  );
};

export default SidebarComponent;
