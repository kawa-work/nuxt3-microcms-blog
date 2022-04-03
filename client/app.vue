<template>
  <v-app>
    <TheSidebar></TheSidebar>
    <v-main>
      <v-container>
        <transition>
          <NuxtPage />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.page-enter-from{
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
