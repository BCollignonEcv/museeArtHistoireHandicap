<template>
  <Layout :full="true">
    <ImageLanding :imgPath="'/musee_rouen.png'">
      <template v-slot:heading>
        <div>
          <h2>Musée d'art et d'histoire <br />du handicap de Rouen</h2>
          <h5>Une politique au service de tous</h5>
        </div>
      </template>
    </ImageLanding>
    <section class="wrapper">
      <h2>Thématiques</h2>
      <!-- <Slider>

      </Slider> -->
    </section>
  </Layout>
</template>

<script>
import Layout from "@/layouts/page/Default.layout.vue";
import { ImageLanding } from "@/components/custom.components";
import { Slider } from "@/components/basic.components";

export default {
  name: "Home",
  components: {
    Layout,
    ImageLanding,
    Slider
  },
};
</script>

<style>
</style>