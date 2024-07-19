import { format, parseISO } from "date-fns";

export const formatDate = (date: string, pattern: string = "dd/MM/yyyy") => {
  try {
    return format(parseISO(date), pattern);
  } catch {
    return date;
  }
};
export const countYears = (from: string, to?: string) => {
  const fromDate = parseISO(from);
  const toDate = to ? parseISO(to) : new Date();
  const years = toDate.getFullYear() - fromDate.getFullYear();
  const months = toDate.getMonth() - fromDate.getMonth() + 1;
  return `${years > 0 ? `${years} anos e` : ""} ${months} meses`;
}