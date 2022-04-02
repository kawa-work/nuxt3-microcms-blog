<script setup lang="ts">
const { baseInfo } = useBaseInfo()
</script>

<template>
  <div>
    <h1>{{ baseInfo['site-title'] }}</h1>
    <p>{{ baseInfo['site-subtitle'] }}</p>
    <ArticleCardList :limit="3"></ArticleCardList>
  </div>
</template>
