<script lang="ts">
  import type { Scene } from "./scene";
  import { init, track } from "./scene-tracker";

  export let scene: Scene;

  const scene$ = init(scene);
  $: track(scene$, scene);
</script>

<svg
  width={scene.width}
  height={scene.height}
  viewBox={`0 0 ${scene.width} ${scene.height}`}>
  <slot />
</svg>
