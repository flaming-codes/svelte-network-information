import { readable } from "svelte/store";
import { getInitialNetorkInformationStore, subscribeToNetworkInformation } from "./model";

export const networkInformationStore = readable(getInitialNetorkInformationStore(), subscribeToNetworkInformation)
