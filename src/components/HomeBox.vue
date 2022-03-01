<template>
  <router-link :to="link">
    <section :style="{ background: color }">
      <div class="flex">
        <div>
          <img
            class="flex__img--size"
            :src="require(`../assets/images/${img}`)"
            :alt="alt"
          />
        </div>
        <div class="flex__text">{{ text }}</div>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  name: "HomeBox",
  props: {
    img: String,
    alt: String,
    text: String,
    color: String,
    link: String,
  },
};
</script>

<style scoped>
section {
  margin: 1rem 1.5rem;
  padding: 1.2rem 1rem;
  color: var(--cl-white);
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 0.7rem;
}

.flex {
  display: flex;
  align-items: center;
}

.flex__img--size {
  width: 64px;
  height: 64px;
}

.flex__text {
  text-align: center;
  flex: 1;
}
</style>
