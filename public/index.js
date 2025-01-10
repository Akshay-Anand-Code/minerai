// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Geometry and Material
const geometry = new THREE.PlaneGeometry(40, 20, 100, 50); // Plane with width, height, widthSegments, heightSegments
const material = new THREE.MeshBasicMaterial({
  color: 0x00aaff,
  wireframe: true,
  transparent: true,
  opacity: 0.7,
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Position and Rotation
plane.rotation.x = -Math.PI / 2;
camera.position.set(0, 15, 30);
camera.lookAt(0, 0, 0);

// Extract the position attribute (modern Three.js uses BufferGeometry)
const position = geometry.attributes.position;
const vertices = position.array;

// Store the original positions for the wave animation
const originalPositions = vertices.slice();

// Animation Function
const clock = new THREE.Clock();

function animateWave() {
  const elapsedTime = clock.getElapsedTime();

  // Loop through the vertices and apply wave motion
  for (let i = 0; i < vertices.length; i += 3) {
    const x = originalPositions[i];
    const y = originalPositions[i + 1];
    const z = originalPositions[i + 2];

    // Update the z-value for wave motion
    vertices[i + 2] =
      Math.sin(x * 0.5 + elapsedTime) * 2 +
      Math.cos(y * 0.3 + elapsedTime) * 2;
  }

  position.needsUpdate = true; // Mark attribute as updated

  renderer.render(scene, camera);
  requestAnimationFrame(animateWave);
}

// Resize Handler
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start Animation
animateWave();
