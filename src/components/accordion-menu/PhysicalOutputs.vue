<template>
  <MenuMain>
    <template #interfaces />

    <template #description />

    <template #conflicts>
      Установленное значение превышает производительность карты
    </template>
  </MenuMain>
</template>

<script lang="ts" setup>
import MenuMain from './MenuMain.vue';

</script>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
</style>
