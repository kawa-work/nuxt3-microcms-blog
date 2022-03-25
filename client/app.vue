<script setup>
import TheHeader from '~/components/TheHeader.vue'
import TheSidebar from '~/components/TheSidebar.vue'
</script>

<template>
  <v-app>
    <TheHeader></TheHeader>
    <TheSidebar></TheSidebar>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>
