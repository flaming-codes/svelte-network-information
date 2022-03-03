import { browser } from "$app/env";
import { Subscriber } from "svelte/store";
import { NetworkInformationStore } from "./types";

/**
 * Just a simple getter for an empty BatteryStore.
 * @returns Initial battery store.
 */
export function getInitialNetorkInformationStore(): NetworkInformationStore {
    return {
        state: "init"
    }
}

export function subscribeToNetworkInformation(setter: Subscriber<NetworkInformationStore>) {
    // Noop on SSR.
    if (!browser) {
        return;
    }

    try {
        const connection =
            // @ts-expect-error Unsupported vendor-prefixed connection accessors.
            navigator?.connection || navigator?.mozConnection || navigator?.webkitConnection;

        if (!connection) {
            setter({ state: "not-supported" })
        }

        const updateState = () => {
            setter({
                state: "subscribed",
                type: connection.type,
                effectiveType: navigator?.onLine ? connection.effectiveType : undefined,
                connectivity: navigator?.onLine ? "online" : "offline",
                rtt: connection.rtt,
                downlink: connection.downlink,
                downlinkMax: connection.downlinkMax,
                saveData: connection.saveData
            });
        }

        connection.addEventListener("change", updateState);
        window.addEventListener('online', updateState);
        window.addEventListener('offline', updateState);

        return () => {
            connection.removeEventListener("change", updateState);
            window.removeEventListener('online', updateState);
            window.removeEventListener('offline', updateState);
        };
    } catch (error) {
        console.error(error);
        setter({ state: "error" })
    }
}
