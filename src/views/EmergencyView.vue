<template>
  <TopAppBar
    :title="languages['fa'].emergencyViewTitle"
    :isShowArrow="true"
    color="var(--cl-red)"
  ></TopAppBar>
  <section v-for="box in emergencyBoxes" :key="box.id">
    <EmergencyBox :text="box.text"></EmergencyBox>
  </section>
</template>

<script>
// @ is an alias to /src
import TopAppBar from "@/components/TopAppBar.vue";
import data from "@/data/data";
import languages from "@/data/languages";
import EmergencyBox from "@/components/EmergencyBox.vue";

export default {
  name: "EducationView",
  components: {
    TopAppBar,
    EmergencyBox,
  },
  data: () => {
    return {
      languages: languages,
      emergencyBoxes: data.emergencyBoxes,
    };
  },
};
</script>
