function creatcubeplayer(x,y,z) {
    var geometry = new THREE.SphereGeometry(9, 30, 30);
    var texture = new THREE.TextureLoader().load( "source/head.png" );
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh = new THREE.Mesh( geometry,material );
    mesh.castShadow = true;
    mesh.position.set(x,y+106,z);
    mesh.castShadow = true;
    mesh.rotation.y =  Math.PI / 2;

    var geometry3 = new THREE.SphereGeometry(11.5, 30, 30, 0, Math.PI * 2, 0, Math.PI / 3);
    var texture3 = new THREE.TextureLoader().load( "source/head1.png" );
    var material3 = new THREE.MeshLambertMaterial({map:texture3});
    mesh3 = new THREE.Mesh( geometry3,material3 );
    mesh3.castShadow = true;
    mesh3.position.set(x,y+78,z);
    mesh3.castShadow = true;
    mesh3.rotation.y =  Math.PI*7 / 10;

    var geometry1 = new THREE.CylinderGeometry(10, 9, 8, 30);
    var texture1 = new THREE.TextureLoader().load( "source/top.png" );
    var material1 = new THREE.MeshLambertMaterial({map:texture1});
    mesh1 = new THREE.Mesh(geometry1,material1 );
    mesh1.castShadow = true;
    mesh1.position.set(x,y+80,z);
    mesh1.castShadow = true;
    mesh1.rotation.y = - Math.PI / 4;

    var geometry2 = new THREE.CylinderGeometry(9, 12, 26, 30);
    var texture2 = new THREE.TextureLoader().load( "source/bottom.png" );
    var material2 = new THREE.MeshLambertMaterial({map:texture2});
    mesh2 = new THREE.Mesh(geometry2,material2 );
    mesh2.castShadow = true;
    mesh2.position.set(x,y+63,z);
    mesh2.castShadow = true;
    mesh2.rotation.y = - Math.PI / 3;

    body = new THREE.Object3D();
    body.add(mesh1,mesh2,mesh3);

    group = new THREE.Object3D();
    group.add(mesh,body);
    return group;
}

function creatGround(x,z,color){
    var geometry = new THREE.PlaneGeometry( 5000, 5000, 1, 1 );
    var material = new THREE.MeshLambertMaterial({ color:color});
    mesh = new THREE.Mesh( geometry,material );
    mesh.receiveShadow = true;
    mesh.rotation.x =  -Math.PI / 2;
    mesh.position.set(x,-0.01,z);
    scene.add(mesh);
    return mesh;
}

function creatcube10(x,z) {
    group = canvasTwoFace_5stripe(x,z,0xffffff,"#ffffff","#979797");
    return group;     
}

function creatcube11(x,z) {
    group = canvasTwoFace_5stripe(x,z,0x686868,"#686868","#afafaf");
    return group;     
}

function creatcube12(x,z) {
    group = canvasTwoFace_3stripe(x,z,0x686868,"#686868","#afafaf");
    return group;     
}

function creatcube13(x,z) {
    group = canvasTwoFace_3stripe(x,z,0x649569,"#649569","#ffffff");
    return group;     
}

function creatcube14(x,z) {
    group = canvasTwoFace_5stripe(x,z,0x649569,"#649569","#ffffff");
    return group;     
}

function creatcube15(x,z) {
    group = canvasTwoFace_circle(x,z,0x686868,"#686868","#afafaf");
    return group;     
}

function creatcube16(x,z) {
    group = canvasTwoFace_circle(x,z,0xffffff,"#ffffff","#979797");
    return group;     
}

function creatcube17(x,z) {
    group = canvasTwoFace_circle(x,z,0x649569,"#649569","#ffffff");
    return group;     
}

function creatcube18(x,z) {
    group = canvasTwoFace_3stripe(x,z,0xffffff,"#ffffff","#979797");
    return group;     
}

function creatcube01(x,z) {
    var canvas = document.createElement('canvas');
    canvas.width=100;
    canvas.height=50;
    var ctx = canvas.getContext('2d');
    ctx.rect(0,0,100,50);
    ctx.fillStyle="#e86014";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(40,25,18,0,2*Math.PI);
    ctx.fillStyle="#ffffff";
    ctx.fill();           
    ctx.beginPath();
    ctx.arc(45,20,6,0,2*Math.PI);
    ctx.fillStyle="#e86014";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(65,10,6,0,2*Math.PI);
    ctx.fillStyle="#ffffff";
    ctx.fill();
    var texture = new THREE.Texture(canvas);       
    group = canvasOneFace(x,z,texture,0xe86014);
    return group;
}

