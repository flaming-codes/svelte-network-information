<script lang="ts">
	import { networkInformationStore as store } from 'svelte-network-information';
</script>

<ul>
	<li>State: {$store.state}</li>
	<li>connectivity: {$store.connectivity}</li>
	<li>downlink: {$store.downlink}</li>
	<li>downlinkMax: {$store.downlinkMax}</li>
	<li>effectiveType: {$store.effectiveType}</li>
	<li>rtt: {$store.rtt}</li>
	<li>saveData: {$store.saveData}</li>
	<li>type: {$store.type}</li>
</ul>

<a href="/derived" aria-label="Link to derived store demo">Derived store</a>
