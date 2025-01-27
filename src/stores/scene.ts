import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref, Ref } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { ObjectType } from '../utils/constants';

interface CameraPosition {
  x: number;
  y: number;
  z: number;
}

interface Line {
  from: THREE.Vector3;
  to: THREE.Vector3;
  distance: number;
}

export const useSceneStore = defineStore('sceneStore', () => {
  let scene: THREE.Scene | null = null;
  let model: THREE.Object3D | null = null;

  const lines: Ref<Line[]> = ref([]);
  const points: Ref<THREE.Vector3[]> = ref([]);
  const cameraPosition: Ref<CameraPosition> = ref({ x: 0, y: 0, z: 0 });

  const initializeScene = (threeScene: THREE.Scene): void => {
    scene = threeScene;
  };

  const getModel = (): THREE.Object3D | null => model;

  const loadModel = (modelUrl: string): void => {
    if (!scene) {
      console.error('Сцена не инициализирована!');
      return;
    }

    removeModel();

    const loader = new GLTFLoader();

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        model.rotation.x = THREE.MathUtils.degToRad(54);
        model.position.set(0, 0.128, 0);
        model.name = 'Model';

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              roughness: 0.5,
              metalness: 0.5,
              shadowSide: THREE.FrontSide,
            });
          }
        });

        scene?.add(model);
        console.log('Модель загружена:', model);
      },
      undefined,
      (error) => {
        console.error('Ошибка при загрузке модели:', error);
      }
    );
  };

  const clearLines = (): void => {
    if (!scene) return;

    for (let i = scene.children.length - 1; i >= 0; i--) {
      const child = scene.children[i];
      if (child.name === ObjectType.Point || child.name === ObjectType.Line) {
        scene.remove(child);
      }
    }

    lines.value = [];
    points.value = [];
  };

  const removeModel = (): void => {
    if (scene && model) {
      scene.remove(model);
      model = null;
      clearLines();
    }
  };

  const addLine = (from: THREE.Vector3, to: THREE.Vector3): void => {
    const distance = from.distanceTo(to);
    lines.value = [...lines.value, { from, to, distance }];
  };

  const addPoint = (point: THREE.Vector3): void => {
    points.value.push(point);
  };

  const updateCameraPosition = (position: CameraPosition): void => {
    const { x, y, z } = cameraPosition.value;

    if (x !== position.x || y !== position.y || z !== position.z) {
      cameraPosition.value = { ...position };
    }
  };

  return {
    initializeScene,
    loadModel,
    removeModel,
    getModel,
    addLine,
    lines,
    updateCameraPosition,
    cameraPosition,
    addPoint,
    points,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSceneStore, import.meta.hot));
}
