import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mic2, Camera, Radio, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// =============================
// TJ Pilewski — Portfolio 2025
// =============================

export default function Portfolio() {
  const categories = [
    {
      label: "Audio Work",
      href: "#audio-work",
      icon: <Mic2 className="w-8 h-8" />,
    },
    {
      label: "Video Work",
      href: "#video-work",
      icon: <Camera className="w-8 h-8" />,
    },
    {
      label: "Social Media Content",
      href: "#social-media",
      icon: <Radio className="w-8 h-8" />,
    },
    {
      label: "Shows Hosted by Me",
      href: "#shows-hosted",
      icon: <Mic2 className="w-8 h-8" />,
    },
  ];

  const nav = [
    { label: "Work", href: "#work" },
    { label: "Reels", href: "#reels" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">TJ Pilewski</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="opacity-80 hover:opacity-100">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="text-sm inline-flex items-center gap-1 opacity-90 hover:opacity-100">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,.12),transparent_40%),radial-gradient(circle_at_60%_80%,rgba(34,197,94,.10),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Creator, editor & producer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 max-w-2xl text-neutral-300"
          >
            I’m the Swiss Army knife of digital media. Shoot, edit, record, create—I do it all, and I turn it into content that people actually stop to watch.
          </motion.p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-2xl">
              <a href="#reels" className="inline-flex items-center gap-2">
                Watch Reel <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="#resume" className="inline-flex items-center gap-2">
                See Resume <FileText className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Boxes */}
      <section id="work" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-[60vh]">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.label}
              href={cat.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center rounded-3xl bg-neutral-900/70 border border-white/10 hover:border-white/30 text-center p-12 cursor-pointer"
            >
              <div className="mb-4">{cat.icon}</div>
              <div className="text-2xl md:text-4xl font-bold tracking-tight">{cat.label}</div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
