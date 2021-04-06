<script lang="ts">
  import type { Datum } from "../data/data";
  import type { ScaleBand } from "d3-scale";
  import { scaleBand, scaleLinear } from "d3-scale";
  import type { Unary } from "../utils/function-types";
  import { getScene } from "../scene/context";
  import type { Scene } from "../scene/scene";
  import { deepMap } from "../utils/deep-map";

  export let data: Datum[];
  export let columnScale: ScaleBand<unknown> = scaleBand<unknown>();
  export let columnDomain: unknown[];
  export let getColumnValue: Unary<Datum, unknown>;

  export let valueScale = scaleLinear();
  export let valueDomain: [number, number];
  export let getValue: Unary<Datum, number>;

  const scene$ = getScene();

  $: appliedColumnScale
    = columnScale.copy().domain(columnDomain).range([0, $scene$.width]);
  $: appliedValueScale
    = valueScale.copy().domain(valueDomain).range([$scene$.height, 0]);
  $: calcScene = (datum: Datum): Scene => ({
    top: 0,
    left: appliedColumnScale(getColumnValue(datum)),
    height: $scene$.height,
    width: appliedColumnScale.bandwidth()
  });
  $: y = datum => deepMap(getValue(datum), appliedValueScale);
</script>

{#each data as datum, idx}
  <slot
    key={getColumnValue(datum)}
    scene={calcScene(datum)}
    {datum}
    y={y(datum)}
    />
{/each}
