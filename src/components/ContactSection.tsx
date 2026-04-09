import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-elevated/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Come See Us Today
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            {
              icon: MapPin,
              label: "Location",
              primary: "5070 N Dixie Hwy",
              secondary: "Oakland Park, FL 33334",
              href: "https://maps.google.com/?q=5070+N+Dixie+Hwy+Oakland+Park+FL+33334",
            },
            {
              icon: Phone,
              label: "Call Us",
              primary: "(954) 440-4194",
              secondary: "Walk-ins welcome",
              href: "tel:9544404194",
            },
            {
              icon: Clock,
              label: "Hours",
              primary: "Mon – Sat: 9:30 AM – 7 PM",
              secondary: "Sunday: Closed",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card rounded-xl p-6 text-center block hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-body mb-2">{item.label}</p>
                  <p className="font-display font-bold text-foreground text-lg">{item.primary}</p>
                  <p className="text-muted-foreground text-sm font-body mt-1">{item.secondary}</p>
                </a>
              ) : (
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-body mb-2">{item.label}</p>
                  <p className="font-display font-bold text-foreground text-lg">{item.primary}</p>
                  <p className="text-muted-foreground text-sm font-body mt-1">{item.secondary}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
