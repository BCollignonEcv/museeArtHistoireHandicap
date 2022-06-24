<template>
  <section class="landing-image">
    <figure>
      <img src="/musee_rouen.png" alt="" srcset="" />
      <figcaption>
        <slot name="heading"></slot>
      </figcaption>
    </figure>
  </section>
</template>

<script>
export default {
  props: {
    imgPath: String,
  },
};
</script>

<style lang="scss" scoped>
section.landing-image {
  width: 100vw;
  height: 70vh;
  overflow: hidden;
  display: flex;
  align-content: center;

  figure {
    position: relative;
    width: 100%;

    img {
      width: 100%;
    }
    figcaption {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $white-color;

      h1,
      h2,
      h3,
      h4,
      h5,
      p,
      span {
        height: fit-content;
      }
    }
  }
}
</style>