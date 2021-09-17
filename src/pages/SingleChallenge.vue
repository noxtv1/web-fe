<template>
<section>
<p>{{post.title}}</p>
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
    async mounted() {
    const postId = this.$route.params.id;
    let queryPost = posts.doc(postId);
    await queryPost.get().then((doc) => {
        this.post.push(doc.data())
    })
    this.post = JSON.parse(JSON.stringify(this.post[0]))
    }
}
</script>

<style>

</style>