function creatcube02(x,z) {
    group = allPicThreeFace(x, z, "source/express.png", 50)
    return group;
}

function creatcube03(x,z) {
    var geometry = new THREE.CubeGeometry( 100, 50, 100);
    var material = new THREE.MeshLambertMaterial( { color:0xf64850} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,25,z);
    var geometry = new THREE.PlaneGeometry( 32,32 );
    var texture = new THREE.TextureLoader().load( "source/money.png" );
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh2 = new THREE.Mesh( geometry,material);
    mesh2.receiveShadow = true;
    mesh2.rotation.y =  Math.PI / 2;
    mesh2.position.set(x+50.01,25,z);
    Shadow =  makeShadow(x,z);
    group = new THREE.Object3D();
    group.add(mesh2,mesh,Shadow);
    scene.add(group);
    group.luckyType = LUCKY_TYPE.MONEY
    return group;
}

function creatcube04(x,z) {
    group = allPicThreeFace(x, z, "source/dict.png", 50)
    return group;
}

function creatcube05(x,z) {
    var geometry = new THREE.CubeGeometry( 100, 50, 100);
    var texture = new THREE.TextureLoader().load( "source/bag.png" );
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,25,z);
    Shadow =  makeShadow(x,z);
    group = new THREE.Object3D();
    group.add(mesh,Shadow);
    scene.add(group);
    return group;
}

function creatcube06(x,z) {
    group = allPicThreeFace(x, z, "source/tit.png", 50)
    return group; 
}

function creatcube21(x,z) {
    var geometry = new THREE.CubeGeometry( 100, 50, 100);
    var material = new THREE.MeshLambertMaterial( { color:0x64a934} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,25,z);
    geometry = new THREE.PlaneGeometry( 100,50 );
    var texture = new THREE.TextureLoader().load( "source/green_face.png" );
    material = new THREE.MeshLambertMaterial({map:texture});
    material.transparent = true;
    mesh2 = new THREE.Mesh( geometry,material );
    mesh2.receiveShadow = true;
    mesh2.rotation.y =  Math.PI / 2;
    mesh2.position.set(x+50.01,25,z);

    geometry = new THREE.CubeGeometry( 40, 30, 15);
    material = new THREE.MeshLambertMaterial( { color:0x64a934} );
    var mesh3 = new THREE.Mesh( geometry,material);
    mesh3.receiveShadow = true;
    mesh3.position.set(x+22,31,z+58);
    mesh3.rotation.x = - Math.PI / 4;
    var mesh4 = mesh3.clone();
    mesh4.position.set(x+22,31,z+58-112);
    mesh4.rotation.x =  Math.PI / 4;
    Shadow =  makeShadow(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh2,mesh3,mesh4,Shadow);
    scene.add(group);
    return group;
}

function creatcube22(x,z) {
    var geometry = new THREE.CubeGeometry( 100, 50, 100);
    var material = new THREE.MeshLambertMaterial( { color:0xd4c836} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,25,z);

    geometry = new THREE.CylinderGeometry(20, 20, 10, 30, 3, true);
    material = new THREE.MeshLambertMaterial({ color:0xd4c836});
    mesh1 = new THREE.Mesh(geometry,material);
    mesh1.receiveShadow = true;
    mesh1.position.set(x,25,z+55);
    mesh1.rotation.x =  -Math.PI / 2;
    var geometry = new THREE.PlaneGeometry( 20, 20 );
    var texture = new THREE.TextureLoader().load( "source/emotion.png" );
    var material = new THREE.MeshBasicMaterial( {map:texture} );
    material.transparent = true;
    var mesh3 = new THREE.Mesh( geometry, material );
    mesh3.receiveShadow = true;
    mesh3.position.set(x,25,z+55.01);

    mesh2 = mesh1.clone();
    mesh2.position.set(x+55,25,z);
    mesh2.rotation.z =  Math.PI / 2;
    mesh4 = mesh3.clone();
    mesh4.position.set(x+55.01,25,z);
    mesh4.rotation.y =  Math.PI / 2;
    Shadow =  makeShadow(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,mesh2,mesh3,mesh4,Shadow);
    scene.add(group);
    return group;
}

