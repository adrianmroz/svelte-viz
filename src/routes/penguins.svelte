<script lang="ts">
	import { Penguin, penguins } from '../data/penguins';
	import {
		AxisBottom,
		center,
		GroupStage,
		LayoutAs,
		RowLayout,
		SvgResponsiveStage
	} from 'svelte-viz';
	import { groupBy, summarize, tidy } from '@tidyjs/tidy';
	import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale';
	import Split from '$lib/scene/Split.svelte';
	import { extent } from 'd3-array';
	import Rain from '../components/Rain.svelte';
	import Cloud from '../components/Cloud.svelte';
	import VerticalGrid from '$lib/guides/VerticalGrid.svelte';
	import Average from '../components/Median.svelte';
	import Inset from '$lib/scene/Inset.svelte';
	import BoxAndWhiskers from '../components/BoxAndWhiskers.svelte';
	import Ticks from '../components/Ticks.svelte';

	const x = (d: Penguin) => d.culmenLength / d.culmenDepth;
	const domain = extent(penguins, x);

	const bySpecies = tidy(
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
	const valueScale = scaleLinear();

	const speciesColor = scaleOrdinal(['text-adelie', 'text-chinstrap', 'text-gentoo']).domain(
		species
	);

	function getShortSpecies(p: Penguin): string {
		return p.species.split(' ')[0];
	}
</script>

<main class="flex flex-col font-source h-screen">
	<div class="header px-8 py-4">
		<div class="text-2xl font-semibold">
			Bill Ratios of Brush-Tailed Penguins (<span class="italic">Pygoscelis</span> spec.)
		</div>
		<div class="text-base font-light italic">
			Distribution of bill ratios, estimated as bill length divided by bill depth
		</div>
	</div>

	<div class="relative flex-auto">
		<SvgResponsiveStage>
			<LayoutAs as={GroupStage} left={140} bottom={40} top={20} right={20}>
				<g slot="left">
					<RowLayout
						{rowScale}
						let:datum
						let:scene
						data={bySpecies}
						rowDomain={species}
						getRowValue={getSpecies}
					>
						<text
							class={`${speciesColor(getSpecies(datum))} font-source text-xl font-semibold`}
							x={scene.width - 15}
							y={center(scene).y}
							fill="currentColor"
							text-anchor="end"
						>
							{getShortSpecies(datum)}
						</text>
					</RowLayout>
				</g>
				<g slot="center">
					<VerticalGrid scale={valueScale} {domain} />
					<RowLayout
						let:datum
						let:scene
						{rowScale}
						data={bySpecies}
						rowDomain={species}
						getRowValue={getSpecies}
					>
						<GroupStage {scene} class={speciesColor(getSpecies(datum))}>
							<Split ratio="0.6">
								<g slot="top">
									<Cloud data={datum.items} {domain} getX={x} />
									<Average getX={x} data={datum.items} {domain} />
								</g>
								<g slot="bottom">
									<Inset as={GroupStage} top={5} bottom={25}>
										<Rain data={datum.items} {domain} getX={x} />
										<!--								<Ticks data={datum.items} {domain} get={x} />-->
										<BoxAndWhiskers data={datum.items} {domain} get={x} />
									</Inset>
								</g>
							</Split>
						</GroupStage>
					</RowLayout>
				</g>

				<g slot="bottom">
					<AxisBottom scale={valueScale} {domain} />
				</g>
			</LayoutAs>
		</SvgResponsiveStage>
	</div>
	<div class="text-base font-light text-end pr-4 pb-2">
		<div>Gorman, Williams & Fraser (2014) PLoS ONE DOI: 10.1371/journal.pone.0090081</div>
		<div>Visualization: Cedric Scherer, Illustration: Allison Horst</div>
	</div>
	<img class="absolute right-0 top-0 w-1/3 sm:w-1/4" src="/penguins.png" />
</main>
