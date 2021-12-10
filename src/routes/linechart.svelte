<script lang="ts">
	import { terminals } from '$lib/data/terminals';
	import type { Terminal } from '$lib/data/terminals';
	import SvgResponsiveScene from '$lib/scene/SvgResponsiveScene.svelte';
	import XYFrame from '$lib/frame/XYFrame.svelte';
	import { scaleOrdinal, scaleLinear, scaleTime } from 'd3-scale';
	import Line from '$lib/mark/Line.svelte';
	import { schemeTableau10 } from 'd3-scale-chromatic';
	import { asArray } from "../lib/utils/map";

	const data = terminals.slice(0, 6);

	const getY = (terminal: Terminal) => asArray(terminal.data.map((p) => p.count));
	const getX = (terminal: Terminal) => asArray(terminal.data.map((p) => new Date(p.date)));

	const yDomain: [number, number] = [0, 500000];
	const xDomain: [Date, Date] = [
		new Date(data[0].data[0].date),
		new Date(data[0].data[data[0].data.length - 1].date)
	];

	const name = (t: Terminal) => t.name;
	const colorScale = scaleOrdinal(schemeTableau10).domain(data.map(name));
</script>

<SvgResponsiveScene>
	<XYFrame
		{data}
		{getX}
		{xDomain}
		xScale={scaleTime()}
		{getY}
		{yDomain}
		yScale={scaleLinear()}
		let:x
		let:y
		let:datum
	>
		<Line xs={x} ys={y} color={colorScale(name(datum))} />
	</XYFrame>
</SvgResponsiveScene>
