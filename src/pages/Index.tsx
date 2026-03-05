import { motion } from "framer-motion";
import { Leaf, Sparkles, Heart, Star, Droplets } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-spa.jpg";
import ingredientsImage from "@/assets/ingredients.jpg";
import spaImage from "@/assets/spa-ambience.jpg";
import bridalImage from "@/assets/bridal.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Leaf,
    title: "Herbal Skin Treatments",
    desc: "Ayurvedic facials, anti-tan, and skin brightening with natural ingredients.",
  },
  {
    icon: Droplets,
    title: "Spa & Relaxation",
    desc: "Body spa, aromatherapy massage, body scrub and steam therapy.",
  },
  {
    icon: Sparkles,
    title: "Hair Care",
    desc: "Herbal hair spa, styling, colouring, and rebonding services.",
  },
  {
    icon: Heart,
    title: "Bridal Services",
    desc: "Complete bridal & engagement makeup with herbal pre-bridal programs.",
  },
];

const ingredients = [
  { name: "Turmeric", benefit: "Skin brightening", emoji: "🌿" },
  { name: "Neem", benefit: "Acne control", emoji: "🍃" },
  { name: "Sandalwood", benefit: "Cooling & glow", emoji: "🪵" },
  { name: "Rose", benefit: "Skin hydration", emoji: "🌹" },
  { name: "Saffron", benefit: "Complexion improvement", emoji: "✨" },
];

const testimonials = [
  {
    text: "I came here for a herbal facial and my skin felt naturally refreshed.",
    author: "Priya R.",
  },
  {
    text: "The spa treatment was relaxing and used natural herbal products.",
    author: "Deepa M.",
  },
  {
    text: "One of the few places in Erode offering genuine herbal beauty treatments.",
    author: "Lakshmi S.",
  },
];

const whyChoose = [
  "Herbal and ayurvedic beauty treatments",
  "7+ years of experience",
  "Natural plant-based ingredients",
  "Calm spa environment",
  "Trusted by clients in Kollampalayam",
];

const Index = () => {
  const whatsappLink =
    "https://wa.me/919876543210?text=Hi%20Bright%20Angel%20Herbal%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20a%20herbal%20treatment%20appointment.";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Herbal spa ingredients and treatments" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-gold font-body text-sm tracking-widest uppercase mb-4">
              Natural Beauty & Wellness
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream-light leading-tight mb-6">
              Kollampalayam's Herbal Beauty & Ayurvedic Spa Sanctuary
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-cream/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Experience natural beauty treatments, herbal facials, spa therapies, and bridal makeup designed to nourish your skin and relax your body.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-7 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity shadow-gold"
              >
                Book Herbal Treatment
              </a>
              <a
                href="/services"
                className="border border-cream/40 text-cream-light px-7 py-3 rounded-full font-medium text-sm hover:bg-cream-light/10 transition-colors"
              >
                Explore Our Spa Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28 bg-cream-gradient">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={spaImage}
                alt="Bright Angel spa ambience"
                className="rounded-2xl shadow-herbal w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">About Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Your Natural Beauty Destination
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bright Angel Herbal Beauty Parlour & Spa is a natural beauty destination in Kollampalayam specializing in herbal and ayurvedic treatments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For over 7 years, we have helped women achieve healthy skin and hair using natural ingredients and relaxing spa therapies. Our studio focuses on gentle treatments that provide long-lasting beauty without harsh chemicals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Herbal Treatments & Spa Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-herbal transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-herbal-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Highlight */}
      <section className="py-20 md:py-28 bg-herbal-gradient text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-light font-body text-sm tracking-widest uppercase mb-3">Bridal Services</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Make Your Special Day Radiant
              </h2>
              <p className="text-primary-foreground/85 leading-relaxed mb-6">
                Our bridal packages include professional makeup, engagement looks, and herbal pre-bridal skin programs that ensure you glow naturally on your wedding day.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-accent-foreground px-7 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Book Bridal Consultation
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={bridalImage}
                alt="Bridal makeup"
                className="rounded-2xl w-full aspect-square object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20 md:py-28 bg-cream-gradient">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Natural Ingredients</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Powered by Nature
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center bg-card rounded-2xl p-6 border border-border"
              >
                <span className="text-3xl mb-3 block">{ing.emoji}</span>
                <h4 className="font-heading text-base font-semibold text-foreground mb-1">{ing.name}</h4>
                <p className="text-muted-foreground text-xs">{ing.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-muted-foreground text-sm font-medium">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-cream-gradient">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-10">
              Bright Angel Difference
            </h2>
            <div className="flex flex-col gap-4">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 bg-card rounded-xl px-6 py-4 border border-border text-left"
                >
                  <Leaf className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-herbal-gradient text-primary-foreground text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready for a Natural Glow?
            </h2>
            <p className="text-primary-foreground/85 mb-8">
              Book your herbal treatment today and experience the difference of natural beauty care.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity shadow-gold"
            >
              Book on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
