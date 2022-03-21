<script setup lang="ts">
const ctx = useRuntimeConfig()

const { data } = await useFetch('blog', {
    baseURL: ctx.baseURL,
    headers: {
        'X-MICROCMS-API-KEY': ctx.apiKey
    },
    params: {
        orders: '-createdAt'
    }
})
</script>

<template>
    <ul>
        <li v-for="article in data.contents" :key="article.id">
            <nuxt-link :to="`/blog/${article.id}`">{{ article.title }}</nuxt-link>
        </li>
    </ul>
</template>