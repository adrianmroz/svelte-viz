<script lang="ts">
	import type { Binary } from '../utils/function-types';
	import type { Unary } from '../utils/function-types';
	import type { ScaleBand } from 'd3-scale';
	import { scaleBand } from 'd3-scale';
	import { getScene } from '../scene/context';
	import type { Scene } from '../scene/scene';

	type Datum = $$Generic;
	type Column = $$Generic;
	type Row = $$Generic;

	export let data: Datum[];
	export let keyFn: Binary<Datum, number, string> = (_, idx) => String(idx);

	export let columnScale: ScaleBand<Column> = scaleBand<Column>();
	export let columnDomain: Column[];
	export let getColumnValue: Unary<Datum, Column>;

	export let rowScale: ScaleBand<Row> = scaleBand<Row>();
	export let rowDomain: Row[];
	export let getRowValue: Unary<Datum, Row>;

	const scene$ = getScene();

	$: innerColumnScale = columnScale.copy();
	$: innerRowScale = rowScale.copy();
	$: appliedRowScale = innerRowScale.domain(rowDomain).range([$scene$.height, 0]);
	$: appliedColumnScale = innerColumnScale.domain(columnDomain).range([0, $scene$.width]);

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
