"use client";

import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "What is your rate structure?",
    answer:
      "My rates vary depending on the project scope, duration, and requirements. I offer day rates, project-based pricing, and package deals for weddings. Please contact me with your project details for a custom quote.",
  },
  {
    question: "Do you travel for projects?",
    answer:
      "Yes, I'm available for projects worldwide. Travel and accommodation expenses are typically added to the project quote for locations outside of Lagos.",
  },
  {
    question: "What equipment do you use?",
    answer:
      "I work with a variety of professional cinema cameras including ARRI Alexa, RED, and Sony Venice systems. Equipment selection is tailored to each project's specific needs and aesthetic goals.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For feature films, I recommend booking at least 2–3 months in advance. For commercials and music videos, 3–4 weeks notice is preferred. For weddings, please book 3–6 months in advance.",
  },
  {
    question: "Do you have a crew you work with?",
    answer:
      "Yes, I have a network of trusted professionals I regularly collaborate with — gaffers, camera operators, and focus pullers. I can assemble a complete camera and lighting department tailored to your project.",
  },
];

const projectTypes = ["Film", "Commercial", "Wedding / Ceremony", "Music Video", "Other"];

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", projectType: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const isWedding = formData.projectType === "Wedding / Ceremony";

  return (
    <div className="pt-24 bg-[#080808] min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.p
              className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.p>
            <motion.h1
              className="font-display text-5xl md:text-6xl font-light text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Get In Touch
            </motion.h1>
            <div className="h-px w-16 bg-[hsl(var(--gold)/0.6)] mb-6" />
            <motion.p
              className="text-gray-400 font-sans text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Let&apos;s discuss your project and create something amazing together.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-display text-3xl text-white font-light mb-6">Contact Information</h2>
                <p className="text-gray-400 font-sans leading-relaxed mb-8">
                  Feel free to reach out for collaborations, inquiries, or just to say hello.
                  I&apos;m open to discussing new projects and creative ideas.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <MapPin className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />,
                      label: "Location",
                      content: (
                        <>
                          <p className="text-gray-300 font-sans text-sm">Lagos, Nigeria</p>
                          <p className="text-gray-500 font-sans text-xs mt-0.5">Available for projects worldwide</p>
                        </>
                      ),
                    },
                    {
                      icon: <Mail className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />,
                      label: "Email",
                      content: (
                        <a href="mailto:salakotum@gmail.com" className="text-gray-300 hover:text-[hsl(var(--gold))] transition-colors font-sans text-sm">
                          salakotum@gmail.com
                        </a>
                      ),
                    },
                    {
                      icon: <Phone className="h-5 w-5 text-[hsl(var(--gold))] flex-shrink-0 mt-0.5" />,
                      label: "Phone",
                      content: (
                        <a href="tel:+2348162680019" className="text-gray-300 hover:text-[hsl(var(--gold))] transition-colors font-sans text-sm">
                          +234 816 268 0019
                        </a>
                      ),
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      {item.icon}
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold)/0.7)] font-sans mb-1">{item.label}</p>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="border border-[hsl(var(--gold)/0.15)] p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[hsl(var(--gold)/0.6)] to-transparent" />
                <h3 className="font-display text-xl text-white mb-3">Availability</h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  Currently booking projects for 2025–2026. Please reach out at least:
                </p>
                <ul className="mt-3 space-y-1.5">
                  {[
                    "2–3 months ahead for feature films",
                    "3–4 weeks ahead for commercials",
                    "3–6 months ahead for weddings",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400 font-sans">
                      <span className="w-1 h-1 bg-[hsl(var(--gold)/0.6)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl text-white font-light mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-zinc-950 border-zinc-800 rounded-none focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.3)] font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="bg-zinc-950 border-zinc-800 rounded-none focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.3)] font-sans"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">Project Type</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 text-white font-sans text-sm px-3 py-2.5 rounded-none focus:outline-none focus:border-[hsl(var(--gold)/0.5)] transition-colors"
                  >
                    <option value="" disabled>Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Wedding note */}
                {isWedding && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border border-[hsl(var(--gold)/0.3)] bg-[hsl(var(--gold)/0.04)] px-4 py-3 flex items-start gap-3"
                  >
                    <span className="text-[hsl(var(--gold))] text-sm mt-0.5">✦</span>
                    <p className="text-sm text-gray-300 font-sans">
                      For weddings, I recommend booking{" "}
                      <span className="text-[hsl(var(--gold))]">3–6 months in advance</span>.
                      Please include your wedding date and location in your message.
                    </p>
                  </motion.div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                    className="bg-zinc-950 border-zinc-800 rounded-none focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.3)] font-sans"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="min-h-[160px] bg-zinc-950 border-zinc-800 rounded-none focus:border-[hsl(var(--gold)/0.5)] focus:ring-[hsl(var(--gold)/0.3)] font-sans resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-none bg-[hsl(var(--gold))] text-black hover:bg-[hsl(var(--gold)/0.85)] font-sans font-semibold tracking-widest text-xs uppercase"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#050505] border-t border-[hsl(var(--gold)/0.1)]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--gold))] font-sans mb-2">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">Frequently Asked Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-[hsl(var(--gold)/0.4)] pl-6 py-1"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3 className="font-display text-xl text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
