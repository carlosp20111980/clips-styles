import { motion } from "framer-motion";
import { Star, Phone, MapPin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clips & Styles Barber Shop interior"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Top Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-20 px-6 py-5"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight">
            Clips <span className="text-gradient-gold">&</span> Styles
          </div>
          <a href="tel:9544404194" className="btn-primary !px-5 !py-2.5 text-sm !rounded-full">
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < 5 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <span className="text-foreground font-body text-sm font-medium">4.7</span>
              <span className="text-muted-foreground text-xs">· 58 reviews</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[0.95] mb-5">
              Your Best Cut
              <br />
              <span className="text-gradient-gold">Starts Here</span>
            </h1>

            <p className="text-foreground/60 text-base md:text-lg font-body mb-8 max-w-md leading-relaxed">
              Professional barbers, clean environment, and quality service in Oakland Park. Walk-ins always welcome.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:9544404194" className="btn-primary text-base">
                <Phone className="w-4 h-4" />
                Book Your Cut
              </a>
              <a
                href="https://maps.google.com/?q=5070+N+Dixie+Hwy+Oakland+Park+FL+33334"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground animate-float" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
