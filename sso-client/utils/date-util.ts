import { format } from "fecha";

export const formatTimestamp = (date: string): string => {
    if (!date || date == "") return "";
    return format(new Date(date), 'DD.MM.YY HH:mm');
}