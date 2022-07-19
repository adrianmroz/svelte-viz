<script lang="ts">
	import { GroupStage, Inset, RowLayout, Split, VerticalGrid } from 'svelte-viz';
	import Cloud from './Cloud.svelte';
	import Median from './Median.svelte';
	import Rain from './Rain.svelte';
	import BoxAndWhiskers from './BoxAndWhiskers.svelte';
	import { scaleLinear } from 'd3-scale';
	import Ticks from './Ticks.svelte';

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
		<Split ratio="0.6">
			<g slot="top">
				<Cloud data={datum.items} domain={valueDomain} getX={getValue} />
				<Median getX={getValue} data={datum.items} domain={valueDomain} />
			</g>
			<g slot="bottom">
				<Inset as={GroupStage} top={5} bottom={25}>
					<Rain data={datum.items} domain={valueDomain} getX={getValue} />
					<!--					<Ticks data={datum.items} domain={valueDomain} get={getValue} />-->
					<BoxAndWhiskers data={datum.items} domain={valueDomain} get={getValue} />
				</Inset>
			</g>
		</Split>
	</GroupStage>
</RowLayout>
