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
  <section v-else-if="type === 'separate'" class="section-separate">
    <div class="section-inline-title">
      <slot name="title"></slot>
    </div>
    <hr />
    <div class="section-inline-content">
      <slot></slot>
      <slot name="actions"></slot>
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
  },
};
</script>

<style lang="scss">
section {
  padding: 1rem 0;
  &.separate {
    display: flex;

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

  h3{
    padding-bottom: .5rem;
  }
}
</style>