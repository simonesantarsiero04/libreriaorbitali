MYLIB.initialize('orbitale_s', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;
    const position = 0;
    
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.1,0.1);

    let grid = MYLIB.axis_grid(true,false,false);
    grid.position.y = position;
    let sphere = MYLIB.Sphere(1.1,0,position,0,0,0,0,1,1,1,material);
}