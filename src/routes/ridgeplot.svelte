<script lang="ts">
  import { Translate, RowLayout, LayoutAs, Area, SvgResponsiveStage, GroupStage, XYFrame, asArray } from "svelte-viz";
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
  const rowScale = scaleBand().padding(0).paddingOuter(1);

  const getY = (d: CityTraffic) => asArray(d.values.map((p) => p.value));
  const getX = (d: CityTraffic) => asArray(d.values.map((p) => new Date(p.date)));
</script>

<SvgResponsiveStage>
  <LayoutAs as={GroupStage} top={10} bottom={10} left={10} right={10}>
    <svelte:fragment slot="center">
      <RowLayout
        {data}
        {rowDomain}
        getRowValue={name}
        {rowScale}
        let:scene
        let:datum
      >
        <GroupStage {scene}>
          <text alignment-baseline="middle" x={0} y={(scene.height / 2)} font-size="11">
            {datum.name}
          </text>
          <Translate
            as={GroupStage}
            left={100}
            top={-(scene.height * 0.8)}
            let:scene={translated}
          >
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
              <Area xs={x} ys={y} y0={translated.height} opacity={1} />
            </XYFrame>
          </Translate>
        </GroupStage>
      </RowLayout>
    </svelte:fragment>
  </LayoutAs>
</SvgResponsiveStage>

