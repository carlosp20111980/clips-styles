const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-xl font-bold mb-2">
          Clips <span className="text-primary">&</span> Styles
        </p>
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Clips & Styles Barber Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
