<script lang="ts">
	import { scaleLinear } from 'd3-scale';
	import { median } from 'd3-array';
	import XFrame from '$lib/frame/XFrame.svelte';

	export let data;
	export let domain;
	export let getX;

	$: value = median(data, getX);
</script>

<XFrame data={[value]} scale={scaleLinear()} {domain} get={(d) => d} let:x let:scene>
	<text
		class="font-source text-base font-semibold fill-current"
		{x}
		y={scene.height - 15}
		text-anchor="middle">{value.toFixed(2)}</text
	>
</XFrame>
