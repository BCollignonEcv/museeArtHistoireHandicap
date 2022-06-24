<template>
  <section class="section-image">
    <figure>
      <img :src="imgPath" alt="" srcset="" />
      <figcaption>
        <div class="content">
          <div>
            <slot name="heading"></slot>
          </div>
          <font-awesome-icon icon="fa-solid fa-arrow-right" size="4x" />
        </div>
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

<style lang="scss">
section.section-image {
  display: flex;
  align-content: bottom;
  padding: none;

  figure {
    position: relative;
    width: 100%;

    img {
      width: 100%;
      vertical-align: middle;
    }
    figcaption {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      color: $white-color;

      h1,
      h2,
      h3,
      h4,
      h5,
      p,
      span {
        height: fit-content;
        margin-bottom: 0.5rem;
      }

      h1 {
      }

      .content {
        margin-right: 15vw;
        margin-bottom: 10vh;
        display: flex;
        align-items: center;
        gap: 2rem;
      }
    }
    &:hover{
      figcaption {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>