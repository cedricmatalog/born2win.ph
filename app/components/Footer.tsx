import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/free-webinar', label: 'Free Webinar' },
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/contact', label: 'Contact' },
  { href: '/global', label: 'Global Students' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
  { label: 'Instagram', path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.53c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
  { label: 'LinkedIn', path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

export default function Footer() {
  return (
    <footer id="contact" style={{
      background: '#050505',
      borderTop: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)',
        padding: '3rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background text */}
        <div className="font-display" style={{
          position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)',
          fontSize: '8rem', lineHeight: 1,
          color: 'rgba(0,0,0,0.1)', letterSpacing: '0.05em', userSelect: 'none',
        }}>FREE</div>

        <div className="inner" style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1.5rem', position: 'relative', zIndex: 1,
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: '4px' }}>
              Limited Time
            </div>
            <h3 className="font-display" style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              letterSpacing: '0.04em', color: '#000', margin: 0, lineHeight: 1.1,
            }}>
              Attend Our Free 3-Hour Online Workshop
            </h3>
          </div>
          <a href="/free-webinar" className="footer-cta-btn" style={{
            display: 'inline-block',
            background: '#000',
            color: 'var(--gold)',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '1rem 2.5rem',
            textDecoration: 'none',
            transition: 'background 0.2s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            Register Now &rarr;
          </a>
        </div>
      </div>

      {/* Footer body */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '3.5rem', paddingBottom: '2rem' }} className="inner">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginBottom: '3rem' }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Image
                src="/Logo-Gray.png"
                alt="Born2WinPh"
                width={140}
                height={40}
                style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
              />
            </div>
            <p style={{
              fontSize: '0.85rem', lineHeight: 1.7,
              fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '260px',
            }}>
              Empowering individuals through world-class forex trading education.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {SOCIAL_LINKS.map(function renderSocial(s) {
                return (
                  <a key={s.label} href="#" aria-label={s.label}
                    className="hover-social"
                    style={{
                      width: '36px', height: '36px',
                      border: '1px solid rgba(212,175,55,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" width="14" height="14">
                      <path d={s.path} />
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_LINKS.map(function renderFooterLink(l) {
                return (
                  <Link key={l.href} href={l.href}
                    className="hover-text-primary"
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)', textDecoration: 'none',
                    }}
                  >{l.label}</Link>
                );
              })}
            </div>
          </div>

          {/* Contact / Info */}
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem' }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Born2WinPh Training Services Inc.
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(138,128,112,0.6)', letterSpacing: '0.05em' }}>
                SEC No. 2024020136291-03
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-rule" />
        <div className="footer-bottom" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem',
        }}>
          <p style={{ fontSize: '0.7rem', color: 'rgba(138,128,112,0.5)', margin: 0 }}>
            Copyright &copy; 2020 Born2WinPh Training Services Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Use'].map(function renderLegalLink(t) {
              return (
                <a key={t} href="#" style={{
                  fontSize: '0.7rem',
                  color: 'rgba(138,128,112,0.5)', textDecoration: 'none',
                }}>{t}</a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
