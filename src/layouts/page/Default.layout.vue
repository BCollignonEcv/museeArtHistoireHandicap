<template>
  <Header />
  <main :class="{ full: full }">
    <slot></slot>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/global.components/Header.vue";
import Footer from "@/components/global.components/Footer.vue";

export default {
  name: "default",
  props: {
    full: Boolean,
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
main {
  @include wrapper
}
</style>