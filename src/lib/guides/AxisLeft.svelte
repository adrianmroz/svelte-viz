<script lang="ts">
  import { select } from "d3-selection";
  import { AxisDomain, axisLeft } from "d3-axis";
  import { getScene } from "../scene/context";
  import type { Scale } from "../utils/scale";

  export let scale: Scale<AxisDomain, number>;
  export let domain: readonly [AxisDomain, AxisDomain];

  const scene$ = getScene();
  let element: SVGGElement;

  $: innerScale = scale.copy();
  $: appliedScale = innerScale.domain(domain).range([$scene$.height, 0]);
  $: {
    const axis = axisLeft(appliedScale);
    select(element).call(axis);
  }
</script>

<g bind:this={element}
   transform={`translate(${$scene$.width}, 0)`}>
</g>
