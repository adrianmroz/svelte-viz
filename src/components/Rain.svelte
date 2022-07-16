<script lang="ts">
	import { Point, XYFrame } from 'svelte-viz';
	import { scaleLinear } from 'd3-scale';

	export let data;
	export let domain;
	export let getX;
	export let color;
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
	<Point {x} {y} {color} />
</XYFrame>
