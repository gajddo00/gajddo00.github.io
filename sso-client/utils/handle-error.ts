import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleDefaultError = (error: any) => {
    const err = error as AxiosError;
    const message = err?.response?.data?.Message ?? "Unknown error";
    toast(message);
}