<template>
  <TopAppBar
    :title="formPage.title"
    :isShowArrow="true"
    color="var(--cl-purple)"
  ></TopAppBar>
  <DescBox></DescBox>
  <section v-for="question in formPage.questions" :key="question.id">
    <QuestionBox :title="question.title" :qId="question.id"></QuestionBox>
  </section>
  <FormButton></FormButton>
</template>

<script>
// @ is an alias to /src
import TopAppBar from "@/components/TopAppBar.vue";
import QuestionBox from "@/components/QuestionBox.vue";
import DescBox from "@/components/DescBox.vue";
import FormButton from "@/components/FormButton.vue";
import data from "@/data/data";

export default {
  name: "EducationView",
  components: {
    TopAppBar,
    QuestionBox,
    DescBox,
    FormButton,
  },
  data: () => {
    return {
      formPage: data.formPage,
    };
  },
};
</script>
