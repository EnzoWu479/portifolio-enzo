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
  // wait
  let sended = false;
  transporter.sendMail(options, (error, info) => {
    sended = true;
    if (error) {
      throw error;
      return console.log(error);
    }
    console.log("E-mail enviado: " + info.response);
  });
  while (!sended) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};
