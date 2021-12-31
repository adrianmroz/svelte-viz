<script lang="ts">
  import type { Scene } from "./scene";
  import SceneTracker from "./SceneTracker.svelte";

  export let scene: Scene;
</script>

<svg
  width={scene.width}
  height={scene.height}
  viewBox={`0 0 ${scene.width} ${scene.height}`}>
  <SceneTracker {scene}>
    <slot />
  </SceneTracker>
</svg>
