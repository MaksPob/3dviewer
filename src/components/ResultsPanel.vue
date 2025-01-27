<template>
  <q-card>
    <q-card-section class="section-limited">
      <div class="text-h6">Результаты</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="section-limited section-limited-info">
      <q-list dense>
        <q-item v-for="(line, index) in lines" :key="index">
          <q-item-section>
            <div>От: ({{ line.from.x.toFixed(2) }}, {{ line.from.y.toFixed(2) }}, {{ line.from.z.toFixed(2) }})</div>
            <div>До: ({{ line.to.x.toFixed(2) }}, {{ line.to.y.toFixed(2) }}, {{ line.to.z.toFixed(2) }})</div>
            <div>Длина: {{ line.distance.toFixed(2) }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue';
import { useSceneStore } from '../stores/scene';

const sceneStore = useSceneStore();
const lines = computed(() => sceneStore.lines);
</script>

<style scoped>
  .section-limited {
    min-width: 200px;
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
  }
  .section-limited-info {
    height: 100vh;
    overflow-y: auto;
  }
</style>
