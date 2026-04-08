import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card glow-gold rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Ready for a <span className="text-gradient-gold">Fresh Cut?</span>
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg mb-8 max-w-md mx-auto">
            Walk in today or call ahead. Our experienced barbers are ready to give you the look you want.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:9544404194" className="btn-primary text-base">
              <Phone className="w-4 h-4" />
              Call (954) 440-4194
            </a>
            <a
              href="https://maps.google.com/?q=5070+N+Dixie+Hwy+Oakland+Park+FL+33334"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base"
            >
              Visit Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
