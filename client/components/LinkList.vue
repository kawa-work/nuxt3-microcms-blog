<script setup lang="ts">
const { baseInfo } = useBaseInfo()
const linkList = baseInfo.value.sns
const uselessLink = 'fieldId'
</script>

<template>
  <v-item-group>
    <v-item v-for="(link, name) in linkList" :key="name">
      <v-btn v-if="name !== uselessLink" :href="link" target="_blank" icon flat>
        <v-icon>fa-brands fa-{{ name }}</v-icon>
      </v-btn>
      <!-- This syntax will work soon (ref => https://twitter.com/nuxt_js/status/1503691568078888962) -->
      <!-- <NuxtLink :to="link.url" target="_blank">
                            <v-icon>fa-brands fa-{{ link.name }}</v-icon>       
      </NuxtLink>-->
    </v-item>
  </v-item-group>
</template>
