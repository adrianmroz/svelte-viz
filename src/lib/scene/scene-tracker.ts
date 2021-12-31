import type { WritableScene, Scene } from "./scene";
import { writable } from "svelte/store";
import { setScene } from "./context";
import type { Unary } from "../utils/function-types";

export function init(scene: Scene): WritableScene {
  const scene$: WritableScene = writable(scene);
  setScene(scene$);
  return scene$;
}

export function track(store: WritableScene, scene: Scene): void;
export function track(store: WritableScene, updater: Unary<Scene, Scene>): void;
export function track(store: WritableScene, sceneOrFn: Scene | Unary<Scene, Scene>): void {
  if (typeof sceneOrFn === "function") {
    store.update(sceneOrFn);
  } else {
    store.set(sceneOrFn);
  }
}
