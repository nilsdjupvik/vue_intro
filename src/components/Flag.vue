<template>
  <img :src="flagUrl">
</template>

<script>
const countryFlagUrl = `https://www.countryflags.io/`;

export default {
  props: {
    landcode: String
  },
  computed: {
    flagUrl() {
      return `${countryFlagUrl}/${this.landcode}/flat/64.png`;
    }
  }
};
</script>

<style>
</style>
