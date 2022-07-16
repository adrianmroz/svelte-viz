<script lang="ts">
	import type { Scene } from './scene';
	import { toTranslate } from './scene';
	import SceneTracker from './SceneTracker.svelte';

	export let scene: Scene;

	$: innerScale = {
		...scene,
		top: 0,
		left: 0
	};
</script>

<g transform={toTranslate(scene)}>
	<SceneTracker scene={innerScale}>
		<slot />
	</SceneTracker>
</g>
