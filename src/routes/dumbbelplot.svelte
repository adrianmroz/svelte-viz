<script lang="ts">
	import { RowFrame, SvgResponsiveScene, GroupScene, Dumbbell, asMap } from 'svelte-viz'
	import { extent } from 'd3-array';
	import { scaleBand, scaleLinear } from 'd3-scale';
	import type { MedalRow } from '../data/medals';
	import { medals } from '../data/medals';

	const data = medals.slice(0, 10);

	const name = (d: MedalRow) => d.country;
	const rowDomain = data.map(name);

	const counts = ({ gold, silver }: MedalRow) => asMap({ gold, silver });
	const valueExtent = extent(data.flatMap((d) => [d.gold, d.silver]));

	const rowScale = scaleBand().padding(0.2);
</script>

<SvgResponsiveScene>
	<RowFrame
		{data}
		{rowDomain}
		valueDomain={valueExtent}
		valueScale={scaleLinear()}
		getRowValue={name}
		getValue={counts}
		{rowScale}
		let:x={{ gold, silver }}
		let:scene
	>
		<GroupScene {scene}>
			<Dumbbell y1={scene.height / 2} y2={scene.height / 2} x1={gold} x2={silver} />
		</GroupScene>
	</RowFrame>
</SvgResponsiveScene>
