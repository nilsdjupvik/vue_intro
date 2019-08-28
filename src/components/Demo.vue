<template>
  <section class="Demo">
    <button>Add Profile</button>
    <section class="Demo-profiles"></section>
  </section>
</template>

<script>
const randomUserApi = "https://randomuser.me/api/";
const countryApi = `https://www.countryflags.io/`;

export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.Demo {
  margin: auto;
}
.Demo-profiles {
  display: flex;
  flex-wrap: wrap;
}

button {
  padding: 0.5rem;
  background-color: dodgerblue;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
