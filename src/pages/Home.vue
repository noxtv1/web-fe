<template>
  <Header />
  <Hero />
  <PostsChallenges />
  <Communaute />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import PostsChallenges from '@/components/PostsChallenges.vue'
import Communaute from '@/components/Communaute.vue'

export default {
  name: 'Home',
  components: {
    Header, Hero, PostsChallenges, Communaute
  }
}
</script>
