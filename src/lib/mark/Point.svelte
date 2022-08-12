<script lang="ts">
	import type { Property } from 'csstype';

	export let x = 0;
	export let y = 0;
	export let size = 3;
	export let color: Property.Fill = 'currentColor';
	export let fillOpacity: Property.FillOpacity = 1;
	export let strokeWidth: Property.StrokeWidth = 0;
	export let strokeOpacity: Property.StrokeOpacity = 1;
</script>

<circle
	r={size}
	fill={color}
	stroke={color}
	fill-opacity={fillOpacity}
	stroke-opacity={strokeOpacity}
	stroke-width={strokeWidth}
	cx={x}
	cy={y}
/>
