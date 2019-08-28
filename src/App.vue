<template>
  <div id="app">
    <Header/>
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
</style>
