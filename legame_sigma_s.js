MYLIB.initialize('legame_sigma_s', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;

    position2 = 2;
    position3 = -1;

    let material2 = new BABYLON.StandardMaterial("-mat", scene);
    material2.diffuseColor.set(0.9,0.1,0.1);

    let material3 = new BABYLON.StandardMaterial("-mat", scene);
    material3.diffuseColor.set(0.9,0.6,0);

    let sphere1 = MYLIB.Sphere(1.5,-1,position2,0,0,0,0,1,1,1,material2);
    let sphere2 = MYLIB.Sphere(1.5,1,position2,0,0,0,0,1,1,1,material2);
    let sphere3 = MYLIB.Sphere(1.5,0,position3,0,0,0,0,2,1,1,material3);

}
