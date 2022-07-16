<script lang="ts">
	import { scaleLinear } from 'd3-scale';
	import { ascending, quantile } from 'd3-array';
	import { getScene } from 'svelte-viz';

	export let data;
	export let domain;
	export let get;
	export let color;

	const scene$ = getScene();

	$: data_sorted = data.map(get).sort(ascending);
	$: q1 = quantile(data_sorted, 0.25);
	$: median = quantile(data_sorted, 0.5);
	$: q3 = quantile(data_sorted, 0.75);
	$: interQuantileRange = q3 - q1;
	$: min = q1 - 1.5 * interQuantileRange;
	$: max = q1 + 1.5 * interQuantileRange;

	$: scale = scaleLinear()
		.domain(domain)
		.range([$scene$.left, $scene$.width + $scene$.left]);

	$: center = ($scene$.top + $scene$.height) / 2;
	$: height = $scene$.height;
</script>

<line class="axis" stroke={color} x1={scale(min)} x2={scale(max)} y1={center} y2={center} />
<rect
	class="box"
	fill={color}
	stroke={color}
	x={scale(q1)}
	y={center - height / 2}
	width={scale(q3) - scale(q1)}
	{height}
/>

<line
	class="min"
	stroke={color}
	x1={scale(min)}
	x2={scale(min)}
	y1={center - height / 2}
	y2={center + height / 2}
/>
<line
	class="median"
	stroke={color}
	x1={scale(median)}
	x2={scale(median)}
	y1={center - height / 2}
	y2={center + height / 2}
/>
<line
	class="max"
	stroke={color}
	x1={scale(max)}
	x2={scale(max)}
	y1={center - height / 2}
	y2={center + height / 2}
/>

<style>
	.axis,
	.min,
	.median,
	.max {
		stroke-width: 1.5;
		shape-rendering: crispEdges;
	}

	.axis {
		stroke-width: 2;
	}

	.box {
		fill-opacity: 0.3;
		stroke-width: 1;
		stroke-opacity: 0.7;
		shape-rendering: crispEdges;
	}
</style>
