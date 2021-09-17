<template>
    <section class="posts-challenges mb-20">
    <p>Current page is : {{ page }}</p>
    <article class="grid gap-8 grid-cols-3">
        <Card
        v-for="post in arrayPosts"
        :key="post.id"
        :img="post.img"
        :id="post.id"
        :title="post.title"
        :text="post.textSmall"
        >
        </Card>
     </article>

    <v-pagination
    v-model="page"
    :pages="5"
    :range-size="5"
    active-color="#545454"
    @update:modelValue="updateHandler"
  />
      </section>
</template>
<script>
// @ is an alias to /src
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
// https://www.npmjs.com/package/@hennge/vue3-pagination
import Card from "@/components/partials/Card.vue"
import '@/firebase.config.js'
import {posts} from '@/firebase.config.js'

export default {

  name: 'Challenges',
  components: {
    VPagination, Card
  },
  data() {
    return {
      arrayPosts : [],
      page: 1,
      data: [],
      pageSize: 9,
      indexStart: 0,
      indexEnd: 0
    }
  },
  methods: {
    updateHandler() {
      this.indexStart  = (this.page - 1) * this.pageSize
      this.indexEnd  = this.indexStart + this.pageSize
      this.arrayPosts = this.data.slice(this.indexStart, this.indexEnd)
    }
  },
  mounted(){
    posts.onSnapshot(snapshot => {
    snapshot.forEach(doc => {
    let data = doc.data()
    this.data.push(data)
    data.id = doc.id
    // console.log(data);
    this.arrayPosts = this.data.slice(0,9)
      });
    })
    return this.arrayPosts
  },

}
</script>