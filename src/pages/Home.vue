<template>
  <Header />
  <Hero />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Header, Hero
  }
}
</script>
