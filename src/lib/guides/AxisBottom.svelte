<script lang="ts">
	import { select } from 'd3-selection';
	import { axisBottom, AxisDomain } from 'd3-axis';
	import { getScene } from '../scene/context';
	import type { Scale } from '../utils/scale';
	import { toTranslate } from '$lib/scene/scene';

	export let scale: Scale<AxisDomain, number>;
	export let domain: readonly [AxisDomain, AxisDomain];

	const scene$ = getScene();
	let element: SVGGElement;

	$: innerScale = scale.copy();
	$: appliedScale = innerScale.domain(domain).range([0, $scene$.width]);
	$: {
		const axis = axisBottom(appliedScale);
		select(element).call(axis);
	}
</script>

<g transform={toTranslate($scene$)} bind:this={element} />
