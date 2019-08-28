import VueRouter from "vue-router";
import Slides from "./components/Slides";
import Demo from "./components/Demo";
import RandomProfiles from "./components/RandomProfiles";

const router = new VueRouter({
  routes: [
    { path: "/slides", component: Slides },
    { path: "/", component: Demo },
    { path: "/complete", component: RandomProfiles }
  ]
});

export default router;
