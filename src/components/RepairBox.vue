<template>
  <section>
    <div class="image">
      <img src="../assets/images/hammer.png" alt="repair hammer" />
    </div>
    <p class="text">{{ languages["fa"].repairText }}</p>
  </section>
</template>

<script>
import languages from "@/data/languages";

export default {
  name: "RepairBox",
  data: () => {
    return {
      languages: languages,
    };
  },
};
</script>

<style scoped>
section {
  text-align: center;
  margin: 10rem 1rem 3.5rem;
}

image {
  margin-bottom: 3.5rem;
}

text {
  font-weight: 700;
  font-size: 1.25rem;
}
</style>
