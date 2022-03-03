<script lang="ts">
    import {networkInformationStore} from "svelte-network-information";
</script>

<ul>
    <li>State: {$networkInformationStore.state}</li>
    <li>connectivity: {$networkInformationStore.connectivity}</li>
    <li>downlink: {$networkInformationStore.downlink}</li>
    <li>downlinkMax: {$networkInformationStore.downlinkMax}</li>
    <li>effectiveType: {$networkInformationStore.effectiveType}</li>
    <li>rtt: {$networkInformationStore.rtt}</li>
    <li>saveData: {$networkInformationStore.saveData}</li>
    <li>type: {$networkInformationStore.type}</li>
</ul>
