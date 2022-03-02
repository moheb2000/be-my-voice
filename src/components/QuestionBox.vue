<template>
  <section>
    <div class="text">
      <p>{{ title }}</p>
    </div>
    <div class="answers">
      <div
        @click="colorAnswer(qId, 'yes')"
        :id="`yes${qId}`"
        class="no-check"
        :class="{ 'order--ltr': l === 'en' }"
      >
        {{ languages[l].answerYes }}
      </div>
      <div @click="colorAnswer(qId, 'no')" :id="`no${qId}`" class="no-check">
        {{ languages[l].answerNo }}
      </div>
    </div>
  </section>
</template>

<script>
import languages from "@/data/languages";

export default {
  name: "QuestionBox",
  props: {
    qId: String,
    title: String,
  },
  data: () => {
    return {
      languages: languages,
      l: localStorage.lang ?? "fa",
    };
  },
  methods: {
    colorAnswer(id, type) {
      let yesButton = document.getElementById(`yes${id}`);
      let noButton = document.getElementById(`no${id}`);
      if (type === "yes") {
        noButton.style.background = "var(--cl-medium-gray)";
        yesButton.style.background = "var(--cl-purple)";
        yesButton.style.color = "var(--cl-white)";
        noButton.style.color = "var(--cl-black)";
      } else {
        yesButton.style.background = "var(--cl-medium-gray)";
        noButton.style.background = "var(--cl-purple)";
        noButton.style.color = "var(--cl-white)";
        yesButton.style.color = "var(--cl-black)";
      }
    },
  },
};
</script>

<style scoped>
section {
  margin: 1rem 1.5rem;
  padding: 1.2rem 1rem;
  border-radius: 0.7rem;
  overflow: hidden;
  background: var(--cl-light-gray);
}

.text {
  text-align: center;
  margin-bottom: 1rem;
}

.answers {
  display: flex;
  justify-content: space-around;
}

.no-check {
  background: var(--cl-medium-gray);
  color: var(--cl-black);
  padding: 0.1rem 2rem;
  border-radius: 0.7rem;
}

.order--ltr {
  order: -1;
}
</style>
