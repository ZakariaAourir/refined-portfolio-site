
import emailjs from "emailjs-com";

export const sendContactEmail = async (
  formData: { name: string; email: string; subject: string; message: string }
) => {
  // Replace these values with your actual EmailJS service/template/public keys
  const SERVICE_ID = "service_wjeiewi";
  const TEMPLATE_ID = "template_vke8bin";
  const PUBLIC_KEY = "ZvFS6u2Qa0kBIhzJj";

  const templateParams = {
    from_name: formData.name,
    reply_to: formData.email,
    subject: formData.subject,
    message: formData.message,
    // You can add more template variables if configured in your EmailJS template
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    return response;
  } catch (err) {
    throw err;
  }
};
