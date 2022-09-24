<template>
  <div class="general-settings">
    <div class="general-settings__block">
      <div class="general-settings__block-item">
        <label for="logical-name">Логическое имя устройства</label>
        <input
          id="logical-name"
          type="text"
        >
      </div>
      <div class="general-settings__block-item">
        <label for="location-city">Город размещения</label>
        <input
          id="location-city"
          type="text"
        >
      </div>
      <div class="general-settings__block-item">
        Специалист в филиале
        <input
          type="text"
          aria-label="Имя"
          value="Егор Петров"
          style="width: 300px;"
        >
        <input
          type="phone"
          aria-label="Телефон"
          value="8-916-333-15-56"
          style="width: 300px;"
        >
        <input
          type="email"
          aria-label="Почта"
          style="width: 300px;"
          value="e.petrov@rtrn.ru"
        >
      </div>
    </div>
    <div class="general-settings__block">
      <div class="general-settings__block-item">
        Место размещения
      </div>
      <div class="general-settings__block-item">
        <label for="equipment-room ">Аппаратная</label>
        <input
          id="equipment-room "
          type="text"
        >
      </div>
      <div class="general-settings__block-item">
        <label for="rack">Стойка</label>
        <input
          id="rack"
          type="text"
        >
      </div>
      <div class="general-settings__block-item">
        <label for="unit">Юнит</label>
        <input
          id="unit"
          type="text"
        >
      </div>
    </div>
    <div class="general-settings__button">
      <button> Применить </button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
@import "@/assets/sass/_var.module.sass"
.general-settings
  &__block
    margin-top: 30px
    padding: 10px
    background: #232629
    border-radius: 5px
    border: 1px solid $border
    &-item
      margin-top: 10px
      display: flex
      justify-content: space-between
      align-items: center
      input
        width: 700px
    &:first-child
      margin-top: 0
  &__button
    display: flex
    justify-content: flex-end
    margin-top: 30px
</style>
