MYLIB.initialize('ibridazione_sp2', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;

    position = -4;
    position1 = 0;
    
    let material1 = new BABYLON.StandardMaterial("mat", scene);
    material1.diffuseColor.set(0.8,0.6,0);
    material1.alpha = 0.9;

    //let drop1 = MYLIB.createDrop(0.6,0.8,0.6,0,position,0,Math.PI,0,0,1.1,1.1,1.1,material1);
    //let drop2 = MYLIB.createDrop(0.6,0.8,0.6,0,position,0,0,0,0,1.1,1.1,1.1,material1);
    let orb_big = MYLIB.createDrop(0.7,1,0.8,0,position,0,Math.PI/2,0,0,1,1,1,material1);
    let orb_small = MYLIB.createDrop(0.6,0.6,0.4,0,position,0,-Math.PI/2,0,0,1,1,1,material1);
    let orb_big1 = MYLIB.createDrop(0.7,1,0.8,0,position,0,Math.PI/2,0,Math.PI/1.5,1,1,1,material1);
    let orb_small1 = MYLIB.createDrop(0.6,0.6,0.4,0,position,0,Math.PI/2,0,-Math.PI/3,1,1,1,material1);
    let orb_big2 = MYLIB.createDrop(0.7,1,0.8,0,position,0,Math.PI/2,0,-Math.PI/1.5,1,1,1,material1);
    let orb_small2 = MYLIB.createDrop(0.6,0.6,0.4,0,position,0,Math.PI/2,0,Math.PI/3,1,1,1,material1);

    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.1,0.1);
    let material2 = new BABYLON.StandardMaterial("-mat", scene);
    material2.diffuseColor.set(0.9,0.9,0.1);
    material2.specularColor.set(0.2,0.2,0.2);

    let sphere = MYLIB.Sphere(2,3,position1,0,0,0,0,1,1,1,material);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,-3,position1,0,0,0,Math.PI/2,1.2,1.2,1.2,material2);
    let drop5 = MYLIB.createDrop(0.6,0.6,0.4,-3,position1,0,0,0,-Math.PI/2,1.2,1.2,1.2,material2);
    let drop3 = MYLIB.createDrop(0.6,0.6,0.4,-3,position1,0,Math.PI/2,0,0,1.2,1.2,1.2,material2);
    let drop6 = MYLIB.createDrop(0.6,0.6,0.4,-3,position1,0,-Math.PI/2,0,0,1.2,1.2,1.2,material2);
    //let base = s_p_alone();
}

function s_p_alone (scene) {

    position = 0; 

    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.1,0.1);
    let material1 = new BABYLON.StandardMaterial("-mat", scene);
    material1.diffuseColor.set(0.9,0.9,0.1);
    material1.specularColor.set(0.2,0.2,0.2);

    let sphere = MYLIB.Sphere(2,3,position,0,0,0,0,1,1,1,material);
    //let drop1 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,Math.PI,0,0,1.2,1.2,1.2,material1);
    //let drop4 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,0,1.2,1.2,1.2,material1);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,Math.PI/2,1.2,1.2,1.2,material1);
    let drop5 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,-Math.PI/2,1.2,1.2,1.2,material1);
    let drop3 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,Math.PI/2,0,0,1.2,1.2,1.2,material1);
    let drop6 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,-Math.PI/2,0,0,1.2,1.2,1.2,material1);

}
