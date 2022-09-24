<template>
  <MenuMain>
    <template #interfaces>
      <div class="interface-main">
        <ul>
          <li
            v-for="inputStream in inputStreams"
            :key="inputStream.id"
          >
            <div class="item">
              {{ inputStream.name }}
            </div>
            <ul class="id-s">
              <li
                v-for="ID in inputStream.IDs"
                :key="ID.id"
                class="id"
              >
                <div class="item">
                  {{ ID.name }}
                </div>

                <ul class="pid-s">
                  <li
                    v-for="pid in ID.pids"
                    :key="pid.id"
                    class="pid"
                  >
                    <div class="item">
                      PID {{ pid.name }} [ {{ pid.kbps }} kbps ]
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </template>

    <template #description />

    <template #conflicts>
      Установленное значение превышает производительность карты
    </template>
  </MenuMain>
</template>

<script lang="ts" setup>
import MenuMain from './MenuMain.vue';

const inputStreams = [
  {
    name: 'MUX#1_PLP1',
    id: 1,
    kbps: 34056,
    IDs: [
      {
        name: 'ID1020',
        id: 1,
        kbps: 3123,
        pids: [
          { name: '1020', id: 1, kbps: 2123 },
          { name: '1060', id: 2, kbps: 343 },
          { name: '1075', id: 3, kbps: 213 },

        ],
      },
      {
        name: 'ID1020',
        id: 2,
        kbps: 31023,
        pids: [
          { name: '1020', id: 3, kbps: 2123 },
          { name: '1060', id: 4, kbps: 343 },
          { name: '1075', id: 5, kbps: 213 },
        ],
      },
    ],
  },
  { name: 'VGTRK_REG', id: 2, kbps: 34056 },
  { name: 'R24_REG', id: 3, kbps: 34056 },
  { name: 'OTR_REG', id: 4, kbps: 34056 },
];
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
ul
  position: relative
  padding-left: 12px
  overflow: hidden
  &::before
    content: ""
    position: absolute
    height: 1000px
    width: 1px
    left: 12px
    background: $lineColor
  ul.id-s:before
    height: 170px
  .item
    margin-top: 15px
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

</style>
