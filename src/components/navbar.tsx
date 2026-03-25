import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '~/assets/logo.jpg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/derrick-senyo-diaba', label: 'The Leader' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/books', label: 'Library' },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.onscroll = onScroll;
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-background/95 border-b border-border/60 shadow-sm backdrop-blur-lg'
          : 'bg-forest-dark/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-main h-18 lg:h-20 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="The LeaDTribe Group"
            className="h-11 w-auto transition-transform duration-300 lg:h-13 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              // TanStack Router handles the active logic automatically
              activeOptions={{ exact: link.to === '/' }}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300`}
            >
              {({ isActive }: any) => (
                <>
                  <span
                    className={
                      isActive
                        ? scrolled
                          ? 'text-primary bg-primary/8'
                          : 'text-gold'
                        : scrolled
                          ? 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                          : 'text-cream/80 hover:text-cream'
                    }
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="bg-current absolute right-4 bottom-0 left-4 h-0.5 rounded-full" />
                  )}
                </>
              )}
            </Link>
          ))}

          <Link
            to="/register"
            className={`ml-4 inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
              scrolled
                ? 'bg-primary text-primary-foreground hover:bg-forest-light'
                : 'bg-gold text-forest-dark hover:brightness-110'
            }`}
          >
            Join The Tribe <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`p-2 rounded-lg transition-colors lg:hidden ${
            scrolled ? 'text-foreground' : 'text-cream'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-background/98 border-t border-border animate-in fade-in slide-in-from-top-2 backdrop-blur-xl lg:hidden">
          <div className="container-main flex flex-col gap-1 py-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === '/' }}
                className="rounded-lg px-4 py-3 text-base font-medium transition-colors"
                // Using activeProps for cleaner mobile logic
                activeProps={{ className: 'text-primary bg-primary/8' }}
                inactiveProps={{
                  className: 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="btn-gold mt-4 text-center text-sm"
            >
              Join The Tribe <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
