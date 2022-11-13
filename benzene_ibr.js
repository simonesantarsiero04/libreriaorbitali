MYLIB.initialize('benzene_ibr', populateScene);

function populateScene(scene) {

    scene.activeCamera.beta = 0.3;
    scene.activeCamera.alpha = -1.6;

    const phi = 8* Math.pow(2, 0.5);
    const m = 6;
    const r = phi/3;
    const spheres = [];

    let hybrid = ibridato();

    for(let i=0; i<m; i++) {
        let phi = 2*Math.PI*i/m;
        let sphere = BABYLON.MeshBuilder.CreateSphere("s",
              {diameter:1.5},
              scene);

        let mat = sphere.material = new BABYLON.StandardMaterial("m",scene);
        mat.diffuseColor.set(0,0,0);
        sphere.position.set(r*Math.cos(phi), 0, r*Math.sin(phi) );
        spheres.push(sphere);    
    }

    for(let i=0; i<m; i++) {
        let phi = 2*Math.PI*i/m;
        let sphere = BABYLON.MeshBuilder.CreateSphere("s",
              {diameter:1},
              scene);

        let mat = sphere.material = new BABYLON.StandardMaterial("m",scene);
        mat.diffuseColor.set(1,1,1);
        sphere.position.set(2*r*Math.cos(phi), 0, 2*r*Math.sin(phi) );
        spheres.push(sphere);    
    }

    let anello = new BABYLON.MeshBuilder.CreateTorus("torus", {diameter: 4.8, thickness:0.3, tessellation:70},scene);
    anello.material = new BABYLON.StandardMaterial("mat", scene);
    anello.material.diffuseColor.set(0.5,0.5,0.5);

    let material = new BABYLON.StandardMaterial('mat', scene);
    material.diffuseColor.set(0.5,0.5,0.5);
    let cly6 = MYLIB.cylinder(0.3,3.5,6,0,0,0,0,Math.PI/2,material,scene);
    let cly1 = MYLIB.cylinder(0.3,3.5,-6,0,0,0,0,Math.PI/2,material,scene);
    let cly2 = MYLIB.cylinder(0.3,3.5,-3,0,5.2,0,Math.PI/3,Math.PI/2,material,scene);
    let cly3 = MYLIB.cylinder(0.3,3.5,3,0,5.2,0,-Math.PI/3,Math.PI/2,material,scene);
    let cly4 = MYLIB.cylinder(0.3,3.5,3,0,-5.2,0,Math.PI/3,Math.PI/2,material,scene);
    let cly5 = MYLIB.cylinder(0.3,3.5,-3,0,-5.2,0,-Math.PI/3,Math.PI/2,material,scene);
    //------
    let cly7 = MYLIB.cylinder(0.3,3.5,2.6,0,1.5,0,Math.PI/3,Math.PI/2,material,scene);
    let cly8 = MYLIB.cylinder(0.3,3.5,2.6,0,-1.5,0,-Math.PI/3,Math.PI/2,material,scene);
    let cly9 = MYLIB.cylinder(0.3,3.5,-2.6,0,1.5,0,-Math.PI/3,Math.PI/2,material,scene);
    let cly10 = MYLIB.cylinder(0.3,3.5,-2.6,0,-1.5,0,Math.PI/3,Math.PI/2,material,scene);
    let cly11 = MYLIB.cylinder(0.3,3.5,0,0,3,0,0,Math.PI/2,material,scene);
    let cly12 = MYLIB.cylinder(0.3,3.5,0,0,-3,0,0,Math.PI/2,material,scene);
}

function ibridato (scene){
    let material1 = new BABYLON.StandardMaterial('mat', scene);
    material1.diffuseColor.set(0.9,0.9,0.6);
    //material1.alpha = 0.1;
    let torus = MYLIB.torus(1.3,0,1.5,0,0,0,0,5,3,5,material1,scene);
    let torus1 = MYLIB.torus(1.3,0,-1.5,0,0,0,0,5,3,5,material1,scene);
}
