import {
    BoxGeometry, CircleGeometry, Euler,
    MathUtils, Matrix4,
    Mesh,
    MeshStandardMaterial, PlaneGeometry, Quaternion, SphereGeometry, Vector3,
} from 'three';

function createCube() {
    const geometry = new BoxGeometry(2, 2, 2);

    const material = new MeshStandardMaterial({ color: '#734B5E' });

    const cube = new Mesh(geometry, material);
    const cubeB = new Mesh(new SphereGeometry(1), new MeshStandardMaterial({ color: '#4C5F6B' }));

    cubeB.position.set(2, 2, 2);
    cubeB.rotation.set(0.5, 0.5, 0.5);
    cubeB.scale.set(MathUtils.degToRad(60), MathUtils.degToRad(60), MathUtils.degToRad(60));
    // position in the space
    cube.position.x = -0.2;
    cube.position.y = -0.2;
    cube.position.z = 1;

    // scale the cube (grandezza)
    cube.scale.x = 0.8;
    cube.scale.y = 0.8;
    cube.scale.z = 0.8;

    // to rotate using degrees, they must
    // first be converted to radians
    cube.rotation.x = MathUtils.degToRad(-50);
    cube.rotation.y = MathUtils.degToRad(-45);
    cube.rotation.z = MathUtils.degToRad(60);

    cube.add(cubeB)

    const radiansPerSecond = MathUtils.degToRad(30);
    const radiansBPerSecond = MathUtils.degToRad(10);

    // this method will be called once per frame
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
}

export { createCube };
