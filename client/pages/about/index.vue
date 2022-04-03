<script setup lang="ts">
const { baseInfo } = useBaseInfo()
</script>

<template>
  <v-row justify="center">
    <v-col cols="10">
      <v-card flat class="mt-4 mt-md-16">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="richtext" v-html="baseInfo['site-description']"></div>
      </v-card>
    </v-col>
  </v-row>
</template>