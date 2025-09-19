"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  X,
  LayoutDashboard,
  BarChart,
  User,
  Settings,
  PanelLeft,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

type SidebarProps = {
  isMobileOpen?: boolean;
  onClose?: () => void;
};

const sidebarItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  {
    name: "TempleteMatrics",
    path: "/dashboard/templetemetric",
    icon: BarChart,
  },
  { name: "Profile", path: "/dashboard/profile", icon: User },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

export default function Sidebar({
  isMobileOpen = false,
  onClose = () => {},
}: SidebarProps) {
  const pathname = usePathname();

  const PanelHeader = (
    <div className="flex items-center justify-between px-4 py-5 border-b border-gray-700 bg-[#111113]">
      <div className="flex items-center space-x-2">
        <PanelLeft className="h-6 w-6 text-indigo-400" />
        <h2 className="text-base font-semibold text-white tracking-wide">
          User Dashboard
        </h2>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="md:hidden text-gray-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        />
      )}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isMobileOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 top-0 left-0 h-full w-64 bg-[#1a1a1d] border-r border-gray-800 shadow-xl md:hidden"
      >
        {PanelHeader}
        <nav className="flex flex-col px-2 py-4 space-y-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              isActive={pathname === item.path}
              onClick={onClose}
            />
          ))}
        </nav>
      </motion.aside>
      <aside className="hidden md:flex md:flex-col md:w-64 h-screen sticky top-0 bg-[#1a1a1d] border-r border-gray-800 shadow-lg z-20">
        {PanelHeader}
        <nav className="flex flex-col px-2 py-4 space-y-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              isActive={pathname === item.path}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
