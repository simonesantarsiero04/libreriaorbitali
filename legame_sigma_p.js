MYLIB.initialize('legame_sigma_p', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;

    position = 2;
    position1 = -1;
    
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.9,0.1);
    material.specularColor.set(0.2,0.2,0.2);

    let material1 = new BABYLON.StandardMaterial("-mat", scene);
    material1.diffuseColor.set(0.1,0.9,0.1);
    material1.specularColor.set(0.2,0.2,0.2);
    
    let drop1 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,Math.PI/2,1.4,1.4,1.4,material);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,-Math.PI/2,1.4,1.4,1.4,material);
    let drop3 = MYLIB.createDrop(0.6,0.6,0.4,3,position,0,0,0,Math.PI/2,1.4,1.4,1.4,material);
    let drop4 = MYLIB.createDrop(0.6,0.6,0.4,3,position,0,0,0,-Math.PI/2,1.4,1.4,1.4,material);

    let sphere = MYLIB.Sphere(1.5,0,position1,0,0,0,0,1.8,1,1,material1);
    let drop5 = MYLIB.createDrop(0.6,0.6,0.4,-1.35,position1,0,0,0,Math.PI/2,1.4,1.4,1.4,material1);
    let drop6 = MYLIB.createDrop(0.6,0.6,0.4,1.35,position1,0,0,0,-Math.PI/2,1.4,1.4,1.4,material1);  
}
