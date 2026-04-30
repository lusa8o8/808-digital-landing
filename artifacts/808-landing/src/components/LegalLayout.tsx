import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg hover:opacity-70 transition-opacity" data-testid="nav-logo">
          808 Digital
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="/#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="/#about" className="hover:text-foreground transition-colors">About</a>
          <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          data-testid="nav-back-home"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to site
        </Link>
      </nav>

      <main className="max-w-[900px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {children}
      </main>

      <footer className="border-t py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            Samm and D8 are products of Eight Zero Eight Digital Systems
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/data-deletion" className="hover:text-foreground transition-colors">Data Deletion</Link>
            <a href="mailto:lusa@eightzeroeight.online" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
