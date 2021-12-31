<script lang="ts">
  import type { Scene } from "./scene";
  import { toTranslate } from "./scene";
  import SceneTracker from "./SceneTracker.svelte";

  export let scene: Scene;
</script>

<g transform={toTranslate(scene)}>
  <SceneTracker {scene}>
    <slot />
  </SceneTracker>
</g>
