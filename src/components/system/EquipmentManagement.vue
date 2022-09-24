<template>
  <div class="equipment-management">
    <div class="equipment-management__block">
      Расположение и назначение портов
    </div>
    <div class="equipment-management__block">
      Платы ввод-вывода
      <div class="equipment-management__block-table">
        <table>
          <tr>
            <td>Intel Ethernet 10G card</td>
            <td>вкл/выкл</td>
            <td>V2.4_87765899</td>
            <td>обновить драйвер</td>
          </tr>
          <tr>
            <td>FD722_SN09874895089</td>
            <td>вкл/выкл</td>
            <td>V2.4_87765899</td>
            <td>обновить драйвер</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="equipment-management__block">
      Интерфейсы внешнего управления
      <div class="equipment-management__block-table">
        <table>
          <tr>
            <td>GPI card 012 PCI-e</td>
            <td>вкл/выкл</td>
            <td>V2.4_87765899</td>
            <td>обновить драйвер</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
@import "@/assets/sass/_var.module.sass"
.equipment-management
  &__block
    margin-top: 20px
    padding: 10px
    height: 25vh
    background: #232629
    border-radius: 5px
    border: 1px solid $border
    &-table
      margin-top: 5px
      padding: 15px
      background: $inputBgColor
      border-radius: 5px
      border: 1px solid $border
    &:first-child
      margin-top: 0
</style>
