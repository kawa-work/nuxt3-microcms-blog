<script setup lang="ts">
const { baseInfo } = useBaseInfo()

</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="baseInfo['site-description']"></div>
</template>