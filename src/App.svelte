<script lang='typescript'>
  import { Router, Link, Route } from "svelte-routing";
  import BarChart from './views/BarChart.svelte';
  import ScatterPlot from './views/ScatterPlot.svelte';
  import LineChart from './views/LineChart.svelte';
  import DumbbellPlot from './views/DumbbelPlot.svelte';

  let url = "";
</script>


<Router url={url}>
  <div class="view">
    <Route path="line-chart">
      <LineChart/>
    </Route>
    <Route path="bar-chart">
      <BarChart/>
    </Route>
    <Route path="scatterplot">
      <ScatterPlot/>
    </Route>
    <Route path="dumbbelplot">
      <DumbbellPlot/>
    </Route>
  </div>
  <nav>
    <Link to="line-chart">Line Chart</Link>
    <Link to="bar-chart">Bar Chart</Link>
    <Link to="scatterplot">Scatter Plot</Link>
    <Link to="dumbbelplot">Dumbbell Plot</Link>
  </nav>
</Router>

<style>
    .view {
        position: absolute;
        top: 30px;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>
