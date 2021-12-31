<script lang="ts">
  import { getScene } from "./context";
  import layout from "./layout";
  import type { StageComponent } from "./stage";

  export let top = 0;
  export let left = 0;
  export let right = 0;
  export let bottom = 0;
  export let as: StageComponent;

  const scene$ = getScene();

  $: scenes = layout($scene$, { top, left, bottom, right })
</script>

<svelte:component this={as} scene={scenes.left}>
  <slot name="left"></slot>
</svelte:component>
<svelte:component this={as} scene={scenes.top}>
  <slot name="top"></slot>
</svelte:component>
<svelte:component this={as} scene={scenes.right}>
  <slot name="right"></slot>
</svelte:component>
<svelte:component this={as} scene={scenes.bottom}>
  <slot name="bottom"></slot>
</svelte:component>
<svelte:component this={as} scene={scenes.center}>
  <slot name="center"></slot>
</svelte:component>
