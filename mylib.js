"use strict"
const MYLIB = {}

MYLIB.initialize = function (canvasId, populateScene) {
    window.addEventListener('DOMContentLoaded', (event) => {
        const canvas = MYLIB.canvas = document.getElementById(canvasId);
        canvas.addEventListener('wheel', evt => evt.preventDefault());
        const engine = MYLIB.engine = new BABYLON.Engine(canvas, true);
        const scene = MYLIB.scene = new BABYLON.Scene(engine);
        const camera = MYLIB.camera = new BABYLON.ArcRotateCamera('cam', 
            Math.PI/2,0.7,
            20, 
            new BABYLON.Vector3(0,0,0), 
            scene);
        camera.attachControl(canvas,true);
        camera.wheelPrecision = 3;
        camera.lowerRadiusLimit = 1;
        camera.upperRadiusLimit = 40;            
        let light = new BABYLON.PointLight('light1',new BABYLON.Vector3(0,1,0), scene);
        light.parent = camera;
    
        populateScene(scene);
        //scene.clearColor = BABYLON.Color3.Black();
        //scene.activeCamera.beta = 1.2;
        
        engine.runRenderLoop(()=>scene.render());
        window.addEventListener("resize", () => engine.resize());
    });
    
}

MYLIB.Sphere = function (raggio, //altezza, raggio, etc 
                px,py,pz, //posizione
                rx,ry,rz, //rotazione
                sx,sy,sz, //scaling
                material, 
                scene){ //dove
    let obj = BABYLON.MeshBuilder.CreateSphere("s", {
        diameter: raggio},
        scene);
    obj.material = material;
    obj.position.set(px,py,pz);
    obj.rotation.set(rx,ry,rz);
    obj.scaling.set(sx,sy,sz);
}

MYLIB.createDrop = function(param,height,radius,px,py,pz,rx,ry,rz,sx,sy,sz,material,scene) { //param : quanto è tirata la punta; height : lunghezza, radius: raggio
    let nu = 40, nv = 40;
    let vd = new BABYLON.VertexData();
    vd.positions = [];
    vd.indices = [];
    vd.normals = [];
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
            let x = csPhi*r;
            let z = snPhi*r;  
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
    mesh.scaling.set(sx,sy,sz);
    vd.applyToMesh(mesh);
    return mesh;    
}

MYLIB.axis_grid = function (xz,xy,yz,scene){

    let Color4 = BABYLON.Color4;
    let Vector3 = BABYLON.Vector3;
    
    let m = 20;
    let r = 1.5;
    let pts = [];
    let colors = [];
    let c1 = new Color4(0.7,0.7,0.7,0.5);
    let c2 = new Color4(0.5,0.5,0.5,0.25);
    let cRed   = new Color4(0.8,0.1,0.1);
    let cGreen = new Color4(0.1,0.8,0.1);
    let cBlue  = new Color4(0.1,0.1,0.8);
    
    let color = c1;
    function line(x0,y0,z0, x1,y1,z1) { 
        pts.push([new Vector3(x0,y0,z0), new Vector3(x1,y1,z1)]); 
        colors.push([color,color]); 
    }

    for(let i=0;i<=m;i++) {
        if(i*2==m) continue;
        color = (i%4)==0 ? c1 : c2;
        let x = -r+2*r*i/m;  
        let y = -r+2*r*i/m; 
        let z = -r+2*r*i/m;  
        if (xz == true) {
            line(x,0,-r, x,0,r);
            line(-r,0,x, r,0,x);
        }  
        if (xy == true) {
            line(z,-r,0, z,r,0);
            line(-r,z,0, r,z,0);
        } 
        if (yz == true) {
            line(0,y,-r, 0,y,r);
            line(0,-r,y, 0,r,y);
        }     
    }
    
    let r1 = r + 1;
    let a1 = 0.2;
    let a2 = 0.5;
    
    // x axis
    color = cRed;
    line(-r1,0,0, r1,0,0); 
    line(r1,0,0, r1-a2,0,a1);
    line(r1,0,0, r1-a2,0,-a1);
        
    // z axis
    color = cBlue;
    line(0,0,-r1, 0,0,r1); 
    line(0,0,r1, a1,0,r1-a2);
    line(0,0,r1,-a1,0,r1-a2);
    
    // y axis
    color = cGreen;
    line(0,-r1,0, 0,r1,0); 
    line(0,r1,0, a1,r1-a2,0);
    line(0,r1,0,-a1,r1-a2,0);
    line(0,r1,0, 0,r1-a2,a1);
    line(0,r1,0, 0,r1-a2,-a1);
    
    const lines = BABYLON.MeshBuilder.CreateLineSystem(
        "lines", {
                lines: pts,
                colors: colors,
                
        }, 
        scene);
    return lines; 

}

MYLIB.torus = function (height, //altezza, raggio, etc 
                px,py,pz, //posizione
                rx,ry,rz, //rotazione
                sx,sy,sz, 
                material, 
                scene) {
    let obj = BABYLON.MeshBuilder.CreateTorus ("turus",{
        diameter: height, 
        tickness:10, 
        tessellation:70
    },scene);
    obj.material = material;
    obj.position.set(px,py,pz);
    obj.rotation.set(rx,ry,rz);
    obj.scaling.set(sx,sy,sz);
}

MYLIB.cylinder = function (raggio,height, px,py,pz,rx,ry,rz,material,scene){
    let obj = BABYLON.MeshBuilder.CreateCylinder('cyl', {diameter:raggio, height:height}, scene);
	obj.material = material; 
    obj.position.set(px,py,pz);
    obj.rotation.set(rx,ry,rz);
}