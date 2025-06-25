'use client';

import { useState } from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import { Menu } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0f0f11] text-white relative">
      <Sidebar isMobileOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#0f0f11] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <button onClick={() => setIsMobileOpen(true)}>
          <Menu className="h-6 w-6 text-white" />
        </button>
        <h1 className="text-lg font-semibold">user</h1>
      </div>
      <main className="flex-1 overflow-y-auto p-6 pt-16 md:pt-6">
        {children}
      </main>
    </div>
  );
}
