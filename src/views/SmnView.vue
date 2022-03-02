<template>
  <DirectionBox>
    <TopAppBar
      :title="languages[l].smnViewTitle"
      :isShowArrow="true"
      color="var(--cl-cyan)"
    ></TopAppBar>
    <RepairBox></RepairBox>
  </DirectionBox>
</template>

<script>
// @ is an alias to /src
import TopAppBar from "@/components/TopAppBar.vue";
import RepairBox from "@/components/RepairBox.vue";
import DirectionBox from "@/components/DirectionBox.vue";
import languages from "@/data/languages";

export default {
  name: "EducationView",
  components: {
    TopAppBar,
    RepairBox,
    DirectionBox,
  },
  data: () => {
    return {
      languages: languages,
      l: localStorage.lang ?? "fa",
    };
  },
};
</script>
