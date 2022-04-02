<script setup lang="ts">
import { MicroCMSListResponse } from 'microcms-js-sdk'
import { Blog } from '../server/api/types';
import ArticleCard from "~/components/ArticleCard.vue"

const { data } = await useFetch<MicroCMSListResponse<Blog>>('/api/blogList')
</script>

<template>
  <v-row>
    <v-col v-for="article in data.contents" :key="article.id" cols="12" sm="6" md="4" xl="3">
      <ArticleCard :article="article"></ArticleCard>
    </v-col>
  </v-row>
</template>
