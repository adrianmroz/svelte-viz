<script lang="ts">
  import { toTranslate } from './scene';
  import type { Scene, WritableScene } from "./scene";
  import { setScene } from "./context";
  import { writable } from "svelte/store";

  export let scene: Scene;

  const scene$: WritableScene = writable(scene);
  setScene(scene$);

  $: scene$.set(scene);
</script>

<g transform={toTranslate(scene)}>
  <slot />
</g>
