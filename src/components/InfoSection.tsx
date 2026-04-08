import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Scissors } from "lucide-react";

const InfoSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left: About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">
              About Us
            </p>
            <h2 className="text-4xl font-display font-bold mb-6">
              Crafted Cuts, <br />
              <span className="text-primary">Every Time</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              At Clips & Styles, we believe every haircut is a craft. Our experienced barbers
              deliver clean, precise cuts in a friendly, professional environment. Walk-ins
              welcome — no appointment needed.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Scissors, label: "Haircuts" },
                { icon: Scissors, label: "Beard Trims" },
                { icon: Scissors, label: "Line-Ups" },
                { icon: Scissors, label: "Fades" },
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground/80">
                  <service.icon className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">{service.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">
              Visit Us
            </p>
            <h2 className="text-4xl font-display font-bold mb-6">
              Find Us Here
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground text-sm">5070 N Dixie Hwy, Oakland Park, FL 33334</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground">Phone</p>
                  <a href="tel:9544404194" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    (954) 440-4194
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-sm">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-foreground">Hours</p>
                  <p className="text-muted-foreground text-sm">Mon – Sat: 9:30 AM – 7:00 PM</p>
                  <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
