<script lang="ts">
  import type { ScaleBand } from "d3-scale";
  import { scaleBand } from "d3-scale";
  import type { Unary } from "../utils/function-types";
  import { getScene } from "./context";
  import type { Scene } from "./scene";

  type Datum = $$Generic;
  type Column = $$Generic;

  export let data: Datum[];

  export let columnScale: ScaleBand<Column> = scaleBand<Column>();
  export let columnDomain: Column[];
  export let getColumnValue: Unary<Datum, Column>;

  const scene$ = getScene();

  $: innerColumnScale = columnScale.copy();
  $: appliedColumnScale = innerColumnScale.domain(columnDomain).range([0, $scene$.width]);
  $: calcScene = (datum: Datum): Scene => ({
    top: 0,
    left: appliedColumnScale(getColumnValue(datum)),
    height: $scene$.height,
    width: appliedColumnScale.bandwidth()
  });
</script>

{#each data as datum}
  <slot key={getColumnValue(datum)} scene={calcScene(datum)} {datum} />
{/each}

