import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-full w-full bg-glow">
      <div className="bg-grid">
        <header className="border-b border-white/10">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="relative h-7 w-28">
                <Image
                  alt="Nomo Labs"
                  src="/assets/nomo.png"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="112px"
                />
              </div>
            </div>

            <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
              <a className="hover:text-white" href="#">
                Features
              </a>
              <a className="hover:text-white" href="#">
                Technology
              </a>
              <a className="hover:text-white" href="#">
                Waitlist
              </a>
              <a className="hover:text-white" href="#">
                Resources
              </a>
            </nav>

            <a
              className="inline-flex items-center justify-center rounded-lg bg-[#589CFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,166,255,0.25)] hover:bg-[#579cff]"
              href="#"
            >
              Join the Waitlist
            </a>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <section className="grid items-center gap-12 py-14 md:grid-cols-2 md:py-20">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Trade smarter
                <br />
                while Nomo
                <br />
                does the work
              </h1>

              <div className="w-72 sm:w-96">
                <div className="h-6 w-full rounded-t-full border-t-[3px] border-white/90" />
              </div>

              <p className="max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                Nomo is an automated trading platform designed to help you trade
                smarter with less stress. We’re building something powerful and
                launching soon.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg bg-[#589CFF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#579cff]"
                >
                  Join the waitlist
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 hover:border-white/20"
                >
                  <span className="grid h-5 w-5 place-items-center rounded bg-white/10">
                    <span className="ml-0.5 inline-block h-0 w-0 border-y-[6px] border-y-transparent border-l-10 border-l-white/80" />
                  </span>
                  Get early access
                </a>
              </div>
            </div>

            <div className="relative">
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
            </div>
          </section>

          {/* Second Section - Built for smarter trading */}
          <section className="relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            {/* Vector network pattern - positioned in top right behind content */}
            <div className="pointer-events-none absolute -top-5 -right-50 z-0 h-[1500px] w-[700px] opacity-100">
              <Image
                alt="Network pattern"
                src="/assets/aso.png"
                fill
                className="object-contain object-right"
                sizes="700px"
              />
            </div>

            {/* Left side - Trading illustration */}
            <div className="relative z-10">
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
            </div>

            {/* Right side - Content */}
            <div className="relative z-10 space-y-6">
              <div className="text-sm font-medium text-[#589CFF]">
                About us
              </div>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Built for smarter trading
              </h2>

              <p className="max-w-lg text-base leading-7 text-white/70">
                Nomo is focused on simplifying automated trading for everyday users. 
                Our goal is to remove complexity, reduce emotional trading, and help 
                users make better decisions with automation.
              </p>

              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#589CFF] hover:text-white"
              >
                Learn more
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>

          {/* Third Section - Why traders choose Nomo */}
          <section className=" py-20  md:py-28">
              {/* Vector network pattern - positioned in top right behind content */}
            <div className="pointer-events-none absolute -buttom-10 -left-5  z-0 h-[1200px] w-[450px] opacity-70">
              <Image
                alt="Network pattern"
                src="/assets/oso.png"
                fill
                className="object-contain object-right"
                sizes="700px"
              />
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-medium text-[#589CFF]">
                Why Choose Us
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Why traders choose Nomo
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Simple automation, thoughtful design, and tools built to support better trading decisions.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                 icon: null,
                  image: "/assets/unlock.png",
                  title: "Secure by design",
                  desc: "Nomo is built with security at its core, from data handling to trade execution. Every decision starts with protecting user accounts and maintaining system integrity.",
                },
                {
                  icon: null,
                  image: "/assets/activity.png",
                  title: "Smart automation",
                  desc: "Automated strategies help reduce emotional trading and repetitive actions. Nomo is designed so users can trade with more consistency and confidence.",
                },
                {
                  icon: null,
                  image: "/assets/dash.png",
                  title: "Simple dashboard",
                  desc: "All essential information is presented clearly in one place. No clutter, just a clean interface built to help users understand what's happening at a glance.",
                },
                {
                  icon: null,
                  image: "/assets/bitcoin.png",
                  title: "Built for the market",
                  desc: "Nomo is designed with flexibility in mind, making it adaptable across different markets and trading environments as the platform evolves.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="square-2xl border-4 border-[#00ADD8] bg-[#030B15] p-6 text-center shadow-[0_0_15px_rgba(0,173,216,0.3)]"
                >
                  {card.image ? (
                    <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[#00C4F4]">
                      <Image
                        alt={card.title}
                        src={card.image}
                        fill
                        className="object-contain p-2"
                        sizes="56px"
                      />
                    </div>
                  ) : (
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-[#589CFF]/20 text-[#589CFF]">
                      {card.icon}
                    </div>
                  )}
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Fourth Section - How Nomo will work */}
          <section className="py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-medium text-[#589CFF]">
                Step by step guide
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                How Nomo will work
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                NOMO automatically selects the optimal blockchain for every trade. The "Why This Chain?" panel shows you exactly why.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
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
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="square-2xl border-4 border-[#00ADD8] bg-[#030B15] p-6 text-center shadow-[0_0_15px_rgba(0,173,216,0.3)]"
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
                  <button className="mt-33 inline-flex items-center justify-center rounded-lg bg-[#589CFF] px-12 py-4.5 text-md font-semibold text-white hover:bg-[#579cff]">
                    Coming soon
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Fifth Section - Built for traders everywhere */}
          <section className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            {/* Left side - Content */}
            <div className="space-y-4">
              <div className="text-sm font-medium text-[#589CFF]">
                Our vision
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Built for traders everywhere
              </h2>
              <p className="max-w-lg text-base leading-7 text-white/70">
                Launching soon with early access worldwide
              </p>
            </div>

            {/* Right side - World map */}
            <div className="relative">
              <div className="relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl">
                <Image
                  alt="World map showing global reach"
                  src="/assets/map.png"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 560px, 100vw"
                />
              </div>
            </div>
          </section>

          {/* Sixth Section - What you'll get with Nomo */}
          <section className="relative py-20 md:py-28">
            {/* Vector network pattern - positioned on left side behind content */}
            <div className="pointer-events-none absolute -top-50 -left-50 z-0 h-[950px] w-[450px] opacity-200">
              <Image
                alt="Network pattern"
                src="/assets/mso.png"
                fill
                className="object-contain object-right"
                sizes="700px"
              />
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-sm font-medium text-[#589CFF]">
                Our Features
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What you'll get with Nomo
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                A carefully designed trading experience focused on simplicity, clarity, and control.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-center">
              {/* Left column */}
              <div className="space-y-6">
                <div className="square-2xl border-4 border-[#00ADD8] bg-[#030B15] p-12 text-center shadow-[0_0_15px_rgba(0,173,216,0.3)]">
                  <div className="relative mx-auto h-30 w-30">
                    <Image
                      alt="Profile icon"
                      src="/assets/profile.png"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">Early access</h3>
                  <p className="mt-2 text-sm leading-6 text-[#7D7D7D]">
                    Be among the first to explore Nomo before public launch and help shape the product through early feedback.
                  </p>
                </div>
                <div className="square-2xl border-4 border-[#00ADD8] bg-[#030B15] p-12 text-center shadow-[0_0_15px_rgba(0,173,216,0.3)]">
                  <div className="relative mx-auto h-30 w-30">
                    <Image
                      alt="Like dislike icon"
                      src="/assets/like-dislike.png"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">Transparent system</h3>
                  <p className="mt-2 text-sm leading-6 text-[#7D7D7D]">
                    Clear insights into how trades are executed, with no hidden processes or confusing mechanics.
                  </p>
                </div>
              </div>

              {/* Center - Bitcoin image */}
              <div className="relative mx-auto aspect-square w-full max-w-lg">
                <Image
                  alt="Bitcoin character"
                  src="/assets/bitcoinman.png"
                  fill
                  className="object-contain"
                  sizes="(min-width: 5024px) 2384px, 22100vw"
                />
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="square-2xl border-4 border-[#00ADD8] bg-[#030B15] p-12 text-center shadow-[0_0_15px_rgba(0,173,216,0.3)]">
                  <div className="relative mx-auto h-20 w-20">
                    <Image
                      alt="Star icon"
                      src="/assets/star.png"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">Smart trading logic</h3>
                  <p className="mt-2 text-sm leading-6 text-[#7D7D7D]">
                    Trade decisions are guided by structured logic designed to reduce emotional actions and improve consistency over time.
                  </p>
                </div>
                <div className="square-2xl border-4 border-[#00ADD8] bg-[#030B15] p-12 text-center shadow-[0_0_15px_rgba(0,173,216,0.3)]">
                  <div className="relative mx-auto h-27 w-27">
                    <Image
                      alt="Music play icon"
                      src="/assets/music-play.png"
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">Support at launch</h3>
                  <p className="mt-2 text-sm leading-6 text-[#7D7D7D]">
                    Guidance and assistance will be available as users onboard and begin using Nomo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seventh Section - Lwazi knows what your trades mean */}
          <section className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            {/* Left side - Illustration */}
            <div className="relative">
              <div className="relative mx-auto aspect-4/3 w-full max-w-xl overflow-hidden rounded-2xl">
                <Image
                  alt="Lwazi intelligence illustration"
                  src="/assets/lwazi.png"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 560px, 100vw"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="text-sm font-medium text-[#589CFF]">
                Intelligence
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Lwazi knows what your trades mean
              </h2>
              <p className="max-w-lg text-base leading-7 text-white/70">
                Lwazi is your digital knowledge spirit. It reads your trading history, calculates confidence scores for every asset, and suggests moves based on data, not hunches. No mascot nonsense. Just a thinking machine that works while you sleep.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Get Early Access
              </a>
            </div>
          </section>

          {/* Eighth Section - Built with efficiency in mind */}
          <section className="py-6">
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#016888b8] p-3 md:p-6 lg:p-3 sm:-mx-16 sm:w-[calc(100%+10rem)] lg:-mx-20 lg:w-[calc(100%+10rem)]">
              <div className="pointer-events-none absolute inset-y-0 right-50 z-0 w-[520px] opacity-75">
                <Image
                  alt="Network pattern"
                  src="/assets/vso.png"
                  fill
                  className="object-contain object-right"
                  sizes="550px"
                />
              </div>

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
                {/* Left side - Content */}
                <div className="space-y-6 lg:pl-14">
                  <div className="text-sm font-medium text-[#589CFF]">
                    NOMO
                  </div>
                  <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                    Built with efficiency in mind
                  </h2>
                  <p className="max-w-lg text-base leading-7 text-white/70">
                    Nomo is designed to execute trades efficiently while reducing unnecessary complexity. More details will be revealed at launch.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-[#589CFF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#579cff]"
                  >
                    Join the waitlist
                  </a>
                </div>

                {/* Right side - Illustration */}
                <div className="relative z-10">
                  <div className="relative mx-auto aspect-square w-full max-w-xs left-20">
                    <Image
                      alt="Coins trading illustration"
                      src="/assets/coins.png"
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 320px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Section - CTA and Footer */}
          <section className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            {/* Left side - Globe illustration */}
            <div className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-sm">
                <Image
                  alt="Globe with Bitcoin"
                  src="/assets/globe.png"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 384px, 100vw"
                />
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="space-y-6">
              <div className="text-sm font-medium text-white/70">
                Start Now
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Be the first to use Nomo
              </h2>
              <p className="max-w-lg text-base leading-7 text-white/70">
                Join the waitlist to get early access when we launch.
              </p>
              <form className="mt-6 flex max-w-md gap-0 overflow-hidden rounded-lg bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#589CFF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#579cff]"
                >
                  Subscribes
                </button>
              </form>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-white/10 bg-[#016888b8] py-12">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Logo and description */}
              <div className="space-y-4">
                <div className="relative h-7 w-28">
                  <Image
                    alt="Nomo Labs"
                    src="/assets/nomo.png"
                    fill
                    className="object-contain object-left"
                    sizes="112px"
                  />
                </div>
                <p className="text-sm leading-6 text-white/60">
                  Nomo is an automated trading platform launching soon.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Our Products */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white">Our Products</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white">Crypto Earn</a></li>
                  <li><a href="#" className="hover:text-white">Exchanges</a></li>
                  <li><a href="#" className="hover:text-white">Defi Wallet</a></li>
                  <li><a href="#" className="hover:text-white">Converter</a></li>
                </ul>
              </div>

              {/* Pages */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white">Pages</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-white">Our app</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Token Safe</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white">Contact</h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    +2349165948685
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Mon - Fri : 9 am - 11 pm
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>nomolabs.africa@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
