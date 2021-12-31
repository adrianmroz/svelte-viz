<script lang="ts">
  import { init, track } from "./scene-tracker";

  export let initialWidth = 0;
  export let initialHeight = 0;

  let width = initialWidth;
  let height = initialHeight;

  const scene$ = init({ top: 0, left: 0, width, height });
  $: track(scene$, scene => ({ ...scene, height, width }));
</script>

<div class="container" bind:clientWidth={width} bind:clientHeight={height}>
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}>
    <slot scene={$scene$}/>
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
