import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anthony Fratto",
    badge: "Local Guide · 299 reviews",
    time: "2 months ago",
    rating: 5,
    text: "I was in from out of town and needed a haircut. Gabriel did a really good job. I highly recommend him to anybody, very reasonable prices. And clean shop.",
    initials: "AF",
  },
  {
    name: "Tony Warren",
    badge: "Local Guide · 121 reviews",
    time: "7 months ago",
    rating: 5,
    text: "Gabriel cuts my hair regularly. Always does a great job. Friendly place.",
    initials: "TW",
  },
  {
    name: "Verified Customer",
    badge: "Google Review",
    time: "Recent",
    rating: 5,
    text: "Very clean and friendly environment with experienced barbers. If you're looking for professional and experienced barbers, this is the place.",
    initials: "VC",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Trusted by the Community
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-md mx-auto">
            See why Oakland Park keeps coming back for more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="glass-card rounded-xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 font-body leading-relaxed text-sm flex-1 mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-bold font-body">
                  {review.initials}
                </div>
                <div>
                  <p className="font-body font-medium text-foreground text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">{review.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
