<script>
import { defineComponent } from 'vue'
import LogoSVG from './LogoSVG.vue'
import WordMark from './WordMark.vue'

export default defineComponent ({
  components: {
    LogoSVG,
    WordMark
  }
})
</script>

<template>
  <nav class="navbar">
    <LogoSVG class="logo"/>
    <WordMark class="wordmark"/>
  </nav>
</template>

<style lang="sass" scoped>
.navbar
  @apply absolute top-0 mx-auto w-screen bg-black flex flex-row justify-center z-40

.logo
  @apply h-12 py-4 px-2

  @screen lg 
    @apply h-14 py-4

.wordmark
  @apply h-7 p-2 self-center

  @screen lg 
    @apply h-7
</style>