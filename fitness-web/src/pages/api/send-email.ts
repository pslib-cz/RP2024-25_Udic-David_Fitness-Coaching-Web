// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Definice typu pro odpověď API
type ResponseData = {
  success: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Kontrola metody požadavku
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  try {
    // Vytvoření Nodemailer transporteru
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Získání dat z formuláře
    const {
      name,
      email,
      phone,
      age,
      height,
      weight,
      occupation,
      sportFrequency,
      goal,
      foodPreferences,
      service,
      message,
    } = req.body;

    // Vytvoření obsahu e-mailu
    const mailOptions = {
      from: `"Fitness web - kontaktní formulář" <${process.env.EMAIL_USER}>`,
      to: 'zidomination@gmail.com',
      subject: `Nová žádost o coaching/službu: ${service} od ${name}`,
      html: `
        <h2>Nová žádost z kontaktního formuláře</h2>
        <p><strong>Služba:</strong> ${service || 'Neuvedeno'}</p>
        <h3>Osobní údaje:</h3>
        <p><strong>Jméno a příjmení:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
        <p><strong>Věk:</strong> ${age || 'Neuvedeno'} let</p>
        <p><strong>Výška:</strong> ${height || 'Neuvedeno'} cm</p>
        <p><strong>Hmotnost:</strong> ${weight || 'Neuvedeno'} kg</p>
        <p><strong>Povolání/Studium:</strong> ${occupation || 'Neuvedeno'}</p>
        
        <h3>Fitness informace:</h3>
        <p><strong>Fyzická aktivita:</strong> ${sportFrequency || 'Neuvedeno'}</p>
        <p><strong>Cíle:</strong> ${goal || 'Neuvedeno'}</p>
        <p><strong>Stravovací návyky:</strong> ${foodPreferences || 'Neuvedeno'}</p>
        
        <h3>Zpráva:</h3>
        <p>${message || 'Žádná zpráva'}</p>
      `,
    };

    // Odeslání e-mailu
    await transporter.sendMail(mailOptions);

    // Odpověď při úspěchu
    res.status(200).json({ success: true, message: 'E-mail úspěšně odeslán' });
  } catch (error: unknown) {
    console.error('Chyba při odesílání e-mailu:', error);
    
    // Odpověď při chybě
    res.status(500).json({ 
      success: false, 
      error: 'Chyba při odesílání e-mailu. Zkuste to prosím později nebo nás kontaktujte jiným způsobem.' 
    });
  }
}