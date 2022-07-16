<script lang="ts">
	import SceneTracker from './SceneTracker.svelte';
	import type { Scene } from './scene';

	export let initialWidth = 800;
	export let initialHeight = 600;

	let width = initialWidth;
	let height = initialHeight;

	let scene: Scene;
	$: scene = {
		left: 0,
		top: 0,
		width,
		height
	};
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
	<SceneTracker {scene}>
		<slot {scene} />
	</SceneTracker>
</div>

<style>
	.container {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
	}
</style>
