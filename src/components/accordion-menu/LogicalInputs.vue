<template>
  <MenuMain>
    <template #interfaces>
      <div class="interfaces">
        <ul>
          <li
            v-for="logicalInput in logicalInputs"
            :key="logicalInput.id"
            :style="logicalInputStyle(logicalInput.name)"
            @click="selectLogicalInput(logicalInput)"
          >
            {{ logicalInput.name }}
          </li>
        </ul>
        <div class="plus">
          <div class="plus__text">
            +
          </div>
        </div>
      </div>
    </template>

    <template #description>
      <div class="description">
        <div class="description-name">
          {{ selectedLogicalInput.name }}
          <div class="description-more">
            ...
          </div>
        </div>
        <div class="description__block">
          <div>Активирован: Да Нет</div>
        </div>
        <div class="description__block">
          <div class="description-input">
            <label for="main-physical-input">Основной физический вход</label>
            <select id="main-physical-input">
              <option value="port1">
                Port#1-SAT1_MUX1
              </option>
              <option value="port2">
                Port#2
              </option>
              <option value="port3">
                Port#3
              </option>
            </select>
          </div>
        </div>
        <div class="border-top" />
        <div class="description__block">
          <div class="description-input">
            <label for="backup-physical-input">Резервный физический вход</label>
            <select id="backup-physical-input">
              <option value="eth1">
                Eth#1_Synterra_TVO
              </option>
              <option value="eth2">
                Eth#2_VGTRK_REG_main
              </option>
              <option value="eht3">
                Eth#3_R24_REG_main
              </option>
            </select>
          </div>
          <div class="yellow">
            <div class="description-input">
              <label for="multi-ip-address">Мультикаст IP адрес</label>
              <input
                id="multi-ip-address"
                type="text"
              >
            </div>
            <div class="description-input">
              <label for="source-ip-address">IP адрес источника</label>
              <input
                id="source-ip-address"
                type="text"
              >
            </div>
            <div class="description-input">
              <label for="receive-udp-port">Приемный UDP порт</label>
              <input
                id="receive-udp-port"
                type="text"
              >
            </div>
            <div class="description-input mt25">
              <label for="decapsulation-mode">Режим декапсуляции</label>
              <select id="decapsulation-mode">
                <option value="eth1">
                  MPEG
                </option>
                <option value="eth2">
                  UDP
                </option>
                <option value="eht3">
                  IP
                </option>
              </select>
            </div>
            <div class="description-input">
              <label for="FEC-module">Модуль FEC</label>
              <select id="FEC-module">
                <option value="eth1">
                  не использовать
                </option>
                <option value="eth2">
                  использовать
                </option>
              </select>
            </div>
            <div class="description-input">
              <label for="recovery">Восстановление несущей</label>
              <select id="recovery">
                <option value="eth1">
                  adaptive PLL (PCR only)
                </option>
                <option value="eth2">
                  adaptive PLL (PCR only)
                </option>
              </select>
            </div>
            <div class="description-input mt25">
              <label for="delay-deviation">Допустимая девиация задержки</label>
              <div>
                <input
                  id="delay-deviation"
                  v-model.number="delayDeviation"
                  type="range"
                  min="0"
                  max="200"
                  class="range-input"
                >
                <input
                  v-model.number="delayDeviation"
                  type="text"
                  class="number-input"
                >
              </div>
            </div>
            <div class="description-input">
              <label for="packet-renderer">Допустимый рендер пакетов</label>
              <div>
                <input
                  id="packet-renderer"
                  v-model.number="packetRenderer"
                  type="range"
                  min="0"
                  max="200"
                  class="range-input"
                >
                <input
                  v-model.number="packetRenderer"
                  class="number-input"
                  type="text"
                >
              </div>
            </div>
            <div class="description-input">
              <label for="flow-rate">Скорость потока, bps</label>
              <input
                id="flow-rate"
                type="text"
              >
            </div>
          </div>
        </div>
        <div class="border-top" />
        <div class="description__block">
          Поведение
          <div class="description-input">
            <label for="switching-to-backup">Переход на резервный вход</label>
            <select id="switching-to-backup">
              <option value="eth1">
                Событие 1
              </option>
              <option value="eth2">
                Событие 2
              </option>
            </select>
          </div>
          <div class="description-input">
            <label for="returning">Возврат</label>
            <select id="returning">
              <option value="eth1">
                Никогда
              </option>
              <option value="eth2">
                Всегда
              </option>
            </select>
          </div>
          <div class="description-input btn">
            <button>
              Применить
            </button>
          </div>
        </div>
      </div>
    </template>

    <template #conflicts>
      Логический вход
    </template>
  </MenuMain>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import sassVar from '@/assets/sass/_var.module.sass';
import MenuMain from './MenuMain.vue';

interface logicalInputInterface{
  name:string,
  id:number
}

const logicalInputs = [
  { name: 'MUX#1_PLP1', id: 1 },
  { name: 'VGTRK_REG', id: 2 },
  { name: 'R24_REG', id: 3 },
  { name: 'OTR_REG', id: 4 },
  { name: 'RADIO_REG', id: 5 },
  { name: 'Источник ГО и ЧС', id: 6 },

];
const delayDeviation = ref(0);
const packetRenderer = ref(0);
const selectedLogicalInput:Ref<logicalInputInterface> = ref(logicalInputs[0]);

const selectLogicalInput = (logicalInput:logicalInputInterface) => {
  selectedLogicalInput.value = logicalInput;
};
const logicalInputStyle = (name:string) => (selectedLogicalInput.value.name
=== name ? { background: sassVar.colorHover } : {});

</script>

<style lang="sass" scoped>
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
  &__block:last-child
    border-bottom: none
  &__block
    padding-bottom: 25px
    margin-top: 25px
    border-bottom: 1px solid $lineColor
    .yellow
      margin-top: 10px
      background: #232629
      padding: 10px
      .description-input
        margin-top: 10px
      .description-input.mt25
        margin-top: 25px
    .description-input.btn
      justify-content: flex-end
  &-input
    margin-top: 15px
    display: flex
    justify-content: space-between
    align-items: center
    .range-input
      width: 200px
    .number-input
      margin-left: 20px
      width: 80px
      text-align: center
  .border-top
    margin-top: 4px
    border-top: 1px solid $lineColor
.interfaces
  position: relative
  overflow: hidden
  padding-left: 15px
  &:before
    content: ""
    position: absolute
    height: 1000px
    width: 1px
    background: $lineColor
    left: 19px
  ul
    margin-left: 5px
    overflow: hidden
    li
      margin-top: 3px
      cursor: pointer
      position: relative
      padding-left: 17px
      &:hover
        background: $colorHover
      &::before
        content: ""
        display: block
        position: absolute
        left: 0
        bottom: .5em
        width: 15px
        height: 0
        border-bottom: 1px solid $lineColor
.plus
  margin-top: 25px
  position: relative
  right: 10px
  cursor: pointer
  .plus__text
    display: flex
    justify-content: center
    align-items: center
    background: white
    color: #000
    font-weight: 600
    width: 30px
    height: 30px
    font-size: 30px
    border-radius: 100%
    &:hover
      background: $colorHover
</style>
