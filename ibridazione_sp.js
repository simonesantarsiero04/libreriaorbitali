MYLIB.initialize('ibridazione_sp', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;

    position = -2;

    let material1 = new BABYLON.StandardMaterial("mat", scene);
    material1.diffuseColor.set(0.7,0.7,0);
    material1.alpha = 0.9;

    let drop1 = MYLIB.createDrop(0.6,0.8,0.6,0,position,0,Math.PI,0,0,1.1,1.1,1.1,material1);
    let drop2 = MYLIB.createDrop(0.6,0.8,0.6,0,position,0,0,0,0,1.1,1.1,1.1,material1);
    let drop3 = MYLIB.createDrop(0.6,0.8,0.6,0,position,0,Math.PI/2,0,0,1.1,1.1,1.1,material1);
    let drop4 = MYLIB.createDrop(0.6,0.8,0.6,0,position,0,-Math.PI/2,0,0,1.1,1.1,1.1,material1);
    let orb_big = MYLIB.createDrop(0.7,1.1,0.85,0,position,0,Math.PI/2,0,Math.PI/2,1,1,1,material1);
    let orb_small = MYLIB.createDrop(0.6,0.6,0.4,0,position,0,-Math.PI/2,0,-Math.PI/2,1,1,1,material1);
    let orb_big1 = MYLIB.createDrop(0.7,1.1,0.85,0,position,0,Math.PI/2,0,-Math.PI/2,1,1,1,material1);
    let orb_small1 = MYLIB.createDrop(0.6,0.6,0.4,0,position,0,-Math.PI/2,0,Math.PI/2,1,1,1,material1);

    let base = s_p_alone();
}

function s_p_alone (scene) {

    position = 4; 

    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.1,0.1);
    let material1 = new BABYLON.StandardMaterial("-mat", scene);
    material1.diffuseColor.set(0.9,0.9,0.1);
    material1.specularColor.set(0.2,0.2,0.2);

    let sphere = MYLIB.Sphere(2,3,position,0,0,0,0,1,1,1,material);
    let drop1 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,Math.PI,0,0,1.2,1.2,1.2,material1);
    let drop4 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,0,1.2,1.2,1.2,material1);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,Math.PI/2,1.2,1.2,1.2,material1);
    let drop5 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,0,0,-Math.PI/2,1.2,1.2,1.2,material1);
    let drop3 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,Math.PI/2,0,0,1.2,1.2,1.2,material1);
    let drop6 = MYLIB.createDrop(0.6,0.6,0.4,-3,position,0,-Math.PI/2,0,0,1.2,1.2,1.2,material1);

}
