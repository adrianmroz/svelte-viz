<script lang="ts">
	import { scaleLinear } from 'd3-scale';
	import { cars } from '../data/cars';
	import type { Car } from '../data/cars';
	import { Point, SvgResponsiveStage, XYFrame } from 'svelte-viz'
	import { extent } from 'd3-array';
	import { scaleOrdinal } from 'd3-scale';
	import { schemeTableau10 } from 'd3-scale-chromatic';

	const data = cars;

	const mpg = (car: Car) => car.mpg;
	const hp = (car: Car) => car.hp;

	const mpgExtent = extent(data, mpg);
	const hpExtent = extent(data, hp);

	const model = (car: Car) => car.name;

	const origin = (car: Car) => car.origin;
	const colorScale = scaleOrdinal(schemeTableau10).domain(['Europe', 'Japan', 'USA']);
</script>

<SvgResponsiveStage>
	<XYFrame
		{data}
		keyFn={model}
		getX={mpg}
		xScale={scaleLinear()}
		xDomain={mpgExtent}
		getY={hp}
		yScale={scaleLinear()}
		yDomain={hpExtent}
		let:datum
		let:x
		let:y
	>
		<Point {x} {y} color={colorScale(origin(datum))} />
	</XYFrame>
</SvgResponsiveStage>
