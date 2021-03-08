<script lang="ts">
  import { terminals } from "../data/terminals";
  import type { Terminal } from "../data/terminals";
  import SvgResponsiveScene from '../lib/scene/SvgResponsiveScene.svelte';
  import XYFrame from '../lib/frame/XYFrame.svelte';
  import { scaleOrdinal, scaleTime } from "d3-scale";
  import Line from '../lib/mark/Line.svelte';
  import { schemeTableau10 } from "d3-scale-chromatic";

  const data = terminals.slice(0, 6);

  const getY = (terminal: Terminal) => terminal.data.map(p => p.count);
  const getX = (terminal: Terminal) => terminal.data.map(p => new Date(p.date));

  const yDomain = [0, 500000];
  const xDomain = [
    new Date(data[0].data[0].date),
    new Date(data[0].data[data[0].data.length - 1].date),
  ];

  const name = (t: Terminal) => t.name;
  const colorScale = scaleOrdinal(schemeTableau10).domain(data.map(name));
</script>

<SvgResponsiveScene>
  <XYFrame
    {data}
    {getX}
    {xDomain}
    xScale={scaleTime()}

    {getY}
    {yDomain}

    let:x={xs}
    let:y={ys}
    let:datum={datum}
    >
    <Line
      {xs}
      {ys}
      color={colorScale(name(datum))}
    />
  </XYFrame>
</SvgResponsiveScene>
