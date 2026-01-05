import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import getStarfield from "./src/getStarfield.js";

const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const earthGroup = new THREE.Group();
earthGroup.position.z = -23.4 * Math.PI / 180;
scene.add(earthGroup);
new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();

const detail = 12;
const geometry = new THREE.IcosahedronGeometry(1, detail);
const material = new THREE.MeshStandardMaterial({
    map: loader.load("./textures/00_earthmap1k.jpg"),
});
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);


const lightsMat = new THREE.MeshBasicMaterial({
    map: loader.load("./textures/03_earthlights1k.jpg"),
    blending: THREE.AdditiveBlending,
});

// const lightsMash = new THREE.Mesh(geometry, lightsMat);
// earthGroup.add(lightsMash);

const cloudsMat = new THREE.MeshStandardMaterial({
    map: loader.load("./textures/won/mycloud-won.jpg"),
    blending: THREE.AdditiveBlending,
});

const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
cloudsMesh.scale.setScalar(1.003);
earthGroup.add(cloudsMesh);

const starfield = getStarfield({ numStars: 1000 });
scene.add(starfield);

// const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
// scene.add(hemiLight);

// const lightsMash = new THREE.Mesh(geometry, lightsMat);
// earthGroup.add(lightsMash);


const sunLight = new THREE.DirectionalLight(0xffffff, 1);
sunLight.position.set(-2, 0.5, 1.5);
scene.add(sunLight);

// --- SUN ---
const sunGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xf7f7f7,
    // emissive: 0xFFFF66,
    emissiveIntensity: 1,
});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
sunMesh.position.set(-5, 0.5, 1.5);
scene.add(sunMesh);

// Optional: Add a point light for a glowing effect
const sunPointLight = new THREE.PointLight(0xFFFACD, 2, 10);
sunPointLight.position.copy(sunMesh.position);
scene.add(sunPointLight);



function animate() {
    requestAnimationFrame(animate);
    // earthMesh.rotation.x += 0.001;
    // earthMesh.rotation.y += 0.002;
    // earthGroup.rotation.y += 0.001;
    earthMesh.rotation.y += 0.002;
    // lightsMash.rotation.y += 0.002;
    cloudsMesh.rotation.y += 0.002;
    renderer.render(scene, camera);
}

animate();


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);