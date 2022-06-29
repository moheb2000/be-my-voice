<template>
  <section>
    <div @click="showAlarm()" :class="{ ltr: l === 'en' }">
      {{ languages[l].alarmDesc }}
    </div>
  </section>
</template>

<script>
import languages from "@/data/languages";

export default {
  name: "AlarmButton",
  data: () => {
    return {
      languages: languages,
      l: localStorage.lang ?? "en",
    };
  },
  methods: {
    showAlarm() {
      localStorage.setItem("alarmDisplay", "no");
      this.$router.go(0);
    },
  },
};
</script>

<style scoped>
section {
  margin: 0.5rem 1.5rem;
  padding: 0.6rem 0.5rem;
  color: var(--cl-darker-yellow);
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 0.7rem;
  text-align: right;
  background-color: var(--cl-yellow);
  outline: 1px solid var(--cl-dark-yellow);
}

.ltr {
  text-align: left;
}
</style>
