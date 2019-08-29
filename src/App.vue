<template>
  <div id="app">
    <Header/>
    <div class="links" v-if="$route.path !== '/slides'">
      <router-link to="/slides">Slides</router-link>
      <router-link to="/complete">Fasit</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Slides from "./components/Slides";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Slides,
    Header
  }
};
</script>

<style>
#app {
  font-family: "IBM Plex Sans", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px;
}
* {
  margin: 0;
  padding: 0;
}
.slides {
  display: flex;
}
.slides .slide img {
  width: 100%;
}
.links {
  margin-left: auto;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  width: 100px;
}
.links * {
  display: block;
  text-decoration: none;
}
</style>
