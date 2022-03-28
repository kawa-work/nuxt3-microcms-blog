<script setup lang="ts">
import { MicroCMSListResponse, MicroCMSImage } from 'microcms-js-sdk'
import ArticleCard from "~/components/ArticleCard.vue"

const ctx = useRuntimeConfig()

type Blog = {
  title: string
  body: string
  tag: string[]
  thumbnail: MicroCMSImage
}

const { data } = await useFetch<MicroCMSListResponse<Blog>>('blog', {
  baseURL: ctx.baseURL,
  headers: {
    'X-MICROCMS-API-KEY': ctx.apiKey,
  },
  params: {
    orders: '-createdAt',
  },
})
</script>

<template>
  <v-row>
    <v-col v-for="article in data.contents" :key="article.id" cols="12" sm="6" md="4" xl="3">
      <ArticleCard :article="article"></ArticleCard>
    </v-col>
  </v-row>
</template>
