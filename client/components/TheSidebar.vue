<script setup lang="ts">
const { baseInfo } = useBaseInfo()
const { drawer } = useDrawer()
const nuxtApp = useNuxtApp()
const resize = () => {
  if (window.innerWidth > nuxtApp.$vuetify.breakpoints.lg) {
    drawer.value = true
  } else {
    drawer.value = false
  }
}
onMounted(() => {
  window.addEventListener('resize', resize)
})
</script>

<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list class="d-flex flex-column align-center py-12">
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="`${baseInfo['author-icon']['url']}`" width="32" height="32"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <!-- TODO: enable v-list-item-content (cannot use this component 2022/4/1) -->
        <!-- <v-list-item-content class="text-center"> -->
        <div class="text-center">
          <v-list-item-title class="text-h6">{{ baseInfo['author-name'] }}</v-list-item-title>
          <v-list-item-subtitle>{{ baseInfo['author-profile'] }}</v-list-item-subtitle>
        <!-- </v-list-item-content> -->
        </div>
      </v-list-item>
      <v-list-item>
        <LinkList></LinkList>
      </v-list-item>
    </v-list>

    <v-list nav>
      <v-list-item nuxt to="/">
        <v-list-item-title>HOME</v-list-item-title>
      </v-list-item>
      <v-list-item nuxt to="/about">
        <v-list-item-title>ABOUT</v-list-item-title>
      </v-list-item>
      <v-list-item nuxt to="/blog">
        <v-list-item-title>BLOG</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
