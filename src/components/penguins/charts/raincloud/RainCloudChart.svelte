<script lang="ts">
	import { Split } from 'svelte-viz';
	import Cloud from './Cloud.svelte';
	import Median from './Median.svelte';
	import { setChartContext, updateChartVariable } from './context';
	import type { Unary } from '$lib/utils/function-types';

	type Datum = $$Generic;

	export let data: Array<Datum>;
	export let domain: readonly [Datum, Datum];
	export let getValue: Unary<Datum, number>;

	setChartContext({ data, domain, getValue });
	$: updateChartVariable('data', data);
	$: updateChartVariable('domain', domain);
	$: updateChartVariable('getValue', getValue);
</script>

<Split ratio="0.6">
	<g slot="top">
		<Cloud {data} {domain} getX={getValue} />
		<Median getX={getValue} {data} {domain} />
	</g>
	<g slot="bottom">
		<slot />
	</g>
</Split>
