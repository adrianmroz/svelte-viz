<script lang="ts">
	import {
		Grid,
		Gutters,
		AxisBottom,
		AxisLeft,
		SvgResponsiveStage,
		GroupStage,
		XYFrame,
		Line,
		asArray
	} from 'svelte-viz';
	import { scaleOrdinal, scaleLinear, scaleTime } from 'd3-scale';
	import { schemeTableau10 } from 'd3-scale-chromatic';
	import { terminals } from '../data/terminals';
	import type { Terminal } from '../data/terminals';

	const data = terminals.slice(0, 6);

	const getY = (terminal: Terminal) => asArray(terminal.data.map((p) => p.count));
	const getX = (terminal: Terminal) => asArray(terminal.data.map((p) => new Date(p.date)));

	const yDomain: [number, number] = [0, 500000];
	const xDomain: [Date, Date] = [
		new Date(data[0].data[0].date),
		new Date(data[0].data[data[0].data.length - 1].date)
	];

	const name = (t: Terminal) => t.name;
	const colorScale = scaleOrdinal(schemeTableau10).domain(data.map(name));

	const yScale = scaleLinear();
	const xScale = scaleTime();
</script>

<SvgResponsiveStage>
	<Gutters top={10} left={100} right={30} bottom={50} as={GroupStage}>
		<AxisLeft slot="left" scale={yScale} domain={yDomain} />
		<AxisBottom slot="bottom" scale={xScale} domain={xDomain} />
		<svelte:fragment slot="center">
			<Grid {xScale} {yScale} {xDomain} {yDomain} />
			<XYFrame {data} {getX} {xDomain} {xScale} {getY} {yDomain} {yScale} let:x let:y let:datum>
				<Line xs={x} ys={y} color={colorScale(name(datum))} />
			</XYFrame>
		</svelte:fragment>
	</Gutters>
</SvgResponsiveStage>
