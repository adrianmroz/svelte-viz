<script lang="ts">
	import type { Binary, Unary } from '../utils/function-types';
	import { getScene } from '../scene/context';
	import type { Extract, ExtractValuesAs } from '../utils/map';
	import { map } from '../utils/map';
	import type { Scale } from "../utils/scale";

	type Datum = $$Generic;
	type X = $$Generic;
	type XS = Extract<X>;
	type Y = $$Generic;
	type YS = Extract<Y>;

	export let data: Datum[];

	export let xScale: Scale<XS, number>;
	export let xDomain: readonly [XS, XS];
	export let getX: Unary<Datum, X>;

	export let yScale: Scale<YS, number>;
	export let yDomain: readonly [YS, YS];
	export let getY: Unary<Datum, Y>;

	export let keyFn: Binary<Datum, number, string> = (_, idx) => String(idx);

	const scene$ = getScene();
	$: innerYScale = yScale.copy();
	$: innerXScale = xScale.copy();
	$: appliedYScale = innerYScale.domain(yDomain).range([$scene$.height, 0]);
	$: appliedXScale = innerXScale.domain(xDomain).range([0, $scene$.width]);

	let x: Unary<Datum, ExtractValuesAs<X, number>>;
	let y: Unary<Datum, ExtractValuesAs<Y, number>>;
	$: x = (datum: Datum) => map<X, number>(getX(datum), appliedXScale);
	$: y = (datum: Datum) => map<Y, number>(getY(datum), appliedYScale);
</script>

{#each data as datum, idx}
	<slot key={keyFn(datum, idx)}
				{datum}
				x={x(datum)}
				y={y(datum)} />
{/each}
