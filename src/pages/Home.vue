<template>
  <Hero />
  <PostsChallenges />
  <Communaute />

</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import PostsChallenges from '@/components/PostsChallenges.vue'
import Communaute from '@/components/Communaute.vue'



export default {
  name: 'Home',
  components: {
    Hero, PostsChallenges, Communaute
  },
}
</script>
