<script setup>

const route = useRoute()
const id = route.params.id

const { blog: article, fetchBlog } = useBlog()
await fetchBlog(id)
</script>

<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card flat class="my-12">
        <v-card-title tag="h1" class="text-h4 text-md-h2 py-4">{{ article.title }}</v-card-title>
        <v-card-actions>
          <v-chip-group class="pb-0">
            <v-chip v-for="tag in article.tag" :key="tag">{{ tag }}</v-chip>
          </v-chip-group>
        </v-card-actions>
        <v-card-text class="pt-0 pb-2">
          <span class="publishedAt mr-2">
            公開日:
            <time
              :datetime="article.publishedAt"
            >{{ new Date(article.publishedAt).toLocaleDateString() }}</time>
          </span>
          <span class="revisededAt">
            最終更新日:
            <time
              :datetime="article.publishedAt"
            >{{ new Date(article.revisedAt).toLocaleDateString() }}</time>
          </span>
        </v-card-text>
        <v-img class="mb-8 mb-md-12" :src="article.thumbnail.url"></v-img>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <v-card-text class="richtext" v-html="article.body"></v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
