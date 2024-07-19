import { transporter } from "./config";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export const senderEmail = async (options: MailOptions) => {
  // Enviar e-mail
  await transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("E-mail enviado: " + info.response);
  });
};
