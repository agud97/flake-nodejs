<template>
  <header class="header">
    <div class="nav">
      <img
        alt="menu"
        class="hamburger-menu"
        src="@/assets/svg/hamburger-menu.svg"
        @click="openMenu"
      >
      <img
        alt="logo"
        class="logo"
        width="150"
        height="30"
        src="@/assets/svg/logo.svg"
      >
      <div class="name">
        Ремультиплексор SL_RM45870
      </div>
      <img
        alt="arrow"
        class="arrow"
        width="15"
        height="15"
        src="@/assets/svg/arrow.svg"
      >
    </div>
    <div class="state">
      <div class="state-items">
        <div class="state-item">
          <div class="text">
            SL-mux_MSKlab
          </div>
          <img
            alt="server-environment"
            class="server-environment"
            height="20"
            src="@/assets/svg/header/server-environment.svg"
          >
        </div>
        <div class="state-item">
          <div class="text">
            Москва, Дубовой Рощи 25к3
          </div>
          <img
            alt="place"
            class="place"
            height="20"
            src="@/assets/svg/header/place.svg"
          >
        </div>
      </div>
      <div class="state-items">
        <div class="state-item">
          <div class="text">
            Система
          </div>
          <div class="status good" />
        </div>
        <div class="state-item">
          Пользователь: Админ
        </div>
      </div>
      <div class="state-items">
        <div class="state-item">
          <div class="text">
            БП#1
          </div>
          <div class="status good" />
        </div>
        <div class="state-item">
          <div class="text">
            БП#2
          </div>
          <div class="status good" />
        </div>
      </div>
    </div>
  </header>
  <div
    ref="menuRef"
    class="menu"
  >
    <router-link to="/login">
      Выйти
    </router-link>
    <router-link to="/system">
      Система
    </router-link>
    <router-link to="/menu">
      Меню
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

const menuRef: Ref<HTMLDivElement | null> = ref(null);
const openMenu = () => {
  if (menuRef.value) {
    if (menuRef.value.style.display === 'flex') {
      menuRef.value.style.display = 'none';
    } else menuRef.value.style.display = 'flex';
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
.menu
  position: absolute
  width: fit-content
  height: fit-content
  left: 40px
  top: 40px
  display: none
  flex-direction: column
  background: $headerColor
  z-index: 100
  border: 1px solid $border
  border-radius: 5px
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2)
  a
    padding: 12px 24px
    margin: 0 16px
    border-bottom: 2px solid rgba(0, 0, 0, 0.1)
    text-decoration: none
    text-align: center
    transition: filter 200ms linear 0s
    &:hover
      filter: brightness(200%)
.header
  padding-left: 30px
  padding-right: 30px
  background: $headerColor
  width: 100%
  height: 50px
  display: flex
  align-items: center
  justify-content: space-between
  .nav
    display: flex
    align-items: center
  .hamburger-menu
    cursor: pointer
  .logo
    margin-right: 20px
  .arrow
    margin-bottom: 3px
    margin-left: 4px
  .state
    display: flex
    .state-items
      display: flex
      flex-direction: column
      margin: 10px 0
      padding: 0 15px
      align-items: flex-end
      border-right: 1px solid white
      .state-item
        display: flex
        justify-content: center
        align-items: center
        .text
          margin-right: 10px
        &:nth-child(2)
          margin-top: 5px
      &:last-child
        border-right: none

</style>
