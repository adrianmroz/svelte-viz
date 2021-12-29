<script lang="ts">
  import { select } from "d3-selection";
  import { axisBottom, AxisDomain, axisLeft } from "d3-axis";
  import { getScene } from "../scene/context";
  import type { Scale } from "../utils/scale";

  export let xScale: Scale<AxisDomain, number>;
  export let xDomain: readonly [AxisDomain, AxisDomain];

  export let yScale: Scale<AxisDomain, number>;
  export let yDomain: readonly [AxisDomain, AxisDomain];

  const scene$ = getScene();

  $: innerXScale = xScale.copy();
  $: appliedXScale = innerXScale.domain(xDomain).range([0, $scene$.width]);

  $: innerYScale = yScale.copy();
  $: appliedYScale = innerYScale.domain(yDomain).range([$scene$.height, 0]);

  let xLines: SVGGElement;
  let yLines: SVGGElement;

  $: {
    const xAxis = axisBottom(appliedXScale);
    select(xLines).call(xAxis.tickSize(-$scene$.height).tickFormat(() => ""));
  }

  $: {
    const yAxis = axisLeft(appliedYScale);
    select(yLines).call(yAxis.tickSize(-$scene$.width).tickFormat(() => ""));
  }
</script>

<style>
  .grid :global(line) {
      color: #666;
      stroke-width: 0.5;
      shape-rendering: crispEdges;
  }
</style>

<g class="grid" bind:this={xLines} transform={`translate(0, ${$scene$.height})`}></g>
<g class="grid" bind:this={yLines}></g>
