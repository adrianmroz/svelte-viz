<script lang="ts">
	import { select } from 'd3-selection';
	import { axisBottom, AxisDomain } from 'd3-axis';
	import { getScene } from '../scene/context';
	import type { Scale } from '../utils/scale';

	export let scale: Scale<AxisDomain, number>;
	export let domain: readonly [AxisDomain, AxisDomain];

	const scene$ = getScene();

	$: innerScale = scale.copy();
	$: appliedScale = innerScale.domain(domain).range([0, $scene$.width]);

	let lines: SVGGElement;

	$: {
		const axis = axisBottom(appliedScale);
		select(lines).call(axis.tickSize(-$scene$.height).tickFormat(() => ''));
	}
</script>

<g class="grid" bind:this={lines} transform={`translate(0, ${$scene$.height})`} />

<style>
	.grid :global(line) {
		color: #ccc;
		stroke-width: 0.5;
		shape-rendering: crispEdges;
	}

	.grid :global(path) {
		display: none;
	}
</style>
