"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeftCircleIcon,
  Building2Icon,
  LinkIcon,
  PcCaseIcon,
  Settings2Icon,
  User2Icon,
} from "lucide-react";
import InteractiveTabs from "@/components/global/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/global/theme-toggle";

export default function N7nLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Component
  const Navigation = () => (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? "/60 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto  py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image width={15} height={30} alt="logo" src="/logo.svg" />
            <span className="text-xl font-bold">n7n</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Workflows", "Solutions", "Docs"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button className="py-4 h-10 bg-gradient-to-b from-accent-foreground via-orange-500 to-orange-700/60 text-accent rounded-lg font-medium hover:bg-primary/90 transition-colors border-orange-500 border">
              Get Started
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );

  // Hero Section
  const HeroSection = () => (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container max-w-7xl mx-autopx-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-orange-400/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2" />

              <span className=" relative text-sm text-primary">
                <p>Workflow Automation Platform</p>
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Build
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent block">
                Powerful...
              </span>
              Workflows. n7n
            </h1>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              n7n is an extensible workflow automation tool. With a fair-code
              distribution model, n7n will always have visible source code, be
              available to self-host, and allow you to add your own custom
              functions, logic and apps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="py-4 bg-gradient-to-b from-accent-foreground via-orange-500 to-orange-700/60 text-accent rounded-lg font-medium hover:bg-primary/90 transition-colors border-orange-500 border h-10">
                Start Building Free
              </Button>
              <Button className="py-4 text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors border-orange-500 border h-10">
                View Demo
              </Button>
            </div>

            {/* Trusted by companies */}
            <div className="mt-12">
              <p className="text-foreground/60 mb-6">
                Trusted by teams worldwide
              </p>
              <div className="flex flex-wrap gap-8 items-center opacity-60">
                {["Microsoft", "GitHub", "Google", "AWS", "Slack"].map(
                  (company) => (
                    <div
                      key={company}
                      className="text-foreground/60 font-medium"
                    >
                      {company}
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Workflow Visualization */}
            <div className="relative bg-card border-[1px] border-orange-400/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
              </div>

              <div className="space-y-4">
                {/* Workflow nodes */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">🌐</span>
                  </div>
                  <div className="flex-1 h-1 bg-border rounded-full">
                    <div className="h-1 bg-orange-600/50 rounded-full w-1/2" />
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">⚡</span>
                  </div>
                  <div className="flex-1 h-1 bg-border rounded-full">
                    <div className="h-1 bg-orange-500/80 rounded-full w-3/4" />
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">💬</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {["Webhook", "Process Data", "Send Message"].map(
                    (step, index) => (
                      <div key={step} className="text-center">
                        <div className="text-sm font-medium text-foreground">
                          {step}
                        </div>
                        <div className="text-xs text-foreground/60 mt-1">
                          Step {index + 1}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/5 rounded-2xl -rotate-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Features Section
  const FeaturesSection = () => {
    const features = [
      {
        title: "Visual Workflow Editor",
        description:
          "Drag and drop interface to build complex workflows with ease",
        icon: ArrowLeftCircleIcon,
      },
      {
        title: "300+ Integrations",
        description: "Connect with popular apps and services out of the box",
        icon: LinkIcon,
      },
      {
        title: "Self-Host Ready",
        description: "Deploy on your infrastructure with full control",
        icon: Settings2Icon,
      },
      {
        title: "Custom Code",
        description: "Add your own JavaScript/Python code in workflows",
        icon: PcCaseIcon,
      },
      {
        title: "Enterprise Grade",
        description: "SSO, RBAC, and audit logs for large teams",
        icon: Building2Icon,
      },
      {
        title: "Community Driven",
        description: "Active community and extensive documentation",
        icon: User2Icon,
      },
    ];

    return (
      <section className="py-20 ">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                n7n
              </span>
              ?
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Built for developers who need powerful automation without
              complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative bg-card border rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <feature.icon className=" size-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-primary/0 transition-all duration-300 group-hover:w-full w-0" />
                <div className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-primary/0 transition-all duration-300 group-hover:w-full w-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Pricing Section
  const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
      {
        name: "Free",
        price: "$0",
        description: "Perfect for getting started",
        features: [
          "Up to 100 monthly executions",
          "Community support",
          "Basic integrations",
          "Self-hosted option",
        ],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Pro",
        price: "$19.99",
        description: "For growing teams and projects",
        features: [
          "Up to 10,000 monthly executions",
          "Email support",
          "All 300+ integrations",
          "Custom workflows",
          "Advanced triggers",
        ],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations",
        features: [
          "Unlimited executions",
          "24/7 dedicated support",
          "SAML/SSO",
          "Advanced security",
          "Custom onboarding",
          "Private instances",
        ],
        cta: "Contact Sales",
        popular: false,
      },
    ];

    return (
      <section id="pricing" className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Start free and scale as you grow. No hidden fees.
            </p>

            <div className="flex items-center justify-center space-x-4 mb-12">
              <span
                className={`transition-colors ${
                  !isAnnual ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-8 bg-primary rounded-full transition-all duration-300"
              >
                <div
                  className={`absolute bg-orange-600 top-1 w-6 h-6  rounded-full shadow-lg transition-transform duration-300 ${
                    isAnnual
                      ? "transform translate-x-6"
                      : "transform translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`transition-colors ${
                  isAnnual ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Annual <span className="text-primary">(Save 20%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-card border rounded-2xl p-8 ${
                  plan.popular
                    ? "ring-2 ring-orange-700 shadow-xl"
                    : "shadow-lg"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold">
                      {plan.name === "Pro" && isAnnual ? "$15.99" : plan.price}
                    </span>
                    {plan.name !== "Enterprise" && (
                      <span className="text-foreground/60 ml-2">/month</span>
                    )}
                  </div>
                  <p className="text-foreground/70">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-primary mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-accent text-foreground hover:bg-accent/80"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Footer
  const Footer = () => (
    <footer className="border-t">
      <div className="container max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image width={15} height={30} alt="logo" src="/logo.svg" />
              <span className="text-xl font-bold">n7n</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Powerful workflow automation for everyone.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "GitHub", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  // app/components/Logos.tsx
  function Logos() {
    const companies = [
      { name: "Microsoft", logo: "/logo.svg" },
      { name: "Wayfair", logo: "/logo.svg" },
      { name: "Vodafone", logo: "/logo.svg" },
      { name: "Unbabel", logo: "/logo.svg" },
      { name: "Zendesk", logo: "/logo.svg" },
    ];

    return (
      <section className="w-full px-4 md:px-8 lg:px-16 py-12 lg:py-24 ">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-y-9">
          <div className=" flex flex-col gap-y-5">
            <p className="text-center max-w-3xl mx-auto text-shades-dark-gray   text-6xl font-semibold tracking-tight ">
              The world's most popular workflow
            </p>
            <p className="text-center max-w-3xl mx-auto text-shades-dark-gray font-light  text-md ">
              The world's most popular workflow automation platform for
              technical teams including
            </p>
          </div>

          {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className=" relative h-16 w-32 flex flex-col items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 max-w-24 object-contain"
                />
                <p>{company.name}</p>
              </div>
            ))}
          </div> */}

          {/* Social Proof */}
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <a
              href="https://github.com/n8n-io/n8n"
              className=" social-proof-card p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-orange-500/10 border border-white/10"
            >
              <div className="flex flex-col justify-center text-center items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white">⭐</span>
                </div>
                <div>
                  <p className="text-white font-medium mb-3">Top 50 Github</p>
                  <p className="text-shades-lavender-gray text-sm">
                    Our 149.1k stars place us among the most popular projects.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.g2.com/products/n8n/reviews"
              className="social-proof-card p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-white/10"
            >
              <div className="flex flex-col justify-center text-center items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white">4.9</span>
                </div>
                <div>
                  <p className="text-white font-medium mb-3">
                    4.9/5 stars on G2
                  </p>
                  <p className="text-shades-lavender-gray text-sm">
                    To quote "A solid automation tool that just works."
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://community.n8n.io/"
              className="social-proof-card p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10"
            >
              <div className="flex flex-col justify-center text-center items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white">👥</span>
                </div>
                <div>
                  <p className="text-white font-medium mb-3">
                    200k+ community members
                  </p>
                  <p className="text-shades-lavender-gray text-sm">
                    This wouldn't be possible without you.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <main className="  min-h-screen  text-foreground">
      <Navigation />
      <HeroSection />
      <Logos />
      <InteractiveTabs />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
