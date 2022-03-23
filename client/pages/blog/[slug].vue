<script setup>
const ctx = useRuntimeConfig()
const route = useRoute()
const slug = route.params.slug

const { data: article } = await useFetch(`/blog/${slug}`, {
  baseURL: ctx.baseURL,
  headers: {
    'X-MICROCMS-API-KEY': ctx.apiKey,
  },
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col md="8">
        <h1 class="title">{{ article.title }}</h1>
        <p class="publishedAt">
          <time :datetime="article.publishedAt" v-text="article.publishedAt"></time>
        </p>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="post" v-html="article.body"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
