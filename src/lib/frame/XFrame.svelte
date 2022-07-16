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

	export let data: Datum[];

	export let scale: Scale<XValue, number>;
	export let domain: readonly [XValue, XValue];
	export let get: Unary<Datum, X>;

	export let keyFn: Binary<Datum, number, string> = (_, idx) => String(idx);

	const scene$ = getScene();
	$: innerScale = scale.copy();
	$: appliedScale = innerScale.domain(domain).range([$scene$.left, $scene$.width + $scene$.left]);

	let x: Unary<Datum, XReturn>;
	$: x = (datum: Datum) => map<X, number>(get(datum), appliedScale);
</script>

{#each data as datum, idx}
	<slot key={keyFn(datum, idx)} {datum} x={x(datum)} scene={$scene$} />
{/each}
