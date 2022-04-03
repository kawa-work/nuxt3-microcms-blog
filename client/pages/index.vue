<script setup lang="ts">
const { baseInfo } = useBaseInfo()
</script>

<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card flat class="mt-4 mt-md-16">
        <v-card-title class="mt-12">{{ baseInfo['site-title'] }}</v-card-title>
        <v-card-subtitle>{{ baseInfo['site-subtitle'] }}</v-card-subtitle>
        <v-card-text class="mt-8">
          <ArticleCardList :limit="3"></ArticleCardList>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
