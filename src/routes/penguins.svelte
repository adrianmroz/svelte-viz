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
	import DivResponsiveStage from '$lib/scene/DivResponsiveStage.svelte';
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

	const speciesColor = scaleOrdinal(['text-adelie', 'text-chinstrap', 'text-gentoo']).domain(
		species
	);

	function getShortSpecies(p: Penguin): string {
		return p.species.split(' ')[0];
	}
</script>

<SvgResponsiveStage>
	<LayoutAs as={GroupStage} left={120} bottom={80} top={100}>
		<g slot="top">
			<text class="chart-title" y="40"
				>Bill Ratios of Brush-Tailed Penguins (<tspan class="species">Pygoscelis</tspan> spec.)</text
			>
			<text class="chart-heading" y="65"
				>Distribution of bill ratios, estimated as bill length divided by bill depth</text
			>
		</g>
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
					class={`row-species ${speciesColor(getSpecies(datum))}`}
					x={scene.width - 15}
					y={center(scene).y}
					fill="currentColor"
				>
					{getShortSpecies(datum)}
				</text>
			</RowLayout>
		</g>
		<g slot="center">
			<VerticalGrid scale={scaleLinear()} {domain} />
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
			<AxisBottom scale={scaleLinear()} {domain} />
		</g>
	</LayoutAs>
</SvgResponsiveStage>

<DivResponsiveStage let:scene>
	<img class="penguins" width={scene.width * 0.35} src="/penguins.png" />

	<div class="footer">
		<div>Gorman, Williams & Fraser (2014) PLoS ONE DOI: 10.1371/journal.pone.0090081</div>
		<div>Visualization: Cedric Scherer, Illustration: Allison Horst</div>
	</div>
</DivResponsiveStage>

<style>
	.penguins {
		position: absolute;
		top: 0;
		right: 0;
	}

	.footer {
		position: absolute;
		right: 20px;
		bottom: 10px;
		font-family: 'Source Code Pro', ui-sans-serif;
		font-size: 16px;
		font-weight: lighter;
		text-align: end;
	}

	.chart-title {
		font-family: 'Source Code Pro', ui-sans-serif;
		font-size: 22px;
	}

	.chart-heading {
		font-family: 'Source Code Pro', ui-sans-serif;
		font-size: 18px;
		font-style: italic;
		font-weight: lighter;
	}

	.species {
		font-style: italic;
	}

	.row-species {
		font-family: 'Source Code Pro', ui-sans-serif;
		font-size: 18px;
		font-weight: normal;
		text-anchor: end;
	}
</style>
