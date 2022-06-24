<template>
  <div class="switch-button" :class="{reverse: reverse}" role="switch" aria-checked="true" @click="switchAction">
    <div class="switch-option" aria-hidden="true">
      <input class="switch-button-checkbox" type="checkbox" id="switch-default-value" v-model="defaultValue"/>
      <label class="switch-button-label" for="switch-default-value">{{ defaultLabel }}</label>
    </div>
    <div class="switch-option" aria-hidden="true">
      <input class="switch-button-checkbox" type="checkbox" id="switch-switched-value" v-model="switchedValue"/>
      <label class="switch-button-label" for="switch-switched-value">{{ switchedLabel }}</label>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        defaultLabel: String,
        switchedLabel: String,
        reverse: Boolean
    },
    data(){
        return {
            defaultValue: true,
            switchedValue: false,
        }
    },
    methods: {
        switchAction(){
            this.defaultValue = !this.defaultValue;
            this.switchedValue = !this.switchedValue;
        }
    }
};
</script>

<style lang="scss" scoped>
.switch-button{
    display: flex;
    justify-content: space-between;

    &.reverse{
        flex-direction: row-reverse;
    }
}
</style>