<script lang="ts">
  import type { StageComponent } from "./stage";
  import { getScene } from "./context";
  import { track, init } from "./scene-tracker";
  import type { Scene } from "./scene";

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
  }

  const translated$ = init(translated);
  $: track(translated$, translated);
</script>

<svelte:component this={as} scene={translated}>
  <slot></slot>
</svelte:component>
