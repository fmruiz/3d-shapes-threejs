let camera;
let scene;
let render;
let geometry;
let material;
let mesh;

function init() {
  
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / innerHeight,
    1,
    1500
  );
  camera.position.set(0, 0, 300);
  
  scene = new THREE.Scene();
  scene.add(camera);

  geometry = new THREE.IcosahedronGeometry(100, 3);

  material = new THREE.MeshNormalMaterial({
    color: "red",
    wireframe: false,
    wireframeLineWidth: 4,
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  render = new THREE.WebGLRenderer();
  render.setClearColor("black", 1);
  render.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(render.domElement);
}

init();

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  render.render(scene, camera);
}

animate();
