<template>
  <section>{{ text }}</section>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    text: String,
  },
};
</script>

<style scoped>
section {
  margin: 1rem 1.5rem;
  padding: 1.2rem 1rem;
  background: var(--cl-light-gray);
  border-radius: 0.7rem;
  overflow: hidden;
  text-align: right;
}
</style>
