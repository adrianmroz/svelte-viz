<script lang="ts">
	import type { MedalRow } from '$lib/data/medals';
	import { medals } from '$lib/data/medals';
	import { extent } from 'd3-array';
	import RowFrame from '$lib/frame/RowFrame.svelte';
	import { scaleBand, scaleLinear } from 'd3-scale';
	import GroupScene from '$lib/scene/GroupScene.svelte';
	import SvgResponsiveScene from '$lib/scene/SvgResponsiveScene.svelte';
	import Bar from '$lib/mark/Bar.svelte';

	const data = medals.slice(0, 12);

	const name = (d: MedalRow) => d.country;
	const gold = (d: MedalRow) => d.gold;

	const rowDomain = data.map(name);
	const valueDomain = extent(data, gold);

	const rowScale = scaleBand().padding(0.2);
</script>

<SvgResponsiveScene>
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
		<GroupScene {scene}>
			<Bar width={x} height={scene.height} />
			<text alignment-baseline="middle" x={x + 2} y={scene.height / 2}>
				{datum.country}: {datum.gold}
			</text>
		</GroupScene>
	</RowFrame>
</SvgResponsiveScene>
