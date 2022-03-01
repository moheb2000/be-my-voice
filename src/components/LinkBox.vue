<template>
  <router-link :to="`/education/${link}`">
    <section>
      <div class="text">{{ text }}</div>
      <div class="icon">
        <span class="material-icons">arrow_back_ios</span>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  name: "LinkBox",
  props: {
    text: String,
    link: String,
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  margin: 1rem 1.5rem;
  background: var(--cl-light-gray);
  border-radius: 0.7rem;
  overflow: hidden;
}

.text {
  padding: 1.2rem 1rem;
  text-align: right;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--cl-medium-gray);
  color: var(--cl-light-gray);
  padding: 0 0.5rem;
}
</style>
