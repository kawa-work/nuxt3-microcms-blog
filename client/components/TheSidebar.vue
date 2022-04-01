<template>
  <v-navigation-drawer app>
    <v-list class="d-flex flex-column align-center py-12">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/icon.png" width="32" height="32"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content class="text-center">
          <v-list-item-title class="text-h6">kawa-work</v-list-item-title>
          <v-list-item-subtitle>Nuxt3練習中</v-list-item-subtitle>
        </v-list-item-content>
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
