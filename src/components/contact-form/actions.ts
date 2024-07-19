// "use server";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { senderEmail } from "@/lib/email/sender";

const sendEmailSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

const envSchema = z.object({
  EMAILJS_SERVICE_ID: z.string().min(1),
  EMAILJS_TEMPLATE_ID: z.string().min(1),
  EMAILJS_PUBLIC_KEY: z.string().min(1),
  RECEIVER_EMAIL: z.string().min(1),
  RECEIVER_NAME: z.string().min(1),
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

  const envResult = envSchema.safeParse({
    EMAILJS_SERVICE_ID: "service_grifrpr",
    EMAILJS_TEMPLATE_ID: "template_mgv32zf",
    EMAILJS_PUBLIC_KEY: "LIoNdpkleSrpHcfy4",
    RECEIVER_EMAIL: "enwu2014@hotmail.com",
    RECEIVER_NAME: "Enzo wu",
  });
  if (!envResult.success) {
    console.log("Missing env variables");

    return {
      isSuccess: false,
      isServerError: true,
    };
  }

  try {
    await emailjs.send(
      envResult.data.EMAILJS_SERVICE_ID,
      envResult.data.EMAILJS_TEMPLATE_ID,
      {
        from_name: values.name,
        to_name: envResult.data.RECEIVER_NAME,
        from_email: values.email,
        to_email: envResult.data.RECEIVER_EMAIL,
        message: values.message,
      },
      envResult.data.EMAILJS_PUBLIC_KEY
    );
    // await senderEmail({
    //   from: values.email,
    //   to: envResult.data.RECEIVER_EMAIL,
    //   subject: `Contato de ${values.name}`,
    //   text: values.message,
    //   html: `<p>${values.message}</p>`,
    // });
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
