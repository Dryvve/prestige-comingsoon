<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
  data() {
    return {
      darkenOpacity: 50,
      textOpacity: 100,
      buttonMessage: "Unmute",
      showText: true,
    }
  },
  methods: {
    toggleVideo() {
      var vid = this.$refs.vid
      vid.volume = 0.1
      if(vid.muted) {
        this.showText = false
        this.darkenOpacity = 0
        this.buttonMessage = "Mute"
        this.textOpacity = 0
      }
      else {
        this.showText = true
        this.darkenOpacity = 50
        this.buttonMessage = "Unmute"
        this.textOpacity = 100
      }
      vid.muted = !vid.muted
    },
    scrollToElement() {
    document.getElementById("exp").scrollIntoView({
      behavior: "smooth"
    });
  }
  }
})
</script>

<template>
<div id="top" class="hero">
  <video autoplay muted loop playsinline ref="vid" class="video">
    <source src="../assets/teaser.mp4" type="video/mp4">
  </video>
  <div ref="dark" class="darkener" v-bind:style="{ opacity: darkenOpacity }"></div>
  <div class="hero_content">
    <div></div>
    <div class="header">
      <p v-if="showText" class="headerbig" v-bind:style="{ opacity: textOpacity }">
        We are coming soon
      </p>
      <p v-if="showText" class="headersmall" v-bind:style="{ opacity: textOpacity }">
        Are you ready for the most prestigeous luxury car rentals in Dubai?
      </p>
    </div>
    
    <div class="hero_buttonsection">
      <div class="hero_buttoncontainer ">
        <div class="w-1/2">
          <button class="hero_videobutton" @click="toggleVideo" >{{ buttonMessage }}</button>
        </div>
        <button @click="scrollToElement" class="hero_scrollbutton_text ">scroll
          <p class="hero_scrollbutton_icon">⌄</p></button>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="sass" scoped>
.hero
  @apply top-0 absolute w-screen h-screen text-left

.video
  @apply absolute w-screen h-screen top-0 left-0 object-cover z-0

.darkener
  @apply absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50

.hero_content
  @apply w-screen relative mx-auto h-screen flex flex-col items-start text-white justify-around text-xl

  @screen md
    @apply text-xl mx-0 justify-between mx-auto

.header
  @apply relative w-full flex flex-col items-start mt-32 px-4

  @screen md
    @apply max-w-7xl mx-auto px-0

.headerbig
  @apply text-2xl tracking-wide font-sans -mt-16 uppercase

  @screen md
    @apply text-4xl

  font-weight: 450

.headersmall
  @apply mt-2 w-full text-left font-sans

  @screen md
    @apply w-1/3 mt-3

.hero_videobutton
  @apply border rounded-sm border-white py-2 px-4 self-start mb-8 z-20 relative

  &:hover
    @apply bg-white text-black

  @screen md
    @apply w-1/3

.hero_buttonsection
  @apply w-screen pt-2 px-4 font-sans

  @screen md
    @apply mb-0 bg-black

.hero_buttoncontainer
  @apply max-w-7xl mx-auto flex flex-row justify-between items-center

.hero_scrollbutton_text
  @apply relative text-center inline-block mr-2 z-20 mb-8 p-4

.hero_scrollbutton_icon
  @apply ml-2 inline-block animate-bounce
</style>