<script setup lang="ts">
import { MicroCMSImage, MicroCMSListContent as MicroCMSBaseContent } from 'microcms-js-sdk'

type Blog = {
  title: string
  body: string
  tag: string[]
  thumbnail: MicroCMSImage
}

const { article } = defineProps<{ article: Blog & MicroCMSBaseContent }>()
</script>

<template>
  <v-card class="mx-auto my-12" :to="`/blog/${article.id}`">
    <v-img :src="article.thumbnail.url"></v-img>
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-text>
      <v-chip-group>
        <v-chip v-for="tag in article.tag" :key="tag">{{ tag }}</v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>