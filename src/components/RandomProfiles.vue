<template>
  <section class="RandomProfiles">
    <h2 style="margin-bottom: 2rem">Random profile generator</h2>
    <button @click="addProfile">Add Profile</button>
    <section class="RandomProfiles-profiles">
      <Profile
        @click="removeProfile(index)"
        v-for="(profile, index) in profiles"
        :key="profile.name"
        :name="profile.name"
        :imageUrl="profile.imageUrl"
        :title="profile.title"
        :points="profile.points"
      >
        <Flag :landcode="profile.nat"/>
      </Profile>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import Profile from "./Profile";
import Flag from "./Flag";
import capitalize from "capitalize";

const randomUserApi = "https://randomuser.me/api/";

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
    async addProfile() {
      const randomUser = await axios.get(randomUserApi);
      this.users.push(randomUser.data.results[0]);
    },
    removeProfile(index) {
      console.log("remove profile: ", index);
      this.users = this.users.splice(index + 1, 1);
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
        }) => {
          return {
            name: `${capitalize(first)} ${capitalize(last)}`,
            title: email,
            imageUrl: picture.large,
            nat,
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
