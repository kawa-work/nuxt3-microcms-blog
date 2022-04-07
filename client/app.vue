<script setup lang="ts">
const { baseInfo, fetchBaseInfo } = useBaseInfo()
if (baseInfo.value === null) {
  await fetchBaseInfo()
}
</script>

<template>
  <v-app>
    <TheSidebar></TheSidebar>
    <TheHeader></TheHeader>
    <v-main>
      <transition>
        <v-container>
          <NuxtPage />
        </v-container>
      </transition>
    </v-main>
  </v-app>
</template>

<style>
.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
