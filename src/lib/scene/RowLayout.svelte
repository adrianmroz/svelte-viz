<script lang="ts">
  import type { ScaleBand } from 'd3-scale';
  import { scaleBand } from 'd3-scale';
  import type { Unary } from '../utils/function-types';
  import type { Scene } from "./scene";
  import { getScene } from "./context";

  type Datum = $$Generic;
  type Row = $$Generic;

  export let data: Datum[];

  export let rowScale: ScaleBand<Row> = scaleBand<Row>();
  export let rowDomain: Row[];
  export let getRowValue: Unary<Datum, Row>;

  const scene$ = getScene();

  $: innerRowScale = rowScale.copy();
  $: appliedRowScale = innerRowScale.domain(rowDomain.slice().reverse()).range([$scene$.height, 0]);
  $: calcScene = (datum: Datum): Scene => ({
    left: 0,
    width: $scene$.width,
    height: appliedRowScale.bandwidth(),
    top: appliedRowScale(getRowValue(datum))
  });
</script>

{#each data as datum}
  <slot key={getRowValue(datum)} {datum} scene={calcScene(datum)} />
{/each}

