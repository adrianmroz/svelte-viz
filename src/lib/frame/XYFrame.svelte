<script lang="ts">
  import type { Datum } from "../data/data";
  import { scaleLinear } from "d3-scale";
  import type { Binary, Unary } from "../utils/function-types";
  import { getScene } from "../scene/context";
  import { deepMap } from "../utils/deep-map";

  export let data: Datum[];

  export let xScale = scaleLinear();
  export let xDomain: [number];
  export let getX: Unary<Datum, unknown>;

  export let yScale = scaleLinear();
  export let yDomain: [number, number];
  export let getY: Unary<Datum, number>;

  export let keyFn: Binary<Datum, number, string> =
    (_, idx) => String(idx);

  const scene$ = getScene();
  $: appliedYScale
    = yScale.copy().domain(yDomain).range([$scene$.height, 0]);
  $: appliedXScale
    = xScale.copy().domain(xDomain).range([0, $scene$.width]);

  $: x = datum => deepMap(getX(datum), appliedXScale);
  $: y = datum => deepMap(getY(datum), appliedYScale);

</script>

{#each data as datum, idx}
  <slot
    key={keyFn(datum, idx)}
    datum={datum}
    x={x(datum)}
    y={y(datum)}
    />
{/each}
