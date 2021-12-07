<script lang="ts">
	import SvgResponsiveScene from '$lib/scene/SvgResponsiveScene.svelte';
	import GridFrame from '$lib/frame/GridFrame.svelte';
	import type { Airport } from '$lib/data/airports';
	import { airpotrs } from '$lib/data/airports';
	import Bar from '$lib/mark/Bar.svelte';
	import { max } from 'd3-array';
	import { scaleSequential } from 'd3-scale';
	import { interpolateBlues } from 'd3-scale-chromatic';

	const data: Airport[] = airpotrs;

	const origin = (a: Airport) => a.origin;
	const destination = (a: Airport) => a.destination;
	const count = (a: Airport) => a.count;

	const rowDomain = [...new Set(data.map(origin))];
	const columnDomain = [...new Set(data.map(destination))];

	const maxCount = max(data, count);
	const colorScale = scaleSequential([0, maxCount], interpolateBlues);
</script>

<SvgResponsiveScene>
	<GridFrame
		{data}
		{rowDomain}
		{columnDomain}
		getRowValue={origin}
		getColumnValue={destination}
		let:scene
		let:datum
	>
		<Bar
			color={colorScale(datum.count)}
			x={scene.left}
			y={scene.top}
			height={scene.height}
			width={scene.width}
		/>
	</GridFrame>
</SvgResponsiveScene>
