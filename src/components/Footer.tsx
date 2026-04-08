import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold">
          Clips <span className="text-gradient-gold">&</span> Styles
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
          <span>5070 N Dixie Hwy, Oakland Park, FL</span>
          <a href="tel:9544404194" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            (954) 440-4194
          </a>
        </div>
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
