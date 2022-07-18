<script lang="ts">
	import type { Binary, Unary } from '../utils/function-types';
	import { getScene } from '../scene/context';
	import type { ExtractValueAndReturnTypes } from '../utils/map';
	import { map } from '../utils/map';
	import type { Scale } from '../utils/scale';

	type Datum = $$Generic;
	type X = $$Generic;
	type XE = ExtractValueAndReturnTypes<X, number>;
	type XValue = XE['value'];
	type XReturn = XE['return'];
	type Y = $$Generic;
	type YE = ExtractValueAndReturnTypes<Y, number>;
	type YValue = YE['value'];
	type YReturn = YE['return'];

	export let data: Datum[];

	export let xScale: Scale<XValue, number>;
	export let xDomain: readonly [XValue, XValue];
	export let getX: Unary<Datum, X>;

	export let yScale: Scale<YValue, number>;
	export let yDomain: readonly [YValue, YValue];
	export let getY: Unary<Datum, Y>;

	export let keyFn: Binary<Datum, number, string> = (_, idx) => String(idx);

	const scene$ = getScene();
	$: innerYScale = yScale.copy();
	$: innerXScale = xScale.copy();
	$: appliedYScale = innerYScale.domain(yDomain).range([$scene$.height + $scene$.top, $scene$.top]);
	$: appliedXScale = innerXScale
		.domain(xDomain)
		.range([$scene$.left, $scene$.width + $scene$.left]);

	let x: Unary<Datum, XReturn>;
	let y: Unary<Datum, YReturn>;
	$: x = (datum: Datum) => map<X, number>(getX(datum), appliedXScale);
	$: y = (datum: Datum) => map<Y, number>(getY(datum), appliedYScale);
</script>

{#each data as datum, idx}
	<slot key={keyFn(datum, idx)} {datum} x={x(datum)} y={y(datum)} />
{/each}
