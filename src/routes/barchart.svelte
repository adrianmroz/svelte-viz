<script lang="ts">
	import { RowFrame, SvgResponsiveStage, GroupStage, Bar } from 'svelte-viz'
	import { extent } from 'd3-array';
	import { scaleBand, scaleLinear } from 'd3-scale';
	import type { MedalRow } from '../data/medals';
	import { medals } from '../data/medals';

	const data = medals.slice(0, 12);

	const name = (d: MedalRow) => d.country;
	const gold = (d: MedalRow) => d.gold;

	const rowDomain = data.map(name);
	const valueDomain = extent(data, gold);

	const rowScale = scaleBand().padding(0.2);
</script>

<SvgResponsiveStage>
	<RowFrame
		{data}
		{rowDomain}
		{valueDomain}
		valueScale={scaleLinear()}
		getRowValue={name}
		getValue={gold}
		{rowScale}
		let:x
		let:scene
		let:datum
	>
		<GroupStage {scene}>
			<Bar width={x} height={scene.height} />
			<text alignment-baseline="middle" x={x + 2} y={scene.height / 2}>
				{datum.country}: {datum.gold}
			</text>
		</GroupStage>
	</RowFrame>
</SvgResponsiveStage>
