import { useFormState } from "react-dom";
import { sendEmail } from "./actions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { z } from "zod";


const sendEmailSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(1, { message: "Mensagem é obrigatória" }),
});

export const useContactForm = () => {
  const [result, handleSend, isPending] = useFormState(sendEmail, undefined);

  useEffect(() => {
    if (result) {
      if (result.isServerError) {
        toast.error("Ocorreu um erro inesperado. Tente novamente mais tarde.");
      }
    }
  }, [result]);

  return {
    result,
    handleSend,
    isPending,
  };
};
