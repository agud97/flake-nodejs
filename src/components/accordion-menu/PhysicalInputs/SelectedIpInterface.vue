<template>
  <div class="description">
    <div class="description-name">
      Eth#{{ getEthName() }}
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
        Плата: {{ props.selectedIpInterface.board }}
      </div>
      <div>
        Порт: {{ props.selectedIpInterface.id }}
      </div>
    </div>
    <div class="settings">
      <div class="description-input">
        <label for="speed-select">Скорость интерфейса</label>
        <select id="speed-select">
          <option value="">
            10/100 Mbps
          </option>
          <option value="">
            10/100 Mbps
          </option>
          <option value="">
            10/100 Mbps
          </option>
        </select>
      </div>
      <div class="description-input">
        <label for="ip-address">IP address</label>
        <input
          id="ip-address"
          type="text"
        >
      </div>
      <div class="description-input">
        <label for="subnet-mask">Маска подсети</label>
        <input
          id="subnet-mask"
          type="text"
        >
      </div>
      <div class="description-input">
        <label for="IGMP-protocol">IGMP протокол</label>
        <input
          id="IGMP-protocol"
          type="text"
        >
      </div>
      <div class="description-input">
        <label for="shaping">Shaping</label>
        <input
          id="shaping"
          type="text"
        >
      </div>
      <div class="description-input">
        <label for="bitrate-limit">Ограничение битрейта</label>
        <input
          id="bitrate-limit"
          type="text"
        >
      </div>
      <div class="description-input">
        <label for="parameter">Параметр 1</label>
        <input
          id="parameter"
          type="text"
        >
      </div>
      <div class="description-input btn">
        <button @click="clickHandler">
          Применить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  selectedIpInterface:{
    id: number,
    name: string,
    board: string
  }
}
const props = defineProps<Props>();

const getEthName = () => {
  if (props.selectedIpInterface) {
    if (props.selectedIpInterface.name) {
      return `${props.selectedIpInterface.id}_${props.selectedIpInterface.name}`;
    }
    return props.selectedIpInterface.id;
  }
  return '';
};
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
  .status
    display: flex
    justify-content: space-between
  .settings
    margin-top: 25px
    select
      margin-left: 10px
    .description-input
      margin-top: 15px
      display: flex
      justify-content: space-between
      align-items: center
    .description-input.btn
      justify-content: flex-end
</style>
