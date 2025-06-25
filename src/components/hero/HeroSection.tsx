'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0f0f11] text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          >
            Stunning <span className="text-primary">Frontend Templates</span>{' '}
            for Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl"
          >
            Save time and launch faster with high-quality, ready-to-use frontend templates. Built with modern tech and a sharp eye for design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/login">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 hover:cursor-pointer"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:cursor-pointer"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
