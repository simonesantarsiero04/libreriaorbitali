MYLIB.initialize('legame_pi', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;

    let piano = MYLIB.axis_grid(true, false, false);
    piano.position.y = -2.8;

    position = 2;
    position1 = -3;
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.9,0.1);
    material.specularColor.set(0.2,0.2,0.2);
    let drop1 = MYLIB.createDrop(0.6,0.6,0.4,-0.8,position,0,Math.PI,0,0,1.4,1.4,1.4,material);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,-0.8,position,0,0,0,0,1.4,1.4,1.4,material);
    let drop3 = MYLIB.createDrop(0.6,0.6,0.4,0.8,position,0,Math.PI,0,0,1.4,1.4,1.4,material);
    let drop4 = MYLIB.createDrop(0.6,0.6,0.4,0.8,position,0,0,0,0,1.4,1.4,1.4,material);

    let body = pi_obj(scene);
    body.position.y= position1 + 0.3; 
    body.scaling.set(1.2,1.2,1.2);
    let body1 = pi_obj(scene);
    body1.rotation.z = Math.PI;
    body1.position.y = position1;
    body1.scaling.set(1.2,1.2,1.2);
}


function pi_obj (scene) {
    position = 0; 

    let obj = new BABYLON.Mesh('obj', scene);

    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0,0.5,0.9);
    material.specularColor.set(0.2,0.2,0.2);

    let drop1 = MYLIB.createDrop(0.1,0.6,0.4,-1,position,0,0,0,0,1.4,1.4,1.4,material,scene);
    drop1.parent = obj;
    let drop2 = MYLIB.createDrop(0.1,0.6,0.4,1,position,0,0,0,0,1.4,1.4,1.4,material,scene);
    drop2.parent = obj;
    let sphere1 = BABYLON.MeshBuilder.CreateSphere('s',{diameter:1},scene);
	sphere1.parent = obj;
	sphere1.position.y = position+1;
    sphere1.scaling.set(2.4,0.9,0.8);
	sphere1.material = material;

    return obj;
}
