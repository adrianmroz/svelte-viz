<script lang="ts">
  import type { Property } from "csstype";

  export let x = 0;
  export let y = 0;
  export let size = 3;
  export let color: Property.Fill = "steelblue";
</script>

<circle r={size} fill={color} cx={x} cy={y}></circle>
