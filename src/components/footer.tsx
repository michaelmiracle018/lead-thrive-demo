import { Link } from '@tanstack/react-router';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import logo from '~/assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/70">
      {/* CTA strip */}
      <div className="border-b border-cream/8">
        <div className="container-main py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl lg:text-3xl font-display text-cream">
              Ready to Lead with Purpose?
            </h3>
            <p className="mt-2 text-cream/50">
              Join a community of Kingdom leaders making real impact.
            </p>
          </div>
          <a
            href="https://chat.whatsapp.com/FIXYLeEAllNGpSoHyDPu5R?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shrink-0"
          >
            Join The Tribe <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <img src={logo} alt="The LeaDTribe Group" className="h-14 w-auto brightness-[2]" />
            <p className="mt-5 text-sm leading-relaxed text-cream/45 max-w-xs">
              Inspiring Kingdom Leadership for Societal Transformation across Africa and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cream text-xs uppercase tracking-[0.15em] mb-5">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Programs' },
                { to: '/programs/students', label: 'Student Programs' },
                { to: '/programs/professionals', label: 'Professional Programs' },
                { to: '/gallery', label: 'Gallery' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm hover:text-gold transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cream text-xs uppercase tracking-[0.15em] mb-5">
              Get Involved
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://chat.whatsapp.com/FIXYLeEAllNGpSoHyDPu5R?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Join The Tribe
              </a>
              <Link
                to="/derrick-senyo-diaba"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                The Leader
              </Link>
              <a
                href="mailto:derrick@leadtribe.africa"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                Partner With Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-cream text-xs uppercase tracking-[0.15em] mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="tel:+233244304761"
                className="flex items-center gap-3 hover:text-gold transition-colors duration-300"
              >
                <Phone size={15} className="text-gold/60" /> +233 24 430 4761
              </a>
              <a
                href="mailto:derrick@leadtribe.africa"
                className="flex items-center gap-3 hover:text-gold transition-colors duration-300"
              >
                <Mail size={15} className="text-gold/60" /> derrick@leadtribe.africa
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-gold/60 shrink-0" /> Accra, Ghana
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} The LeaDTribe Group. All rights reserved.</p>
          <p>Inspiring Kingdom Leadership for Societal Transformation</p>
        </div>
      </div>
    </footer>
  );
}
