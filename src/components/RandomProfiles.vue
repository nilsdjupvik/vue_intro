<template>
  <section class="RandomProfiles">
    <button @click="addProfile">Add Profile</button>
    <section class="RandomProfiles-profiles">
      <Profile
        v-for="profile in profiles"
        :key="profile.name"
        :name="profile.name"
        :imageUrl="profile.imageUrl"
        :title="profile.title"
        :points="profile.points"
      />
    </section>
  </section>
</template>

<script>
import axios from "axios";
import Profile from "./Profile";
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
    async addProfile() {
      const randomUser = await axios.get("https://randomuser.me/api/");
      this.users.push(randomUser.data.results[0]);
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
        }) => {
          return {
            name: `${first} ${last}`,
            title: email,
            imageUrl: picture.large,
            points: [street, city, state]
          };
        }
      );
    }
  }
};
</script>

<style scoped>
.RandomProfiles {
  margin: auto;
}
.RandomProfiles-profiles {
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
