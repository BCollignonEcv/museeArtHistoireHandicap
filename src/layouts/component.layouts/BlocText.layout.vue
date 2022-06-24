<template>
  <section
    v-if="type === 'splited'"
    class="section-splited"
    :class="{ reverse: reverse }"
  >
    <div class="section-splited">
      <slot name="title"></slot>
      <slot></slot>
      <slot name="actions"></slot>
    </div>
  </section>
  <section
    v-if="type === 'splitedImg'"
    class="splitedImg"
    :class="{
      reverse: reverse,
      wrapper: wrapper,
      'bg-gray': bgColor === 'bg-gray',
    }"
  >
    <div class="splitedImg-content"><slot name="content"></slot></div>
    <div class="splitedImg-img"><slot name="img"></slot></div>
  </section>
  <section
    v-else-if="type === 'separate'"
    class="separate"
    :class="{ wrapper: wrapper }"
  >
    <div class="section-title">
      <slot name="title"></slot>
    </div>
    <div class="separator"></div>
    <div class="section-content">
      <slot name="content"></slot>
    </div>
  </section>
  <section v-else>
    <slot name="title"></slot>
    <slot></slot>
    <slot name="actions"></slot>
  </section>
</template>

<script>
export default {
  props: {
    type: String,
    reverse: Boolean,
    wrapper: Boolean,
    bgColor: String,
  },
};
</script>

<style lang="scss">
@mixin wrapper {
  padding: 5rem 5rem;
  @media screen and (min-width: 1440px) {
    padding: 8rem 10rem;
  }
}

section {
  padding: 1rem 0;
  &.separate {
    display: flex;
    padding: 5rem;
    gap: 3rem;

    &.wrapper {
      @include wrapper;
    }

    .separator {
      width: 1px;
      border: 3px solid #000000;
      border-radius: 10px;
      display: block;
    }

    .section-content,
    .section-title {
      padding: 1rem 0;
      .btn {
        margin-top: 1rem;
      }
    }

    &.reverse {
      flex-direction: row-reverse;
    }
  }

  &.splited {
    display: flex;

    &.reverse {
      flex-direction: row-reverse;
    }
  }

  &.splitedImg {
    display: flex;
    padding: 5rem;
    gap: 10rem;

    &.wrapper {
      @include wrapper;
    }

    .splitedImg-content {
      flex: 3;

      h2 {
        margin-bottom: .5rem;
      }

      p {
        margin-bottom: 1rem;
      }
    }
    .splitedImg-img {
      flex: 1;
      position: relative;
      img {
        position: absolute;
        top: 30%;
        left: 0;
        height: 20rem;
        border-radius: 1rem;
      }
    }
  }

  h2 {
    padding-bottom: 0.5rem;
  }

  h3 {
    padding-bottom: 0.5rem;
  }

  &.bg-gray {
    background-color: rgba(188, 188, 188, 0.12);
  }
}
</style>