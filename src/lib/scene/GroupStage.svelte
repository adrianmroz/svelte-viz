<script lang="ts">
  import { toTranslate } from './scene';
  import type { Scene } from "./scene";
  import { track, init } from "./scene-tracker";

  export let scene: Scene;

  const scene$ = init(scene);
  $: track(scene$, scene);
</script>

<g transform={toTranslate(scene)}>
  <slot />
</g>
