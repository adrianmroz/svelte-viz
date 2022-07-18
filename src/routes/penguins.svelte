<script>
	import PenguinChart from '../components/penguins/Chart.svelte';
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
		<PenguinChart />
	</div>
	<div class="text-base font-light text-end pr-4 pb-2">
		<div>Gorman, Williams & Fraser (2014) PLoS ONE DOI: 10.1371/journal.pone.0090081</div>
		<div>Visualization: Cedric Scherer, Illustration: Allison Horst</div>
	</div>
	<img class="absolute right-0 top-0 w-1/3 sm:w-1/4" src="/penguins.png" />
</main>
