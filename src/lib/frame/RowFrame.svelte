<script lang="ts">
  import type { ScaleBand } from "d3-scale";
  import { scaleBand, scaleLinear } from "d3-scale";
  import type { Datum } from "../data/data";
  import type { Unary } from "../utils/function-types";
  import type { Scene } from "../scene/scene";
  import { getScene } from "../scene/context";

  export let data: Datum[];

  export let rowScale: ScaleBand<unknown>
    = scaleBand<unknown>();
  export let rowDomain: unknown[];
  export let getRowValue: Unary<Datum, unknown>;

  export let valueScale = scaleLinear();
  export let valueDomain: [number, number];
  export let getValue: Unary<Datum, number>;

  const scene$ = getScene();


  $: appliedRowScale
    = rowScale.copy().domain(rowDomain).range([$scene$.height, 0]);
  $: appliedValueScale
    = valueScale.copy().domain(valueDomain).range([0, $scene$.width]);
  $: calcScene
    = (datum: Datum): Scene => ({
    left: 0,
    width: $scene$.width,
    height: appliedRowScale.bandwidth(),
    top: appliedRowScale(getRowValue(datum))
  })
</script>

{#each data as datum, idx}
  <slot
    key={getRowValue(datum)}
    datum={datum}
    x={appliedValueScale(getValue(datum))}
    scene={calcScene(datum)}
  />
{/each}
