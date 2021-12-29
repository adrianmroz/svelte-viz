<script lang="ts">
  import { SvgResponsiveStage, XYFrame, Area, asArray } from "svelte-viz";
  import { scaleOrdinal, scaleLinear, scaleTime } from "d3-scale";
  import { schemeTableau10 } from "d3-scale-chromatic";
  import { terminals } from "../data/terminals";
  import type { Terminal } from "../data/terminals";

  const data = terminals.slice(0, 3);

  const getY = (terminal: Terminal) => asArray(terminal.data.map((p) => p.count));
  const getX = (terminal: Terminal) => asArray(terminal.data.map((p) => new Date(p.date)));

  const yDomain: [number, number] = [0, 500000];
  const xDomain: [Date, Date] = [
    new Date(data[0].data[0].date),
    new Date(data[0].data[data[0].data.length - 1].date)
  ];

  const name = (t: Terminal) => t.name;
  const colorScale = scaleOrdinal(schemeTableau10).domain(data.map(name));
</script>

<SvgResponsiveStage>
  <XYFrame
    {data}
    {getX}
    {xDomain}
    xScale={scaleTime()}
    {getY}
    {yDomain}
    yScale={scaleLinear()}
    let:x
    let:y
    let:datum
  >
    <Area xs={x}
          ys={y}
          y0={yDomain[1]}
          fill={colorScale(name(datum))}
          stroke={colorScale(name(datum))}
    />
  </XYFrame>
</SvgResponsiveStage>
