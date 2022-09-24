<template>
  <div class="description-name">
    Port#{{ selectedPort.name ? selectedPort.id+'_'+selectedPort.name : selectedPort.id }}
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
      Плата: {{ selectedAsiInterfaceName }}
    </div>
    <div>
      Порт: {{ selectedPort.id }}
    </div>
  </div>
  <div
    v-if="!props.selectedPort.in"
    class="change-input"
  >
    <div class="question">
      Сконфигурировать как вход?
    </div>

    <button @click="clickHandler">
      Применить
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  selectedPort: {
    id:number,
    name:string,
    in:boolean
  },
  selectedAsiInterfaceName: string | null
}
const props = defineProps<Props>();
const clickHandler = () => {
  fetch('/api/test', {
    method: 'POST',
    body: JSON.stringify({ a: 1, b: 2 }),
  });
};
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
  .change-input
    margin: 25px 0 0 0
    display: flex
    justify-content: center
    align-items: center
    .question
      margin-right: 25px
  .status
    display: flex
    justify-content: space-between
    .header
      margin-bottom: 10px
</style>
