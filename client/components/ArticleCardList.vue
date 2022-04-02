<script setup lang="ts">
import ArticleCard from "~/components/ArticleCard.vue"

const { limit } = defineProps<{ limit?: number}>()

const { blogList, fetchBlogList } = useBlog()
await fetchBlogList(limit || 10)
</script>

<template>
  <v-row>
    <v-col v-for="article in blogList.contents" :key="article.id" cols="12" sm="6" md="4" xl="3">
      <ArticleCard :article="article"></ArticleCard>
    </v-col>
  </v-row>
</template>
