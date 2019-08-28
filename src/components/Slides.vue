<template>
  <section class="eg-slideshow">
    <slide class="firstSlide">
      <h4>Stacc Insight</h4>
      <section class="points">
        <div>- 36 ansatte</div>
        <div>- Opprinnelig Delfi Data (Stifta i 1981)</div>
        <div>- Stacc AS blei majoritetseigar i 2017</div>
      </section>
    </slide>

    <slide style="display: flex">
      <Profile
        :imageUrl="profile.imageUrl"
        v-bind:name="profile.name"
        v-bind:title="profile.title"
        v-bind:points="profile.points"
      />
    </slide>

    <slide>
      <img src="../assets/angular_vs_vue.png" width="60%">
    </slide>

    <slide>
      <h4>Utfordringar med AngularJS</h4>
      <section class="points">
        <div>- AngularJS support/videreutvikling</div>
        <div>- Tidvis tregt (mange watchers)</div>
        <div>- Veldig mykje rammeverkkode</div>
        <div>- Vanskelig å feilsøke</div>
        <div>- Angular er eit heilt anna rammeverk enn AngularJS</div>
      </section>
    </slide>
    <slide>
      <h4>Kvifor Vue.js (og ikkje Angular / React)</h4>
      <section class="points">
        <div>- Lite "opinionated"</div>
        <div>- Lettare overgang frå AngularJS</div>
        <div>- Raskt og lite</div>
        <div>- Det gode frå React (raskt, vdom, komponentbasert etc)</div>
        <div>- Det gode frå AngularJS (templatesyntax, plain html og css)</div>
        <div>- Vue Developer Tools er genialt</div>
      </section>
    </slide>
    <slide class="flexImage">
      <h4>Vue Reactivity Model</h4>
      <img src="https://vuejs.org/images/data.png">
    </slide>
    <slide class="flexImage">
      <h4>Vue Lifecycle</h4>
      <img src="https://vuejs.org/images/lifecycle.png">
    </slide>
  </section>
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
          "Snart 10 år i Stacc Insight / Delfi Data",
          "Full stack utvikler",
          "Stor interesse for Frontend utvikling"
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

section.points {
  margin-top: 2rem;
  text-align: left;
}

p {
  margin-top: 3rem;
  font-size: 2.5rem;
  text-align: left;
}
p .point {
  text-align: left;
}
.flexImage {
  display: flex;
}
.flexImage img {
  display: flex;
  margin: auto;
  max-height: 90%;
  max-width: 90%;
}

.firstSlide {
  display: flex;
  flex-direction: column;
}
</style>
