<template>
  <footer class="footer">
    <div class="uptime">
      uptime:  8 дн 07:34:15
    </div>
    <div class="system-info">
      <div class="system-info-item">
        <div class="text">
          NTP
        </div>
        <div class="status good" />
      </div>
      <div class="system-info-item">
        <div class="text">
          20.09.2022
        </div>
        <img
          height="18"
          alt="calendar"
          src="@/assets/svg/footer/calendar.svg"
        >
      </div>
      <div class="system-info-item">
        <div class="text">
          16:20:00
        </div>
        <img
          height="18"
          alt="watch"
          src="@/assets/svg/footer/watch.svg"
        >
      </div>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
.footer
  display: flex
  height: 30px
  border-top: 1px solid $border
  justify-content: space-between
  align-items: center
  padding: 5px
  background: $headerColor
  .system-info
    display: flex
    .system-info-item
      padding: 0 20px
      display: flex
      align-items: center
      border-left: 1px solid white
      &:first-child
        border-left: none
      .text
        margin-right: 10px
</style>
