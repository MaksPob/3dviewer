<template>
  <div class="camera-coordinates">
    <p>Координаты камеры:</p>
    <ul>
      <li>X: {{ cameraPosition.x.toFixed(2) }}</li>
      <li>Y: {{ cameraPosition.y.toFixed(2) }}</li>
      <li>Z: {{ cameraPosition.z.toFixed(2) }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSceneStore } from '../stores/scene';

const sceneStore = useSceneStore();
const cameraPosition = computed(() => sceneStore.cameraPosition);
</script>

<style scoped>
.camera-coordinates {
  position: fixed;
  right: 10px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
}
</style>
