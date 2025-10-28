"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { HelpCircle, MessageCircle, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
  const faq = {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our hosting services.",
    items: [
      {
        question: "What is web hosting?",
        answer: (
          <>
            Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet.
            It involves storing website files on a server connected to the internet 24/7, making your site available to visitors at all times.  
            Learn more on our{" "}
            <Link href="/docs/getting-started" className="text-green-400 hover:text-green-300 underline">
              documentation page
            </Link>.
          </>
        ),
        icon: "help",
      },
      {
        question: "What's the difference between shared hosting, VPS, and dedicated servers?",
        answer: (
          <>
            Shared hosting means your website shares server resources with others. VPS (Virtual Private Server) provides
            dedicated resources within a shared environment. Dedicated servers give you full control and maximum performance.  
            Compare plans on our{" "}
            <Link href="/pricing" className="text-green-400 hover:text-green-300 underline">
              pricing page
            </Link>.
          </>
        ),
        icon: "zap",
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer: (
          <>
            Yes, we offer a <strong>30-day money-back guarantee</strong> on all our hosting plans.  
            If you’re not satisfied, you can{" "}
            <Link href="/refund-policy" className="text-green-400 hover:text-green-300 underline">
              request a full refund
            </Link>{" "}
            within 30 days.
          </>
        ),
        icon: "shield",
      },
      {
        question: "How do I migrate my existing website to your hosting?",
        answer: (
          <>
            We offer <strong>free website migration services</strong> for all new customers.  
            Our team will handle everything — no downtime.  
            Visit{" "}
            <Link href="/migration" className="text-green-400 hover:text-green-300 underline">
              website migration help
            </Link>{" "}
            to get started.
          </>
        ),
        icon: "help",
      },
      {
        question: "What kind of customer support do you offer?",
        answer: (
          <>
            We provide <strong>24/7 customer support</strong> via live chat, email, and phone.  
            Contact our team anytime via{" "}
            <Link href="/contact" className="text-green-400 hover:text-green-300 underline">
              Contact Support
            </Link>.
          </>
        ),
        icon: "message",
      },
      {
        question: "Can I upgrade my hosting plan later?",
        answer: (
          <>
            Yes! You can upgrade anytime from your{" "}
            <Link href="/dashboard" className="text-green-400 hover:text-green-300 underline">
              account dashboard
            </Link>.  
            The upgrade process is seamless and causes no downtime.
          </>
        ),
        icon: "zap",
      },
    ],
  };

  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      help: HelpCircle,
      message: MessageCircle,
      zap: Zap,
      shield: Shield,
    };
    const Icon = icons[iconName] || HelpCircle;
    return <Icon className="w-5 h-5" />;
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const el = revealElements[i];
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) el.classList.add("active");
      }
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-green-400 uppercase">{faq.badge}</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            <span className="gradient-text">{faq.title}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{faq.description}</p>
          <div className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full" />
        </div>

        {/* Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Info Cards */}
          <div className="space-y-4 reveal">
            {/* Support Card */}
            <div className="card-glass p-6 hover-lift group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Need More Help?</h3>
              <p className="text-gray-400 text-sm mb-4">Our support team is available 24/7</p>
              <Link href="/contact" className="text-green-400 text-sm font-semibold hover:text-green-300 inline-flex items-center gap-2">
                Contact Support
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="card-glass p-6 hover-lift">
              <div className="space-y-4">
                <div className="flex justify-between"><span className="text-gray-400 text-sm">Response Time</span><span className="text-green-400 font-bold">&lt; 2 min</span></div>
                <div className="flex justify-between"><span className="text-gray-400 text-sm">Satisfaction Rate</span><span className="text-green-400 font-bold">99.8%</span></div>
                <div className="flex justify-between"><span className="text-gray-400 text-sm">Questions Solved</span><span className="text-green-400 font-bold">50K+</span></div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card-glass p-6 hover-lift hidden lg:block">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Documentation", href: "/docs" },
                  { name: "Video Tutorials", href: "/tutorials" },
                  { name: "Community Forum", href: "/community" },
                  { name: "Knowledge Base", href: "/knowledge-base" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-gray-400 hover:text-green-400 text-sm inline-flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-400 transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-2 reveal-stagger">
            <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="space-y-4">
              {faq.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="faq-item border-none">
                  <div className="card-glass hover-glow overflow-hidden">
                    <AccordionTrigger className="text-white hover:text-green-400 px-6 py-5">
                      <div className="flex items-start gap-4 text-left w-full">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mt-1 text-green-400">
                          {getIcon(item.icon)}
                        </div>
                        <span className="font-semibold text-base">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 px-6 pb-6">
                      <div className="pl-14 pr-4 pt-2 leading-relaxed">{item.answer}</div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
