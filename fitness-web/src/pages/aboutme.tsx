import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './aboutme.module.css';
import { FaAward, FaDumbbell, FaStar, FaUserGraduate, FaRunning, FaHeartbeat } from 'react-icons/fa';

const AboutMePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>O mně | Fitness Coaching</title>
        <meta name="description" content="Poznejte svého osobního trenéra. Profesionální fitness coaching založený na letech zkušeností a stovkách spokojených klientů." />
      </Head>

      <div className={styles.aboutContainer}>
        <div className={styles.heroSection}>
          <span className={styles.subtitle}>O MNĚ</span>
          <h1 className={styles.title}>Kdo jsem?</h1>
          <div className={styles.separator}></div>
        </div>

        <section className={styles.introSection}>
          <div className={styles.introWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/trener.jpg"
                  alt="Osobní trenér"
                  width={500}
                  height={600}
                  className={styles.trainerImage}
                  priority
                />
                <div className={styles.experienceBadge}>
                  <span className={styles.experienceYears}>3+</span>
                  <span className={styles.experienceText}>Let zkušeností</span>
                </div>
              </div>
            </div>
            <div className={styles.introContent}>
              <h2 className={styles.introTitle}>Vítejte v&nbsp;mém světě fitness</h2>
              <p className={styles.introParagraph}>
                Ahoj, jmenuji se David Udič a pomáhat lidem v tomhle směru bylo mým snem už od mala. Zatím mám za sebou přes 50 klientů, z čehož 99% bylo spokojených a tomu také odpovídají jejich celkové výsledky.
              </p>
              <p className={styles.introParagraph}>
                Mým cílem nikdy nebylo závodění na nějaké vysoké úrovni nebo různé powerlifterské soutěže, spíš šlo o to naučit se toho co nejvíc jak o cvičení, stravě tak suplementech a tyto informace potom dál předávat.
              </p>
              <div className={styles.signatureContainer}>
                <Image
                  src="/images/podpis.png"
                  alt="Podpis trenéra"
                  width={150}
                  height={80}
                  className={styles.signatureImage}
                />
                <div className={styles.signatureInfo}>
                  <p className={styles.signatureName}>David Udič</p>
                  <p className={styles.signatureTitle}>Trenér, poradce, terapeut</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.approachSection}>
          <div className={styles.approachWrapper}>
            <h2 className={styles.sectionTitle}>Můj přístup</h2>
            <div className={styles.approachContainer}>
              <p className={styles.approachText}>
                Rád pomůžu všem lidem, kteří chtějí posunout svoji postavu a vzdělání ohledně fitness na další úroveň, ať už po fyzické, tak po psychické stránce, jelikož vím, že cvičení není jen o těle, ale i mysli a proto se snažím mým klientům co nejvíc pomáhat i psychicky a plány sestavovat, tak aby byly dlouhodobě udržitelné (rozhodně tedy nečekej kuřecí s rýží 6x denně). Plány jsou dělané podle tvých chutí, protože na tom záleží.
              </p>
            </div>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer}>
                  <FaDumbbell className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>Personalizovaný trénink</h3>
                <p className={styles.featureDescription}>
                  Každý tréninkový plán navrhuji na míru vašim cílům, zkušenostem a časovým možnostem.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer}>
                  <FaHeartbeat className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>Komplexní přístup</h3>
                <p className={styles.featureDescription}>
                  Nesoustředím se pouze na cvičení, ale i na stravu, regeneraci a mentální nastavení.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer}>
                  <FaUserGraduate className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>Vzdělávání klienta</h3>
                <p className={styles.featureDescription}>
                  Učím vás porozumět vašemu tělu a tréninkům, abyste pochopili, proč a jak cvičíte.
                </p>
              </div>
              
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer}>
                  <FaRunning className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>Udržitelný životní styl</h3>
                <p className={styles.featureDescription}>
                  Vedu vás k dlouhodobě udržitelným návykům, které se stanou přirozenou součástí vašeho života.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statText}>Spokojených klientů</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statText}>Let zkušeností</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99%</span>
              <span className={styles.statText}>Úspěšnost klientů</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statText}>Podpora klientů</span>
            </div>
          </div>
        </section>

        <section className={styles.testimonialsSection} id="testimonials">
          <div className={styles.testimonialsWrapper}>
            <h2 className={styles.sectionTitle}>Co říkají klienti</h2>
            <div className={styles.testimonialsContainer}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className={styles.testimonialText}>
                  &quot;Díky Davidovi jsem během 6 měsíců shodil 15 kg a cítím se lépe než kdykoliv předtím. Nejvíc oceňuji jeho individuální přístup a to, že mi vysvětlil, proč dělám to, co dělám.&quot;
                </p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>Petr N.</span>
                  <span className={styles.authorInfo}>Zhubnutí 15 kg za 6 měsíců</span>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className={styles.testimonialText}>
                  &quot;Jako žena jsem se bála, že budu příliš nabírat svalovou hmotu, ale David mi sestavil trénink přesně na míru. Zpevnila jsem postavu, zlepšila kondici a cítím se skvěle!&quot;
                </p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>Tereza K.</span>
                  <span className={styles.authorInfo}>Zpevnění postavy</span>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className={styles.testimonialText}>
                  &quot;Po 40 jsem si myslel, že už nemůžu zlepšit svou fyzičku, ale mýlil jsem se. Za rok s Davidem jsem získal svalovou hmotu, zlepšil kondici a hlavně sebevědomí.&quot;
                </p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>Martin V.</span>
                  <span className={styles.authorInfo}>Nabírání svalové hmoty</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.certificatesSection}>
          <div className={styles.certificatesWrapper}>
            <h2 className={styles.sectionTitle}>Kvalifikace a certifikace</h2>
            <div className={styles.certificatesGrid}>
              <div className={styles.certificateCard}>
                <div className={styles.certificateIcon}>
                  <FaAward size={32} />
                </div>
                <h3 className={styles.certificateTitle}>Osobní trenér, Fitness Educator</h3>
                <p className={styles.certificateDescription}>
                  Certifikace pro osobní trenéry s důrazem na správnou techniku cvičení a prevenci zranění
                </p>
              </div>
              
              <div className={styles.certificateCard}>
                <div className={styles.certificateIcon}>
                  <FaAward size={32} />
                </div>
                <h3 className={styles.certificateTitle}>Nutriční specialista</h3>
                <p className={styles.certificateDescription}>
                  Odborné vzdělání v oblasti výživy, sestavování jídelníčků a suplementace
                </p>
              </div>
              
              <div className={styles.certificateCard}>
                <div className={styles.certificateIcon}>
                  <FaAward size={32} />
                </div>
                <h3 className={styles.certificateTitle}>Funkční trénink</h3>
                <p className={styles.certificateDescription}>
                  Specializace na funkční trénink zaměřený na zlepšení pohybových vzorců a výkonnosti
                </p>
              </div>
              
              <div className={styles.certificateCard}>
                <div className={styles.certificateIcon}>
                  <FaAward size={32} />
                </div>
                <h3 className={styles.certificateTitle}>Kondiční specialista</h3>
                <p className={styles.certificateDescription}>
                  Certifikace pro rozvoj kondice, vytrvalosti a celkové fyzické zdatnosti
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>Začněme společně na vaší cestě</h2>
            <p className={styles.ctaText}>
              Připravený posunout své fitness cíle na další úroveň? Kontaktujte mě a domluvíme si nezávaznou konzultaci.
            </p>
            <Link href="/kontakt" className={styles.ctaButton}>
              Kontaktujte mě
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMePage;