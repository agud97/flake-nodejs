<template>
  <div class="progress-bar">
    <div
      class="progress-line"
      :style="{ width: `${props.progress}%`, background: color}"
    />
    <div class="text">
      {{ props.progress }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import sassVar from '@/assets/sass/_var.module.sass';

interface Props {
  progress: number,
  status: string,
}
const props = defineProps<Props>();
// eslint-disable-next-line no-nested-ternary
const color = props.status === 'good' ? sassVar.green : props.status === 'normal' ? sassVar.yellow : sassVar.red;
</script>

<style scoped lang="sass">
@import "@/assets/sass/_var.module.sass"

.progress-bar
  position: relative
  width: 400px
  height: 32px
  background: gray
  color: black
  display: flex
  align-items: center
  border-radius: 5px
  border: 1px solid $border
  .text
    position: absolute
    left: 20px
  .progress-line
    border-radius: 5px
    height: 100%
</style>
