<script lang="ts">
  import { RowFrame, LayoutAs, Area, SvgResponsiveStage, GroupStage, XYFrame, asArray } from "svelte-viz";
  import { scaleBand, scaleLinear, scaleTime } from "d3-scale";
  import type { CityTraffic } from "../data/traffic";
  import { traffic } from "../data/traffic";

  const data = traffic;
  const xDomain: [Date, Date] = [
    new Date("2016-01-04T00:00:00.000Z"),
    new Date("2016-01-09T23:00:00.000Z")
  ];

  const name = (d: CityTraffic) => d.name;

  const rowDomain = data.map(name);
  const valueDomain = [0, 0] as const;

  const rowScale = scaleBand().padding(0);

  const getY = (d: CityTraffic) => asArray(d.values.map((p) => p.value));
  const getX = (d: CityTraffic) => asArray(d.values.map((p) => new Date(p.date)));
</script>

<SvgResponsiveStage>
  <LayoutAs as={GroupStage} top={20} bottom={10} left={10} right={10}>
    <svelte:fragment slot="center">
      <!-- Write RowLayout instead of RowFrame with dummy x's --->
      <RowFrame
        {data}
        {rowDomain}
        {valueDomain}
        valueScale={scaleLinear()}
        getRowValue={name}
        getValue={() => 0}
        {rowScale}
        let:scene
        let:datum
      >
        <GroupStage {scene}>
          <!-- Write InsetLayout --->
          <text alignment-baseline="middle" x={0} y={(scene.height / 2)} font-size="11">
            {datum.name}
          </text>
          <GroupStage scene={{
            left: 100,
            width: scene.width - 100,
            top: -(scene.height * 0.8),
            height: scene.height * 1.8
          }}>
            <XYFrame
              data={[datum]}

              {getX}
              {xDomain}
              xScale={scaleTime()}

              {getY}
              yDomain={[0, 5000]}
              yScale={scaleLinear()}

              let:x
              let:y
            >
              <Area xs={x} ys={y} y0={scene.height * 1.8} color="#333" />
            </XYFrame>
          </GroupStage>
        </GroupStage>
      </RowFrame>
    </svelte:fragment>
  </LayoutAs>
</SvgResponsiveStage>

