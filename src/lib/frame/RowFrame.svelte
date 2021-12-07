<script lang="ts">
	import type { ScaleBand } from 'd3-scale';
	import { scaleBand, scaleLinear } from 'd3-scale';
	import type { Datum } from '../data/data';
	import type { Unary } from '../utils/function-types';
	import type { Scene } from '../scene/scene';
	import { getScene } from '../scene/context';
	import { deepMap } from '../utils/deep-map';

	type T = $$Generic;

	export let data: T[];

	export let rowScale: ScaleBand<unknown> = scaleBand<unknown>();
	export let rowDomain: unknown[];
	export let getRowValue: Unary<T, unknown>;

	export let valueScale = scaleLinear();
	export let valueDomain: [number, number];
	export let getValue: Unary<T, number>;

	const scene$ = getScene();

	$: appliedRowScale = rowScale.copy().domain(rowDomain).range([$scene$.height, 0]);
	$: appliedValueScale = valueScale.copy().domain(valueDomain).range([0, $scene$.width]);
	$: calcScene = (datum: T): Scene => ({
		left: 0,
		width: $scene$.width,
		height: appliedRowScale.bandwidth(),
		top: appliedRowScale(getRowValue(datum))
	});
	$: x = (datum: T) => deepMap(getValue(datum), appliedValueScale);
</script>

{#each data as datum, idx}
	<slot key={getRowValue(datum)} {datum} x={x(datum)} scene={calcScene(datum)} />
{/each}
