<script setup>

const route = useRoute()
const id = route.params.id

const { blog: article, fetchBlog } = useBlog()
await fetchBlog(id)
</script>

<template>
  <v-row justify="center" align-content="center">
    <v-col cols="10">
      <h1 class="title">{{ article.title }}</h1>
      <v-chip-group>
        <v-chip v-for="tag in article.tag" :key="tag">{{ tag }}</v-chip>
      </v-chip-group>
      <p class="publishedAt">
        公開日:
        <time
          :datetime="article.publishedAt"
        >{{ new Date(article.publishedAt).toLocaleDateString() }}</time>
      </p>
      <p class="publishedAt">
        最終更新日:
        <time
          :datetime="article.publishedAt"
        >{{ new Date(article.revisedAt).toLocaleDateString() }}</time>
      </p>
      <v-img :src="article.thumbnail.url"></v-img>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="body richtext" v-html="article.body"></div>
    </v-col>
  </v-row>
</template>

<style>
.body img {
  max-width: 100%;
}
</style>
