import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-spa.jpg";
import spaImage from "@/assets/spa-ambience.jpg";
import bridalImage from "@/assets/bridal.jpg";
import ingredientsImage from "@/assets/ingredients.jpg";

const images = [
  { src: heroImage, alt: "Herbal beauty treatments and natural ingredients" },
  { src: spaImage, alt: "Spa ambience at Bright Angel" },
  { src: bridalImage, alt: "Bridal makeup transformation" },
  { src: ingredientsImage, alt: "Natural herbal ingredients" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-cream-gradient">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent font-body text-sm tracking-widest uppercase mb-3">Our Gallery</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Glimpse of Bright Angel
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our herbal treatments, spa ambience, and bridal transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
