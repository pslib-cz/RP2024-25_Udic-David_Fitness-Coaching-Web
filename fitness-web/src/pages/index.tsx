/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.css';
import layoutStyles from '../components/Layout.module.css';
import Link from 'next/link';
import Head from 'next/head';

const HomePage: React.FC = () => {
  const transformationsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
    }

    if (touchEnd - touchStart > 100) {
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    if (isMobile && transformationsRef.current) {
      const scrollTo = currentSlide * transformationsRef.current.offsetWidth;
      transformationsRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  }, [currentSlide, isMobile]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>Fitness Coaching - Osobní trénink a výživové poradenství</title>
        <meta name="description" content="Profesionální fitness coaching, tréninkové plány a výživové poradenství pro váš lepší životní styl." />
      </Head>
      
      {/* Hero sekce - plná šířka */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackdrop}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroTextContent}>
              <div className={styles.heroTagline}>ONLINE TRENÉR</div>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleMain}>DAVID</span> 
                <span className={styles.heroTitleOutline}>UDIČ</span>
              </h1>
              <p className={styles.heroText}>
                Jídelníčky a tréninkové plány. Pomůžu vám dosáhnout vašich fitness cílů!
              </p>
              <div className={styles.heroButtons}>
                <Link href="/recenze" className={styles.secondaryButton}>
                  Přečíst si recenze klientů
                </Link>
                <Link href="/sluzby" className={styles.primaryButton}>
                  Zobrazit výsledky služeb
                </Link>
              </div>
              <div className={styles.reviewStats}>
                <div className={styles.starRating}>
                  ★★★★★
                </div>
                <div className={styles.clientCount}>
                  499+ Spokojených klientů
                </div>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <img src="/images/trener-bez-bg.png" alt="Fitness trenér" className={styles.heroImage} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.marqueeSection}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeContent}>
            <span>PŘEKONEJ SVÉ LIMITY</span>
            <span className={styles.marqueeSeparator}>•</span>
            <span>STAŇ SE NEJLEPŠÍ VERZÍ SEBE SAMA</span>
            <span className={styles.marqueeSeparator}>•</span>
            <span>TRANSFORMACE ZAČÍNÁ DNES</span>
            <span className={styles.marqueeSeparator}>•</span>
            <span>SILNĚJŠÍ KAŽDÝM DNEM</span>
            <span className={styles.marqueeSeparator}>•</span>
            <span>PŘEKONEJ SVÉ LIMITY</span>
            <span className={styles.marqueeSeparator}>•</span>
            <span>STAŇ SE NEJLEPŠÍ VERZÍ SEBE SAMA</span>
            <span className={styles.marqueeSeparator}>•</span>
            <span>TRANSFORMACE ZAČÍNÁ DNES</span>
            <span className={styles.marqueeSeparator}>•</span>
            <span>SILNĚJŠÍ KAŽDÝM DNEM</span>
            <span className={styles.marqueeSeparator}>•</span>
          </div>
        </div>
      </section>
      
      <div className={layoutStyles.homePageContent}>
        <section className={styles.servicesSection}>
          <div className={styles.sectionHeader}>
            <h2>SLUŽBY PRO TVŮJ ÚSPĚCH</h2>
            <p className={styles.sectionSubtitle}>Vyberte si službu, která vám pomůže dosáhnout vašich fitness cílů</p>
          </div>
          <div className={styles.servicesGrid}>
            
            {/* COACHING+ */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>🌟</span>
                  </div>
                  <h3 className={styles.serviceTitle}>COACHING+</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2500,-</span>
                    <span className={styles.period}>/ 1 měsíc</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ 1 společný trénink měsíčně</li>
                  <li>✓ Jídelníček</li>
                  <li>✓ Tréninkový plán na míru</li>
                  <li>✓ Video vysvětlivky cviků</li>
                  <li>✓ 2x týdně kontroly</li>
                  <li>✓ WhatsApp chat</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* COACHING CLASSIC */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>🏆</span>
                  </div>
                  <h3 className={styles.serviceTitle}>COACHING CLASSIC</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2000,-</span>
                    <span className={styles.period}>/ 1 měsíc</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ Jídelníček</li>
                  <li>✓ Tréninkový plán na míru</li>
                  <li>✓ Video vysvětlivky cviků</li>
                  <li>✓ 2x týdně kontroly</li>
                  <li>✓ WhatsApp chat</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* COACHING STUDENT */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>📚</span>
                  </div>
                  <h3 className={styles.serviceTitle}>COACHING STUDENT</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2000,-</span>
                    <span className={styles.period}>/ 1. měsíc, dále 1500,-</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ Jídelníček</li>
                  <li>✓ Tréninkový plán na míru</li>
                  <li>✓ Video vysvětlivky cviků</li>
                  <li>✓ 2x týdně kontroly</li>
                  <li>✓ WhatsApp chat</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* PORADENSTVÍ */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>💡</span>
                  </div>
                  <h3 className={styles.serviceTitle}>PORADENSTVÍ</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2500,-</span>
                    <span className={styles.period}>/ 1 měsíc</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ Suplementace</li>
                  <li>✓ Optimalizace zdraví</li>
                  <li>✓ Odběry</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* JÍDELNÍČEK */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>🍽️</span>
                  </div>
                  <h3 className={styles.serviceTitle}>JÍDELNÍČEK</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>1500,-</span>
                    <span className={styles.period}>/ 1 měsíc</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ 12 variant pro každé jídlo</li>
                  <li>✓ Náročnost přípravy dle chuti</li>
                  <li>✓ Jídla na míru chutím</li>
                  <li>✓ 2x týdně kontroly</li>
                  <li>✓ WhatsApp chat</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>

            {/* TRÉNINKOVÝ PLÁN */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceCardDecoration}></div>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>📋</span>
                  </div>
                  <h3 className={styles.serviceTitle}>TRÉNINKOVÝ PLÁN</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>2000,-</span>
                  </div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li>✓ Jednorázový</li>
                  <li>✓ Na míru dle stanovených cílů</li>
                  <li>✓ Na míru dle vybavení</li>
                  <li>✓ Na míru dle časových možností</li>
                </ul>
                <Link href="/kontakt" className={styles.serviceButton}>
                  MÁM ZÁJEM <span className={styles.buttonArrow}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Proměny klientů */}
        <section className={styles.transformationsSection}>
          <div className={styles.sectionHeader}>
            <h2>ÚSPĚŠNÉ PROMĚNY</h2>
            <p className={styles.sectionSubtitle}>Inspirujte se skutečnými výsledky mých klientů</p>
          </div>
          
          <div className={styles.transformationsContainer}>
            <div 
              className={`${styles.transformationsGrid} ${isMobile ? styles.transformationsSlider : ''}`}
              ref={transformationsRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className={`${styles.transformationCard} ${isMobile ? styles.transformationSlide : ''}`}>
                <div className={styles.transformationImages}>
                  <div className={styles.transformationImageBefore}>
                    <img src="/images/1.jpg" alt="Před transformací" />
                    <span className={styles.transformationLabel}>PŘED</span>
                  </div>
                  <div className={styles.transformationImageAfter}>
                    <img src="/images/2.jpg" alt="Po transformaci" />
                    <span className={styles.transformationLabel}>PO</span>
                  </div>
                </div>
                <div className={styles.transformationContent}>
                  <h3 className={styles.transformationName}>David, 18 let</h3>
                  <p className={styles.transformationText}>
                    &quot;Otočil jsem svůj život kolem a začal se věnovat sportu. Díky tréninku jsem získal sebevědomí a zdraví. &quot;
                  </p>
                  <div className={styles.transformationStats}>
                    <div className={styles.transformationStat}>
                      <span className={styles.transformationStatValue}>-15 kg</span>
                      <span className={styles.transformationStatLabel}>Úbytek váhy</span>
                    </div>
                    <div className={styles.transformationStat}>
                      <span className={styles.transformationStatValue}>4 měsíce</span>
                      <span className={styles.transformationStatLabel}>Doba trvání</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.transformationCard} ${isMobile ? styles.transformationSlide : ''}`}>
                <div className={styles.transformationImages}>
                  <div className={styles.transformationImageBefore}>
                    <img src="/images/3.png" alt="Před transformací" />
                    <span className={styles.transformationLabel}>PŘED</span>
                  </div>
                  <div className={styles.transformationImageAfter}>
                    <img src="/images/4.png" alt="Po transformaci" />
                    <span className={styles.transformationLabel}>PO</span>
                  </div>
                </div>
                <div className={styles.transformationContent}>
                  <h3 className={styles.transformationName}>Martin, 22 let</h3>
                  <p className={styles.transformationText}>
                    &quot;David mi pomohl zajistit kompletní rekompozici těla. Díky tréninku jsem získal sebevědomí a zdraví. Zhubli jsme celkem 22kg, a nabrali 8kg ve svalech.&quot;
                  </p>
                  <div className={styles.transformationStats}>
                    <div className={styles.transformationStat}>
                      <span className={styles.transformationStatValue}>-22 kg</span>
                      <span className={styles.transformationStatLabel}>Úbytek váhy</span>
                    </div>
                    <div className={styles.transformationStat}>
                      <span className={styles.transformationStatValue}>16 měsíců</span>
                      <span className={styles.transformationStatLabel}>Doba trvání</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.transformationCard} ${isMobile ? styles.transformationSlide : ''}`}>
                <div className={styles.transformationImages}>
                  <div className={styles.transformationImageBefore}>
                    <img src="/images/5.png" alt="Před transformací" />
                    <span className={styles.transformationLabel}>PŘED</span>
                  </div>
                  <div className={styles.transformationImageAfter}>
                    <img src="/images/6.png" alt="Po transformaci" />
                    <span className={styles.transformationLabel}>PO</span>
                  </div>
                </div>
                <div className={styles.transformationContent}>
                  <h3 className={styles.transformationName}>Martina, 35 let</h3>
                  <p className={styles.transformationText}>
                    &quot;Po letech neúspěšných pokusů jsem konečně našla trenéra, který mi rozumí. Výsledky přišly rychleji, než jsem čekala.&quot;
                  </p>
                  <div className={styles.transformationStats}>
                    <div className={styles.transformationStat}>
                      <span className={styles.transformationStatValue}>-11 kg</span>
                      <span className={styles.transformationStatLabel}>Úbytek váhy</span>
                    </div>
                    <div className={styles.transformationStat}>
                      <span className={styles.transformationStatValue}>5 měsíců</span>
                      <span className={styles.transformationStatLabel}>Doba trvání</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isMobile && (
              <div className={styles.sliderDots}>
                {[...Array(totalSlides)].map((_, index) => (
                  <span 
                    key={index}
                    className={`${styles.sliderDot} ${currentSlide === index ? styles.sliderDotActive : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Přejít na proměnu ${index + 1}`}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Sociální sítě sekce */}
        <section className={styles.socialSection} aria-label="Sociální sítě">
          <div className={styles.socialContainer}>
            <div className={styles.socialHeader}>
              <img src="/images/trener.jpg" alt="Profilová fotka" className={styles.socialProfilePic} />
              <div className={styles.socialHeaderText}>
                <h2 className={styles.socialHeading}>&ldquo;NEBUDEŠ JÍST CO TI NECHUTNÁ&rdquo;</h2>
                <p className={styles.socialDescription}>
                  Ahoj, jmenuji se David a rád pomáhám lidem dosáhnout jejich fitness cílů. Mám za sebou 
                  řadu spokojených klientů, což potvrzují jejich skvělé výsledky.
                </p>
                <p className={styles.socialDescription}>
                  Mým cílem je získávat znalosti o cvičení a stravě, které pak předávám dál. Pomáhám 
                  lidem zlepšovat jejich postavu i znalosti o fitness, jak fyzicky, tak psychicky. Vím, že 
                  cvičení není jen o těle, ale i o mysli, a proto tvořím dlouhodobě udržitelné plány podle 
                  tvých chutí a potřeb. Nečekej nudnou dietu, ale vyvážený plán, který tě bude bavit.
                </p>
                <a href="mailto:info@fitnessdavid.cz" className={styles.socialEmail}>
                  info@fitnessdavid.cz
                </a>
              </div>
            </div>
            
            <div className={styles.socialPlatforms}>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className={styles.socialPlatform}>
                <div className={styles.platformTiktok}>
                  <span className={styles.platformLogo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/></svg>
                  </span>
                  <div className={styles.platformContent}>
                    <span className={styles.platformName}>TikTok</span>
                    <span className={styles.platformDescription}>Short-form videa o technice cvičení a fitness obecně.</span>
                  </div>
                  <span className={styles.platformFollow}>Sledovat →</span>
                </div>
              </a>
              
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialPlatform}>
                <div className={styles.platformInstagram}>
                  <span className={styles.platformLogo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                  <div className={styles.platformContent}>
                    <span className={styles.platformName}>Instagram</span>
                    <span className={styles.platformDescription}>Fotky z mého života, short-form videa o technice cvičení a fitness obecně.</span>
                  </div>
                  <span className={styles.platformFollow}>Sledovat →</span>
                </div>
              </a>
              
              <a href="https://strava.com/" target="_blank" rel="noopener noreferrer" className={styles.socialPlatform}>
                <div className={styles.platformStrava}>
                  <span className={styles.platformLogo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>
                  </span>
                  <div className={styles.platformContent}>
                    <span className={styles.platformName}>Strava</span>
                    <span className={styles.platformDescription}>Sledujte moje tréninky, běhy a cyklistické výkony.</span>
                  </div>
                  <span className={styles.platformFollow}>Sledovat →</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;