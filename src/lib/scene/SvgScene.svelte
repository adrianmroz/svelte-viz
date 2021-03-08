<script lang="ts">
  import type { Scene, WritableScene } from "./scene";
  import { setScene } from "./context";
  import { writable } from "svelte/store";

  export let scene: Scene;

  const scene$: WritableScene = writable(scene);
  setScene(scene$);

  $: scene$.set(scene);
</script>

<svg
  width={scene.width}
  height={scene.height}
  viewBox={`0 0 ${scene.width} ${scene.height}`}>
  <slot />
</svg>
