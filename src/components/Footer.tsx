export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sartaj Ahmad Mir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
