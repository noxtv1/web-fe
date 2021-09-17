<template>
  <Hero />
  <HomeChallenges />
  <Communaute />

</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import HomeChallenges from '@/components/HomeChallenges.vue'
import Communaute from '@/components/Communaute.vue'



export default {
  name: 'Home',
  components: {
    Hero, HomeChallenges, Communaute
  },
}
</script>
