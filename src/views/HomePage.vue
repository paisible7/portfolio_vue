<template>
  <div class="flex flex-col w-full justify-center items-center h-screen bg-black text-white">

    <h1 class="font-extrabold text-4xl mb-4">
      Cette version est en cours de développement
    </h1>

    <h2 class="text-3xl">
      Visiter
      <a
        :href="'https://' + urlSite"
        target="_blank"
        class="text-amber-400 hover:underline"
      >
        {{ urlSite }}
      </a>
    </h2>
  </div>
</template>

<script setup>
const urlSite = 'paisible.site'
</script>
