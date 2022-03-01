<template>
  <TopAppBar
    :title="languages['fa'].smnViewTitle"
    :isShowArrow="true"
    color="var(--cl-cyan)"
  ></TopAppBar>
  <RepairBox></RepairBox>
</template>

<script>
// @ is an alias to /src
import TopAppBar from "@/components/TopAppBar.vue";
import RepairBox from "@/components/RepairBox.vue";
import languages from "@/data/languages";

export default {
  name: "EducationView",
  components: {
    TopAppBar,
    RepairBox,
  },
  data: () => {
    return {
      languages: languages,
    };
  },
};
</script>
