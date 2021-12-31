<script lang="ts">
  import type { Scene } from "./scene";
  import { writable } from "svelte/store";
  import { setScene } from "./context";

  export let scene: Scene;

  const scene$ = writable<Scene>(scene);
  setScene(scene$);

  $: scene$.set(scene);
</script>

<slot></slot>
