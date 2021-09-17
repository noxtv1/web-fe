<template>
    <section class="posts-challenges mb-20">
        
        <h2 class="text-3xl font-semibold mt-8 mb-8 py-6">Les nouveaux <span class="text-camel">challenges</span></h2>
    <article class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card
        v-for="post in limit"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :text="post.textSmall"
        :img="post.img"
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
 computed : {
    limit() {
     return this.arrayPosts.slice(0,6)
    },
    textLenght(post) {
        post = post.substring(0,12)
        return post
    }

 },
 mounted() {
     //GET DATA FROM POSTS (doc)
    posts.onSnapshot(snapshot => {
        snapshot.forEach(doc => {
            let data = doc.data()
            data.id = doc.id
        this.arrayPosts.push(data)  
        })
    })
        console.log(this.arrayPosts);
    }

}
</script>

<style>

</style>