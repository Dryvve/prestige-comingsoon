<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
import Expectations from './components/Expectations.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Hero,
    Footer,
    Expectations
  },
})
</script>

<template>
  <NavBar/>
  <Hero/>
  <Footer/>
  <div class="specialScroll">
    <Expectations/>
  </div>
  <div id="circle"></div>
</template>

<style lang="sass" scoped>
.specialScroll
  @apply bg-black relative p-1 mt-screen z-10

  &:before
    @apply absolute -top-screen w-screen h-screen left-0 top-0 pointer-events-none

    content: ""
    scroll-snap-type: y mandatory
</style>

