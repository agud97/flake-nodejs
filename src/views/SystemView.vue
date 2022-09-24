<template>
  <div class="system-view">
    <MainHeader />
    <div class="main">
      <div class="nav">
        <div
          v-for="(groupMenuName, index) in menuNames"
          :key="index"
          class="group-menu-names"
        >
          <div
            v-for="menuName in groupMenuName"
            :key="menuName"
            class="menu-name"
            :style="selectedMenu === menuName ? {background: sassVar.colorHover} : {}"
          >
            <div
              @click="menuCLickHandler(menuName)"
            >
              {{ menuName }}
            </div>
          </div>
        </div>
      </div>
      <div class="description">
        <SystemInfo v-if="selectedMenu === 'Информация о системе'" />
        <GeneralSettings v-if="selectedMenu === 'Общие настройки'" />
        <SystemTime v-if="selectedMenu === 'Время / NTP'" />
        <EquipmentManagement v-if="selectedMenu === 'Управление оборудованием'" />
        <ManagementPortSetting v-if="selectedMenu === 'Настройка менеджмент-порта'" />
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue';
import SystemInfo from '@/components/system/SystemInfo.vue';
import GeneralSettings from '@/components/system/GeneralSettings.vue';
import { ref } from 'vue';
import SystemTime from '@/components/system/SystemTime.vue';
import EquipmentManagement from '@/components/system/EquipmentManagement.vue';
import ManagementPortSetting from '@/components/system/ManagementPortSetting.vue';
import MainFooter from '@/components/MainFooter.vue';
import sassVar from '@/assets/sass/_var.module.sass';

const menuNames = [
  ['Информация о системе',
    'Общие настройки',
    'Время / NTP',
    'Управление оборудованием'],
  ['Настройка менеджмент-порта',
    'Управление конфигурациями ',
    'Обновления',
    'Работа в группе'],
  ['Настройка журналов событий',
    'Аварии',
    'События'],
  ['Пользователи и права'],

];
const selectedMenu = ref('Информация о системе');
const menuCLickHandler = (menu:string) => {
  selectedMenu.value = menu;
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
.system-view
  height: 100vh
.main
  height: calc(100% - 100px)
  margin-top: 10px
  margin-bottom: 10px
  width: 100%
  border-radius: 15px
  transition: all 0.3s linear
  display: flex
  flex-direction: row
  font-size: 18px
  .nav
    background: $secondBodyBgColor
    height: 100%
    width: 20%
    border-radius: 15px
    overflow: auto
    border: 1px solid $border
    .group-menu-names
      margin-left: 10px
      margin-top: 15px
      margin-right: 10px
      border-top: 1px solid $border
      padding-top: 10px
      .menu-name
        margin-top: 5px
        cursor: pointer
        padding: 5px
        border-radius: 5px
        &:hover
          background: $colorHover

  .description
    padding: 15px
    margin-left: 10px
    background: $secondBodyBgColor
    height: 100%
    width: calc(80% - 15px)
    border-radius: 15px
    overflow: auto
    border: 1px solid $border

</style>
