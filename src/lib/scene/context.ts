import { getContext, setContext } from "svelte";
import type { ReadableScene } from "./scene";

const key = Symbol("svelte-viz-scene-context");

export function setScene(scene$: ReadableScene) {
  setContext<ReadableScene>(key, scene$);
}

export function getScene(): ReadableScene {
  return getContext<ReadableScene>(key);
}
