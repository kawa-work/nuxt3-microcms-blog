<script setup lang="ts">
const drawer = useState("drawer", () => false)
</script>

<template>
  <v-app-bar color="grey-lighten-2" class="d-lg-none">
    <v-row justify="space-between">
      <v-col cols="8" align-self="center">
        <v-btn @click.stop="drawer = !drawer">
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4" class="d-flex justify-end">
        <LinkList></LinkList>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
