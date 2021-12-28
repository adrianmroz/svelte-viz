import type { Scene } from "./scene";

export type Margins = {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export default function layout(scene: Scene, { top, bottom, left, right }: Margins) {

  return {
    left: {
      top: scene.top + top,
      left: scene.left,
      width: left,
      height: scene.height - top - bottom
    },
    right: {
      top: scene.top + top,
      left: scene.left + scene.width - right,
      height: scene.height - top - bottom,
      width: right
    },
    top: {
      top: scene.top,
      left: scene.left + left,
      height: top,
      width: scene.width - left - right
    },
    bottom: {
      top: scene.top + scene.height - bottom,
      left: scene.left + left,
      width: scene.width - left - right,
      height: bottom
    },
    center: {
      top: scene.top + top,
      left: scene.left + left,
      width: scene.width - left - right,
      height: scene.height - top - bottom
    }
  };
}
