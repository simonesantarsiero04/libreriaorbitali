MYLIB.initialize('etano', populateScene);

function populateScene(scene) {

    let body = CH3();
    body.rotation.x= -Math.PI/6;
    body.rotation.z = Math.PI/2;
    body.position.x = 3;

    let body1 = CH3();
    body1.rotation.x = Math.PI/6;
    body1.rotation.z = -Math.PI/2; 
    body1.position.x = -3;

    let cly = BABYLON.MeshBuilder.CreateCylinder('cyl', {diameter:0.3, height:6}, scene);
	cly.material = new BABYLON.StandardMaterial("-mat", scene);
    cly.material.diffuseColor.set(0.5,0.5,0.5);
    cly.material.specularColor.set(0.2,0.2,0.2);
    cly.rotation.z= Math.PI/2;
    let sphere = BABYLON.MeshBuilder.CreateSphere('s',{diameter:1},scene);
	sphere.material = new BABYLON.StandardMaterial("mat", scene);
    sphere.material.diffuseColor.set(1,0,0);

    scene.registerBeforeRender(() => {
        let t = performance.now() * 0.001;
        body1.rotation.x= t*0.5;
        body.rotation.x = -t*0.5;
        sphere.position.y = Math.cos(3*t)+8;

    });

}

function CH3 (scene){
    const l = 5;
    const d = (l*Math.sqrt(3))/(2*2)
    position = 0;
    const a = 10.5/180;
    let obj = new BABYLON.Mesh('obj', scene);
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0,0,0);
    material.specularColor.set(0.2,0.2,0.2);
    let material1 = new BABYLON.StandardMaterial("-mat", scene);
    material1.diffuseColor.set(0.5,0.5,0.5);
    material1.specularColor.set(0.2,0.2,0.2);
    let material2 = new BABYLON.StandardMaterial("-mat", scene);
    material2.diffuseColor.set(1,1,1);
    material2.specularColor.set(0.2,0.2,0.2);

    let C = BABYLON.MeshBuilder.CreateSphere('s',{diameter:2},scene);
	C.parent = obj;
	C.material = material;
    C.position.y = position;
    let cly = BABYLON.MeshBuilder.CreateCylinder('cyl', {diameter:0.25, height:l}, scene);
	cly.parent = obj;
	cly.material = material1;
    cly.rotation.set(Math.PI/1.5,0,Math.PI/3);
    cly.position.set(-d,position-(l*0.15),l/5+0.2);
    let cly1 = BABYLON.MeshBuilder.CreateCylinder('cyl', {diameter : 0.25, height : l}, scene);
	cly1.parent = obj;
	cly1.material = material1;
    cly1.rotation.set(Math.PI/1.5,0,-Math.PI/3);
    cly1.position.set(d,position-(l*0.15),l/5+0.2);
    let cly2 = BABYLON.MeshBuilder.CreateCylinder('cyl', {diameter : 0.25, height : l}, scene);
	cly2.parent = obj;
	cly2.material = material1;
    cly2.rotation.set(-Math.PI/1.5+Math.PI*a,0,0);
    cly2.position.set(0,position-(l*0.15)-0.2,-d);
    let H1 = BABYLON.MeshBuilder.CreateSphere('s',{diameter:1},scene);
    H1.parent = obj;
    H1.material = material2;
    H1.position.set(-d*2,-l/2+1,d+0.1);
    let H2 = BABYLON.MeshBuilder.CreateSphere('s',{diameter:1},scene);
    H2.parent = obj;
    H2.material = material2;
    H2.position.set(d*2,-l/2+1,d+0.1);
    let H3 = BABYLON.MeshBuilder.CreateSphere('s',{diameter:1},scene);
    H3.parent = obj;
    H3.material = material2;
    H3.position.set(0,-l/2+0.8,-d*2);

    return obj;
}