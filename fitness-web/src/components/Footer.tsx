import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { BsInstagram, BsFacebook, BsYoutube, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Fitness Coaching</h3>
            <p className={styles.footerText}>
              Profesionální přístup k vašemu zdraví a fitness cílům. Dosáhněte své nejlepší verze s personalizovaným 
              tréninkovým plánem a odborným vedením.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com/" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <BsInstagram size={18} />
              </a>
              <a href="https://facebook.com/" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <BsFacebook size={18} />
              </a>
              <a href="https://youtube.com/" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <BsYoutube size={18} />
              </a>
              <a href="https://wa.me/123456789" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <BsWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Rychlé odkazy</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>Domů</Link>
              </li>
              <li>
                <Link href="/aboutme" className={styles.footerLink}>O mně</Link>
              </li>
              <li>
                <Link href="/kontakt" className={styles.footerLink}>Kontakt</Link>
              </li>
              <li>
                <Link href="/obchodni-podminky" className={styles.footerLink}>Obchodní podmínky a GDPR</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Kontakt</h3>
            <address className={styles.footerAddress}>
              <p>
                <HiOutlineMail style={{ marginRight: '8px' }} />
                <a href="mailto:info@fitnesscoaching.cz" className={styles.footerLink}>info@fitnesscoaching.cz</a>
              </p>
              <p>
                <HiOutlinePhone style={{ marginRight: '8px' }} />
                <a href="tel:+420123456789" className={styles.footerLink}>+420 123 456 789</a>
              </p>
              <p>
                <HiOutlineLocationMarker style={{ marginRight: '8px' }} />
                Praha, Česká republika
              </p>
            </address>
            <div className={styles.footerCopyright}>
              © {currentYear} Fitness Coaching - Všechna práva vyhrazena
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;