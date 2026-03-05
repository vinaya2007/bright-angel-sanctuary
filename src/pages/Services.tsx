import { motion } from "framer-motion";
import { Leaf, Droplets, Sparkles, Heart, Scissors } from "lucide-react";
import Layout from "@/components/Layout";

const serviceCategories = [
  {
    icon: Leaf,
    title: "Herbal & Ayurvedic Skin Treatments",
    items: [
      "Herbal facial treatments",
      "Ayurvedic glow facials",
      "Herbal anti-tan treatments",
      "Skin brightening treatments",
    ],
  },
  {
    icon: Droplets,
    title: "Spa Services",
    items: [
      "Body spa treatments",
      "Aromatherapy massage",
      "Relaxation massage",
      "Body scrub and steam therapy",
    ],
  },
  {
    icon: Sparkles,
    title: "Hair Care Services",
    items: [
      "Hair styling",
      "Herbal hair spa",
      "Hair colouring",
      "Hair rebonding",
    ],
  },
  {
    icon: Heart,
    title: "Bridal Services",
    items: [
      "Bridal makeup",
      "Engagement makeup",
      "Herbal pre-bridal skin programs",
    ],
  },
  {
    icon: Scissors,
    title: "Beauty & Grooming Services",
    items: ["Waxing", "Threading", "Manicure", "Pedicure"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-cream-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">What We Offer</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Discover our range of herbal beauty treatments, spa therapies, and bridal services — all powered by natural ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-herbal transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-herbal-light flex items-center justify-center mb-5">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">{cat.title}</h2>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://wa.me/919876543210?text=Hi%20Bright%20Angel%20Herbal%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20a%20herbal%20treatment%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Book a Treatment
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
