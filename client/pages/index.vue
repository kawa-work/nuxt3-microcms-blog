<script setup>
const { data: baseInfo } = await useFetch('/api/baseInfo')
</script>

<template>
  <div>
    <h1>{{ baseInfo['site-title'] }}</h1>
    <p>{{ baseInfo['site-subtitle'] }}</p>
    <ArticleCardList></ArticleCardList>
  </div>
</template>
