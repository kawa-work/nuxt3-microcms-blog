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
        <v-chip-group>
          <v-chip v-for="tag in article.tag" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
        <p class="publishedAt">
          公開日: <time :datetime="article.publishedAt" v-text="article.publishedAt"></time>
        </p>
        <p class="publishedAt">
          最終更新日: <time :datetime="article.publishedAt" v-text="article.revisedAt"></time>
        </p>
        <v-img :src="article.thumbnail.url"></v-img>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="post" v-html="article.body"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
