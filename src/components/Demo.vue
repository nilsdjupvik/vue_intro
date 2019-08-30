<template>
  <section class="Demo">
    <button @click="getUser">Add Profile</button>
    <section class="Demo-profiles">
      <Profile
        v-for="profile in profiles"
        :key="profile.name"
        :imageUrl="profile.imageUrl"
        :name="profile.name"
        :title="profile.title"
        :points="profile.points"
      >
        <Flag :landcode="profile.landcode"/>
      </Profile>
    </section>
  </section>
</template>

<script>
const randomUserApi = "https://randomuser.me/api/";
import axios from "axios";
import Profile from "./Profile";
import Flag from "./Flag";
import capitalize from "capitalize";

export default {
  components: {
    Profile,
    Flag
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    async getUser() {
      const response = await axios.get(randomUserApi);
      this.users.push(response.data.results[0]);
    }
  },
  computed: {
    profiles() {
      return this.users.map(
        ({
          name: { first, last },
          picture,
          email,
          location: { street, city, state },
          nat
        }) => ({
          name: `${capitalize(first)} ${capitalize(last)}`,
          title: email,
          imageUrl: picture.large,
          points: [street, city, state],
          landcode: nat
        })
      );
    }
  }
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
