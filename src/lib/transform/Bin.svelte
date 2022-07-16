<script lang="ts">
  import { bin } from "d3-array";
  import type { Bin } from "d3-array";
  import type { Unary } from "../utils/function-types";

  type Datum = $$Generic;

  export let data: Datum[] = [];
  export let getX: Unary<Datum, number>;

  $: binFn = bin<Datum, number>()
    .value(getX);

  let binned: Bin<Datum, number>[];
  $: binned = binFn(data);
</script>

<slot data={binned}></slot>

