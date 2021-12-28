

//---------------------------- SCENE | CAMERA | RENDERER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );




//---------------------------- RESIZE RESPONSIVE
window.addEventListener('resize', ()=> {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);

    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});






//---------------------------- CONTROLS

controls = new THREE.OrbitControls( camera, renderer.domElement );





//---------------------------- GEOMETRY + METERIAL = MESH
const geometry = new THREE.BoxGeometry( 2, 2, 2);

const cubeMaterials = [
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( 'img/1.jpg' ), side: THREE.DoubleSide } ), // RIGHT SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( 'img/2.jpg' ), side: THREE.DoubleSide } ), // LEFT SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( 'img/3.jpg' ), side: THREE.DoubleSide } ), // TOP SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( 'img/4.jpg' ), side: THREE.DoubleSide } ), // BOTTOM SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( 'img/5.jpg' ), side: THREE.DoubleSide } ), // FRONT SIDE
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load( 'img/6.jpg' ), side: THREE.DoubleSide } ) // BACK SIDE
];

const material = new THREE.MeshFaceMaterial( cubeMaterials );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;







//---------------------------- ANIM

function animate() {
	requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();