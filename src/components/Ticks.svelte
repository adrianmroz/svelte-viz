<script lang="ts">
	import XFrame from '../lib/frame/XFrame.svelte';
	import { scaleLinear } from 'd3-scale';
	import Tick from '../lib/mark/Tick.svelte';

	export let data;
	export let domain;
	export let get;
</script>

<XFrame {data} {domain} scale={scaleLinear()} {get} let:x let:scene>
	<Tick {x} y={scene.top} length={scene.height} />
</XFrame>
