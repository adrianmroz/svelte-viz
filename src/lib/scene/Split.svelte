<script lang="ts">
	import SceneTracker from './SceneTracker.svelte';
	import { getScene } from './context';

	export let ratio = 0.5;

	const scene$ = getScene();

	$: topHeight = $scene$.height * ratio;

	$: topScene = {
		left: $scene$.left,
		top: $scene$.top,
		width: $scene$.width,
		height: topHeight
	};

	$: bottomScene = {
		left: $scene$.left,
		top: $scene$.top + topHeight,
		width: $scene$.width,
		height: $scene$.height - topHeight
	};
</script>

<SceneTracker scene={topScene}>
	<slot name="top" scene={$scene$} />
</SceneTracker>

<SceneTracker scene={bottomScene}>
	<slot name="bottom" scene={$scene$} />
</SceneTracker>
