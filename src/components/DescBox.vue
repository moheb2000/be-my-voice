<template>
  <section :class="{ ltr: l === 'en' }">
    <p>{{ languages[l].formDesc }}</p>
  </section>
</template>

<script>
import languages from "@/data/languages";

export default {
  name: "DescBox",
  data: () => {
    return {
      languages: languages,
      l: localStorage.lang ?? "fa",
    };
  },
};
</script>

<style scoped>
section {
  margin: 1rem 2.5rem;
  text-align: right;
}

.ltr {
  text-align: left;
}
</style>
