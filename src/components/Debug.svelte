<script lang="ts">
	import type { Property } from 'csstype';
	import { center, getScene } from 'svelte-viz';

	export let color: Property.Fill = 'crimson';
	export let opacity: Property.FillOpacity = 0.5;

	const scene$ = getScene();
</script>

<rect
	x={$scene$.left}
	y={$scene$.top}
	width={$scene$.width}
	height={$scene$.height}
	fill={color}
	{opacity}
/>
<text {...center($scene$)} text-anchor="middle"><slot /></text>
