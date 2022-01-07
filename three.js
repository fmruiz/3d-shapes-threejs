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

  // iconsahedro
  geometry = new THREE.IcosahedronGeometry(100, 3);
  // cilinder
  geometry = new THREE.CylinderGeometry(
    (radiusTop = 50),
    (radiusBottom = 100),
    (height = 300),
    (radiusSegments = 9),
    (heightSegments = 9)
  );

  material = new THREE.MeshNormalMaterial({
    color: "red",
    wireframe: true,
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
