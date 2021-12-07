<script lang="ts">
	import type { Binary } from '../utils/function-types';
	import type { Unary } from '../utils/function-types';
	import type { ScaleBand } from 'd3-scale';
	import { scaleBand } from 'd3-scale';
	import { getScene } from '../scene/context';
	import type { Scene } from '../scene/scene';

	type Datum = $$Generic;

	export let data: Datum[];
	export let keyFn: Binary<Datum, number, string> = (_, idx) => String(idx);

	export let columnScale: ScaleBand<unknown> = scaleBand<unknown>();
	export let columnDomain: unknown[];
	export let getColumnValue: Unary<Datum, unknown>;

	export let rowScale: ScaleBand<unknown> = scaleBand<unknown>();
	export let rowDomain: unknown[];
	export let getRowValue: Unary<Datum, unknown>;

	const scene$ = getScene();

	$: appliedRowScale = rowScale.copy().domain(rowDomain).range([$scene$.height, 0]);
	$: appliedColumnScale = columnScale.copy().domain(columnDomain).range([0, $scene$.width]);

	$: calcScene = (datum: Datum): Scene => {
		return {
			top: appliedRowScale(getRowValue(datum)),
			left: appliedColumnScale(getColumnValue(datum)),
			height: appliedRowScale.bandwidth(),
			width: appliedColumnScale.bandwidth()
		};
	};
</script>

{#each data as datum, idx}
	<slot key={keyFn(datum, idx)} {datum} scene={calcScene(datum)} />
{/each}
