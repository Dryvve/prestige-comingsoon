<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
  data() {
    return {
      darkenOpacity: 50,
      textOpacity: 100,
      buttonMessage: "Watch the Video",
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
        this.buttonMessage = "Turn off Video"
        this.textOpacity = 0
      }
      else {
        this.showText = true
        this.darkenOpacity = 50
        this.buttonMessage = "Watch the Video"
        this.textOpacity = 100
      }
      vid.muted = !vid.muted
    }
  }
})
</script>

<template>
<div class="hero">
  <video autoplay muted loop playsinline ref="vid" class="video">
    <source src="../assets/teaser.mp4" type="video/mp4">
  </video>
  <div ref="dark" class="darkener" v-bind:style="{ opacity: darkenOpacity }"></div>
  <div class="heroContent">
    <div></div>
    <div class="header">
      <p v-if="showText" class="headerbig" v-bind:style="{ opacity: textOpacity }">
        we are coming soon
      </p>
      <p v-if="showText" class="headersmall" v-bind:style="{ opacity: textOpacity }">
        are you ready for the most prestigeous luxury car rentals in Dubai?
      </p>
    </div>
    
    <button class="videoButton" @click="toggleVideo" >{{ buttonMessage }}</button>
  </div>
</div>
</template>

<style lang="sass" scoped>
.hero
  @apply top-0 absolute w-screen h-screen text-left z-0

.video
  @apply absolute w-screen h-screen top-0 left-0 object-cover z-0

.darkener
  @apply absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50

.heroContent
  @apply relative mx-auto h-screen flex flex-col items-start text-white justify-between font-sans text-xl px-4

  @screen md
    @apply text-2xl mx-0 justify-between max-w-7xl mx-auto

.header
  @apply relative w-full flex flex-col items-start mt-32

.headerbig
  @apply text-4xl tracking-wide font-thin font-display -mt-16

  @screen md
    @apply text-6xl

.headersmall
  @apply mt-2 w-full text-left font-bold

  @screen md
    @apply w-1/3 mt-4

.videoButton
  @apply border rounded-sm border-white w-1/2 py-2 font-bold self-start mb-8

  &:hover
    @apply bg-white text-black

  @screen md
    @apply w-1/6


</style>