<script lang="ts">
  import type { MedalRow } from "../data/medals";
  import { medals } from "../data/medals";
  import { extent } from "d3-array";
  import SvgResponsiveScene from '../lib/scene/SvgResponsiveScene.svelte';
  import ColumnFrame from '../lib/frame/ColumnFrame.svelte';
  import GroupScene from '../lib/scene/GroupScene.svelte';
  import Bar from '../lib/mark/Bar.svelte';
  import { scaleBand } from "d3-scale";

  const data = medals.slice(0, 15);

  const name = (d: MedalRow) => d.country;
  const silver = (d: MedalRow) => d.silver;

  const columnDomain = data.map(name);
  const valueDomain = extent(data, silver);

  const columnScale = scaleBand().padding(0.3);
</script>

<SvgResponsiveScene>
  <ColumnFrame
    {data}
    {columnDomain}
    {valueDomain}
    getColumnValue={name}
    getValue={silver}
    {columnScale}

    let:y
    let:scene
    let:datum
  >
    <GroupScene {scene}>
      <Bar
        {y}
        height={scene.height - y}
        width={scene.width}/>
      <text
        alignment-baseline="hanging"
        y={Math.min(
          y + 10,
          scene.height - 15
          )}
        x={10}>
        {datum.country}: {datum.silver}
      </text>
    </GroupScene>
  </ColumnFrame>
</SvgResponsiveScene>
