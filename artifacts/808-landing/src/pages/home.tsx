import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import sammDesktopImg from "@assets/samm-preview.jpg";
import d8DesktopImg from "@assets/d8-preview.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-foreground selection:text-background">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between mix-blend-difference text-white">
        <div className="font-semibold tracking-tight text-lg">808 Digital</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#products" className="hover:opacity-70 transition-opacity">Products</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
        <Button variant="outline" className="rounded-full bg-transparent text-white border-white/20 hover:bg-white hover:text-black transition-colors" size="sm" asChild>
          <a href="#contact" data-testid="nav-get-in-touch">Get in touch</a>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Subtle 808 watermark */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] dark:opacity-[0.03]"
          style={{ y: yBackground }}
        >
          <span className="text-[40vw] font-bold leading-none tracking-tighter">808</span>
        </motion.div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6 text-foreground">
            Quiet studio.<br/>Clear purpose.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium mb-10">
            An independent software studio in Zambia building thoughtful, focused digital products for modern life and work.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full h-13 px-8 text-base gap-2" asChild>
              <a href="#products" data-testid="hero-view-products">View products <ArrowRight className="w-4 h-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-13 px-8 text-base gap-2" asChild>
              <a href="#contact" data-testid="hero-contact">Contact</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight">Our Products</h2>
          <p className="text-muted-foreground mt-2">Tools designed with clarity and constraint.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Samm Product Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="group rounded-3xl bg-[#f0f4f8] dark:bg-[#1a2128] overflow-hidden flex flex-col relative h-[600px]"
          >
            <div className="p-10 md:p-12 z-10 relative flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-semibold text-[#1a2b3c] dark:text-[#88b1d6]">Samm</h3>
                <span className="px-3 py-1 rounded-full border border-[#1a2b3c]/10 dark:border-[#88b1d6]/20 text-sm text-[#1a2b3c] dark:text-[#88b1d6]">Marketing</span>
              </div>
              <p className="text-[#3b4c5c] dark:text-[#a0c2e3] max-w-md text-lg mb-8">
                AI-assisted marketing workflow and approvals for lean teams.
              </p>
              <button className="flex items-center gap-2 font-medium text-[#1a2b3c] dark:text-[#88b1d6] hover:gap-4 transition-all group-hover:opacity-80">
                Explore Samm <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex-grow mt-auto pl-10 md:pl-12 pt-0 transition-transform duration-700 ease-out group-hover:-translate-y-4">
              <img 
                src={sammDesktopImg} 
                alt="Samm UI Preview" 
                className="object-cover rounded-tl-xl border border-black/5 shadow-2xl shadow-black/10 w-full h-full"
              />
            </div>
          </motion.div>

          {/* D8 Product Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="group rounded-3xl bg-[#1c1a1a] dark:bg-[#121111] overflow-hidden flex flex-col relative h-[600px] text-white"
          >
            <div className="p-10 md:p-12 z-10 relative flex-shrink-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-semibold text-white">D8</h3>
                <span className="px-3 py-1 rounded-full border border-white/10 text-sm text-[#ff6b6b]">Lifestyle</span>
              </div>
              <p className="text-white/70 max-w-md text-lg mb-8">
                A lifestyle and planning ecosystem for discovering venues, planning outings, and coordinating experiences.
              </p>
              <button className="flex items-center gap-2 font-medium text-[#ff6b6b] hover:gap-4 transition-all group-hover:opacity-80">
                Explore D8 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex-grow mt-auto pl-10 md:pl-12 pt-0 transition-transform duration-700 ease-out group-hover:-translate-y-4">
              <img 
                src={d8DesktopImg} 
                alt="D8 UI Preview" 
                className="object-cover rounded-tl-xl border border-white/5 shadow-2xl shadow-black/40 w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Principles Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">How we build</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              {
                title: "Minimal by default",
                desc: "We remove what's unnecessary so what matters can stand out."
              },
              {
                title: "Built for real workflows",
                desc: "Our products fit naturally into how people plan, create, and collaborate."
              },
              {
                title: "Distinct product personality",
                desc: "Each product has a clear point of view and user experience."
              },
              {
                title: "Designed with clarity",
                desc: "Clean interfaces, thoughtful typography, and calm visual systems."
              }
            ].map((principle, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1, duration: 0.6 } }
                }}
                className="border-t border-background/20 pt-8"
              >
                <div className="text-sm font-mono text-background/50 mb-4">0{idx + 1}</div>
                <h3 className="text-2xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-background/70 text-lg leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info & Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-semibold tracking-tight mb-6">Let's talk</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're interested in our products or looking to collaborate, we're always open to a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="mailto:lusa@eightzeroeight.online"
                className="inline-flex items-center gap-2 text-base font-medium hover:opacity-70 transition-opacity"
                data-testid="link-email"
              >
                lusa@eightzeroeight.online
              </a>
              <span className="hidden sm:inline text-muted-foreground">·</span>
              <a
                href="tel:+260772427296"
                className="inline-flex items-center gap-2 text-base font-medium hover:opacity-70 transition-opacity"
                data-testid="link-phone"
              >
                +260 772 427 296
              </a>
            </div>
            <Button size="lg" className="rounded-full text-base h-14 px-8 gap-2" asChild>
              <a href="mailto:lusa@eightzeroeight.online" data-testid="button-get-in-touch">
                Get in touch <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-card border rounded-3xl p-8 md:p-12 w-full md:w-auto min-w-[320px]"
          >
            <div className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">COMPANY DETAILS</div>
            <dl className="space-y-6">
              <div>
                <dt className="text-sm text-muted-foreground mb-1">Legal Name</dt>
                <dd className="font-medium">EIGHT ZERO EIGHT DIGITAL SYSTEMS</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground mb-1">Registration No.</dt>
                <dd className="font-mono text-sm">320261068691</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground mb-1">Location</dt>
                <dd className="font-medium">Zambia</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            Samm and D8 are products of Eight Zero Eight Digital Systems
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
            <a href="/data-deletion" className="hover:text-foreground transition-colors">Data Deletion</a>
            <a href="mailto:lusa@eightzeroeight.online" className="hover:text-foreground transition-colors" data-testid="footer-contact">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
