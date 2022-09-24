<template>
  <div class="system-info">
    <div class="system-info__block">
      <div class="system-info__block-item">
        Устройство
      </div>
      <div class="system-info__block-item">
        Серийный номер (IDS)
      </div>
    </div>
    <div class="system-info__block">
      <div class="system-info__block-item">
        Логическое имя устройства
      </div>
      <div class="system-info__block-item">
        Место размещения
      </div>
    </div>
    <div class="system-info__block">
      <div class="system-info__block-item">
        Версия исполнительного устройства
      </div>
      <div class="system-info__block-item">
        Версия ПО управления
      </div>
    </div>
    <div class="system-info__state">
      <div class="system-info__state-item">
        Загрузка процессора (CPU usage)
        <ProgressBar
          :progress="cpuUsage.process"
          :status="cpuUsage.status"
        />
      </div>
      <div class="system-info__state-item">
        Загрузка памяти (RAM usage)
        <ProgressBar
          :progress="ramUsage.process"
          :status="ramUsage.status"
        />
      </div>
      <div class="system-info__state-item">
        Загрузка системы хранения
        <ProgressBar
          :progress="systemStorage.process"
          :status="systemStorage.status"
        />
      </div>
      <div class="system-info__state-item">
        Общее здоровье
        <ProgressBar
          :progress="generalHealth.process"
          :status="generalHealth.status"
        />
      </div>
      <div class="system-info__state-item">
        Системное время: DD/MM/YYYY HH:MM:SS
        <div class="time">
          09/04/2022 04:14:52
        </div>
      </div>
      <div class="system-info__state-item">
        Время непрерывной работы (uptime)
        <div class="time">
          {{ now }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProgressBar from '../ui/ProgressBar.vue';

const cpuUsage = { process: 50, status: 'good' };
const ramUsage = { process: 30, status: 'normal' };
const systemStorage = { process: 90, status: 'bad' };
const generalHealth = { process: 60, status: 'normal' };
const now = ref(new Date().toLocaleString());
</script>

<style scoped lang="sass">
@import "@/assets/sass/_var.module.sass"
.system-info
  &__block
    margin-top: 30px
    padding: 10px
    background: #232629
    border-radius: 5px
    border: 1px solid $border
    &-item
      margin-top: 5px
    &:first-child
      margin-top: 0
  &__state
    margin-top: 35px
    &-item
      margin-top: 20px
      display: flex
      justify-content: space-between
      align-items: center
    .time
      width: 400px
      height: 32px
      background: gray
      color: black
      border-radius: 5px
      border: 1px solid $border
      display: flex
      justify-content: center
      align-items: center
</style>
