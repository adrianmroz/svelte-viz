<script lang="ts">
	import { ColumnFrame, SvgResponsiveStage, GroupStage, Bar } from 'svelte-viz'
	import { extent } from 'd3-array';
	import { scaleBand, scaleLinear } from 'd3-scale';
	import type { MedalRow } from '../data/medals';
	import { medals } from '../data/medals';

	const data = medals.slice(0, 15);

	const name = (d: MedalRow) => d.country;
	const silver = (d: MedalRow) => d.silver;

	const columnDomain = data.map(name);
	const valueDomain = extent(data, silver);

	const columnScale = scaleBand().padding(0.3);
</script>

<SvgResponsiveStage>
	<ColumnFrame
		{data}
		{columnDomain}
		{valueDomain}
		valueScale={scaleLinear()}
		getColumnValue={name}
		getValue={silver}
		{columnScale}
		let:y
		let:scene
		let:datum
	>
		<GroupStage {scene}>
			<Bar {y} height={scene.height - y} width={scene.width} />
			<text alignment-baseline="hanging" y={Math.min(y + 10, scene.height - 15)} x={10}>
				{datum.country}: {datum.silver}
			</text>
		</GroupStage>
	</ColumnFrame>
</SvgResponsiveStage>
