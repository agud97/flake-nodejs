<template>
  <div class="main">
    <div class="interfaces">
      <slot name="interfaces" />
    </div>
    <div class="description">
      <slot name="description" />
    </div>
    <div class="conflicts">
      <div class="conflict-h">
        Конфликты конфигурации:
      </div>
      <div class="field">
        <slot name="conflicts" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
.main
  height: calc(100% - 10px)
  margin-top: 10px
  width: 100%
  border-radius: 15px
  transition: all 0.3s linear
  display: flex
  flex-direction: row
  font-size: 18px
  .interfaces
    background: $secondBodyBgColor
    height: 100%
    width: 20%
    border-radius: 15px
    padding-top: 10px
    overflow: auto
    border: 1px solid $border

  .description
    padding: 15px
    margin-left: 10px
    background: $secondBodyBgColor
    height: calc(100% - 60px)
    width: calc(60% - 20px)
    border-radius: 15px
    overflow: auto
    border: 1px solid $border
  .conflicts
    background: $secondBodyBgColor
    border: 1px solid $border
    height: 100%
    width: 20%
    margin-left: 10px
    border-radius: 15px
    .field
      width: calc( 100% - 30px )
      height: calc( 100% - 70px )
      margin: 15px
      background: #232629
      border-radius: 15px
      color: #acacb6
      padding: 15px
      font-size: 16px
    .btn
      display: flex
      justify-content: center
      align-items: center
      button
        z-index: 2
    .conflict-h
      margin-top: 15px
      margin-left: 15px

</style>
