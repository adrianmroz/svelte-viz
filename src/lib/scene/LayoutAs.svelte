<script lang="ts">
  import { getScene } from "./context";
  import type { SvelteComponentTyped } from "svelte";
  import type { Scene } from "./scene";

  export let top = 0;
  export let left = 0;
  export let right = 0;
  export let bottom = 0;

  type StageComponent = {
    new(...args: unknown[]): SvelteComponentTyped<{ scene: Scene }>;
  }

  export let as: StageComponent;

  const scene$ = getScene();

  $: leftScene = {
    top: $scene$.top + top,
    left: $scene$.left,
    width: left,
    height: $scene$.height - top - bottom
  };

  $: topScene = {
    top: $scene$.top,
    left: $scene$.left + left,
    height: top,
    width: $scene$.width - left - right
  };

  $: rightScene = {
    top: $scene$.top + top,
    left: $scene$.left + $scene$.width - right,
    height: $scene$.height - top - bottom,
    width: right
  };

  $: bottomScene = {
    top: $scene$.top + $scene$.height - bottom,
    left: $scene$.left + left,
    width: $scene$.width - left - right,
    height: bottom
  };

  $: centerScene = {
    top: $scene$.top + top,
    left: $scene$.left + left,
    width: $scene$.width - left - right,
    height: $scene$.height - top - bottom
  };
</script>

<svelte:component this={as} scene={leftScene}>
  <slot name="left"></slot>
</svelte:component>
<svelte:component this={as} scene={topScene}>
  <slot name="top"></slot>
</svelte:component>
<svelte:component this={as} scene={rightScene}>
  <slot name="right"></slot>
</svelte:component>
<svelte:component this={as} scene={bottomScene}>
  <slot name="bottom"></slot>
</svelte:component>
<svelte:component this={as} scene={centerScene}>
  <slot name="center"></slot>
</svelte:component>
