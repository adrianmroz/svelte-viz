<script lang="ts">
  import type { Property } from "csstype";

  export let x1 = 0;
  export let x2 = 0;
  export let y1 = 0;
  export let y2 = 0;
  export let size = 3;

  export let color: Property.Fill = "crimson";
</script>

<circle cx={x1} cy={y1} r={size} fill={color}></circle>
<circle cx={x2} cy={y2} r={size} fill={color}></circle>
<line {x1} {x2} {y1} {y2} stroke={color} stroke-width="1" fill="none"></line>
