<template>
  <div class="controls">
    <q-btn flat label="Модель 1" @click="loadModel('/tree.gltf')" class="q-mr-sm" />
    <q-btn flat label="Модель 2" @click="loadModel('/car.gltf')" class="q-mr-sm" />
    <q-btn flat label="Модель 3" @click="loadModel('/penguin.gltf')" class="q-mr-sm" />
    <q-btn flat label="Удалить модель" @click="removeModel" color="negative" />
  </div>
</template>

<script setup>
import { useSceneStore } from '../stores/scene';

const sceneStore = useSceneStore();

const loadModel = (modelUrl) => {
  sceneStore.loadModel(modelUrl);
};

const removeModel = () => {
  sceneStore.removeModel();
};
</script>

<style scoped></style>
