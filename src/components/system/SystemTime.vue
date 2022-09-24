<template>
  <div class="system-time">
    <div class="system-time__block">
      Платы ввод-вывода
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
@import "@/assets/sass/_var.module.sass"
.system-time
  height: 100%
  &__block
    height: 100%
    margin-top: 30px
    padding: 10px
    background: #232629
    border-radius: 5px
    border: 1px solid $border
    &-item
      margin-top: 5px
  &__block:first-child
    margin-top: 0
</style>
