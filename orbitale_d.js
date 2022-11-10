MYLIB.initialize('orbitale_d', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;
    
    position = 0; 
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.1,0.1,0.9);
    material.specularColor.set(0.2,0.2,0.2);

    grid1 = MYLIB.axis_grid(false,false,true);
    grid1.position.set(12,position,0);

    let drop1 = MYLIB.createDrop(0.7,0.7,0.5,-12,position,0,0,0,Math.PI/4,1,1,1,material); 
    for(let i=1; i<4; i++) {
        let inst = drop1.createInstance('d'+i);
        inst.rotation.z = i*Math.PI/2 + Math.PI/4;
        inst.position.set(-12, position, 0); 
    }

    grid2 = MYLIB.axis_grid(true,false,false);
    grid2.position.set(6,position,0);

    let drop2 = MYLIB.createDrop(0.7,0.7,0.5,6,position,0,Math.PI/2,0,Math.PI/4,1,1,1,material); 
    for(let i=1; i<4; i++) {
        let inst = drop2.createInstance('d'+i);
        inst.rotation.z = i*Math.PI/2+ Math.PI/4;
        inst.position.y = position; 
    }

    grid3 = MYLIB.axis_grid(false,true,false); 
    grid3.position.set(-12,position,0);

    let drop3 = MYLIB.createDrop(0.7,0.7,0.5,12,position,0,Math.PI/4,0,0,1,1,1,material); 
    for(let i=0; i<4; i++) {
        let inst = drop3.createInstance('d'+i);
        inst.rotation.x = i*Math.PI/2 + Math.PI/4; 
        inst.position.set(12, position, 0); 
    }

    grid4 = MYLIB.axis_grid(true,false,false);
    grid4.position.set(-6,position,0);

    let drop4 = MYLIB.createDrop(0.7,0.7,0.5,-6,position,0,Math.PI/2,0,0,1,1,1,material); 
    for(let i=1; i<4; i++) {
        let inst = drop4.createInstance('d'+i);
        inst.rotation.z = i*Math.PI/2; 
        inst.position.y = position; 
    }

    axis = MYLIB.axis_grid(false,false,false); 
    axis.position.y= position; 

    let torus = MYLIB.torus(1.2,0,position,0,0,0,0,1,1,1,material)
    let drop5 = MYLIB.createDrop(0.7,0.7,0.5,0,position,0,0,0,0,1,1,1,material);    
    let drop6 = MYLIB.createDrop(0.7,0.7,0.5,0,position,0,Math.PI,0,0,1,1,1,material)

}