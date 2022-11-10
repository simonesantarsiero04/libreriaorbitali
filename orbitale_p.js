MYLIB.initialize('orbitale_p', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;

    position = 0;
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.9,0.1);
    material.specularColor.set(0.2,0.2,0.2);

    let grid1 = MYLIB.axis_grid(true, false, false);
    grid1.position.set(-6,position,0);
    let drop1 = MYLIB.createDrop(0.6,0.6,0.4,-6,position,0,Math.PI,0,0,1,1,1,material);
    let drop4 = MYLIB.createDrop(0.6,0.6,0.4,-6,position,0,0,0,0,1,1,1,material);

    let grid2 = MYLIB.axis_grid(false, false, true);
    grid2.position.set(6,position,0);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,6,position,0,0,0,Math.PI/2,1,1,1,material);
    let drop5 = MYLIB.createDrop(0.6,0.6,0.4,6,position,0,0,0,-Math.PI/2,1,1,1,material);
    
    let grid3 = MYLIB.axis_grid(false, true, false);
    grid3.position.set(0,position,0);
    let drop3 = MYLIB.createDrop(0.6,0.6,0.4,0,position,0,Math.PI/2,0,0,1,1,1,material);
    let drop6 = MYLIB.createDrop(0.6,0.6,0.4,0,position,0,-Math.PI/2,0,0,1,1,1,material);
}