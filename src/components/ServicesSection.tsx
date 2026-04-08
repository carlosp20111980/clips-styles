import { motion } from "framer-motion";
import { Scissors, Sparkles, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Precision Haircuts",
    desc: "Tailored cuts for every style — fades, tapers, classics, and more.",
  },
  {
    icon: Sparkles,
    title: "Beard Grooming",
    desc: "Clean trims, line-ups, and shaping for a polished look.",
  },
  {
    icon: TrendingUp,
    title: "Modern Styles",
    desc: "Stay on trend with the latest cuts and techniques.",
  },
  {
    icon: Users,
    title: "Walk-Ins Welcome",
    desc: "No appointment needed. Come in anytime during business hours.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Expert Barber Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-card rounded-xl p-6 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
