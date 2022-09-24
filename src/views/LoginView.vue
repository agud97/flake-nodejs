<template>
  <div class="home">
    <div class="main">
      <img
        width="350"
        height="68"
        alt="logo"
        src="../assets/svg/logo.svg"
      >
      <div class="name">
        Ремультиплексор
      </div>
      <div class="name">
        SL_RM45870
      </div>
      <form
        class="registration-form"
        @submit.prevent="authHandler"
      >
        <input
          aria-label="Имя пользователя"
          autocomplete="new-password"
          type="text"
          placeholder="Имя пользователя"
        >
        <input
          aria-label="Пароль"
          autocomplete="new-password"
          type="password"
          placeholder="Пароль"
        >
        <button type="submit">
          Войти
        </button>
      </form>
    </div>
    <div class="info">
      <div class="general-status">
        <div>
          Общий статус:
        </div>
        <div class="system item">
          Система
        </div>
        <div class="item">
          PSU#1
        </div>
        <div class="item">
          PSU#2
        </div>
      </div>
      <div class="general-system-info">
        <div class="system-info">
          Информация о системе:
        </div>
        <div>Шасси: H3C VX-15TRG </div>
        <div>Процессор: Xeon 5673 </div>
        <div>Оперативная память: 256GB</div>
        <div>HDD: 2TB</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const authHandler = () => {
  router.push({ name: 'menu' });
};
</script>
<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
.home
  font-size: 24px
.main
  padding-top: 40px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .name
    display: flex
    font-size: 64px
    height: 60px
    justify-content: center
    align-items: center
  .registration-form
    display: flex
    flex-direction: column
    input
      width: 400px
      height: 50px
      padding: 5px 12px
      margin-top: 30px
    button
      margin-top: 30px
      margin-left: auto
      font-size: 16px
      width: 200px
.info
  margin-top: 60px
  display: flex
  justify-content: space-between
  margin-left: 105px
  margin-right: 105px
  .general-status
    .item
      margin-top: 10px
      display: flex
      justify-content: center
      align-items: center
      margin-right: 20px
      background: $green
      width: 120px
      height: 40px
      border-radius: 15px
      color: white
    .system
      margin-top: 20px
      margin-bottom: 25px
  .general-system-info
    .system-info
      margin-bottom: 20px

</style>
