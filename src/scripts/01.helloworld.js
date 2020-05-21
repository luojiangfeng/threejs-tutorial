import * as THREE from 'three';
import '../style/index.less';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: document.getElementById("renderCanvas")
});
renderer.setSize(window.innerWidth, window.innerHeight);


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();