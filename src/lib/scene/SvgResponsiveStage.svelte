<script lang="ts">
  import type { WritableScene } from "./scene";
  import { setScene } from "./context";
  import { writable } from "svelte/store";

  export let initialWidth = 0;
  export let initialHeight = 0;

  let width = initialWidth;
  let height = initialHeight;

  const scene$: WritableScene = writable({ top: 0, left: 0, width, height });
  setScene(scene$);

  $: scene$.update(scene => ({ ...scene, height, width }));
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}>
    <slot/>
  </svg>
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
