<script lang="ts">
	import { AxisBottom, Gutters, SvgResponsiveStage } from 'svelte-viz';
	import { Penguin, penguins } from '../../data/penguins';
	import { extent } from 'd3-array';
	import { groupBy, summarize, tidy } from '@tidyjs/tidy';
	import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale';
	import Labels from './Labels.svelte';
	import Rainclouds from './Rainclouds.svelte';

	const billRatio = (d: Penguin) => d.culmenLength / d.culmenDepth;
	const billRatioExtent = extent(penguins, billRatio);

	const bySpecies: Array<{ species: string; items: Penguin[] }> = tidy(
		penguins,
		groupBy('species', [
			summarize({
				items: (a) => a
			})
		])
	);

	const getSpecies = (d) => d.species;
	const species = bySpecies.map(getSpecies).sort();
	const rowScale = scaleBand().paddingInner(0.3);

	const speciesColorClass = scaleOrdinal(['text-adelie', 'text-chinstrap', 'text-gentoo']).domain(
		species
	);
</script>

<SvgResponsiveStage>
	<Gutters left={140} bottom={40} top={20} right={20}>
		<g slot="left">
			<Labels
				data={bySpecies}
				scale={rowScale}
				domain={species}
				getValue={getSpecies}
				colorClass={speciesColorClass}
			/>
		</g>
		<g slot="center">
			<Rainclouds
				data={bySpecies}
				{rowScale}
				{species}
				{getSpecies}
				getValue={billRatio}
				valueDomain={billRatioExtent}
				speciesClass={speciesColorClass}
			/>
		</g>
		<g slot="bottom">
			<AxisBottom scale={scaleLinear()} domain={billRatioExtent} />
		</g>
	</Gutters>
</SvgResponsiveStage>
