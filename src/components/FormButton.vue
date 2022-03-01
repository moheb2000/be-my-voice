<template>
  <router-link to="/"
    ><section>{{ languages["fa"].formButton }}</section></router-link
  >
</template>

<script>
import languages from "@/data/languages";
export default {
  name: "FormButton",
  data: () => {
    return {
      languages: languages,
    };
  },
};
</script>

<style scoped>
section {
  background: var(--cl-purple);
  color: var(--cl-white);
  text-align: center;
  margin: 1rem 1.5rem;
  padding: 1rem 0;
  font-weight: 700;
  font-size: 1.12rem;
  border-radius: 0.7rem;
}
</style>
