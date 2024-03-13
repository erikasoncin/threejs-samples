import { DirectionalLight } from 'three';

function createLights() {
    // Create a directional light
    const light = new DirectionalLight('white', 9);

    // move the light right, up, and towards us
    light.position.set(8, 8, 10);

    return light;
}

export { createLights };
