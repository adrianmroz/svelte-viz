<script lang="ts">
  import type { StageComponent } from "./stage";
  import { getScene, setScene } from "./context";
  import type { WritableScene, Scene } from "./scene";
  import { writable } from "svelte/store";

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

  const translated$: WritableScene = writable(translated);
  setScene(translated$);

  $: translated$.set(translated);
</script>

<svelte:component this={as} scene={translated}>
  <slot></slot>
</svelte:component>
