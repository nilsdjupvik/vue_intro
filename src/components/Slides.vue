<template>
  <section class="eg-slideshow">
    <slide class="Slide" enter="slideInRight" leave="slideOutLeft">
      <h4>Stacc Insight</h4>
      <section class="points" style="flex-direction: row">
        <div>
          <div>- Opprinnelig Delfi Data (Stifta i 1981)</div>
          <div>- Leverer primært rådgivningsløysingar for bankar</div>
          <div>- 35 ansatte</div>
          <div>- Stacc AS blei majoritetseigar i 2017</div>
          <div>- Skifta navn til Stacc Insight i 2018</div>
        </div>
        <img src="https://pbs.twimg.com/media/Dq5_6R2WoAAxMUR?format=jpg&name=medium">
      </section>
    </slide>

    <slide class="Slide" style="width: 100%" :steps="3" enter="slideInRight" leave="slideOutLeft">
      <h4 v-if="step >= 1" style="flex-grow: 1">Kven er vi?</h4>
      <section style="display: flex">
        <Profile
          v-if="step >= 2"
          :imageUrl="profiles[0].imageUrl"
          :name="profiles[0].name"
          :title="profiles[0].title"
          :points="profiles[0].points"
        ></Profile>
        <Profile
          v-if="step >= 3"
          :imageUrl="profiles[1].imageUrl"
          :name="profiles[1].name"
          :title="profiles[1].title"
          :points="profiles[1].points"
        ></Profile>
      </section>
    </slide>

    <slide class="Slide" style="width: 100%" enter="slideInRight" leave="slideOutLeft">
      <h4>Agenda</h4>
      <section class="points">
        <div>- Angular -> Vue</div>
        <div>- Kvifor valgte vi Vue.js?</div>
        <div>- Vue Reactivity Model</div>
        <div>- Demo: Vi lager ein komponent</div>
        <div>- Demo: Våre applikasjoner</div>
        <div>- Vidar: API-testing i autonome team</div>
      </section>
    </slide>

    <slide class="Slide" enter="rotateIn" leave="slideOutLeft">
      <img src="../assets/angular_vs_vue.png" width="60%">
    </slide>

    <slide class="Slide" enter="slideInRight" leave="slideOutLeft">
      <h4>Erfaringer med AngularJS</h4>
      <section class="points">
        <div>- Tidvis tregt (mange watchers)</div>
        <div>- Veldig mykje rammeverkkode</div>
        <div>- Vanskelig å feilsøke</div>
        <div>- AngularJS support/videreutvikling</div>
        <div>- Angular er eit heilt anna rammeverk enn AngularJS</div>
      </section>
    </slide>
    <slide class="Slide" enter="slideInRight" leave="slideOutLeft">
      <h4>Kvifor Vue.js (og ikkje Angular / React)</h4>
      <section class="points">
        <div>- Lite "opinionated"</div>
        <div>- Progressivt</div>
        <div>- Lettare overgang frå AngularJS</div>
        <div>- Raskt og lite</div>
        <div>- Det gode frå React (raskt, vdom, komponentbasert etc)</div>
        <div>- Det gode frå AngularJS (templatesyntax, plain html og css)</div>
        <div>- Vue Developer Tools er genialt</div>
      </section>
    </slide>
    <slide class="Slide" enter="rotateIn" leave="slideOutLeft">
      <h4>Vue Reactivity Model</h4>
      <img src="https://vuejs.org/images/data.png">
    </slide>
    <slide class="Slide" enter="rotateIn" leave="slideOutLeft">
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
      profiles: [
        {
          imageUrl:
            "https://cdn.sanity.io/images/8j24leyc/production/fe3de87d39a07329f21dcdf5547cf029dadc35fd-220x220.jpg?w=200",
          name: "Nils Magnus Djupvik",
          title: "Seniorutvikler",
          points: [
            "Snart 10 år i Stacc Insight / Delfi Data",
            "Full stack utvikler",
            "Stor interesse for Frontend utvikling"
          ]
        },
        {
          imageUrl:
            "https://cdn.sanity.io/images/8j24leyc/production/e3337d0194e988b4f5471ba4ba679f0cc43816c4-220x220.jpg?w=200",
          name: "Vidar Vabø",
          title: "Testleder",
          points: [
            "6 år i Stacc Insight / Delfi Data",
            "Tester / Teknisk tester / QA"
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.Slides {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.Slide {
  display: flex;
  justify-content: center;
}

.Slide img {
  display: flex;
  margin: auto;
  max-height: 90%;
  max-width: 90%;
}

section.points {
  margin: 2rem auto;
  text-align: left;
  display: flex;
  flex-direction: column;
}

section.points img {
  height: 400px;
  width: auto;
  padding-left: 3rem;
}

p {
  margin-top: 3rem;
  font-size: 2.5rem;
  text-align: left;
}
p .point {
  text-align: left;
}
</style>
