<script lang="ts">
	import { scaleLinear } from 'd3-scale';
	import { asMap, Tick, XYFrame } from 'svelte-viz';

	export let data;
	export let domain;
	export let get;
</script>

<XYFrame
	{data}
	xDomain={domain}
	xScale={scaleLinear()}
	getX={get}
	yDomain={[0, 1]}
	yScale={scaleLinear()}
	getY={() => asMap({ top: 0, bottom: 1 })}
	let:x
	let:y
>
	<Tick x1={x} x2={x} y1={y.top} y2={y.bottom} />
</XYFrame>
