<template>
  <article class="border border-black border-opacity-30 p-4">
    <img src="@/assets/images/thumb1.jpg" alt="" class="border border-camel-light">
    <div class="text">
        <h2 class="font-medium py-4 text-xl">{{title}}</h2>
        <p class="pb-4 text-base">
            {{text}}
        </p>
        <a href="#"><button class="bg-camel text-white w-full py-2 mt-2 uppercase font-semibold tracking-wider text-base">Voir le challenge</button></a>
    </div>
  </article>
</template>

<script>
export default {
    name : "Card",
    props : ['title','text']
}
</script>

<style lang="scss">
article {
    border-radius: 10px;
    img {
        max-height: 220px;
        border-radius: 10px;
    }
    button {
        border-radius: 10px;
    }
}
</style>