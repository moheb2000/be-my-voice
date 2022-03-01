<template>
  <section>{{ text }}</section>
</template>

<script>
export default {
  name: "EmergencyBox",
  props: {
    text: String,
  },
};
</script>

<style scoped>
section {
  text-align: center;
  margin: 1rem 1.5rem;
  padding: 2rem 1.5rem;
  background: var(--cl-red-gradient);
  color: var(--cl-white);
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.7rem;
}
</style>
