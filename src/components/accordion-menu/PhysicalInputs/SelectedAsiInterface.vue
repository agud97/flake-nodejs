<template>
  <div class="description-name">
    {{ selectedAsiInterface.name }}
    <div class="description-more">
      ...
    </div>
  </div>
  <div class="description__block status">
    <div>Статус:</div>
    <div>активна </div>
    <div>зеленый</div>
  </div>
  <div class="description__block">
    <div class="description-header">
      Информация о системе:
    </div>
    <div>
      Серийный номер: {{ props.selectedAsiInterface.serialNumber }}
    </div>
    <div>
      Версия ПО платы: {{ selectedAsiInterface.poVer }}
    </div>
    <div>
      Слот: {{ selectedAsiInterface.slot }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  selectedAsiInterface: {
    name: string,
    serialNumber: string,
    poVer: string,
    slot: string,
    ports: {
      id: number,
      name: string,
      in: boolean,
    }[];
  },
}
const props = defineProps<Props>();
</script>

<style scoped lang="sass">
@import "@/assets/sass/_var.module.sass"
.description
  &-name
    display: flex
    color: $whiteFont
  &-more
    display: flex
    justify-content: center
    align-items: center
    width: 30px
    height: 20px
    background: #232629
    opacity: 0.5
    border: 1px solid $border
    border-radius: 5px
    margin-left: 10px
    cursor: pointer
  &__block
    padding-bottom: 25px
    margin-top: 25px
    border-bottom: 1px solid $lineColor
  .status
    display: flex
    justify-content: space-between
    .header
      margin-bottom: 10px
</style>
