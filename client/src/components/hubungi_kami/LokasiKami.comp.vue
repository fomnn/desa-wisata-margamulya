<script setup lang="ts">
import { ref } from 'vue'

const center = ref([107.46121518230963, -7.132045562984563])
const projection = ref('EPSG:4326')
const zoom = ref(14.02)
const rotation = ref(0)

const currentCenter = ref(center.value)
const currentZoom = ref(zoom.value)
const currentRotation = ref(rotation.value)
const currentResolution = ref(0)

function resolutionChanged(event: Event) {
  currentResolution.value = (event.target as any).getResolution()
  currentZoom.value = (event.target as any).getZoom()
}
function centerChanged(event: Event) {
  currentCenter.value = (event.target as any).getCenter()
}
function rotationChanged(event: Event) {
  currentRotation.value = (event.target as any).getRotation()
}
</script>

<template>
  <!-- <form>
    <label for="zoom">Zoom:</label>
    <input type="number" id="zoom" v-model="zoom" />
  </form> -->

  <div class="border border-zinc-400 rounded-xl overflow-hidden">
    <ol-map style="height: 400px">
      <ol-view
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
        @change:center="centerChanged"
        @change:resolution="resolutionChanged"
        @change:rotation="rotationChanged"
      />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <ol-rotate-control />
      <ol-interaction-link />
    </ol-map>
  </div>

  <!-- <ul>
    <li>center : {{ currentCenter }}</li>
    <li>resolution : {{ currentResolution }}</li>
    <li>zoom : {{ currentZoom }}</li>
    <li>rotation : {{ currentRotation }}</li>
  </ul> -->
</template>

<style scoped>
.ol-map {
  position: relative;
}
.ol-map-loading:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin-top: -40px;
  margin-left: -40px;
  border-radius: 50%;
  border: 5px solid rgba(180, 180, 180, 0.6);
  border-top-color: var(--vp-c-brand-1);
  animation: spinner 0.6s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
