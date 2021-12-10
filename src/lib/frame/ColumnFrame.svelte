<script lang="ts">
	import type { ScaleBand } from 'd3-scale';
	import { scaleBand } from 'd3-scale';
	import type { Unary } from '../utils/function-types';
	import { getScene } from '../scene/context';
	import type { Scene } from '../scene/scene';
	import { Extract, map } from '../utils/map';
	import type { Scale } from "../utils/scale";

	type Datum = $$Generic;
	type Column = $$Generic;
	type Y = $$Generic;
	type YS = Extract<Y>;

	export let data: Datum[];

	export let columnScale: ScaleBand<Column> = scaleBand<Column>();
	export let columnDomain: Column[];
	export let getColumnValue: Unary<Datum, Column>;

	export let valueScale: Scale<YS, number>;
	export let valueDomain: readonly [YS, YS];
	export let getValue: Unary<Datum, Y>;

	const scene$ = getScene();

	$: innerColumnScale = columnScale.copy();
	$: innerValueScale = valueScale.copy();
	$: appliedColumnScale = innerColumnScale.domain(columnDomain).range([0, $scene$.width]);
	$: appliedValueScale = innerValueScale.domain(valueDomain).range([$scene$.height, 0]);
	$: calcScene = (datum: Datum): Scene => ({
		top: 0,
		left: appliedColumnScale(getColumnValue(datum)),
		height: $scene$.height,
		width: appliedColumnScale.bandwidth()
	});
	$: y = (datum: Datum) => map(getValue(datum), appliedValueScale);
</script>

{#each data as datum}
	<slot key={getColumnValue(datum)} scene={calcScene(datum)} {datum} y={y(datum)} />
{/each}
