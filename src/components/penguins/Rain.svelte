<script lang="ts">
	import { Point, XYFrame } from 'svelte-viz';
	import { scaleLinear } from 'd3-scale';

	export let data;
	export let domain;
	export let getX;
</script>

<XYFrame
	{data}
	xScale={scaleLinear()}
	xDomain={domain}
	{getX}
	yScale={scaleLinear()}
	yDomain={[0, 1]}
	getY={() => Math.random()}
	let:x
	let:y
>
	<Point {x} {y} size={2} strokeWidth={0.5} fillOpacity={0.5} />
</XYFrame>
