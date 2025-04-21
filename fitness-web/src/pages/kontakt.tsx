import React, { useState } from 'react';
import styles from './kontakt.module.css';
import Head from 'next/head';
import Link from 'next/link';

const KontaktPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    height: '',
    weight: '',
    occupation: '',
    sportFrequency: '',
    goal: '',
    foodPreferences: '',
    service: '',
    message: '',
    privacyConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.goal || !formData.privacyConsent) {
      setSubmitStatus({
        success: false,
        message: 'Prosím vyplňte všechna povinná pole označená *'
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          height: '',
          weight: '',
          occupation: '',
          sportFrequency: '',
          goal: '',
          foodPreferences: '',
          service: '',
          message: '',
          privacyConsent: false
        });
        
        setSubmitStatus({
          success: true,
          message: 'Děkujeme za Vaši zprávu! Brzy se Vám ozveme.'
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Při odesílání formuláře došlo k chybě. Zkuste to prosím znovu později.'
        });
      }
    } catch (error) {
      console.error('Chyba při odesílání:', error);
      setSubmitStatus({
        success: false,
        message: 'Při odesílání formuláře došlo k chybě. Zkuste to prosím znovu později.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Kontakt | Fitness Coaching</title>
        <meta name="description" content="Kontaktujte mě pro konzultaci a začněte svou cestu k lepšímu zdraví a kondici." />
      </Head>

      <div className={styles.kontaktContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>KONTAKT</span>
            <h1 className={styles.title}>Kontaktní formulář</h1>
            <div className={styles.separator}></div>
            <p className={styles.formDescription}>
              Pro úvodní konzultaci a personalizovaný přístup prosím vyplňte formulář níže. Po odeslání se vám brzy ozvu.
            </p>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            {submitStatus?.success ? (
              <div className={styles.successMessage}>
                <h2>Formulář byl úspěšně odeslán!</h2>
                <p>{submitStatus.message}</p>
                <button 
                  className={styles.resetButton}
                  onClick={() => setSubmitStatus(null)}
                >
                  Odeslat další formulář
                </button>
              </div>
            ) : (
              <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
              >
                {submitStatus?.success === false && (
                  <div className={styles.errorMessage}>
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                <div className={styles.formColumns}>
                  <div className={styles.formColumn}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Jméno a Příjmení*</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className={styles.formInput}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Vaše jméno"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">E-mail*</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className={styles.formInput}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vas@email.cz"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Telefonní číslo</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className={styles.formInput}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+420 XXX XXX XXX"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="occupation">Povolání / Studium</label>
                      <select 
                        id="occupation" 
                        name="occupation" 
                        className={styles.formSelect}
                        value={formData.occupation}
                        onChange={handleChange}
                      >
                        <option value="">-- Vyberte možnost --</option>
                        <option value="sedave-povolani">Sedavé povolání</option>
                        <option value="fyzicky-narocne-povolani">Fyzicky náročné povolání</option>
                        <option value="student-ss-vs">Student SŠ/VŠ</option>
                        <option value="student-zs">Student ZŠ</option>
                        <option value="jine">Jiné</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formColumn}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label htmlFor="age">Věk</label>
                        <input 
                          type="number" 
                          id="age" 
                          name="age" 
                          className={styles.formInput}
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="25"
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="height">Výška (cm)</label>
                        <input 
                          type="number" 
                          id="height" 
                          name="height" 
                          className={styles.formInput}
                          value={formData.height}
                          onChange={handleChange}
                          placeholder="175"
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="weight">Hmotnost (kg)</label>
                        <input 
                          type="number" 
                          id="weight" 
                          name="weight" 
                          step="0.1" 
                          className={styles.formInput}
                          value={formData.weight}
                          onChange={handleChange}
                          placeholder="70"
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="sportFrequency">Fyzická aktivita / Jak často, jak dlouho? Sporty?</label>
                      <textarea 
                        id="sportFrequency" 
                        name="sportFrequency" 
                        rows={2} 
                        className={styles.formTextarea}
                        value={formData.sportFrequency}
                        onChange={handleChange}
                        placeholder="Popište vaše současné fyzické aktivity..."
                      ></textarea>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="service">Vyberte službu, která Vás zajímá*</label>
                      <select 
                        id="service" 
                        name="service" 
                        required 
                        className={styles.formSelect}
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">-- Vyberte službu --</option>
                        <option value="coaching-plus">COACHING+</option>
                        <option value="coaching-classic">COACHING CLASSIC</option>
                        <option value="coaching-student">COACHING STUDENT</option>
                        <option value="poradenstvi">Poradenství</option>
                        <option value="jidelnicek">Jídelníček</option>
                        <option value="treninkovy-plan">Tréninkový plán</option>
                        <option value="jine">Jiné (upřesněte v zprávě)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.formFullWidth}>
                  <div className={styles.formGroup}>
                    <label htmlFor="goal">Jaké máš se svojí postavou ambice, co bys s ní chtěl dělat?*</label>
                    <textarea 
                      id="goal" 
                      name="goal" 
                      rows={3} 
                      required 
                      className={styles.formTextarea}
                      value={formData.goal}
                      onChange={handleChange}
                      placeholder="Popište vaše cíle a očekávání..."
                    ></textarea>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="foodPreferences">Jaké máš stravovací návyky? Alergie? Co ti chutná/nechutná?</label>
                    <textarea 
                      id="foodPreferences" 
                      name="foodPreferences" 
                      rows={3} 
                      className={styles.formTextarea}
                      value={formData.foodPreferences}
                      onChange={handleChange}
                      placeholder="Popište vaše stravovací návyky, preference a případné alergie..."
                    ></textarea>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Zpráva / Upřesnění</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={3} 
                      className={styles.formTextarea}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Doplňující informace nebo dotazy..."
                    ></textarea>
                  </div>

                  <div className={styles.formGroup}>
                    <div className={styles.checkboxGroup}>
                      <input 
                        type="checkbox" 
                        id="privacyConsent" 
                        name="privacyConsent" 
                        required 
                        className={styles.formCheckbox}
                        checked={formData.privacyConsent}
                        onChange={handleChange}
                      />
                      <label htmlFor="privacyConsent" className={styles.privacyLabel}>
                        Souhlasím s{' '}
                        <Link href="/obchodni-podminky" className={styles.privacyLink}>
                          obchodními podmínkami a zásadami ochrany osobních údajů
                        </Link>.*
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Odesílání...' : 'Odeslat formulář'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default KontaktPage;