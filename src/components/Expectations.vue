<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

})
</script>

<template>
  <div class="expection">
    <div class="expectionContent">
      <h2 class="heading">WHAT YOU CAN EXPECT</h2>
      <p class="subheading">Only the best cars out of the luxury and sports worldss</p>
      <div class="gallery">
        <img class="imagehalf" src="../assets/ferrarifull1.png" alt="">
        <img class="imagehalf" src="../assets/ferrarifull2.png" alt="">
        <img class="imagethird" src="../assets/ferraridetail1.png" alt="">
        <img class="imagethird" src="../assets/ferraridetail2.png" alt="">
        <img class="imagethird" src="../assets/ferraridetail3.png" alt="">
        <img class="imagehalf" src="../assets/rollsroycefull1.png" alt="">
        <img class="imagehalf" src="../assets/rollsroycefull2.png" alt="">
        <img class="imagethird" src="../assets/rollsroycedetail1.png" alt="">
        <img class="imagethird" src="../assets/rollsroycedetail3.png" alt="">
        <img class="imagethird" src="../assets/rollsroycedetail2.png" alt="">
      </div>
    </div>
    <p class="relative text-right pr-4 font-sans text-white opacity-20 text-lg">® 2021 PRESTIGE CARS</p>
  </div>
</template>

<style lang="sass" scoped>
.expection
  @apply h-screen text-white h-full bg-center relative mt-12 z-10

  scroll-snap-align: center

.expectionContent
  @apply max-w-7xl mx-auto pt-16 px-4

  @screen md
    @apply px-0 pt-32

.gallery
  @apply max-w-7xl mx-auto flex flex-row flex-wrap mt-12 mb-12

.imagethird
  @apply w-full rounded-sm mb-4
  
  @screen md
    @apply w-1/3 pr-8 pl-0 mb-8

.imagehalf
  @apply w-full rounded-sm mb-4

  @screen md
    @apply w-1/2 pl-0 pr-8 mb-8

.heading
  @apply font-display tracking-wide text-3xl

  @screen md
    @apply text-4xl 

.subheading
  @apply mt-2 w-full text-left font-bold

  @screen md
    @apply w-1/3 mt-4
</style>