import type { SvelteComponentTyped } from "svelte";
import type { Scene } from "./scene";

export type StageComponent = {
  new(...args: unknown[]): SvelteComponentTyped<{ scene: Scene }>;
}
