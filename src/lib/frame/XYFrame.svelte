<script lang="ts">
	import type { Datum } from '../data/data';
	import { scaleLinear } from 'd3-scale';
	import type { Binary, Unary } from '../utils/function-types';
	import { getScene } from '../scene/context';
	import { deepMap } from '../utils/deep-map';

	type T = $$Generic;

	export let data: T[];

	export let xScale = scaleLinear();
	export let xDomain: [number, number];
	export let getX: Unary<T, unknown>;

	export let yScale = scaleLinear();
	export let yDomain: [number, number];
	export let getY: Unary<T, number>;

	export let keyFn: Binary<T, number, string> = (_, idx) => String(idx);

	const scene$ = getScene();
	$: appliedYScale = yScale.copy().domain(yDomain).range([$scene$.height, 0]);
	$: appliedXScale = xScale.copy().domain(xDomain).range([0, $scene$.width]);

	$: x = (datum: T) => deepMap(getX(datum), appliedXScale);
	$: y = (datum: T) => deepMap(getY(datum), appliedYScale);
</script>

{#each data as datum, idx}
	<slot key={keyFn(datum, idx)} {datum} x={x(datum)} y={y(datum)} />
{/each}
