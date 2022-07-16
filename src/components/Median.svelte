<script lang="ts">
	import { scaleLinear } from 'd3-scale';
	import { median } from 'd3-array';
	import XFrame from '../lib/frame/XFrame.svelte';

	export let data;
	export let domain;
	export let getX;
	export let color;

	$: value = median(data, getX);
</script>

<XFrame data={[value]} scale={scaleLinear()} {domain} get={(d) => d} let:x let:scene>
	<text class="median" {x} y={scene.height - 15} fill={color}>{value.toFixed(2)}</text>
</XFrame>

<style>
	.median {
		text-anchor: middle;
		font-family: 'Source Code Pro', ui-sans-serif;
		font-size: 18px;
		font-weight: bold;
	}
</style>
