<script lang="ts">
	import { Area, asArray, getScene, XYFrame } from 'svelte-viz';
	import { scaleLinear } from 'd3-scale';
	import { bin, max } from 'd3-array';
	import { Penguin } from '../../data/penguins';
	import { curveNatural } from 'd3-shape';

	export let data;
	export let domain;
	export let getX;

	$: binFn = bin<Penguin, number>().value(getX).thresholds(20);
	$: series = binFn(data);

	const getY = (bins) => asArray(bins.map((bin) => bin.length));
	const getXP = (bins) => asArray(bins.map((bin) => (bin.x0 + bin.x1) / 2));

	$: yDomain = [0, max(series, (s) => s.length)];

	const scene$ = getScene();
</script>

<XYFrame
	data={[series]}
	xScale={scaleLinear()}
	xDomain={domain}
	getX={getXP}
	yScale={scaleLinear()}
	{yDomain}
	{getY}
	let:x
	let:y
>
	<Area xs={x} ys={y} y0={$scene$.height} curve={curveNatural} />
</XYFrame>
