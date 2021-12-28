<script lang="ts">
	import type { ScaleBand } from 'd3-scale';
	import { scaleBand } from 'd3-scale';
	import type { Unary } from '../utils/function-types';
	import type { Scene } from '../scene/scene';
	import { getScene } from '../scene/context';
	import type { ExtractValueAndReturnTypes } from '../utils/map';
	import { mapper } from '../utils/map';
	import type { Scale } from "../utils/scale";

	type Datum = $$Generic;
	type Row = $$Generic;
	type X = $$Generic;
	type XE = ExtractValueAndReturnTypes<X, number>;
	type XValue = XE['value'];
	type XReturn = XE['return'];

	export let data: Datum[];

	export let rowScale: ScaleBand<Row> = scaleBand<Row>();
	export let rowDomain: Row[];
	export let getRowValue: Unary<Datum, Row>;

	export let valueScale: Scale<XValue, number>;
	export let valueDomain: readonly [XValue, XValue];
	export let getValue: Unary<Datum, X>;

	const scene$ = getScene();

	$: innerRowScale = rowScale.copy();
	$: innerValueScale = valueScale.copy();
	$: appliedRowScale = innerRowScale.domain(rowDomain).range([$scene$.height, 0]);
	$: appliedValueScale = innerValueScale.domain(valueDomain).range([0, $scene$.width]);
	$: calcScene = (datum: Datum): Scene => ({
		left: 0,
		width: $scene$.width,
		height: appliedRowScale.bandwidth(),
		top: appliedRowScale(getRowValue(datum))
	});
	let x: Unary<Datum, XReturn>;
	$: x = (datum: Datum) => mapper<X, number>()(getValue(datum), appliedValueScale);
</script>

{#each data as datum}
	<slot key={getRowValue(datum)} {datum} x={x(datum)} scene={calcScene(datum)} />
{/each}
