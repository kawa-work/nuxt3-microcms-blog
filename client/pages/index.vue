<script setup lang="ts">
const { baseInfo } = useBaseInfo()
</script>

<template>
  <v-row justify="center" align-content="center">
    <v-col cols="10">
      <v-card flat>
        <v-card-title>{{ baseInfo['site-title'] }}</v-card-title>
        <v-card-subtitle>{{ baseInfo['site-subtitle'] }}</v-card-subtitle>
        <v-card-text class="mt-12">
          <ArticleCardList :limit="3"></ArticleCardList>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
