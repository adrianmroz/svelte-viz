<script lang="ts">
  import { Inset, RowLayout, LayoutAs, Area, SvgResponsiveStage, GroupStage, XYFrame, asArray } from "svelte-viz";
  import { scaleBand, scaleLinear, scaleTime } from "d3-scale";
  import type { CityTraffic } from "../data/traffic";
  import { traffic } from "../data/traffic";

  const data = traffic;
  const xDomain = [
    new Date("2016-01-04T00:00:00.000Z"),
    new Date("2016-01-09T23:00:00.000Z")
  ] as const;
  const yDomain = [0, 5000] as const;

  const margin = 10;
  const labelLength = 100;
  const rowScale = scaleBand().padding(0).paddingOuter(1);

  const name = (d: CityTraffic) => d.name;
  const rowDomain = data.map(name);

  const getY = (d: CityTraffic) => asArray(d.values.map((p) => p.value));
  const getX = (d: CityTraffic) => asArray(d.values.map((p) => new Date(p.date)));
</script>

<SvgResponsiveStage>
  <LayoutAs as={GroupStage} top={margin} bottom={margin} left={margin} right={margin}>
    <svelte:fragment slot="center">
      <RowLayout
        {data}
        {rowDomain}
        getRowValue={name}
        {rowScale}
        let:scene={rowScene}
        let:datum
      >
        <GroupStage scene={rowScene}>
          <text alignment-baseline="middle" y={(rowScene.height / 2)} font-size={(rowScene.height * 0.7)}>
            {datum.name}
          </text>
          <Inset
            as={GroupStage}
            left={labelLength}
            top={-(rowScene.height * 0.8)}
          >
            <XYFrame
              data={[datum]}

              {getX}
              {xDomain}
              xScale={scaleTime()}

              {getY}
              {yDomain}
              yScale={scaleLinear()}

              let:x
              let:y
            >
              <Area xs={x} ys={y} opacity={1} />
            </XYFrame>
          </Inset>
        </GroupStage>
      </RowLayout>
    </svelte:fragment>
  </LayoutAs>
</SvgResponsiveStage>

