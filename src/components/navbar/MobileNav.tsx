'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/#features' },
  { name: 'Pricing', path: '/#pricing' },
  { name: 'Contact', path: '/#contact' },
]

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            onClick={onClose}
            className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
              pathname === item.path ? 'text-primary' : 'text-gray-600'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Button className="w-full" onClick={onClose}>
          <Link href="/dashboard" className="w-full block text-center">
            Dashboard
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}