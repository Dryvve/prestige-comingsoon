<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  methods: {
    scrollToTop() {
    document.getElementById('app').scrollIntoView({
      behavior: "smooth"
    });
  }
}
})
</script>

<template>
  <div id="exp" class="exp">
    <div class="exp_content">
      <h2 class="exp_heading">WHAT WE DO</h2>
      <p class="exp_subheading">Prestige Cars aims to become the best luxury and sports car rental company in Dubai. 
        We provide new and well looked after dream cars for you to enjoy your holidays or business trips with.
        Pictures speak louder than words so take a look at some of our exclusive cars.</p>
      <div class="exp_gallery">
        <div class="gallery_onebytwo">
          <img class="rounded-sm" src="../assets/ferrarifull1.png" alt="">
        </div>
        <div class="gallery_onebytwo">
          <img class="rounded-sm" src="../assets/lambofull2.png" alt="">
        </div>
        <div class="gallery_onebythree">
          <img class="rounded-sm" src="../assets/ferraridetail1.png" alt="">
        </div>
        <div class="gallery_onebythree">
          <img class="rounded-sm" src="../assets/rollsroycedetail1.png" alt="">
        </div>
        <div class="gallery_onebythree">
          <img class="rounded-sm" src="../assets/lambodetail1.png" alt="">
        </div>
        <div class="gallery_onebytwo">
          <img class="rounded-sm" src="../assets/rollsroycefull1.png" alt="">
        </div>
        <div class="gallery_onebytwo">
          <img class="rounded-sm" src="../assets/ferrarifull2.png" alt="">
        </div>
      </div>
      <h2 class="exp_heading">Like what you see?</h2>
      <p class="exp_subheading">We hope to see you behind the wheel of one of our cars soon!</p>
      <div class="exp_buttoncontainer">
        <button @click="scrollToTop" class="exp_scrollbutton_text ">back to top
          <p class="exp_scrollbutton_icon">⌃</p>
        </button>
      </div>
    </div>
    <p class="exp_registered">® 2021 PRESTIGE CARS</p>
  </div>
</template>

<style lang="sass" scoped>
.exp
  @apply bg-black h-full text-white bg-center relative z-30

.exp_content
  @apply max-w-7xl mx-auto pt-16 px-4 mb-0

  @screen md
    @apply px-0 pt-32

.exp_heading
  @apply font-sans tracking-wide text-2xl

  @screen md
    @apply text-3xl 

  font-weight: 450

.exp_subheading
  @apply mt-2 w-full text-left font-sans text-lg leading-normal

  @screen md
    @apply w-5/6 mt-4

.exp_gallery
  @apply max-w-7xl mx-auto flex flex-row flex-wrap mt-6 mb-12

.gallery_onebythree
  @apply w-full rounded-sm rounded-r-sm mb-4
  
  @screen md
    @apply w-1/3 pr-8 pl-0 mb-8

.gallery_onebytwo
  @apply w-full rounded-sm rounded-r-sm mb-4

  @screen md
    @apply w-1/2 pl-0 pr-8 mb-8

.exp_buttoncontainer
  @apply flex flex-row w-full justify-end

.exp_scrollbutton_text
  @apply p-4 md:p-8 text-xl relative text-right font-sans inline-block mr-2 z-20 mb-8 md:mb-0 mt-32

.exp_scrollbutton_icon
  @apply ml-2 inline-block animate-bounce

.exp_registered
  @apply relative text-center font-sans text-white opacity-20 text-lg
</style>