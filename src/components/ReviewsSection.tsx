import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Anthony Fratto",
    badge: "Local Guide · 299 reviews",
    time: "2 months ago",
    rating: 5,
    text: "I was in from out of town and needed a haircut. Gabriel did a really good job. I highly recommend him to anybody, very reasonable prices. And clean shop.",
  },
  {
    name: "Tony Warren",
    badge: "Local Guide · 121 reviews",
    time: "7 months ago",
    rating: 5,
    text: "Gabriel cuts my hair regularly. Always does a great job. Friendly place.",
  },
  {
    name: "Verified Customer",
    badge: "Google Review",
    time: "Recent",
    rating: 5,
    text: "Very clean and friendly environment with experienced barbers. If you're looking for professional and experienced barbers, this is the place.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border p-8 rounded-sm relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 font-body leading-relaxed mb-6 text-sm">
                "{review.text}"
              </p>
              <div>
                <p className="font-body font-medium text-foreground">{review.name}</p>
                <p className="text-muted-foreground text-xs">{review.badge} · {review.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
