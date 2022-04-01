<script setup lang="ts">
const { data: baseInfo } = await useFetch('/api/baseInfo')
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="baseInfo['site-description']"></div>
</template>