import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Send } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Bright Angel, I'm ${form.name}. Phone: ${form.phone}. Service: ${form.service}. Preferred date: ${form.date}. ${form.message}`;
    window.open(
      `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-cream-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Get In Touch</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select Service</option>
                  <option>Herbal Facial</option>
                  <option>Body Spa</option>
                  <option>Hair Spa</option>
                  <option>Bridal Makeup</option>
                  <option>Waxing & Grooming</option>
                  <option>Other</option>
                </select>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <textarea
                  placeholder="Any special requests..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Arunachala Kawndar Building, Gandhi Ji 2nd Street, Kollampalayam, Erode – 638002, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Working Hours</h3>
                    <p className="text-muted-foreground text-sm">10:00 AM – 6:00 PM (Daily)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border">
                <iframe
                  title="Bright Angel Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.5!2d77.72!3d11.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzI0LjAiTiA3N8KwNDMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