function creatcube23(x,z) {
    var geometry = new THREE.CubeGeometry( 100, 50, 100);
    var material = new THREE.MeshLambertMaterial( { color:0xffffff} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,25,z);
    var geometry = new THREE.PlaneGeometry( 100, 50, 1, 1 );
    var texture = new THREE.TextureLoader().load( "source/clock.png" );
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh1 = new THREE.Mesh( geometry,material);
    mesh1.receiveShadow = true;
    mesh1.rotation.y =  Math.PI / 2;
    mesh1.position.set(x+50.01, 25,z);

    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    function checkTime(i){
        if (i<10){
            i="0" + i;
        }
        str = i.toString();
    return str;
    }
    var hStr = checkTime(h);
    var hArr = hStr.split("");
    var mStr =checkTime(m);
    var mArr = mStr.split(""); 
    mesh2 = creatTime(hArr[0], 1, x, z);
    mesh3 = creatTime(hArr[1], 2, x, z);
    mesh4 = creatTime(mArr[0], 3, x, z);
    mesh5 = creatTime(mArr[1], 4, x, z);
    function creatTime(h, n, x, z){
        var scr = "source/" + h + ".png";
        if (n == 1){
            return loadImg(scr, 30, x, z);
        }
        if (n == 2){
            return loadImg(scr, 12, x, z);
        }
        if (n == 3){
            return loadImg(scr, -6, x, z);
        }
        if (n == 4){
            return loadImg(scr, -24, x, z);
        }
    }
    function loadImg(scr, d, x, z){
        var geometry = new THREE.PlaneGeometry( 26, 26 );
        var texture = new THREE.TextureLoader().load( scr );
        var material = new THREE.MeshLambertMaterial({map:texture});
        material.transparent = true;
        mesh6 = new THREE.Mesh( geometry, material);
        mesh6.receiveShadow = true;
        mesh6.rotation.y =  Math.PI / 2;
        mesh6.position.set(x+50.02, 25, z+d);
        return mesh6;
    }

    var geometry = new THREE.CylinderGeometry(20, 20, 10, 100, 3, true);
    var texture = new THREE.TextureLoader().load( "source/stripe.png" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 2, 2 );
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh7 = new THREE.Mesh(geometry,material);
    mesh7.receiveShadow = true;
    mesh7.position.set(x,25,z+55);
    mesh7.rotation.x =  -Math.PI / 2;
    var geometry = new THREE.CircleGeometry( 20, 30 );
    var texture = new THREE.TextureLoader().load( "source/stripe.png" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    var material = new THREE.MeshBasicMaterial( {map:texture} );
    material.transparent = true;
    var mesh8 = new THREE.Mesh( geometry, material );
    mesh8.receiveShadow = true;
    mesh8.position.set(x,25,z+60);
    Shadow =  makeShadow(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,mesh2,mesh3,mesh4,mesh5,mesh7,mesh8,Shadow);
    scene.add(group);
    return group;
}

function creatcube24(x,z) {
    var geometry = new THREE.CylinderGeometry(40, 40, 6, 30, 3, true);
    var material = new THREE.MeshLambertMaterial({ color:0x686868});
    mesh = new THREE.Mesh(geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,45,z);
    var geometry = new THREE.CircleGeometry( 40, 30 );
    var texture = new THREE.TextureLoader().load( "source/record.png" );
    var material = new THREE.MeshBasicMaterial( {map:texture} );
    // texture.needsUpdate = true;
    var mesh1 = new THREE.Mesh( geometry, material );
    mesh1.receiveShadow = true;
    mesh1.position.set(x,46,z);
    mesh1.rotation.x =  -Math.PI / 2;

    var texture = new THREE.TextureLoader().load(  "source/sing.png" );
    var geometry = new THREE.PlaneGeometry( 100, 100, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(0,0.34);//图片左下角
    var t2 = new THREE.Vector2(0.66,0.34);//图片右下角
    var t3 = new THREE.Vector2(0.66,1);//图片右上角
    var t0 = new THREE.Vector2(0,1);//图片左上角
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh2 = new THREE.Mesh( geometry,material );
    mesh2.receiveShadow = true;
    mesh2.rotation.x =  -Math.PI / 2;
    mesh2.position.set(x,44,z);
    var geometry = new THREE.PlaneGeometry( 100, 44, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(0,0);
    var t2 = new THREE.Vector2(0.65,0);
    var t3 = new THREE.Vector2(0.65,0.333);
    var t0 = new THREE.Vector2(0,0.333);
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh3 = new THREE.Mesh( geometry,material );
    mesh3.receiveShadow = true;
    mesh3.position.set(x,44/2,z+50);
    var geometry = new THREE.PlaneGeometry( 100, 44, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(1,0.36);
    var t2 = new THREE.Vector2(1,1);
    var t3 = new THREE.Vector2(0.666,1);
    var t0 = new THREE.Vector2(0.666,0.36);
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var material = new THREE.MeshLambertMaterial({map:texture}); 
    mesh4 = new THREE.Mesh( geometry,material );
    mesh4.receiveShadow = true;
    mesh4.rotation.y =  Math.PI / 2;
    mesh4.position.set(x+50,44/2,z);
    Shadow =  makeShadow(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,mesh2,mesh3,mesh4,Shadow);
    scene.add(group);
    group.luckyType = LUCKY_TYPE.RECORD
    return group;
}

function creatcube25(x,z) {
    var geometry = new THREE.CubeGeometry( 100, 50, 100);
    var material = new THREE.MeshLambertMaterial( { color:0xf2f2f2} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,25,z);
    var geometry = new THREE.PlaneGeometry( 66,33 );
    var texture = new THREE.TextureLoader().load( "source/white_face.png" );
    var material = new THREE.MeshLambertMaterial({map:texture});
    material.transparent = true;
    mesh1 = new THREE.Mesh( geometry,material );
    mesh1.receiveShadow = true;
    mesh1.rotation.y =  Math.PI / 2;
    mesh1.position.set(x+50.01,20,z);

    var geometry = new THREE.CubeGeometry( 40, 30, 15);
    var material = new THREE.MeshLambertMaterial( { color:0xf2f2f2} );
    var mesh2 = new THREE.Mesh( geometry,material);
    mesh2.receiveShadow = true;
    mesh2.position.set(x+22,30,z+58);
    mesh2.rotation.x = - Math.PI / 4;
    var mesh3 = mesh2.clone();
    mesh3.position.set(x+22,31,z+58-112);
    mesh3.rotation.x =  Math.PI / 4;
    Shadow =  makeShadow(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,mesh2,mesh3,Shadow);
    scene.add(group);
    return group;
}

function creatcube26(x,z) {
    var geometry = new THREE.CubeGeometry( 100, 40, 100);
    var material = new THREE.MeshLambertMaterial({color:0x9175cf});
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,20,z);

    var texture = new THREE.TextureLoader().load( "source/gift.png" );
    var geometry = new THREE.PlaneGeometry( 110, 110, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(0,0.25);//图片左下角
    var t2 = new THREE.Vector2(1,0.25);//图片右下角
    var t3 = new THREE.Vector2(1,1);//图片右上角
    var t0 = new THREE.Vector2(0,1);//图片左上角
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh1 = new THREE.Mesh( geometry,material );
    mesh1.receiveShadow = true;
    mesh1.rotation.x =  -Math.PI / 2;
    mesh1.position.set(x,50,z);
    var geometry = new THREE.PlaneGeometry( 110, 16, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(0,0);
    var t2 = new THREE.Vector2(1,0);
    var t3 = new THREE.Vector2(1,0.25);
    var t0 = new THREE.Vector2(0,0.25);
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh2 = new THREE.Mesh( geometry,material );
    mesh2.receiveShadow = true;
    mesh2.position.set(x,42,z+55);
    var geometry = new THREE.PlaneGeometry( 110, 16, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(0,0);
    var t2 = new THREE.Vector2(1,0);
    var t3 = new THREE.Vector2(1,0.25);
    var t0 = new THREE.Vector2(0,0.25);
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var materialRight = new THREE.MeshLambertMaterial({map:texture}); 
    mesh3 = new THREE.Mesh( geometry,material );
    mesh3.receiveShadow = true;
    mesh3.rotation.y =  Math.PI / 2;
    mesh3.position.set(x+55,42,z);
    Shadow =  makeShadow(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,mesh2,mesh3,Shadow);
    scene.add(group);
    return group;
}

function creatcube27(x,z) {
    var geometry = new THREE.CubeGeometry( 110, 12, 90);
    var texture = new THREE.TextureLoader().load( "source/stool.png" );
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,44,z);

    var geometry = new THREE.CubeGeometry( 14, 48, 14);
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh1 = new THREE.Mesh( geometry,material);
    mesh1.receiveShadow = true;
    mesh1.position.set(x-34,18,z+34);
    mesh1.rotation.x = - Math.PI / 20;
    mesh1.rotation.z = - Math.PI / 40;
    mesh2 = mesh1.clone();
    mesh2.position.set(x+34,18,z+34);
    mesh2.rotation.z =  Math.PI / 40;
    mesh3 = mesh1.clone();
    mesh3.position.set(x-34,18,z-34);
    mesh3.rotation.x =  Math.PI / 20;
    mesh4 = mesh1.clone();
    mesh4.position.set(x+34,18,z-34);
    mesh4.rotation.x =  Math.PI / 20;
    mesh4.rotation.z =  Math.PI / 40;

    Shadow =  makeShadow_stool(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,mesh2,mesh3,mesh4,Shadow);
    scene.add(group);
    return group;
}

function creatcube07(x,z) {
    var geometry = new THREE.CubeGeometry( 120, 50, 100);
    var material = new THREE.MeshLambertMaterial( { color:0x8e8e8e} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,25,z);
    var geometry = new THREE.PlaneGeometry( 100, 120 );
    var texture = new THREE.TextureLoader().load( "source/disk.png" );
    var material = new THREE.MeshBasicMaterial( {map:texture} );
    var mesh1 = new THREE.Mesh( geometry, material );
    mesh1.receiveShadow = true;
    mesh1.position.set(x,50.01,z);
    mesh1.rotation.x =  -Math.PI / 2;
    mesh1.rotation.z =  Math.PI / 2;

    Shadow =  makeShadow2(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,Shadow);
    scene.add(group);
    group.luckyType = LUCKY_TYPE.RECORD
    return group;
}

function creatdesk(x,z) {
    var geometry = new THREE.CylinderGeometry(50, 50, 6, 30);
    var material = new THREE.MeshLambertMaterial({ color:0xafafaf});
    var mesh = new THREE.Mesh(geometry,material );
    mesh.receiveShadow = true;
    mesh.position.set(x,47,z);
    var geometry = new THREE.CylinderGeometry(10, 30, 49, 30);
    var material = new THREE.MeshLambertMaterial({ color:0x686868});
    mesh1 = new THREE.Mesh(geometry,material );
    mesh1.receiveShadow = true;
    mesh1.position.set(x,25,z);
    Shadow =  makeShadow_desk(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,Shadow);
    scene.add(group);
    return group;
}

function creatdesk2(x,z) {
    var geometry = new THREE.CylinderGeometry(50, 50, 6, 30);
    var material = new THREE.MeshLambertMaterial({ color:0x686868});
    mesh = new THREE.Mesh(geometry,material );
    mesh.receiveShadow = true;
    mesh.position.set(x,47,z);
    var geometry = new THREE.CylinderGeometry(10, 30, 49, 30);
    var material = new THREE.MeshLambertMaterial({ color:0x979797});
    mesh1 = new THREE.Mesh(geometry,material );
    mesh1.receiveShadow = true;
    mesh1.position.set(x,25,z);
    Shadow =  makeShadow_desk(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,Shadow);
    scene.add(group);
    return group;
}

function creatcylinder(x,z) {
    group = creatcylinder_canvas(x,z,"#ffffff","#979797",0xffffff,0x979797);
    return group; 
}

function creatcylinder2(x,z) {
    group = creatcylinder_canvas(x,z,"#649569","#7bc487",0x649569,0xffffff);
    return group; 
}

function creatcup(x,z) {
    var geometry = new THREE.CylinderGeometry(30, 36, 10, 30, 3, true);
    var material = new THREE.MeshLambertMaterial({ color:0x464646});
    mesh = new THREE.Mesh(geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,45,z);
    var geometry = new THREE.CircleGeometry( 30, 30 );
    var texture = new THREE.TextureLoader().load( "source/westore_desk.png" );
    var material = new THREE.MeshBasicMaterial( {map:texture} );
    // texture.needsUpdate = true;
    var mesh1 = new THREE.Mesh( geometry, material );
    mesh1.receiveShadow = true;
    mesh1.position.set(x,50,z);
    mesh1.rotation.x =  -Math.PI / 2;
    mesh1.rotation.z =  Math.PI / 4;
    var geometry = new THREE.CylinderGeometry(32, 20, 40, 30, 3, true);
    var texture = new THREE.TextureLoader().load( "source/westore.png" );
    var material = new THREE.MeshBasicMaterial( {map:texture} );
    texture.needsUpdate = true;
    mesh2 = new THREE.Mesh(geometry,material );
    mesh2.receiveShadow = true;
    mesh2.position.set(x,20,z);
    mesh2.rotation.y =  -3* Math.PI / 4;
    Shadow =  makeShadow_cup(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,mesh2,Shadow);
    scene.add(group);
    return group;
}

function topPlane_color(x,z,topcolor){
    var geometry = new THREE.PlaneGeometry( 100, 100, 1, 1 );
    var material = new THREE.MeshLambertMaterial({ color:topcolor});
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.rotation.x =  -Math.PI / 2;
    mesh.position.set(x,50,z);
    return mesh;
}

function makeShadow(x,z){
    var geometry = new THREE.PlaneGeometry( 116, 160, 1, 1 );
    var texture = new THREE.TextureLoader().load( "source/shadow.png" );
    var material = new THREE.MeshBasicMaterial({map:texture});
    material.transparent = true;
    meshShadow = new THREE.Mesh( geometry,material);
    meshShadow.rotation.x =  -Math.PI / 2;
    meshShadow.rotation.z =  Math.PI / 2 ;
    meshShadow.position.set( x-30 , 0 , z+6 );
    return meshShadow;
}

function makeShadow2(x,z){
    var geometry = new THREE.PlaneGeometry( 112, 180, 1, 1 );
    var texture = new THREE.TextureLoader().load( "source/shadow.png" );
    var material = new THREE.MeshBasicMaterial({map:texture});
    material.transparent = true;
    meshShadow = new THREE.Mesh( geometry,material);
    meshShadow.rotation.x =  -Math.PI / 2;
    meshShadow.rotation.z =  Math.PI / 2 ;
    meshShadow.position.set( x-30 , 0 , z+8 );
    return meshShadow;
}

function makeShadow_cylinder(x,z){
    var geometry = new THREE.PlaneGeometry( 90, 130, 1, 1 );
    var texture = new THREE.TextureLoader().load( "source/cylinder_shadow.png" );
    var material = new THREE.MeshBasicMaterial({map:texture});
    material.transparent = true;
    meshShadow = new THREE.Mesh( geometry,material);
    meshShadow.rotation.x =  -Math.PI / 2;
    meshShadow.rotation.z =  Math.PI / 2 ;
    meshShadow.position.set( x-30 , 0 , z+8 );
    return meshShadow;
}

function makeShadow_cup(x,z){
    var geometry = new THREE.PlaneGeometry( 50, 80, 1, 1 );
    var texture = new THREE.TextureLoader().load( "source/cylinder_shadow.png" );
    var material = new THREE.MeshBasicMaterial({map:texture});
    material.transparent = true;
    meshShadow = new THREE.Mesh( geometry,material );
    meshShadow.rotation.x =  -Math.PI / 2;
    meshShadow.rotation.z =  Math.PI / 2 ;
    meshShadow.position.set( x-30 , 0 , z+8 );
    return meshShadow;
}

function makeShadow_desk(x,z){
    var geometry = new THREE.PlaneGeometry( 90, 140, 1, 1 );
    var texture = new THREE.TextureLoader().load( "source/desk_shadow.png" );
    var material = new THREE.MeshBasicMaterial({map:texture});
    material.transparent = true;
    meshShadow = new THREE.Mesh( geometry,material );
    meshShadow.rotation.x =  -Math.PI / 2;
    meshShadow.rotation.z =  Math.PI / 2 ;
    meshShadow.position.set( x-45 ,0 , z+5 );
    return meshShadow;
}

function makeShadow_stool(x,z){
    var geometry = new THREE.PlaneGeometry( 100, 130, 1, 1 );
    var texture = new THREE.TextureLoader().load( "source/stool_shadow.png" );
    var material = new THREE.MeshBasicMaterial({map:texture});
    material.transparent = true;
    meshShadow = new THREE.Mesh( geometry,material);
    meshShadow.rotation.x =  -Math.PI / 2;
    meshShadow.rotation.z =  Math.PI / 2 ;
    meshShadow.position.set( x-36 ,0 , z+4 );
    return meshShadow;
}

function canvasOneFace(x,z,texture,color) {
    var geometry = new THREE.CubeGeometry( 100, 50, 100);
    var material = new THREE.MeshLambertMaterial( { color:color} );
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.position.set(x,25,z);
    var geometry = new THREE.PlaneGeometry( 100,50 );
    var material = new THREE.MeshLambertMaterial({map:texture});
    texture.needsUpdate = true;
    mesh1 = new THREE.Mesh( geometry,material);
    mesh1.receiveShadow = true;
    mesh1.rotation.y =  Math.PI / 2;
    mesh1.position.set(x+50.01,25,z);
    Shadow =  makeShadow();
    Shadow.position.set( x-30 , 0 , z+8 );
    group = new THREE.Object3D();
    group.add(mesh,mesh1,Shadow);
    scene.add(group);
    return group;
}

function canvasTwoFace(x,z,texture,topColor){
        var mesh = topPlane_color(x,z,topColor);
        var geometry = new THREE.PlaneGeometry( 100, 50, 1, 1 );
        var material = new THREE.MeshLambertMaterial({map:texture});
        texture.needsUpdate = true;
        mesh1 = new THREE.Mesh( geometry,material);
        mesh1.receiveShadow = true;
        mesh1.position.set(x,25,z+50);
        var mesh2 = mesh1.clone();
        mesh2.rotation.y =  Math.PI / 2;
        mesh2.position.set(x+50,25,z);
        Shadow =  makeShadow();
        Shadow.position.set( x-30 ,0 , z+8 );
        group = new THREE.Object3D();
        group.add(mesh,mesh1,mesh2,Shadow);
        scene.add(group);
        return group;
}

function canvasTwoFace_circle(x,z,colorTop,colorTop2,color) {
        var mesh = topPlane_color(x,z,colorTop);
        var geometry = new THREE.PlaneGeometry( 100, 50, 1, 1 );
        var canvas = document.createElement('canvas');
        canvas.width=100;
        canvas.height=50;
        var ctx = canvas.getContext('2d');
        ctx.rect(0,0,100,50);
        ctx.fillStyle=colorTop2;
        ctx.fill();         
        ctx.beginPath();
        ctx.arc(50,25,20,0,2*Math.PI);
        ctx.fillStyle=color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(50,25,10,0,2*Math.PI);
        ctx.fillStyle=colorTop2;
        ctx.fill();
        var texture = new THREE.Texture(canvas);
        var material = new THREE.MeshLambertMaterial({map:texture});
        texture.needsUpdate = true;
        mesh1 = new THREE.Mesh( geometry,material );
        mesh1.receiveShadow = true;
        mesh1.position.set(x,25,z+50);
        var mesh2 = mesh1.clone();
        mesh2.rotation.y =  Math.PI / 2;
        mesh2.position.set(x+50,25,z);
        Shadow =  makeShadow();
        Shadow.position.set( x-30 , 0 , z+8 );
        group = new THREE.Object3D();
        group.add(mesh,mesh1,mesh2,Shadow);
        scene.add(group);
        return group;
}

 function canvasTwoFace_5stripe(x,z,colorTop,colorTop2,color) {
    var canvas = document.createElement('canvas');
    canvas.width=100;
    canvas.height=50;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle=colorTop2;
    ctx.fillRect(0,0,100,10);
    ctx.fillStyle=color;
    ctx.fillRect(0,10,100,10);
    ctx.fillStyle=colorTop2;
    ctx.fillRect(0,20,100,10);
    ctx.fillStyle=color;
    ctx.fillRect(0,30,100,10);
    ctx.fillStyle=colorTop2;
    ctx.fillRect(0,40,100,10);
    var texture = new THREE.Texture(canvas);
    group = canvasTwoFace(x,z,texture,colorTop);
    return group;
}

function canvasTwoFace_3stripe(x,z,colorTop,colorTop2,color) {
    var canvas = document.createElement('canvas');
    canvas.width=100;
    canvas.height=50;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle=colorTop2;
    ctx.fillRect(0,0,100,10);
    ctx.fillStyle=color;
    ctx.fillRect(0,10,100,30);
    ctx.fillStyle=colorTop2;
    ctx.fillRect(0,40,100,10);
    var texture = new THREE.Texture(canvas);
    group = canvasTwoFace(x,z,texture,colorTop);
    return group;
}

function creatcylinder_canvas(x,z,colorTop,colorTop2,color,color2){
    var geometry = new THREE.CylinderGeometry(40, 40, 44, 30, 3, true);
    var material = new THREE.MeshLambertMaterial({ color:color2});
    mesh = new THREE.Mesh(geometry,material );
    mesh.receiveShadow = true;
    mesh.position.set(x,22,z);
    var geometry = new THREE.CylinderGeometry(40, 40, 6, 30, 3, true);
    var material = new THREE.MeshLambertMaterial({ color:color});
    mesh1 = new THREE.Mesh(geometry,material);
    mesh1.receiveShadow = true;
    mesh1.position.set(x,47,z);
    var geometry = new THREE.CircleGeometry( 40, 30 );
    var canvas = document.createElement('canvas');
    canvas.width=80;
    canvas.height=80;
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(40,40,42,0,2*Math.PI);
    ctx.fillStyle=colorTop;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(42,42,30,0,2*Math.PI);
    ctx.fillStyle=colorTop2;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(42,42,20,0,2*Math.PI);
    ctx.fillStyle=colorTop;
    ctx.fill();
    var texture = new THREE.Texture(canvas);
    var material = new THREE.MeshBasicMaterial( {map:texture} );
    texture.needsUpdate = true;
    var mesh2 = new THREE.Mesh( geometry, material );
    mesh2.receiveShadow = true;
    mesh2.position.set(x,50,z);
    mesh2.rotation.x =  -Math.PI / 2;
    Shadow =  makeShadow_cylinder(x,z);
    group = new THREE.Object3D();
    group.add(mesh,mesh1,mesh2,Shadow);
    scene.add(group);
    return group;
}

function allPicThreeFace(x,z,picture,h) {
    var texture = new THREE.TextureLoader().load( picture );
    var geometry = new THREE.PlaneGeometry( 100, 100, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(0,0.34);
    var t2 = new THREE.Vector2(0.66,0.34);
    var t3 = new THREE.Vector2(0.66,1);
    var t0 = new THREE.Vector2(0,1);
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh = new THREE.Mesh( geometry,material);
    mesh.receiveShadow = true;
    mesh.rotation.x =  -Math.PI / 2;
    mesh.position.set(x,h,z);
    var geometry = new THREE.PlaneGeometry( 100, h, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(0,0);
    var t2 = new THREE.Vector2(0.65,0);
    var t3 = new THREE.Vector2(0.65,0.333);
    var t0 = new THREE.Vector2(0,0.333);
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var material = new THREE.MeshLambertMaterial({map:texture});
    mesh1 = new THREE.Mesh( geometry,material);
    mesh1.receiveShadow = true;
    mesh1.position.set(x,h/2,z+50);
    var geometry = new THREE.PlaneGeometry( 100, h, 1, 1 );
    geometry.faceVertexUvs[0] = [];
    var t1 = new THREE.Vector2(1,0.36);
    var t2 = new THREE.Vector2(1,1);
    var t3 = new THREE.Vector2(0.666,1);
    var t0 = new THREE.Vector2(0.666,0.36);
    geometry.faceVertexUvs[0].push([t0,t1,t3],[t1,t2,t3]);
    var material = new THREE.MeshLambertMaterial({map:texture}); 
    mesh2 = new THREE.Mesh( geometry,material);
    mesh2.receiveShadow = true;
    mesh2.rotation.y =  Math.PI / 2;
    mesh2.position.set(x+50,h/2,z);
    Shadow =  makeShadow();
    Shadow.position.set( x-30 , 0 , z+8 );
    group = new THREE.Object3D();
    group.add(mesh, mesh1, mesh2,Shadow);
    scene.add(group);
    return group;  
}

function deleteGroup(group) {
    var children = group.children;
        for(var i = 0; i< children.length; i++){
            if (children[i] instanceof THREE.Mesh) {
                children[i].geometry.dispose(); 
                children[i].material.dispose(); 
            }
            else {
                children[i].traverse(function (item) {
                    if (item instanceof THREE.Mesh) {
                        item.geometry.dispose(); 
                        item.material.dispose(); 
                    }
                });
            }
        }
    scene.remove(group);
}
