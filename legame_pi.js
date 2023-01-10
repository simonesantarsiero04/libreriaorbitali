MYLIB.initialize('legame_pi', populateScene);

function populateScene(scene) {
    scene.clearColor = BABYLON.Color3.Black();
    scene.activeCamera.beta = 1.2;

    position = 2;
    position1 = -3;
    let material = new BABYLON.StandardMaterial("-mat", scene);
    material.diffuseColor.set(0.9,0.9,0.1);
    material.specularColor.set(0.2,0.2,0.2);

    let material1 = new BABYLON.StandardMaterial("-mat", scene);
    material1.diffuseColor.set(0,0.5,0.9);
    material1.specularColor.set(0.2,0.2,0.2);

    let drop1 = MYLIB.createDrop(0.6,0.6,0.4,-0.8,position,0,Math.PI,0,0,1.4,1.4,1.4,material);
    let drop2 = MYLIB.createDrop(0.6,0.6,0.4,-0.8,position,0,0,0,0,1.4,1.4,1.4,material);
    let drop3 = MYLIB.createDrop(0.6,0.6,0.4,0.8,position,0,Math.PI,0,0,1.4,1.4,1.4,material);
    let drop4 = MYLIB.createDrop(0.6,0.6,0.4,0.8,position,0,0,0,0,1.4,1.4,1.4,material);

    let pi1 = pi_bound(0,position1+0.5,0, 0,0,0,material1);
    let pi2 = pi_bound(0,position1-0.5,0,0, Math.PI, 0, material1);
}


function pi_bound(px,py,pz,rx,ry,rz,material,scene) {
    let nu = 40, nv = 40;
    let vd = new BABYLON.VertexData();
    vd.positions = [];
    vd.indices = [];
    vd.normals = [];
    const param = -0.7;//quanto è tirata la punta
    const height = 1;//lunghezza
    const radius = 1.5;//raggio
    for(let iu=0;iu<nu;iu++) {
        let u = iu/(nu-1);
        for(let iv=0;iv<nv;iv++) {
            let v = iv/(nv-1);
            let phi = Math.PI*2*v;
            let csPhi = Math.cos(phi), snPhi = Math.sin(phi);
            let theta = Math.PI*u;
            let csTheta = Math.cos(theta), snTheta = Math.sin(theta);
            let csTheta2 = Math.cos(theta/2), snTheta2 = Math.sin(theta/2);
            // compute point
            let y = height*(1-csTheta);
            let r = radius*snTheta*Math.pow(snTheta2,param);
            let x = csPhi*r*1.3;
            let z = snPhi*r/1.5;  
            // compute normal            
            let dy = height*snTheta;
            let dr = 0.5*radius*Math.pow(snTheta2,param)*(param*snTheta*csTheta2/snTheta2 + 2*csTheta);
            let nrmy = -dr;
            let nrmr = dy;
            let nrm = Math.sqrt(nrmr*nrmr+nrmy*nrmy);          
            nrmy/=nrm; nrmr/=nrm;
            let nrmx = csPhi*nrmr;
            let nrmz = snPhi*nrmr;
            vd.positions.push(x,y,z);      
            vd.normals.push(nrmx,nrmy,nrmz);          
        }
    }
   
    for(let iu=0;iu+1<nu;iu++) {
        for(let iv=0;iv+1<nv;iv++) {
            let k = iu*nv+iv;
            vd.indices.push(k,k+1,k+1+nv, k,k+1+nv,k+nv);
        }
    }
    
    let mesh = new BABYLON.Mesh('surface', scene);
    mesh.material = material;
    mesh.position.set(px,py,pz);
    mesh.rotation.set(rx,ry,rz);
    //mesh.scaling.set(sx,sy,sz);
    vd.applyToMesh(mesh);
    return mesh;    
}
