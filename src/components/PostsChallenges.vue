<template>
    <section class="posts-challenges mb-20">
        
        <h2 class="text-3xl font-semibold mt-8 mb-8 py-6">Les nouveaux <span class="text-camel">challenges</span></h2>
    <article class="grid gap-4 grid-cols-3">
        <Card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :text="card.text"
        />
     </article>
    </section>
</template>

<script>
import Card from "@/components/partials/Card.vue"

export default {
 name: 'PostsChallenges',
 components : {
     Card
 },
 data() {
     return {
         cards : [
             {id :1 ,title : "Stay Connected", text: "Digital World est un design moderne avec une structure créative, un vrai défi pour les amateurs du genre" },
             {id :2 ,title : "Stay Connected", text: "Digital World est un design moderne avec une structure créative, un vrai défi pour les amateurs du genre" },
             {id :3 ,title : "Stay Connected", text: "Digital World est un design moderne avec une structure créative, un vrai défi pour les amateurs du genre" },
             {id :4 ,title : "Stay Connected", text: "Digital World est un design moderne avec une structure créative, un vrai défi pour les amateurs du genre" },
             {id :5 ,title : "Stay Connected", text: "Digital World est un design moderne avec une structure créative, un vrai défi pour les amateurs du genre" },
             {id :6 ,title : "Stay Connected", text: "Digital World est un design moderne avec une structure créative, un vrai défi pour les amateurs du genre" }
         ]
     }
 }
}
</script>

<style>

</style>