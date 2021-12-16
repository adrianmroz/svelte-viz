<script lang="ts">
  import { getScene } from "./context";

  export let top = 0;
  export let left = 0;
  export let right = 0;
  export let bottom = 0;

  const scene$ = getScene();

  $: leftScene = {
    top: $scene$.top + top,
    left: $scene$.left,
    width: left,
    height: $scene$.height - top - bottom
  }

  $: topScene = {
    top: $scene$.top,
    left: $scene$.left + left,
    height: top,
    width: $scene$.width - left - right
  }

  $: rightScene = {
    top: $scene$.top + top,
    left: $scene$.left + $scene$.width - right,
    height: $scene$.height - top - bottom,
    width: right
  }

  $: bottomScene = {
    top: $scene$.top + $scene$.height - bottom,
    left: $scene$.left + left,
    width: $scene$.width - left - right,
    height: bottom
  }

  $: centerScene = {
    top: $scene$.top + top,
    left: $scene$.left + left,
    width: $scene$.width - left - right,
    height: $scene$.height - top - bottom
  }
</script>

<slot name="left" scene={leftScene}></slot>
<slot name="top" scene={topScene}></slot>
<slot name="right" scene={rightScene}></slot>
<slot name="bottom" scene={bottomScene}></slot>
<slot name="center" scene={centerScene}></slot>
