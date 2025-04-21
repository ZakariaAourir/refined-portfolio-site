
import emailjs from "emailjs-com";

export const sendContactEmail = async (
  formData: { name: string; email: string; subject: string; message: string }
) => {
  // Replace these values with your actual EmailJS service/template/public keys
  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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
