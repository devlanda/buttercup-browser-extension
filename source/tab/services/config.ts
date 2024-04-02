import { Layerr } from "layerr";
import { sendBackgroundMessage } from "../../shared/services/messaging.js";
import { BackgroundMessageType, Configuration } from "../types.js";

export async function getConfig(): Promise<Configuration> {
    const resp = await sendBackgroundMessage({
        type: BackgroundMessageType.GetConfiguration
    });
    if (resp.error) {
        throw new Layerr(resp.error, "Failed fetching configuration");
    }
    return resp.config;
}
