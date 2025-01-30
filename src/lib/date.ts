import { format, parseISO } from "date-fns";

export const formatDate = (date: string, pattern: string = "dd/MM/yyyy") => {
  try {
    return format(parseISO(date), pattern);
  } catch {
    return date;
  }
};
export const countYears = (from: string, to?: string): string => {
  const fromDate = new Date(from);
  const toDate = to ? new Date(to) : new Date();

  if (isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
    throw new Error("Data inválida fornecida");
  }

  let years = toDate.getFullYear() - fromDate.getFullYear();
  let months = toDate.getMonth() - fromDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return years > 0 ? `${years} years and ${months} months` : `${months} months`;
};