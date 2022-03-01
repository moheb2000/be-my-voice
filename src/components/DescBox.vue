<template>
  <section>
    <p>{{ languages["fa"].formDesc }}</p>
  </section>
</template>

<script>
import languages from "@/data/languages";

export default {
  name: "DescBox",
  data: () => {
    return {
      languages: languages,
    };
  },
};
</script>

<style scoped>
section {
  margin: 1rem 2.5rem;
  text-align: right;
}
</style>
