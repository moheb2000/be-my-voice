<template>
  <router-link :to="`/education/${link}`">
    <section :class="{ ltr: l === 'en' }">
      <div class="text">{{ text }}</div>
      <div class="icon">
        <span class="material-icons">{{
          l === "en" ? "arrow_forward_ios" : "arrow_back_ios"
        }}</span>
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
  data: () => {
    return {
      l: localStorage.lang ?? "en",
    };
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
  text-align: right;
}

.text {
  padding: 1.2rem 1rem;
}

.ltr {
  text-align: left;
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
