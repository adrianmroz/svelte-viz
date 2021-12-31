<script lang="ts">
  import type { StageComponent } from "./stage";
  import { getScene } from "./context";
  import type { Scene } from "./scene";
  import SceneTracker from "./SceneTracker.svelte";

  export let left = 0;
  export let top = 0;
  export let as: StageComponent;

  const scene$ = getScene();

  let translated: Scene;
  $: translated = {
    left,
    top,
    width: $scene$.width - left,
    height: $scene$.height - top
  };
</script>

<svelte:component this={as} scene={translated}>
  <SceneTracker scene={translated}>
    <slot></slot>
  </SceneTracker>
</svelte:component>
