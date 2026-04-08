import { motion } from "framer-motion";
import { Star, MapPin, Phone, Clock } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Clips & Styles Barber Shop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-4">
            Oakland Park, Florida
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6">
            Clips <span className="text-primary">&</span> Styles
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-body mb-8 max-w-md mx-auto">
            Professional barbers. Clean cuts. Quality service.
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? "fill-primary text-primary" : i === 4 ? "fill-primary/70 text-primary/70" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="text-primary font-display text-xl font-bold">4.7</span>
            <span className="text-muted-foreground text-sm">(58 reviews)</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9544404194"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-body font-medium tracking-wide hover:bg-gold-light transition-colors rounded-sm"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </a>
            <a
              href="https://maps.google.com/?q=5070+N+Dixie+Hwy+Oakland+Park+FL+33334"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary/30 text-foreground px-8 py-4 font-body font-medium tracking-wide hover:border-primary hover:text-primary transition-colors rounded-sm"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Quick Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>5070 N Dixie Hwy, Oakland Park, FL</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>Open 9:30 AM – 7:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>(954) 440-4194</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
