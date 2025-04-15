import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';
import { BsList, BsX } from 'react-icons/bs'; 

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}> 
        <Link href="/" className={styles.brandLink}>
          Fitness Coaching 
        </Link>
      </div>

      <div className={styles.desktopNav}> 
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Domů
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/aboutme" className={styles.navLink}>
              O mně
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/kontakt" className={styles.navLink}>
              Kontakt
            </Link>
          </li>
        </ul>
        <ThemeToggle /> 
      </div>

      <div className={styles.mobileNav}>
        <button className={styles.menuToggleButton} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <BsX size="25" color="var(--color-text-primary)"/> : <BsList size="25" color="var(--color-text-primary)"/>} 
        </button>

        {isMobileMenuOpen && ( 
          <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}> 
            <ul className={styles.mobileMenuList}>
              <li className={styles.mobileMenuItem}>
                <Link href="/" className={styles.mobileMenuLink} onClick={() => setIsMobileMenuOpen(false)}> 
                  Domů
                </Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link href="/aboutme" className={styles.mobileMenuLink} onClick={() => setIsMobileMenuOpen(false)}>
                  O mně
                </Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link href="/kontakt" className={styles.mobileMenuLink} onClick={() => setIsMobileMenuOpen(false)}>
                  Kontakt
                </Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <ThemeToggle /> 
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;