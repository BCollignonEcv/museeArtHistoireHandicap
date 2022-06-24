<template>
  <div class="locale-changer nav_item btn-icon btn-icon-horizontal btn-icon-light" tabindex="-1">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['fr', 'en'] }
  }
}
</script>