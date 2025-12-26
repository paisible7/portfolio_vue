import emailjs from '@emailjs/browser'
import { EMAIL_CONFIG } from '@/config/email'

export interface EmailData {
  name: string
  email: string
  message: string
}

export const sendEmail = async (data: EmailData) => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Augustin Kalonji', // Votre nom
    }

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    )

    if (response.status === 200) {
      return { success: true, message: 'Message envoyé avec succès !' }
    } else {
      throw new Error('Erreur lors de l\'envoi')
    }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, message: 'Une erreur est survenue. Veuillez réessayer.' }
  }
}
