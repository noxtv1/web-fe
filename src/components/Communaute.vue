<template>
  <section class="communaute">
    <h2 class="text-3xl font-semibold mt-8 mb-8 py-6">Entrez dans la <span class="text-camel">communauté</span> *</h2>
 <Twitter />
 <Discord />
  </section>

</template>

<script>
import Twitter from '@/components/partials/Twitter.vue'
import Discord from '@/components/partials/Discord.vue'
export default {
  components : {
    Twitter, Discord
  }
}
</script>

<style>

</style>