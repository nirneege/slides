<template>
  <div id="particle-bg" ref="particleBg"></div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { onSlideEnter, useIsSlideActive } from '@slidev/client'

const particleBg = ref(null);
const isSlideActive = useIsSlideActive();
const isParticleBgActive = ref(false);

const showParticleBg = () => {
  if (particleBg.value && isSlideActive.value && !isParticleBgActive.value) {
    particleground(particleBg.value, {
      density: 10000,
      dotColor: '#aaaaaa',
      lineColor: '#cccccc',
      proximity: 100,
      particleRadius: 4,
      curvedLines: false,
      parallax: false,
    });
    isParticleBgActive.value = true;
  }
}

// ResizeObserver を使用して要素のサイズ変化を監視
const resizeObserver = new ResizeObserver(() => {
  showParticleBg();
});

onMounted(() => {
  if (particleBg.value) {
    resizeObserver.observe(particleBg.value);
  }
});

onUnmounted(() => {
  if (particleBg.value) {
    resizeObserver.unobserve(particleBg.value);
  }
});

</script>

<style scoped>
#particle-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
