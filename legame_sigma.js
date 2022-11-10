MYLIB.initialize('legame_sigma', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;

    position = 6.5;
    position1 = 2.5;
    position2 = -2.5;
    position3 = -6.5;
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.9,0.1);
    material.specularColor.set(0.2,0.2,0.2);

    let material1 = new BABYLON.StandardMaterial("-mat", scene);
    material1.diffuseColor.set(0.1,0.9,0.1);
    material1.specularColor.set(0.2,0.2,0.2);

    let material2 = new BABYLON.StandardMaterial("-mat", scene);
    material2.diffuseColor.set(0.9,0.1,0.1);

    let material3 = new BABYLON.StandardMaterial("-mat", scene);
    material3.diffuseColor.set(0.9,0.6,0);

    let drop1 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,Math.PI/2,1.4,1.4,1.4,material);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,-Math.PI/2,1.4,1.4,1.4,material);
    let drop3 = MYLIB.createDrop(0.6,0.6,0.4,3,position,0,0,0,Math.PI/2,1.4,1.4,1.4,material);
    let drop4 = MYLIB.createDrop(0.6,0.6,0.4,3,position,0,0,0,-Math.PI/2,1.4,1.4,1.4,material);

    let sphere = MYLIB.Sphere(1.5,0,position1,0,0,0,0,1.8,1,1,material1);
    let drop5 = MYLIB.createDrop(0.6,0.6,0.4,-1.35,position1,0,0,0,Math.PI/2,1.4,1.4,1.4,material1);
    let drop6 = MYLIB.createDrop(0.6,0.6,0.4,1.35,position1,0,0,0,-Math.PI/2,1.4,1.4,1.4,material1);
    let sphere1 = MYLIB.Sphere(1.5,-1,position2,0,0,0,0,1,1,1,material2);
    let sphere2 = MYLIB.Sphere(1.5,1,position2,0,0,0,0,1,1,1,material2);
    let sphere3 = MYLIB.Sphere(1.5,0,position3,0,0,0,0,2,1,1,material3);

}