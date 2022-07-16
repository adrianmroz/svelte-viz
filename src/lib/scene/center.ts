import type { Scene } from './scene';

export default function center(scene: Scene): { x: number; y: number } {
	return {
		x: scene.left + scene.width / 2,
		y: scene.top + scene.height / 2
	};
}
