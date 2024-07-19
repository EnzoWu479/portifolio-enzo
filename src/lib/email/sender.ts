import { transporter } from "./config";

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export const senderEmail = async (options: MailOptions) => {
  await transporter.sendMail(options);
};
