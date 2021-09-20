<template>
    <section v-if="load">
        <p> {{post.title}} </p>
        <!-- <div v-for="image in slider" :key="image.id">
            <p>{{image}}</p>
        </div> -->


    </section>


    <section v-else>
        <p> Loading ... </p>
    </section>
</template>

<script>
import '@/firebase.config.js'
import {posts, storage} from '@/firebase.config.js'

export default {
    name: "SingleChallenge",
    data() {
        return {
        post : null,
        load : false,
        imgURL: null,
        slider: [],
        }
    },
    methods : {

    },
    async mounted() {
    // RECUPÉRATION DE LA DATA DU POST
        const postId = this.$route.params.id;
        let queryPost = posts.doc(postId);
        await queryPost.get().then((doc) => {
            this.post = doc.data();
            // CHARGEMENT OK
            this.load = true;
            if (this.post.img.path) {
               storage.ref().child(this.post.img.path).getDownloadURL()
               .then(url => {
                   this.imgURL = url
               })
            }
        })
        this.post.slider.forEach(el => {
            storage.ref().child(el.path).getDownloadURL()
            .then(url => {
                this.slider.push(url)
            })
        })
        console.log(this.slider);


    }
}
</script>

<style>

</style>