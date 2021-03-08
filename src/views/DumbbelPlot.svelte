<script lang="ts">
  import type { MedalRow } from "../data/medals";
  import { medals } from "../data/medals";
  import SvgResponsiveScene from '../lib/scene/SvgResponsiveScene.svelte';
  import RowFrame from '../lib/frame/RowFrame.svelte';
  import { extent } from "d3-array";
  import { scaleBand } from "d3-scale";
  import GroupScene from '../lib/scene/GroupScene.svelte';
  import Dumbbell from '../lib/mark/Dumbbell.svelte';

  const data = medals.slice(0, 10);

  const name = (d: MedalRow) => d.country;
  const rowDomain = data.map(name);

  const counts = ({ gold, silver }: MedalRow) => ({ gold, silver })
  const valueExtent = extent(data.flatMap(d => [d.gold, d.silver]));

  const rowScale = scaleBand().padding(0.2);
</script>

<SvgResponsiveScene>
  <RowFrame
    {data}
    {rowDomain}
    valueDomain={valueExtent}

    getRowValue={name}
    getValue={counts}

    {rowScale}

    let:x={x}
    let:scene={scene}
    let:datum={datum}
  >
    <GroupScene scene={scene}>
      <Dumbbell
        y1={scene.height / 2}
        y2={scene.height / 2}
        x1={x.gold}
        x2={x.silver}
      />
    </GroupScene>
  </RowFrame>
</SvgResponsiveScene>
