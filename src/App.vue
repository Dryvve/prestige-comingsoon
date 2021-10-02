<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Expectations from './components/Expectations.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Hero,
    Expectations
  },
})
</script>

<template>
  <NavBar/>
  <Hero/>
  <div class="specialScroll">
    <Expectations/>
  </div>
</template>

<style lang="sass" scoped>
.specialScroll
  @apply relative mt-screen w-screen

  &:before
    @apply absolute -top-screen w-screen h-screen left-0 right-0 z-10

    content: ""

.body::-webkit-scrollbar
  width: 1em
 
.body::-webkit-scrollbar-track
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3)

 
.body::-webkit-scrollbar-thumb
  background-color: darkgrey
  outline: 1px solid slategrey

</style>

