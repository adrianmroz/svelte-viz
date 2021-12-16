<script lang="ts">
  import type { Property } from "csstype";
  import { area, curveLinear, line } from "d3-shape";
  import { zip } from "d3-array";

  export let xs: number[] = [];
  export let ys: number[] = [];
  export let y0: number = 0;
  export let color: Property.Stroke = "steelblue";
  export let width: Property.StrokeWidth = "1";
  export let opacity: Property.Opacity = 0.3;

  const areaGenerator = area<number[]>()
    .y0(y0)
    .curve(curveLinear);

  const lineGenerator = line<number[]>()
    .curve(curveLinear);

  $: areaD = areaGenerator(zip(xs, ys));
  $: lineD = lineGenerator(zip(xs, ys));
</script>

<path
  d={areaD}
  fill={color}
  opacity={opacity}
></path>

<path
  d={lineD}
  stroke={color}
  stroke-width={width}
  fill="none"
></path>


