<template>
    <section class="posts-challenges mb-20">
        
        <h2 class="text-3xl font-semibold mt-8 mb-8 py-6">Les nouveaux <span class="text-camel">challenges</span></h2>
    <article class="grid gap-8 grid-cols-3">
        <Card
        v-for="post in arrayPosts"
        :key="post.id"
        :title="post.title"
        :text="post.textSmall"
        >
        </Card>
     </article>
    </section>
</template>

<script>
import Card from "@/components/partials/Card.vue"
import '@/firebase.config.js'
import {posts} from '@/firebase.config.js'

export default {
 name: 'PostsChallenges',
 components : {
     Card
 },
 data() {
     return {
         arrayPosts : []
     }
     
 },
 mounted() {
    posts.onSnapshot(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data()
    this.arrayPosts.push(data)  
    });
    })
    this.arrayPosts.slice(0,2)
    return this.arrayPosts
    }
}
</script>

<style>

</style>