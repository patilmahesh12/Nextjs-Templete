'use client';

import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 bg-[#0f0f11] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center shadow-xl border border-primary/30"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Ready to Launch Your Website?
            </h2>

            <p className="text-base md:text-lg mb-8 text-white/90">
              Join thousands of creators and professionals building fast, beautiful dashboards.
              No credit card needed — just start building.
            </p>

            <a href="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary font-semibold hover:bg-white/90 transition"
              >
                Get Started Now <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Abstract gradient blurs */}
      <div className="absolute -top-20 left-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default CtaSection;
