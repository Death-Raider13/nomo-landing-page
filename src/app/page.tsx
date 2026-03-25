"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      } 
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      {/* Hero Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid items-center gap-12 py-14 md:grid-cols-2 md:py-20"
      >
        <div className="space-y-6">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Trade smarter
            <br />
            while Nomo
            <br />
            does the work
          </motion.h1>

          <motion.div variants={fadeInUp} className="w-72 sm:w-96">
            <svg
              viewBox="0 0 487 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-full"
            >
              <path
                d="M4.00098 30C73.6316 10.3798 266.915 -17.0885 483.001 30"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          <motion.p variants={fadeInUp} className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Nomo is an automated trading platform designed to help you trade
            smarter with less stress. We’re building something powerful and
            launching soon.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-[#589CFF] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#579cff] transition-shadow duration-300"
            >
              Join the waitlist
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white/85 hover:border-white/20 transition-all duration-300"
            >
              <span className="grid h-5 w-5 place-items-center rounded bg-white/10">
                <span className="ml-0.5 inline-block h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white/80" />
              </span>
              Get early access
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative mx-auto aspect-4/3 w-full max-w-xl">
            <Image
              alt="Hero illustration"
              src="/assets/illustrationprovider.png"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 768px) 560px, 100vw"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Second Section - Built for smarter trading */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28"
      >
        <div className="pointer-events-none absolute -top-5 -right-50 z-0 h-[1500px] w-[700px] opacity-100">
          <Image
            alt="Network pattern"
            src="/assets/aso.png"
            fill
            className="object-contain object-right"
            sizes="700px"
          />
        </div>

        <motion.div variants={fadeInUp} className="relative z-10">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl">
            <Image
              alt="Trading illustration"
              src="/assets/trading.png"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 768px) 448px, 100vw"
            />
          </div>
        </motion.div>

        <div className="relative z-10 space-y-6">
          <motion.div variants={fadeInUp} className="text-sm font-medium text-[#589CFF]">
            About us
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Built for smarter trading
          </motion.h2>

          <motion.p variants={fadeInUp} className="max-w-lg text-base leading-7 text-white/70">
            Nomo is focused on simplifying automated trading for everyday users.
            Our goal is to remove complexity and help users make better decisions with automation.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            whileHover={{ x: 5 }}
            href="#"
            className="inline-flex items-center text-sm font-medium text-[#589CFF] hover:text-white group"
          >
            Learn more
            <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </motion.section>

      {/* Third Section - Why traders choose Nomo */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-[#589CFF]"
          >
            Why Choose Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Why traders choose Nomo
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base leading-7 text-white/70"
          >
            Simple automation, thoughtful design, and tools built to support better trading decisions.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              image: "/assets/unlock.png",
              title: "Secure by design",
              desc: "Nomo is built with security at its core, from data handling to trade execution.",
            },
            {
              image: "/assets/activity.png",
              title: "Smart automation",
              desc: "Automated strategies help reduce emotional trading and repetitive actions.",
            },
            {
              image: "/assets/dash.png",
              title: "Simple dashboard",
              desc: "All essential information is presented clearly in one place. No clutter.",
            },
            {
              image: "/assets/bitcoin.png",
              title: "Built for the market",
              desc: "Nomo is designed with flexibility in mind, making it adaptable across markets.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -20px rgba(0, 173, 216, 0.6)",
                borderColor: "rgba(0, 173, 216, 0.8)"
              }}
              className="square-2xl border-4 border-[#00ADD8]/40 bg-[#030B15]/80 p-6 text-center shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[#00C4F4] mx-auto shadow-inner">
                <Image
                  alt={card.title}
                  src={card.image}
                  fill
                  className="object-contain p-2"
                  sizes="56px"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Step by Step section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            How Nomo will work
          </motion.h2>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {[
            {
              image: "/assets/connect.png",
              title: "Connect your account",
            },
            {
              image: "/assets/strategy.png",
              title: "Set your strategy",
            },
            {
              image: "/assets/trade.png",
              title: "Let Nomo trade for you",
            },
          ].map((step) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="square-2xl border-4 border-[#00ADD8]/40 bg-[#030B15]/80 p-6 text-center shadow-lg backdrop-blur-sm"
            >
              <div className="relative mx-auto h-40 w-40">
                <Image
                  alt={step.title}
                  src={step.image}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <button className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#589CFF] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-[0_0_20px_rgba(88,156,255,0.4)] transition-all">
                Coming soon
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* World Map Vision */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28"
      >
        <div className="space-y-4">
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for traders everywhere
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-lg text-base leading-7 text-white/70">
            Launching soon with early access worldwide.
          </motion.p>
        </div>
        <motion.div variants={fadeInUp} className="relative">
          <div className="relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl">
            <Image
              alt="World map"
              src="/assets/map.png"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 560px, 100vw"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Illustration with Bitcoin Man */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            What you'll get with Nomo
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeInUp} className="square-2xl border-2 border-white/5 bg-white/5 p-12 text-center backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">Early access</h3>
            </motion.div>
            <motion.div variants={fadeInUp} className="square-2xl border-2 border-white/5 bg-white/5 p-12 text-center backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">Transparent system</h3>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <Image
              alt="Bitcoin character"
              src="/assets/bitcoinman.png"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 448px, 100vw"
            />
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeInUp} className="square-2xl border-2 border-white/5 bg-white/5 p-12 text-center backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">Smart trading logic</h3>
            </motion.div>
            <motion.div variants={fadeInUp} className="square-2xl border-2 border-white/5 bg-white/5 p-12 text-center backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">Support at launch</h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lwazi Intelligence Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28"
      >
        <motion.div variants={fadeInUp} className="relative">
          <div className="relative mx-auto aspect-4/3 w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl">
            <Image
              alt="Lwazi"
              src="/assets/lwazi.png"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 560px, 100vw"
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl text-glow">
            Lwazi knows what your trades mean
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-lg text-base leading-7 text-white/70">
            Lwazi is your digital knowledge spirit. It reads your trading history, calculates confidence scores, and suggesting move based on data.
          </motion.p>
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-[#589CFF]/50 bg-[#589CFF]/5 px-8 py-3 text-sm font-semibold text-white hover:bg-[#589CFF]/10 transition-all"
          >
            Get Early Access
          </motion.a>
        </div>
      </motion.section>

      {/* efficiency/CTA Section Overlay */}
      <motion.section 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#016888]/80 to-[#00C4F4]/20 p-8 md:p-16 backdrop-blur-xl">
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white sm:text-5xl">Built with efficiency</h2>
              <p className="text-white/80 text-lg">Join the waitlist to be among the first users.</p>
              <form className="flex max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
                <input type="email" placeholder="Email address" className="flex-1 px-6 py-4 text-black focus:outline-none" />
                <button className="bg-[#589CFF] px-8 py-4 font-bold text-white hover:bg-[#478bff]">Join</button>
              </form>
            </div>
            <div className="relative hidden lg:block h-64">
              <Image alt="CTA assets" src="/assets/coins.png" fill className="object-contain scale-125" />
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
