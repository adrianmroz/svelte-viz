import type { Readable, Writable } from "svelte/store";

export interface Scene {
  top: number;
  left: number;
  width: number;
  height: number;
}

export type ReadableScene = Readable<Scene>;
export type WritableScene = Writable<Scene>;

export function toTranslate(scene: Scene): string {
  return `translate(${scene.left}, ${scene.top})`;
}
