<script setup lang="ts">
const { baseInfo } = useBaseInfo()
</script>

<template>
  <v-row justify="center" align-content="center">
    <v-col cols="10">
      <v-sheet>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="richtext" v-html="baseInfo['site-description']"></div>
      </v-sheet>
    </v-col>
  </v-row>
</template>