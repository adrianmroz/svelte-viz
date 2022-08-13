<script lang="ts">
	import { GroupStage, Inset, RowLayout, VerticalGrid } from 'svelte-viz';
	import Rain from './charts/raincloud/Rain.svelte';
	import BoxAndWhiskers from './charts/raincloud/BoxAndWhiskers.svelte';
	import { scaleLinear } from 'd3-scale';
	import Ticks from './charts/raincloud/Ticks.svelte';
	import RainCloudChart from './charts/raincloud/RainCloudChart.svelte';

	export let data;
	export let rowScale;
	export let species;
	export let getSpecies;

	export let getValue;
	export let valueDomain;

	export let speciesClass;
</script>

<VerticalGrid scale={scaleLinear()} domain={valueDomain} />
<RowLayout {rowScale} {data} rowDomain={species} getRowValue={getSpecies} let:datum let:scene>
	<GroupStage {scene} class={speciesClass(getSpecies(datum))}>
		<RainCloudChart data={datum.items} domain={valueDomain} {getValue}>
			<Inset top={10} bottom={25}>
				<Ticks />
				<BoxAndWhiskers />
				<Rain />
			</Inset>
		</RainCloudChart>
	</GroupStage>
</RowLayout>
