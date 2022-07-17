<script lang="ts">
	import type { Scene } from './scene';
	import { toTranslate } from './scene';
	import SceneTracker from './SceneTracker.svelte';

	export let scene: Scene;
	let className = '';
	export { className as class };

	$: innerScale = {
		...scene,
		top: 0,
		left: 0
	};
</script>

<g class={className} transform={toTranslate(scene)}>
	<SceneTracker scene={innerScale}>
		<slot />
	</SceneTracker>
</g>
