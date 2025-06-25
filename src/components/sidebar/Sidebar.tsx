'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { X, LayoutDashboard, BarChart, User, Settings } from 'lucide-react';
import SidebarItem from './SidebarItem';

type SidebarProps = {
  isMobileOpen?: boolean;
  onClose?: () => void;
};

const sidebarItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'TempleteMatrics', path: '/dashboard/templetemetric', icon: BarChart },
  { name: 'Profile', path: '/dashboard/profile', icon: User },
  { name: 'Settings', path: '/dashboard/settings', icon: Settings },
];

export default function Sidebar({
  isMobileOpen = false,
  onClose = () => {},
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        />
      )}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isMobileOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed z-50 top-0 left-0 h-full w-60 bg-[#1a1a1d] border-r border-gray-800 shadow-lg md:hidden"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <h2 className="text-lg font-bold text-white">User Panel</h2>
          <button onClick={onClose} className="text-gray-400">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col px-2 py-4 gap-1">
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
      <aside className="hidden md:flex md:flex-col md:w-60 h-screen sticky top-0 bg-[#1a1a1d] border-r border-gray-800 shadow-md z-20">
        <div className="px-4 py-4 border-b border-gray-700">
          <h2 className="text-lg font-bold text-white">User Panel</h2>
        </div>
        <nav className="flex flex-col px-2 py-4 gap-1">
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
