<template>
  <section class="Profile" @click="$emit('click',$event)">
    <slot name="image">
      <img :src="imageUrl">
    </slot>
    <aside class="Profile-details">
      <p class="Profile-name">{{ name }}</p>
      <p class="Profile-title">{{ titleUppercase }}</p>
      <ul class="Profile-points">
        <li v-for="point in points" :key="point">{{ point }}</li>
      </ul>
      <slot></slot>
    </aside>
  </section>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    name: String,
    title: String,
    points: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    titleUppercase() {
      return typeof this.title === "string" ? this.title.toUpperCase() : "";
    }
  }
};
</script>

<style>
@keyframes slide-in {
  0% {
    opacity: 0.5;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.Profile {
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  font-family: "IBM Plex Sans";
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  animation: slide-in 0.8s ease-out;
  margin: 2rem;
  padding: 0.5rem;
  min-width: 300px;
  max-width: 600px;
  cursor: pointer;
}

.Profile:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.Profile img {
  height: 90%;
  width: auto;
  padding: auto;
}

.Profile-details {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 2rem auto 2rem;
}

.Profile-name {
  font-size: 1.3rem;
  font-weight: bold;
  flex: 1;
}

.Profile-title {
  font-size: 1rem;
  color: gray;
  flex: 1;
}

.Profile-points {
  flex: 1;
  font-size: 1rem;
  margin: 1rem;
  text-align: left;
}
</style>
