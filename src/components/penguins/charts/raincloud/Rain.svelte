<script lang="ts">
	import { Point, XYFrame } from 'svelte-viz';
	import { scaleLinear } from 'd3-scale';
	import { getChartContext } from './context';

	const { data: data$, getValue: getValue$, domain: domain$ } = getChartContext();
	$: data = $data$;
	$: domain = $domain$;
	$: getValue = $getValue$;
</script>

<XYFrame
	{data}
	xScale={scaleLinear()}
	xDomain={domain}
	getX={getValue}
	yScale={scaleLinear()}
	yDomain={[0, 1]}
	getY={() => Math.random()}
	let:x
	let:y
>
	<Point {x} {y} size={2} strokeWidth={0.5} fillOpacity={0.5} />
</XYFrame>
