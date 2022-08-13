<script lang="ts">
	import { center, RowLayout } from 'svelte-viz';
	import { Penguin } from '../../data/penguins';
	export let scale;
	export let data;
	export let domain;
	export let getValue;
	export let colorClass;

	function formatLabel(p: Penguin): string {
		return p.species.split(' ')[0];
	}
</script>

<RowLayout rowScale={scale} let:datum let:scene {data} rowDomain={domain} getRowValue={getValue}>
	<text
		class={`${colorClass(getValue(datum))} font-source text-xl font-semibold`}
		x={scene.width - 15}
		y={center(scene).y}
		fill="currentColor"
		text-anchor="end"
	>
		{formatLabel(datum)}
	</text>
</RowLayout>
