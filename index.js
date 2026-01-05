import * as THREE from 'three';
import { OrbitControls } from 'jsm/controls/OrbitControls.js';


const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2
const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;


const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
    // wireframe: true
});

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500, 1.0);
// hemiLight.position.set(0, 1, 0);
scene.add(hemiLight);

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMate = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

const wireMesh = new THREE.Mesh(geo, wireMate);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);


function animate(t = 0) {
    requestAnimationFrame(animate);
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y = 0.01 + 10.0 * Math.sin(Date.now() * 0.001);
    // mesh.rotation.x = 0.01 + 10.0 * Math.sin(Date.now() * 0.001);
    // mesh.position.x = Math.sin(Date.now() * 0.001) * 0.5;
    // mesh.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    // mesh.position.x += (Math.random() - 0.5) * 0.1;
    // mesh.position.y += 0.01;
    // mesh.position.x += 0.000001;
    // console.log(t)
    // mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
    // mesh.rotation.y = t * 1000;
    // console.log(t)
    mesh.rotation.y = t * 0.0001;
    renderer.render(scene, camera);
    controls.update();
}

animate();
