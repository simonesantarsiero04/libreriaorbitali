MYLIB.initialize('legame_sigma_sp', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;
    
    position = 2;
    position1 = -1;
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.1,0.1);
    let material1 = new BABYLON.StandardMaterial("-mat", scene);
    material1.diffuseColor.set(0.9,0.9,0.1);
    material1.specularColor.set(0.2,0.2,0.2);
    let material2 = new BABYLON.StandardMaterial("mat", scene);
    material2.diffuseColor.set(1, 0, 1);

    let sphere = MYLIB.Sphere(1.4,3,position,0,0,0,0,1,1,1,material);
    let drop1 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,Math.PI/2,1,1,1,material1);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,-Math.PI/2,1,1,1,material1);

    let orb_small = MYLIB.createDrop(0.6,0.6,0.4,-0.5,position1,0,0,0,Math.PI/2,1,1,1,material2);
    let orb_big = MYLIB.createDrop(0.7,1,0.8,-0.5,position1,0,0,0,-Math.PI/2,1,1,1,material2);

}