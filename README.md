# Svelte Network Information API

This library provides a readable Svelte store to use a PWA's access to the [`Network Information API`](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation), available on the navigator. It allows you to subscribe to network changes and read the provided values.

> Note:
> 'Network Information API' is currently experimental and only supported in a very limited set of browsers.

## Install

```text
npm i -D svelte-network-information
```

## Usage

### Basic

This library provides a simple readable store that automatically subscribes to events of a connection instance of `NetworkInformation`, an API of the `navigator` to access detailed metrics regarding network states.

```svelte
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
```

### Derived

To subscribe to changes for only a specific selection of values, simply create a `derived` store.

```svelte
<script lang="ts">
	import { networkInformationStore } from 'svelte-network-information';
	import { derived } from 'svelte/store';

	const rtt = derived(networkInformationStore, ($store) => $store.rtt);
</script>

rtt: {$rtt}
```

## API

See [types](https://github.com/flaming-codes/svelte-network-information/blob/main/pkg/src/lib/types.ts) for a detailed type definition.
