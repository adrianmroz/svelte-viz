<script lang="ts">
  import type { Property } from "csstype";

  export let x = 0;
  export let y = 0;
  export let width: number;
  export let height: number;
  export let color: Property.Fill = "steelblue";
</script>

<rect {x} {y} {width} {height} fill={color}></rect>
