<script setup lang="ts">
const { data } = await useFetch('blog', {
  baseURL: 'https://template-blog.microcms.io/api/v1/',
  headers: {
    'X-MICROCMS-API-KEY': 'ca793716091e4212a5974ef31cc9c4056d30'
  },
  params: {
    orders: '-createdAt'
  }
})
</script>

<template>
  <div>
    <h1>Hello, Nuxt3!</h1>
    <ul>
      <li v-for="article in data.contents" :key="article.id">
        <nuxt-link :to="`/blog/${article.id}`">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
