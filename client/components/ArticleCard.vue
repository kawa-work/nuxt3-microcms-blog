<script setup lang="ts">
import { MicroCMSListContent as MicroCMSBaseContent } from 'microcms-js-sdk'
import { DeepReadonly } from 'vue';
import { Blog } from '../server/api/types';

const { article } = defineProps<{ article: DeepReadonly<Blog & MicroCMSBaseContent> }>()
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