MYLIB.initialize('orbitale_f', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;
    position = 0; 
    let material = new BABYLON.StandardMaterial('mat', scene);
    material.diffuseColor.set(0.5,0.2,0.6);
    material.specularColor.set(0.2,0.2,0.2);

    const l = 1.4;
    const s = 0.7;
    const phi = 2* Math.pow(2, 0.5);
    const m = 6;
    const r = phi/3;

    axis = MYLIB.axis_grid(false,false,false);

    let torus1 = MYLIB.torus(1.6,0,position-phi/8,0,0,0,0,1,1,1,material);
    let torus2 = MYLIB.torus(1.6,0,position+phi/8,0,0,0,0,1,1,1,material);
    let drop = MYLIB.createDrop(0.8,0.8,0.6,0,0,0,0,0,0,1,1,1,material);
    let drop5 = MYLIB.createDrop(0.8,0.8,0.6,0,0,0,Math.PI,0,0,1,1,1,material);

    grid1 = MYLIB.axis_grid(true,false,false);
    grid1.position.set(6,position,0);

    const spheres1 = [];
    for(let i=0; i<m; i++) {
        let xi = 2*Math.PI*i/m;
        ellipsoid = MYLIB.Sphere(1.2,r*Math.cos(xi)+6, 0, r*Math.sin(xi),0,0,0,s,l,s, material);
        spheres1.push(ellipsoid);    
    }

    grid2 = MYLIB.axis_grid(true,false,false);
    grid2.position.set(-6,position,0);

    const spheres2 = [];
    for(let i=0; i<m; i++) {
        let xi = 2*Math.PI*i/m;
        ellipsoid = MYLIB.Sphere(1.2,r*Math.sin(xi)-6, 0, r*Math.cos(xi),0,0,0,s,l,s, material);
        spheres2.push(ellipsoid);     
    }

    grid3 = MYLIB.axis_grid(false,false,true);
    grid3.position.set(12,position,0);

    const spheres3 = [];
    for(let i=0; i<m; i++) {
        let xi = 2*Math.PI*i/m;
        ellipsoid = MYLIB.Sphere(1.2,12, r*Math.cos(xi) , r*Math.sin(xi),0,0,Math.PI/2,s,l,s, material);
        spheres3.push(ellipsoid);    
    }

    grid4 = MYLIB.axis_grid(false,true,false);
    grid4.position.set(-12,position,0);

    const spheres4 = [];
    for(let i=0; i<m; i++) {
        let xi = 2*Math.PI*i/m;
        ellipsoid = MYLIB.Sphere(1.2,r*Math.cos(xi) -12, r*Math.sin(xi),0,Math.PI/2,0,0,s,l,s, material);
        spheres4.push(ellipsoid);     
    }

    axis1 = MYLIB.axis_grid(false,false,false);
    axis1.position.x= 18; 

    let drop1 = MYLIB.createDrop(0.8,0.8,0.6,18,0,0,-Math.PI/4,0,-Math.PI/4 + Math.PI/2,1,1,1,material)
    for(let i=1; i<4; i++) {
        let inst = drop1.createInstance('d'+i);
        inst.rotation.x = i*Math.PI/2 - Math.PI/4;
        inst.rotation.z = i*Math.PI/2 - Math.PI/4 + Math.PI/2;
        inst.position.x = 18; 
    }

    let drop2 = MYLIB.createDrop(0.8,0.8,0.6,18,0,0,Math.PI/4,0,Math.PI/4 - Math.PI/2,1,1,1,material)
    for(let i=1; i<4; i++) {
        let inst = drop2.createInstance('d'+i);
        inst.rotation.x = i*Math.PI/2 + Math.PI/4;
        inst.rotation.z = i*Math.PI/2 + Math.PI/4- Math.PI/2;
        inst.position.x = 18;  
    }

    axis2 = MYLIB.axis_grid(false,false,false);
    axis2.position.x= -18;

    let drop3 = MYLIB.createDrop(0.8,0.8,0.6,-18,0,0,0,0,Math.PI/4,1,1,1,material)
    for(let i=1; i<4; i++) {
        let inst = drop3.createInstance('d'+i);
        inst.rotation.z = i*Math.PI/2 + Math.PI/4;
        inst.position.x = -18;
    }

    let drop4 = MYLIB.createDrop(0.8,0.8,0.6,-18,0,0,Math.PI/4,0,0,1,1,1,material)
    for(let i=1; i<4; i++) {
        let inst = drop4.createInstance('d'+i);
        inst.rotation.x = i*Math.PI/2 + Math.PI/4; 
        inst.position.x = -18; 
    }
}