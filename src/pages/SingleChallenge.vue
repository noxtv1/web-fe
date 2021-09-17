<template>
<section v-for="item in post"
 :key="item.key"
 :title="item.title"
>

<p> {{ item.title }} </p>
</section>
</template>

<script>
import '@/firebase.config.js'
import {posts} from '@/firebase.config.js'
export default {
    name: "SingleChallenge",
    data() {
        return {
        post : [],
        }
    },
    methods : {

    },
    mounted() {
    const postId = this.$route.params.id;
    let queryPost = posts.doc(postId);
    queryPost.get().then((doc) => {
        this.post.push(doc.data())
    })

    console.log(this.post);
    }
}
</script>

<style>

</style>