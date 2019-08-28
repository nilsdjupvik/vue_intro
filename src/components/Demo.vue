<template>
  <section class="Demo">
    <button @click="getUser">Add Profile</button>
    <section class="Demo-profiles">
      <Profile
        v-for="(profile, index) in profiles"
        :key="index"
        :imageUrl="profile.imageUrl"
        :name="profile.name"
        :points="profile.points"
        :title="profile.title"
      />
    </section>
  </section>
</template>

<script>
import axios from "axios";
import Profile from "./Profile";

const randomUserApi = "https://randomuser.me/api/";

export default {
  components: {
    Profile
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
          location: { street, city, state }
        }) => ({
          name: `${first} ${last}`,
          title: email,
          imageUrl: picture.large,
          points: [street, city, state]
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
