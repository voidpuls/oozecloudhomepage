"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"

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
      },
      {
        question: "What's the difference between shared hosting, VPS, and dedicated servers?",
        answer:
          "Shared hosting means your website shares server resources with other websites. VPS (Virtual Private Server) provides dedicated resources within a shared environment, giving you more control and performance. Dedicated servers offer an entire physical server exclusively for your use, providing maximum performance and control.",
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer:
          "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our service within the first 30 days, you can request a full refund.",
      },
      {
        question: "How do I migrate my existing website to your hosting?",
        answer:
          "We offer free website migration services for all new customers. Our technical team will handle the entire migration process, ensuring your website is transferred seamlessly without any downtime.",
      },
      {
        question: "What kind of customer support do you offer?",
        answer:
          "We provide 24/7 customer support through live chat, email, and phone. Our support team consists of experienced hosting specialists who can help you with any issues or questions you may have.",
      },
      {
        question: "Can I upgrade my hosting plan later?",
        answer:
          "Yes, you can easily upgrade your hosting plan as your website grows. The upgrade process is seamless and doesn't cause any downtime for your website.",
      },
    ],
  }

  const [openItem, setOpenItem] = useState<string | null>(null)

  // Add scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Check on initial load

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center reveal">
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-sm bg-green-500/10 border border-green-500/20 rounded-full text-green-400 mb-4">
            <span>{faq.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{faq.title}</h2>
          <p className="text-gray-400">{faq.description}</p>
        </div>

        <div className="grid grid-cols-1 max-w-3xl mx-auto">
          <div className="w-full reveal-stagger">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openItem || undefined}
              onValueChange={(value) => setOpenItem(value)}
            >
              {faq.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-green-500/20 overflow-hidden group faq-item mb-3"
                >
                  <AccordionTrigger className="text-white hover:text-green-400 transition-all duration-300 py-6 group-hover:bg-green-500/5 px-4 rounded-t-lg faq-trigger">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 bg-black/50 backdrop-blur-md px-4 py-6 rounded-b-lg faq-content">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
