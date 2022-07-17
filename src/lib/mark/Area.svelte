<script lang="ts">
	import type { Property } from 'csstype';
	import { area, CurveFactory, curveLinear, line } from 'd3-shape';
	import { zip } from 'd3-array';
	import { getScene } from '../scene/context';

	export let xs: number[] = [];
	export let ys: number[] = [];
	export let y0: number | null = null;
	export let stroke: Property.Stroke = 'currentColor';
	export let fill: Property.Fill = 'currentColor';
	export let width: Property.StrokeWidth = '1';
	export let opacity: Property.Opacity = 0.3;
	export let curve: CurveFactory = curveLinear;

	const areaGenerator = area<number[]>().curve(curve);

	const lineGenerator = line<number[]>().curve(curve);

	const scene$ = getScene();

	$: y0Value = y0 ?? $scene$.height;
	$: areaD = areaGenerator.y0(y0Value)(zip(xs, ys));
	$: lineD = lineGenerator(zip(xs, ys));
</script>

<path d={areaD} {fill} {opacity} />

<path d={lineD} {stroke} stroke-width={width} fill="none" />
