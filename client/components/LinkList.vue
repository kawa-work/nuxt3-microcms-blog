<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'

const linkList: Ref<Record<string, string>[]> = ref([
  {
    name: 'github',
    url: 'https://github.com/kawa-work',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/kinomama_engine',
  },
])
</script>

<template>
  <v-item-group>
    <v-item v-for="link in linkList" :key="link.name">
      <v-btn :href="link.url" target="_blank" icon>
        <v-icon>fa-brands fa-{{ link.name }}</v-icon>
      </v-btn>
      <!-- This syntax will work soon (ref => https://twitter.com/nuxt_js/status/1503691568078888962) -->
      <!-- <NuxtLink :to="link.url" target="_blank">
                            <v-icon>fa-brands fa-{{ link.name }}</v-icon>       
            </NuxtLink>-->
    </v-item>
  </v-item-group>
</template>
