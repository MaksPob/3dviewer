<template>
  <q-page>
    <menu-controls />
    <div class="content">
      <camera-coordinates />
      <results-panel class="col-4" />
      <scene-view class="col-8" />
      <div></div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import SceneView from 'components/SceneView.vue';
import ResultsPanel from 'components/ResultsPanel.vue';
import CameraCoordinates from 'components/CameraCoordinates.vue';
import MenuControls from 'components/MenuControls.vue';
</script>

<style scoped>
  .content {
    display: flex;
  }
</style>
