<template>
  <div class="scene-container" ref="sceneContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { NavigatorGizmo } from 'threejs-navigator-gizmo';
import { useSceneStore } from '../stores/scene';
import { ObjectType } from '../utils/constants';

const sceneContainer = ref<HTMLDivElement | null>(null);
const sceneStore = useSceneStore();

onMounted(() => {
  const initScene = (): THREE.Scene => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);
    sceneStore.initializeScene(scene);

    return scene;
  };

  const initCamera = (): THREE.PerspectiveCamera => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(2, 2, 5);

    return camera;
  };

  const initRenderer = (): THREE.WebGLRenderer => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    if (sceneContainer.value) {
      (sceneContainer.value as HTMLDivElement).appendChild(renderer.domElement);
    }

    return renderer;
  };

  const initLights = (scene: THREE.Scene): THREE.DirectionalLight => {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    return directionalLight;
  };

  const initGridHelper = (scene: THREE.Scene): THREE.GridHelper => {
    const gridSize = 10;
    const gridDivisions = 10;
    const gridColor1 = 0x888888;
    const gridColor2 = 0x444444;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, gridColor1, gridColor2);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    return gridHelper;
  };

  const initControls = (camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer): OrbitControls => {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    return controls;
  };

  const createLine = (event: MouseEvent): void => {
    if (!sceneContainer.value) return;

    const rect = (sceneContainer.value as HTMLDivElement).getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const model = sceneStore.getModel();

    if (model) {
      const intersects = raycaster.intersectObjects(model.children, true);

      if (intersects.length > 0) {
        const intersectPoint = intersects[0].point;
        const sphereGeometry = new THREE.SphereGeometry(0.02, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.name = ObjectType.Point;
        sphere.position.copy(intersectPoint);
        scene.add(sphere);

        sceneStore.addPoint(intersectPoint);
        const points = sceneStore.points;

        if (points.length > 1) {
          const prevPoint = points[points.length - 2];
          const currentPoint = points[points.length - 1];
          const geometry = new THREE.BufferGeometry().setFromPoints([prevPoint, currentPoint]);
          const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
          const line = new THREE.Line(geometry, lineMaterial);
          line.name = ObjectType.Line;
          scene.add(line);

          sceneStore.addLine(prevPoint, currentPoint);
        }
      } else {
        console.warn('Нет пересечений!');
      }
    }
  };

  const scene = initScene();
  const camera = initCamera();
  const renderer = initRenderer();
  initLights(scene);
  initGridHelper(scene);
  const controls = initControls(camera, renderer);
  const gizmo = new NavigatorGizmo(camera, renderer, { paddingX: 1200, paddingY: 100 });
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const animate = () => {
    requestAnimationFrame(animate);
    sceneStore.updateCameraPosition(camera.position);
    controls.update();
    renderer.render(scene, camera);
    gizmo.update();
  };

  animate();

  window.addEventListener('click', createLine);
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<style scoped>
.scene-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>
