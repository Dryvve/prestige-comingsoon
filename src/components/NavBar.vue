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
  @apply absolute mx-auto w-screen bg-black flex flex-row justify-center z-20

.logo
  @apply h-16 py-4 px-2

  @screen lg 
    @apply h-16 py-4

.wordmark
  @apply h-8 p-2 self-center

  @screen lg 
    @apply h-8
</style>