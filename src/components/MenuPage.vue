<template>
  <div class="accordion">
    <div class="nav-items">
      <div
        v-for="(item, index) in 5"
        :key="index"
        class="item"
        :style="selected==item ? {background: '#238636'}: {}"
        @click="selectMenu(item)"
      >
        <div class="icon">
          <img
            width="40"
            class="hamburger-menu"
            :src="require(`@/assets/png/menu/${index + 1}.png`)"
            :title="menuTexts[index]"
            alt="icon"
          >
        </div>
      </div>
    </div>
    <PhysicalInputs v-if="selected==1" />
    <LogicalInputs v-if="selected==2" />
    <InputStreamConstructor v-if="selected==3" />
    <LogicalOutputs v-if="selected==4" />
    <PhysicalOutputs v-if="selected==5" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import PhysicalInputs from './accordion-menu/PhysicalInputs/PhysicalInputs.vue';
import LogicalInputs from './accordion-menu/LogicalInputs.vue';
import InputStreamConstructor from './accordion-menu/InputStreamConstructor.vue';
import LogicalOutputs from './accordion-menu/LogicalOutputs.vue';
import PhysicalOutputs from './accordion-menu/PhysicalOutputs.vue';

const router = useRouter();

const menuTexts = [
  'Настройка физических входов',
  'Конфигурация логических входов',
  'Конструктор выходных потоков',
  'Конфигурация логических выходов',
  'Настройка физических выходов',
];
const selected = ref(0);
if (
  router.currentRoute.value.query
    && router.currentRoute.value.query.item
    && Number.isFinite(Number(router.currentRoute.value.query.item))
    && Number(router.currentRoute.value.query.item) < 6
    && Number(router.currentRoute.value.query.item) > 0
) {
  selected.value = Number(router.currentRoute.value.query.item);
}
const selectMenu = (item:number) => {
  selected.value = item;
  router.push({ query: { item } });
};

</script>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
.accordion
  font-size: 24px
  margin: 15px 15px
  height: calc(100vh - 110px)
  display: flex
  .nav-items
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    bottom: 35px
    width: 100%
    .item
      display: flex
      z-index: 2
      margin-right: 15px
      width: 60px
      height: 60px
      background: #0d1117
      border: 1px solid $border
      border-radius: 15px
      justify-content: center
      align-items: center
      cursor: pointer
      &:hover
        background: $secondBodyBgHover
      .icon
        width: 45px
        height: 45px
        background: $iconBg
        border-radius: 15px
        display: flex
        justify-content: center
        align-items: center
</style>
