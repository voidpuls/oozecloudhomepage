"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { HelpCircle, MessageCircle, Zap, Shield } from "lucide-react";

export default function FAQ() {
  // Hardcoded FAQ data
  const faq = {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our hosting services.",
    items: [
      {
        question: "What is web hosting?",
        answer:
          "Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. It involves storing website files on a server that is connected to the internet 24/7, making your website available to visitors at all times.",
        icon: "help",
      },
      {
        question: "What's the difference between shared hosting, VPS, and dedicated servers?",
        answer:
          "Shared hosting means your website shares server resources with other websites. VPS (Virtual Private Server) provides dedicated resources within a shared environment, giving you more control and performance. Dedicated servers offer an entire physical server exclusively for your use, providing maximum performance and control.",
        icon: "zap",
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer:
          "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our service within the first 30 days, you can request a full refund.",
        icon: "shield",
      },
      {
        question: "How do I migrate my existing website to your hosting?",
        answer:
          "We offer free website migration services for all new customers. Our technical team will handle the entire migration process, ensuring your website is transferred seamlessly without any downtime.",
        icon: "help",
      },
      {
        question: "What kind of customer support do you offer?",
        answer:
          "We provide 24/7 customer support through live chat, email, and phone. Our support team consists of experienced hosting specialists who can help you with any issues or questions you may have.",
        icon: "message",
      },
      {
        question: "Can I upgrade my hosting plan later?",
        answer:
          "Yes, you can easily upgrade your hosting plan as your website grows. The upgrade process is seamless and doesn't cause any downtime for your website.",
        icon: "zap",
      },
    ],
  };

  const [openItem, setOpenItem] = useState<string | null>(null);

  // Icon mapping
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

  // Add scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-green-400 tracking-wide uppercase">{faq.badge}</span>
          </div>

          {/* Title with gradient */}
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            <span className="gradient-text">{faq.title}</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">{faq.description}</p>

          {/* Decorative line */}
          <div className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full" />
        </div>

        {/* FAQ Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left side - Info cards */}
            <div className="lg:col-span-1 space-y-4 reveal">
              {/* Quick help card */}
              <div className="card-glass p-6 hover-lift group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Need More Help?</h3>
                <p className="text-gray-400 text-sm mb-4">Our support team is available 24/7</p>
                <button className="text-green-400 text-sm font-semibold hover:text-green-300 transition-colors inline-flex items-center gap-2">
                  Contact Support
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Stats card */}
              <div className="card-glass p-6 hover-lift">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Response Time</span>
                    <span className="text-green-400 font-bold">&lt; 2 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Satisfaction Rate</span>
                    <span className="text-green-400 font-bold">99.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Questions Solved</span>
                    <span className="text-green-400 font-bold">50K+</span>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="card-glass p-6 hover-lift hidden lg:block">
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {["Documentation", "Video Tutorials", "Community Forum", "Knowledge Base"].map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-green-400 transition-colors text-sm inline-flex items-center gap-2 group"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-400 transition-colors" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side - FAQ Accordion */}
            <div className="lg:col-span-2 reveal-stagger">
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
                value={openItem || undefined}
                onValueChange={(value) => setOpenItem(value)}
              >
                {faq.items.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="faq-item border-none">
                    <div className="card-glass hover-glow overflow-hidden">
                      <AccordionTrigger className="text-white hover:text-green-400 transition-all duration-300 px-6 py-5 faq-trigger hover:no-underline [&[data-state=open]]:pb-4">
                        <div className="flex items-start gap-4 text-left w-full">
                          {/* Icon */}
                          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center mt-1">
                            <div className="text-green-400">{getIcon(item.icon)}</div>
                          </div>

                          {/* Question */}
                          <div className="flex-1 pr-4">
                            <span className="font-semibold text-base">{item.question}</span>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="text-gray-400 px-6 pb-6 faq-content">
                        <div className="pl-14 pr-4">
                          <div className="pt-2 pb-1 leading-relaxed">{item.answer}</div>

                          {/* Helpful buttons */}
                          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-green-500/10">
                            <span className="text-xs text-gray-500">Was this helpful?</span>
                            <button className="text-xs px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors">
                              Yes
                            </button>
                            <button className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 transition-colors">
                              No
                            </button>
                          </div>
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
