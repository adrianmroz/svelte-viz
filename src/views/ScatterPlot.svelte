<script lang="ts">
  import type { Car } from "../data/cars";
  import { cars } from "../data/cars";
  import SvgResponsiveScene from '../lib/scene/SvgResponsiveScene.svelte';
  import XYFrame from '../lib/frame/XYFrame.svelte';
  import { extent } from "d3-array";
  import Point from '../lib/mark/Point.svelte';
  import { scaleOrdinal } from "d3-scale";
  import { schemeTableau10 } from "d3-scale-chromatic";

  const data = cars;

  const mpg = (car: Car) => car.mpg;
  const hp = (car: Car) => car.hp;

  const mpgExtent = extent(data, mpg);
  const hpExtent = extent(data, hp);

  const model = (car: Car) => car.name;

  const origin = (car: Car) => car.origin;
  const colorScale = scaleOrdinal(schemeTableau10).domain(['Europe', 'Japan', 'USA']);
</script>

<SvgResponsiveScene>
  <XYFrame
    {data}
    keyFn={model}

    getX={mpg}
    xDomain={mpgExtent}

    getY={hp}
    yDomain={hpExtent}

    let:datum={datum}
    let:x={x}
    let:y={y}
  >
    <Point {x} {y} color={colorScale(origin(datum))}/>
  </XYFrame>
</SvgResponsiveScene>
