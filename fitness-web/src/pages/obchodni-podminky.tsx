import React from 'react';
import styles from './obchodni-podminky.module.css';
import Head from 'next/head';
import Link from 'next/link';

const TermsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Obchodní podmínky a GDPR | Fitness Coaching</title>
        <meta name="description" content="Obchodní podmínky, ochrana osobních údajů a mlčenlivost pro služby fitness coachingu." />
        <meta name="robots" content="noindex" />
      </Head>

      <div className={styles.termsContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Obchodní podmínky a GDPR</h1>
            <div className={styles.separator}></div>
          </div>
        </section>

        <div className={styles.termsContent}>
          <div className={styles.termsWrapper}>
            <h2>Obchodní podmínky, ochrana osobních údajů a mlčenlivost</h2>

            <section className={styles.termsSection}>
              <h3>1. ZÁKLADNÍ USTANOVENÍ A VYMEZENÍ SMLUVNÍCH STRAN</h3>
              <p>
                Tyto všeobecné obchodní podmínky (dále jen &quot;Obchodní podmínky&quot;), které jsou v souladu se zákonem č. 89/2012 Sb., 
                stanovují práva a povinnosti v souvislosti s poskytováním služeb fitness coachingu.
              </p>
              <p>
                Majitelem a provozovatelem služeb je David Udič (dále jen &quot;Poskytovatel&quot;).
              </p>
              <p>
                Objednavatelem je právnická nebo fyzická osoba, která uskuteční objednávku výživového poradenství nebo 
                cvičebního programu elektronicky pomocí objednávkového formuláře, nebo telefonicky či jinou formou 
                s Poskytovatelem (dále jen &quot;Objednatel&quot;).
              </p>
              <p>
                Službami (dále jen &quot;Služby&quot;) se rozumí služba formou poradenství ve výživě a suplementaci (dále jen &quot;Poradenství&quot;) a 
                cvičení pod dohledem fitness trenéra. Cvičení pod dohledem fitness trenéra (dále jen &quot;Cvičení&quot;) se rozumí cvičení 
                pod dohledem lektora, který nese zodpovědnost za provedené cviky. Poskytovatel se nepovažuje za lékaře. 
                Je odborníkem přes cvičení a ve výživovém poradenství a pouze doporučuje skrze nejlepší vědomí a svědomí.
              </p>
              <p>
                Tyto obchodní podmínky jsou platné tehdy, pokud nebyly mezi objednatelem a poskytovatelem dohodnuty jiné podmínky.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h3>2. SMLUVNÍ VZTAH</h3>
              <p>
                Veškeré smluvní vztahy jsou uzavřeny v souladu s právním řádem České republiky.
              </p>
              <p>
                Smluvní vztah mezi objednatelem a poskytovatelem vzniká odesláním elektronické objednávky služby (dále jen &quot;Objednávka&quot;) 
                objednatelem a jejím přijetím poskytovatelem. Smluvní vztah znamená, že poskytovatel je povinen poskytovat objednateli 
                objednané služby a objednatel je povinen uhradit jejich cenu.
              </p>
              <p>
                Poskytovatel není povinen přijmout objednávku objednatele, pokud:
              </p>
              <ul>
                <li>objednatel již dříve neplnil své povinnosti při poskytování služeb,</li>
                <li>poskytovatel má z informací a chování objednatele pochybnosti, zda rozumí, co je předmětem poskytovaných služeb,</li>
                <li>poskytovatel má pochybnosti, zda má objednatel opravdový zájem o čerpání služeb.</li>
              </ul>
              <p>
                V případě, že je objednatel nezletilý, je poskytovatel oprávněn požadovat písemný souhlas zákonného zástupce objednatele 
                s poskytováním služeb.
              </p>
              <p>
                Objednatel si je vědom, že služby poradenství ve výživě a cvičení pod vedením trenéra nejsou zdravotními službami (zdravotní péčí) 
                ve smyslu zákona č. 372/2011 Sb., o zdravotních službách, ve znění pozdějších předpisů, ani specifickými zdravotními službami 
                ve smyslu zákona č. 373/2011 Sb., o specifických zdravotních službách, ve znění pozdějších předpisů. Pokud zdravotní stav 
                objednatele vyžaduje zvláštní výživový a pohybový režim, je povinen se poradit o čerpání služeb se svým ošetřujícím lékařem 
                a je povinen o těchto skutečnostech informovat poskytovatele.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h3>3. PRŮBĚH POSKYTOVÁNÍ SLUŽEB</h3>
              <p>
                Poskytovatel je povinen poskytovat odběrateli odborné a pečlivé služby na základě svých schopností.
              </p>
              <p>
                Odběratel se zavazuje seriózně a férově spolupracovat se zpracovatelem především na úrovni pravdivého předávání informací 
                o jeho stravování, pohybové aktivitě a změnách, které na základě poskytnutého Poradenství a Cvičení probíhají. 
                V opačném případě poskytované služby nemohou přinést očekávaný výsledek.
              </p>
              <p>
                I přesto, že Poskytovatel poskytne služby, které jsou v souladu s vědeckými poznatky, není možné zaručit, že bude přesně 
                dosaženo požadovaného výsledku. Toto závisí na spektru faktorů, které nejsou a ani nemohou být pod plnou kontrolou 
                poskytovatele (například vliv prostředí, zdravotní stav, ochota a vůle odběratele dodržovat veškerá doporučení 
                poradců a fitness trenérů…). Řádným dodržováním rad Poskytovatele se ale podstatně zvýší pravděpodobnost 
                dosažení očekávaného výsledku.
              </p>
              <p>
                Poskytovatel si vyhrazuje právo zrušit objednávku. V případě, že kupující zaplatil již část nebo celou částku kupní ceny, 
                bude mu tato částka převedena zpět na jeho účet nebo adresu v nejkratším možném termínu (nejpozději však do 10 pracovních dnů).
              </p>
              <h4>A. Služby osobního fitness trenéra:</h4>
              <ul>
                <li>Domluvená tréninková lekce je pro Objednavatele i Poskytovatele závazná.</li>
                <li>Předplacená částka za lekce cvičení je nevratná (viz. vyjímky v sekci &quot;reklamace a stížnosti)&quot;. Lekce cvičení je nutné vyčerpat během 12-ti měsíců, jinak propadají.</li>
                <li>Pokud se Objednatel nedostaví na lekci cvičení nebo lekci nepřevede na jiný termín alespoň 24 hodin předem, považuje se tato lekce za vyčerpanou.</li>
                <li>Poskytovatel si vyhrazuje právo zkrátit lekci v případě Vašeho pozdního příchodu na lekci o čas, o který se Objednavatel opozdil.</li>
                <li>Pokud se Poskytovatel nemůže z jakéhokoliv důvodu domluvené lekce zúčastnit, je povinen Objednavateli tuto lekci nahradit v plném obsahu v jiném domluveném termínu, zároveň je povinen svou nepřítomnost oznámit klientovi bez zbytečného prodlení.</li>
              </ul>

              <h4>B. Služby výživového poradce:</h4>
              <ul>
                <li>Odběratel se zavazuje seriózně a férově spolupracovat se zpracovatelem především na úrovni pravdivého předávání informací o svém stravování, pohybové aktivitě a změnách, které na základě poskytnutého poradenství probíhají. V opačném případě poskytované služby nemohou přinést očekávaný výsledek.</li>
                <li>Domluvená schůzka je pro Objednavatele i Poskytovatele závazná.</li>
                <li>Objednavatel má nárok na převedení schůzky na jiný dohodnutý termín maximálně 24 hod. předem. V opačném případě se bere schůzka za proběhlou bez možnosti náhrady.</li>
                <li>Poskytovatel si vyhrazuje právo zkrátit sjednanou schůzku v případě pozdního příchodu Objednavatele o čas, o který se Objednavatel opozdil.</li>
              </ul>
            </section>

            <section className={styles.termsSection}>
              <h3>4. CENA SLUŽEB – OSOBNÍ TRENÉR A VÝŽIVOVÝ PORADCE</h3>
              <p>
                Za poskytování Služeb je Objednavatel povinen uhradit cenu dle platného ceníku.
              </p>
              <p>
                Objednavatel je povinen domluvenou tréninkovou lekci uhradit v plné výši dle zvolené formy úhrady, každá domluvená 
                tréninková lekce musí být předem uhrazena, a to i v případě platby za každou tréninkovou lekci zvlášť.
              </p>
              <p>
                Nejsou-li dohodnuty jiné lhůty splatnosti, je Objednavatel povinen uhradit cenu objednaných Služeb před oficiálním začátkem 
                platebními metodami akceptovanými Poskytovatelem (hotově, bank. převod). Částka (Cena Služeb) musí být maximálně v den 
                splatnosti (před začátkem první společné hodiny) připsána na bankovním účtu Poskytovatele nebo předána v hotovosti.
              </p>
              <p>
                Do ceny Služeb Poskytovatele nejsou zahrnuty vstupy či časové permanentky do fitness centra.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h3>5. REKLAMACE A STÍŽNOSTI</h3>
              <h4>A. Služby fitness trenéra</h4>
              <p>
                Objednavatel bere na vědomí, že dle Nového občanského zákoníku č.89/2012 Sb., §1837 písm. j, d), nelze odstoupit od smlouvy. 
                Výjimku tvoří pouze závažné zdravotní problémy (viz. níže – neplatí pro službu &quot;tréninkový plán na míru&quot;).
              </p>
              <p>
                Vrácení peněz za nevyužité Služby je možné v případě závažných zdravotních důvodů, které musíte doložit lékařskou zprávou. 
                Tato zpráva musí dokazovat, že zdravotní stav Objednavatele nedovoluje nahradit si společná cvičení v některých z následujících měsíců. 
                Pokud nemoc či jiné zdravotní obtíže TRVALE znemožňují pokračovat ve cvičebním programu, budou z celkové předplacené částky 
                odečteny absolvované lekce + 40% srážka ze zbývající částky ve prospěch Poskytovatele.
              </p>

              <h4>B. Služby výživového poradce:</h4>
              <p>
                V případě služeb Jídelníček na míru lze odstoupit od kupní smlouvy do doby, než vám pošlu vypracovaný jídelníček na mail. 
                Jedná se o službu osobního charakteru.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h3>6. OCHRANA OSOBNÍCH ÚDAJŮ A MLČENLIVOST</h3>
              <p>
                Odesláním objednávky služeb uděluje Objednatel Poskytovateli souhlas se zpracováváním jeho osobních údajů v souvislosti 
                s poskytováním služeb. Za účelem vedení evidence klientů je Poskytovatel oprávněn zpracovávat jméno a příjmení objednatele, 
                dále jeho věk, adresu bydliště, telefonní číslo a e-mailovou adresu. Za účelem vstupní diagnostiky v podobě konzultace, 
                bioimpedančního měření a dalších služeb, které si Objednatel objednal, je poskytovatel oprávněn zpracovávat údaje o zdravotním 
                stavu Objednatele a fyziologii, které Objednatel zpracovateli sdělí nebo které zpracovatel zjistí vyšetřením.
              </p>
              <p>
                Objednatel bere na vědomí, že poskytování veškerých osobních údajů je dobrovolné, avšak nezbytné pro řádné poskytování služeb.
              </p>
              <p>
                Poskytovatel se zavazuje zachovávat mlčenlivost o skutečnostech, o kterých se při poskytování služby dozvěděl, 
                jejichž sdělení třetím osobám by Objednateli mohlo způsobit škodu. Za porušení povinnosti mlčenlivosti se nepovažuje, 
                pokud Poskytovatel využije osobní údaje objednatele ke splnění zákonné povinnosti (např. podání svědecké výpovědi) 
                nebo za účelem prosazení svých práv, které vůči objednateli má, postupem stanoveným zákonem. Poskytovatel je oprávněn 
                sdělit osobní údaje objednatele v nezbytném rozsahu zpracovateli, svým zaměstnancům a právním, daňovým a obdobným poradcům, 
                kteří jsou vázáni povinností mlčenlivosti nejméně v rozsahu stanoveném těmito obchodními podmínkami.
              </p>
              <p>
                Jestliže objednatel zjistí nebo se domnívá, že poskytovatel nebo zpracovatel provádí zpracování osobních údajů objednatele, 
                které je v rozporu s ochranou soukromého a osobního života objednatele nebo v rozporu se zákonem, zejména jsou-li osobní 
                údaje nepřesné s ohledem na účel jejich zpracování, může objednatel:
              </p>
              <ol type="a">
                <li>požádat poskytovatele nebo zpracovatele o vysvětlení,</li>
                <li>požadovat, aby poskytovatel nebo zpracovatel odstranil takto vzniklý stav, zejména se může jednat o blokování, provedení opravy, doplnění nebo likvidaci osobních údajů.</li>
              </ol>
              <p>
                Bude-li tato žádost shledána oprávněnou, odstraní poskytovatel nebo zpracovatel neprodleně nežádoucí stav. 
                Nevyhoví-li poskytovatel nebo zpracovatel této žádosti, má objednatel právo obrátit se na Úřad pro ochranu osobních údajů. 
                Pokud objednateli vznikla v důsledku zpracování osobních údajů jiná než majetková újma, postupuje se při uplatňování jejího 
                nároku podle zvláštního zákona (§ 13 zákona č. 40/1964 Sb., občanský zákoník, ve znění pozdějších předpisů). 
                Došlo-li při zpracování osobních údajů k porušení povinností uložených zákonem u poskytovatele nebo zpracovatele, 
                odpovídají za ně společně a nerozdílně.
              </p>
              <p>
                Odesláním objednávky služeb vyslovuje objednatel souhlas se zasíláním informačních e-mailů a tiskovin v souvislosti s předmětem 
                služeb (novinky, zvýhodněné nabídky, pozvánky atd.) na elektronickou, případně poštovní adresu, kterou poskytovateli poskytl, 
                a to po dobu uchování osobních údajů objednatele. Objednatel je oprávněn souhlas se zasíláním informačních e-mailů a tiskovin 
                kdykoli odvolat písemným sdělením poskytovateli nebo jiným způsobem stanoveným zákonem.
              </p>
              <p>
                Shromažďované údaje jsou zpracovány v souladu se zákonem č. 101/2000 Sb. o ochraně osobních údajů. Údaje jsou zabezpečené 
                proti manipulaci, ztrátě, zničení či zásahu nepovolaných osob.
              </p>
              <p>
                Pro usnadnění Vaší orientace a pohybu na webu poskytovatele jsou ukládány soubory cookies ve Vašem prohlížeči.
              </p>
              <p>
                V případě navštívení webu poskytovatele se zaznamenává standardním způsobem IP adresa, přidělená vaším poskytovatelem, 
                www stránku, z které nás navštívíte, jednotlivé navštívené stránky webu poskytovatele a datum a délku Vaší návštěvy.
              </p>
            </section>

            <section className={styles.termsSection}>
              <h3>7. MIMOSOUDNÍ ŘEŠENÍ SPORŮ</h3>
              <p>
                K mimosoudnímu řešení spotřebitelských sporů z kupní smlouvy je příslušná Česká obchodní inspekce se sídlem Štěpánská 567/15, 
                120 00 Praha 2, IČ: 000 20 869, internetová adresa: https://adr.coi.cz/cs. Platformu pro řešení sporů on-line nacházející 
                se na internetové adrese http://ec.europa.eu/consumers/odr je možné využít při řešení sporů mezi prodávajícím a kupujícím z kupní smlouvy.
              </p>
              <p>
                Evropské spotřebitelské centrum Česká republika se sídlem Štěpánská 567/15, 120 00 Praha 2, 
                internetová adresa: http://www.evropskyspotrebitel.cz je kontaktním místem podle Nařízení Evropského parlamentu a 
                Rady (EU) č. 524/2013 ze dne 21. května 2013 o řešení spotřebitelských sporů on-line a o změně nařízení (ES) č. 2006/2004 
                a směrnice 2009/22/ES (nařízení o řešení spotřebitelských sporů on-line).
              </p>
            </section>

            <section className={styles.termsSection}>
              <h3>8. SPOLEČNÁ A ZÁVĚREČNÁ USTANOVENÍ</h3>
              <p>
                Oznámení a sdělení vůči poskytovateli je objednatel povinen činit písemně. Nejde-li o změnu nebo skončení smluvního vztahu, 
                lze komunikovat i elektronickou poštou bez zaručeného elektronického podpisu; totéž platí v případě komunikace poskytovatele 
                vůči objednateli. Je-li oznámení nebo sdělení zasíláno poštou formou doporučeného psaní, považuje se za doručené též, 
                odmítne-li je adresát převzít, nevyzvedne-li si je adresát do 5 (pěti) dnů od jeho uložení v poštovní provozovně poté, 
                co nebyl zastižen na doručovací adrese, anebo marným pokusem o doručení, neexistuje-li doručovací adresa nebo nezdržuje-li 
                se adresát na doručovací adrese.
              </p>
              <p>
                Oznámení a sdělení se zasílají jako doporučené psaní na doručovací adresy stran, kterými jsou adresy uvedené v objednávce služeb. 
                Poskytovatel i Objednatel jsou oprávněni změnit doručovací adresu písemným oznámením druhé straně.
              </p>
              <p>
                Tyto obchodní podmínky jsou nedílnou součástí objednávky služeb uzavřené mezi Objednatelem a Poskytovatelem. 
                Práva a povinnosti vyplývající z těchto obchodních podmínek jsou součástí smluvního vztahu objednatele s poskytovatelem.
              </p>
              <p>
                Poskytovatel je oprávněn tyto obchodní podmínky kdykoli změnit, a to zveřejněním změn nebo nového znění.
              </p>
              <p>
                Tyto obchodní podmínky nabývají platnosti a účinnosti dnem jejich vyhotovení uvedeným níže.
              </p>
            </section>

            <div className={styles.signatureSection}>
              <p>V Liberci dne 27.2.2025</p>
              <p>David Udič</p>
            </div>

            <Link href="/" className={styles.backLink}>
              Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;