<script lang="ts">
  import type { StageComponent } from "./stage";
  import { getScene } from "./context";
  import type { Scene } from "./scene";
  import SceneTracker from "./SceneTracker.svelte";

  export let left = 0;
  export let top = 0;
  export let right = 0;
  export let bottom = 0;

  export let as: StageComponent;

  const scene$ = getScene();

  let inset: Scene;
  $: inset = {
    left,
    top,
    width: $scene$.width - left - right,
    height: $scene$.height - top - bottom
  };
</script>

<svelte:component this={as} scene={inset}>
  <SceneTracker scene={inset}>
    <slot></slot>
  </SceneTracker>
</svelte:component>
