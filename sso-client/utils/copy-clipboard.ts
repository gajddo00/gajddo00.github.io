import { getString } from './strings';
import { NextRouter } from 'next/router';
import { toast } from "react-toastify";

export const copyToClipboard = (text: string, router: NextRouter) => {
    toast(getString("general.copied", router.locale))
    return window.navigator.clipboard.writeText(text);
}