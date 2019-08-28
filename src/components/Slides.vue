<template lang="pug">
.eg-slideshow
    slide(class="firstSlide")
      h1 Stacc Insight
      p
        h3 36 ansatte
        h3 Opprinnelig Delfi Data (Stifta i 1981)
        h3 Stacc AS blei majoritetseigar i 2017

    slide
      Profile(:imageUrl="profile.imageUrl" v-bind:name="profile.name" v-bind:title="profile.title" v-bind:points="profile.points")

    slide
      h2 Veien frå AngularJS til Vue.js
      p 
        
        
</template>

<script>
import { Slideshow } from "eagle.js";
import Profile from "./Profile";
export default {
  mixins: [Slideshow],
  components: {
    Profile
  },
  data() {
    return {
      profile: {
        imageUrl:
          "https://cdn.sanity.io/images/8j24leyc/production/fe3de87d39a07329f21dcdf5547cf029dadc35fd-220x220.jpg?w=200",
        name: "Nils Magnus Djupvik",
        title: "Seniorutvikler",
        points: [
          "Full stack",
          "Fokus på frontend utvikling",
          "Snart 10 år i Stacc Insight / Delfi Data"
        ]
      }
    };
  }
};
</script>
<style scoped>
.Slides {
  margin-top: 3rem;
  margin-bottom: 2rem;
}
h2,
h3 {
  text-align: left;
}

.firstSlide {
  display: flex;
  flex-direction: column;
}
</style>
