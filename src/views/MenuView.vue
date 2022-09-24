<template>
  <div class="menu-view">
    <MainHeader />
    <div
      v-if="!selectedMenu"
      class="menu"
    >
      <div
        v-for="(item, index) in menuTexts"
        :key="index"
        class="item"
        @click="selectMenu(index + 1)"
      >
        <div class="icon">
          <img
            width="100"
            class="hamburger-menu"
            :src="require(`@/assets/png/menu/${index + 1}.png`)"
            alt="icon"
          >
        </div>
        <div class="description">
          {{ menuTexts[index] }}
        </div>
      </div>
    </div>
    <div v-else>
      <MenuPage />
    </div>
    <MainFooter />
  </div>
</template>

<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import MenuPage from '@/components/MenuPage.vue';
import MainFooter from '@/components/MainFooter.vue';

const router = useRouter();

const selectedMenu = ref(false);
if (
  router.currentRoute.value.query
    && router.currentRoute.value.query.item
    && Number.isFinite(Number(router.currentRoute.value.query.item))
    && Number(router.currentRoute.value.query.item) < 6
    && Number(router.currentRoute.value.query.item) > 0
) {
  selectedMenu.value = true;
}
watch(
  () => router.currentRoute.value.query.item,
  () => {
    if (
      router.currentRoute.value.query
        && router.currentRoute.value.query.item
        && Number.isFinite(Number(router.currentRoute.value.query.item))
        && Number(router.currentRoute.value.query.item) < 6
        && Number(router.currentRoute.value.query.item) > 0
    ) {
      selectedMenu.value = true;
    }
  },
);

const menuTexts = [
  'Настройка физических входов',
  'Конфигурация логических входов',
  'Конструктор выходных потоков',
  'Конфигурация логических выходов',
  'Настройка физических выходов',
];

const selectMenu = (item: number) => {
  router.push({ query: { item } });
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
.menu
  font-size: 24px
  margin: 15px 35px
  height: calc(100vh - 110px)
  display: flex
  .item
    width: calc(20% - 12px)
    height: 100%
    margin-right: 15px
    background: $secondBodyBgColor
    border: 1px solid $border
    border-radius: 30px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    padding-left: 15px
    padding-right: 15px
    text-align: center
    cursor: pointer
    &:hover
      background: $secondBodyBgHover
    &:last-child
      margin-right: 0
    .icon
      display: flex
      justify-content: center
      align-items: center
      background: $iconBg
      border-radius: 15px
      width: 100px
      height: 110px
      margin-bottom: 80px

</style>
