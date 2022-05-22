import { NextRouter } from "next/router";
import * as yup from "yup";
import { ServiceType } from "../../api";
import { mapServiceType } from "../enum-mappings";
import { getString } from "../strings";

export const serviceSchema = (router: NextRouter, serviceType: number) => {
    const validateWebsiteRequiredData = (value: string | undefined): boolean => {
        if (mapServiceType(serviceType) !== ServiceType.Website) {
            return true;
        }

        if (!value) {
            return false;
        }

        return mapServiceType(serviceType) === ServiceType.Website && value != "";
    }

    return yup.object({
        serviceName: yup.string().required(getString("error.empty", router.locale)),
        description: yup.string().max(100, getString("error.max", router.locale).replace("{X}", "100")),
        authorizeUrl: yup.string()
            //  .url(getString("error.url", router.locale))
            .test("test-service-type-authorize", getString("error.empty", router.locale), (value) => validateWebsiteRequiredData(value)),
        url: yup.string()
            //  .url(getString("error.url", router.locale))
            .test("test-service-type-url", getString("error.empty", router.locale), (value) => validateWebsiteRequiredData(value)),
        logoutHookUrl: yup.string()
        //.url(getString("error.url", router.locale))
    }).required();
}