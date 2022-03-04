<script lang="ts">
	import { networkInformationStore } from 'svelte-network-information';
	import { derived } from 'svelte/store';

	const rtt = derived(networkInformationStore, ($store) => $store.rtt);
</script>

<h1>Svelte Battery PWA API</h1>

<h2>This demo shows a dervied store usage, which only reads the <strong>rtt</strong></h2>
<ul>
	<li>rtt: {$rtt}</li>
</ul>
