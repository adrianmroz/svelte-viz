<script lang="ts">
  import type { Property } from "csstype";
  import { line } from "d3-shape";
  import { zip } from "d3-array";

  export let xs: number[] = [];
  export let ys: number[] = [];
  export let color: Property.Stroke = "steelblue";
  export let width: Property.StrokeWidth = "1";

  const generator = line<[number, number]>();

  $: d = generator(zip(xs, ys));
</script>

<path
  d={d}
  stroke={color}
  stroke-width={width}
  fill="none"
></path>
