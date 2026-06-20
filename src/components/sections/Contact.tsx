"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Append the access key directly
    formData.append("access_key", "bb90440f-d405-4719-b5be-c18421f6a747");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
        // Hide success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (error: any) {
      setErrorMsg("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-background relative border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted text-muted-foreground text-xs font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space)] tracking-tight">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Email */}
            <div className="flex items-center gap-5 p-5 rounded-3xl border border-border bg-card hover:bg-muted/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                <a href="mailto:shivangi.gupta9324@gmail.com" className="text-foreground hover:text-muted-foreground transition-colors font-semibold text-sm sm:text-base break-all">
                  shivangi.gupta9324@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 p-5 rounded-3xl border border-border bg-card hover:bg-muted/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
                <a href="tel:9324339387" className="text-foreground hover:text-muted-foreground transition-colors font-semibold text-base">
                  +91 9324339387
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 p-5 rounded-3xl border border-border bg-card hover:bg-muted/30 transition-colors">
              <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-semibold text-base">Mumbai, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 p-6 md:p-10 rounded-3xl border border-border bg-card shadow-sm relative overflow-hidden"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-2.5"
              >
                <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-2.5"
              >
                <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="space-y-2.5"
              >
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all resize-none"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {isSuccess ? (
                  <div className="w-full py-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-semibold flex items-center justify-center gap-2 mt-4">
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent Successfully!
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-foreground text-background font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                )}
                
                {errorMsg && (
                  <p className="text-sm text-center text-red-500 mt-4">
                    {errorMsg}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
