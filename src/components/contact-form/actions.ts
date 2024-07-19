"use server";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { senderEmail } from "@/lib/email/sender";

const sendEmailSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z
    .string()
    .min(1, { message: "Mensagem é obrigatória" })
    .max(5000, { message: "Mensagem muito longa" }),
});

const envSchema = z.object({
  RECEIVER_EMAIL: z.string().min(1),
  SENDER_EMAIL: z.string().min(1),
  SENDER_PASSWORD: z.string().min(1),
});

type FormType = z.infer<typeof sendEmailSchema>;
type Response = ActionResponse<
  z.typeToFlattenedError<FormType> & {
    serverError?: string;
  }
>;
export const sendEmail = async (
  _: unknown,
  data: FormData
): Promise<Response> => {
  const result = sendEmailSchema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  });

  if (!result.success) {
    return {
      isSuccess: false,
      errors: result.error.flatten(),
    };
  }

  const values = result.data;

  const envResult = envSchema.safeParse(process.env);
  if (!envResult.success) {
    console.log("Missing env variables");

    return {
      isSuccess: false,
      isServerError: true,
    };
  }

  try {
    console.log(envResult.data.RECEIVER_EMAIL);

    // await emailjs.send(
    //   envResult.data.EMAILJS_SERVICE_ID,
    //   envResult.data.EMAILJS_TEMPLATE_ID,
    //   {
    //     from_name: values.name,
    //     to_name: envResult.data.RECEIVER_NAME,
    //     from_email: values.email,
    //     to_email: envResult.data.RECEIVER_EMAIL,
    //     message: values.message,
    //   },
    //   envResult.data.EMAILJS_PUBLIC_KEY
    // );
    await senderEmail({
      from: envResult.data.SENDER_EMAIL,
      to: envResult.data.RECEIVER_EMAIL,
      subject: `Mensagem do portfólio de ${values.name}`,
      text: values.message,
      html: `<div><p>Email: ${values.email}</p><p>Mensagem: ${values.message}</p></div>`,
    });
  } catch (error) {
    console.log(error);

    return {
      isSuccess: false,
      isServerError: true,
    };
  }

  return {
    isSuccess: true,
  };
};
