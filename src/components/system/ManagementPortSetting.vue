<template>
  <div class="management-port-setting">
    <div class="management-port-setting__block">
      Расположение и назначение портов
    </div>
    <div class="menu">
      <div
        class="menu-item"
        :style="selectedMenu===1 ? {}:{opacity:'0.3'}"
        @click="selectedMenu = 1"
      >
        Конфигурация
      </div>
      <div
        class="menu-item"
        :style="selectedMenu===2 ? {}:{opacity:'0.3'}"
        @click="selectedMenu = 2"
      >
        Маршруты
      </div>
    </div>
    <div
      v-if="selectedMenu===1"
      class="management-port-setting__block configuration"
    >
      <div class="management-port-setting__block-item">
        <label>IP адрес</label>
        <input type="text">
      </div>
      <div class="management-port-setting__block-item">
        <label>IP маска</label>
        <input type="text">
      </div>
      <div class="management-port-setting__block-item">
        <label>Default gateway</label>
        <input type="text">
      </div>
      <div class="management-port-setting__block-item">
        <label>MAC address</label>
        <input
          type="text"
          value="aa:ff:ge:fg:bd"
        >
      </div>
      <div class="management-port-setting__block-item">
        <label>Скорость интерфейса</label>
        <input type="text">
      </div>
      <div class="test-text">
        Тест доступности
      </div>
      <div style="display: flex;">
        <div class="test-item">
          8 . 8 . 8 . 8
        </div>
        <div class="test-item">
          Ping
        </div>
        <div class="test-item">
          Traceroute
        </div>
        <div class="test-item x">
          X
        </div>
      </div>
      <div class="test-item description">
        TTL 236 - 32мс
      </div>
    </div>
    <div
      v-else-if="selectedMenu===2"
      class="management-port-setting__block routes"
    >
      <div class="table">
        <table>
          <tr>
            <th>Destination</th>
            <th>Netmask</th>
            <th>Gateway</th>
            <th>Metric</th>
            <th>Interface</th>
          </tr>
          <tr>
            <td>Default</td>
            <td>Default</td>
            <td>172.30.4.1</td>
            <td>0</td>
            <td>Ethernet M.1</td>
          </tr>
          <tr>
            <td>Default</td>
            <td>Default</td>
            <td>172.30.4.1</td>
            <td>0</td>
            <td>Ethernet M.1</td>
          </tr>
        </table>
      </div>
      <div class="btns">
        <button>Применить</button>
        <button>Обновить</button>
        <button>Добавить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedMenu = ref(1);
</script>

<style scoped lang="sass">
@import "@/assets/sass/_var.module.sass"
.management-port-setting
  &__block
    padding: 10px
    background: #232629
    border-radius: 5px
    border: 1px solid $border
    &-item
      margin-top: 10px
      display: flex
      justify-content: space-between
      align-items: center
    .test-text
      margin-top: 20px
      color: white
      text-align: center
    .test-item
      padding: 3px
      border-radius: 3px
      color: $inputFontColor
      border: 1px solid $border
      width: 30%
      background-color: $inputBgColor
      appearance: none
      height: 30px
      margin-right: 20px
      text-align: center
      margin-top: 10px
    .test-item.x
      margin-right: 0
      width: 70px
    .test-item.description
      width: 100%
      height: 80px
      text-align: left
    &:first-child
      height: 150px
  .menu
    display: flex
    margin-top: 30px
    .menu-item
      cursor: pointer
      background: #393e44
      margin-left: 30px
      padding: 5px 15px
      border: 1px solid $border
      border-top-left-radius: 4px
      border-top-right-radius: 4px
  .table
    margin-top: 5px
    padding: 15px
    background: $inputBgColor
    border-radius: 5px
    border: 1px solid $border
  .btns
    margin-top: 10px
    display: flex
    justify-content: flex-end
    button
      margin-left: 10px
</style>
