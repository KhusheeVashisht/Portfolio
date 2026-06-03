import { CONTACT_EMAIL } from './constants';

// Email service configuration for contact form.
// This file is ready to integrate with EmailJS when credentials are added.

// To enable email functionality:
// 1. Sign up at https://www.emailjs.com
// 2. Create a service and template
// 3. Add credentials to .env.local:
//    VITE_EMAILJS_SERVICE_ID
//    VITE_EMAILJS_TEMPLATE_ID
//    VITE_EMAILJS_PUBLIC_KEY

let emailjsInitialized = false;

export const initializeEmailJS = async () => {
  try {
    // Uncomment when ready to use EmailJS
    // import emailjs from '@emailjs/browser';
    // emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    // emailjsInitialized = true;
    return true;
  } catch {
    return false;
  }
};

export const buildMailtoUrl = (formData) => {
  const subject = encodeURIComponent(`Portfolio message from ${formData.name.trim()}`);
  const body = encodeURIComponent(
    [
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      '',
      formData.message.trim(),
    ].join('\n')
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
};

export const sendEmail = async (formData) => {
  try {
    // Uncomment when ready to use EmailJS
    // import emailjs from '@emailjs/browser';
    
    // if (!emailjsInitialized) {
    //   await initializeEmailJS();
    // }

    // const response = await emailjs.send(
    //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //   {
    //     from_name: formData.name,
    //     from_email: formData.email,
    //     message: formData.message,
    //     to_email: CONTACT_EMAIL,
    //   },
    //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    // );

    // return { success: response.status === 200, mode: 'emailjs' };

    if (typeof window !== 'undefined') {
      window.location.href = buildMailtoUrl(formData);
    }

    return { success: true, mode: 'mailto' };
  } catch {
    return { success: false, mode: 'error' };
  }
};

// Template for EmailJS email template:
/*
Subject: New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from the portfolio website.
*/
