<template>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'

export default ({
  name: "App",
  components: {
    RouterView
  },
});
</script>

<style lang="scss">

@import '@/styles/reset.scss';
@import '@/styles/base.scss';
@import '@/styles/style.scss';
</style>
