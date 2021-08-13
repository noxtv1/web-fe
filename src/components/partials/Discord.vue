<template>
  <section class="discord flex flex-wrap items-center mb-14">

    <div class="discord-text flex flex-col justify-center w-full lg:w-8/12 py-12 lg:px-16 lg:py-0 text-center lg:text-left">
        <h3 class="text-2xl py-3 font-semibold">Rejoignez le discord et obtenez de l’aide </h3>
        <p class="py-3">Toutes les membres de la communauté webfrontend.fr se rejoignent sur Discord !</p>
        <p>Aides et partages sont les mots d’ordres de nos équipes et membre. Débutant comme expert nous avons tous à apprendre de chacun (c’est beau :’)</p>
    </div>

    <div class="brand-discord flex flex-col items-center w-full lg:w-4/12">
        <div class="py-8">
            <img src="@/assets/images/discord.png" alt="" height="120">
        </div>
        <p class="text-2xl font-semibold text-discord">
            discord.gg/spkAV5uv
        </p>
    </div>
  </section>
</template>

<script>
export default {
    name : "discord"
}
</script>

<style>
    .discord {
        border : 1px solid rgba(38, 38, 38, 0.3);
        border-radius: 10px;  
        padding: 25px;
        background-color: rgba(111, 133, 213, 0.1);
        min-height: 290px;
    }
    .brand-discord {
        position: relative;
    }
    .brand-discord::after {
        content: "";
        display: block;
        position: absolute;
        width: 1px;
        height: 75%;
        background-color:#6F85D5;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media (max-width: 1024px) {
        .brand-discord::after {
           left: auto;
            top: auto;
           bottom: -25px;
           transform: translateY(0);
           width: 30%;
           height: 1px;
        }
        .brand-discord {
            order: 1;
        }
        .discord-text {
            order: 2;
        }
    }

</style>