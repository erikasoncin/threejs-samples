import { Color, Scene } from 'three';

function createScene() {
    const scene = new Scene();

    scene.background = new Color('#E7E6F7');

    return scene;
}

export { createScene };
