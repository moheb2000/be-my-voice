<template>
  <DirectionBox>
    <TopAppBar
      :title="languages[l].emergencyViewTitle"
      :isShowArrow="true"
      color="var(--cl-red)"
    ></TopAppBar>
    <section v-for="box in emergencyBoxes" :key="box.id">
      <EmergencyBox :phone="box.phone" :text="box.text"></EmergencyBox>
    </section>
  </DirectionBox>
</template>

<script>
// @ is an alias to /src
import TopAppBar from "@/components/TopAppBar.vue";
import data from "@/data/data";
import languages from "@/data/languages";
import EmergencyBox from "@/components/EmergencyBox.vue";
import DirectionBox from "@/components/DirectionBox.vue";

export default {
  name: "EducationView",
  components: {
    TopAppBar,
    EmergencyBox,
    DirectionBox,
  },
  data: () => {
    return {
      languages: languages,
      emergencyBoxes: data.emergencyBoxes,
      l: localStorage.lang ?? "en",
    };
  },
};
</script>
