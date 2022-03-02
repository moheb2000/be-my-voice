<template>
  <DirectionBox>
    <TopAppBar
      :title="educationPage[parseInt($route.params.id)].title"
      :isShowArrow="true"
      color="var(--cl-dark-blue)"
    ></TopAppBar>
    <section
      v-for="comp in educationPage[parseInt($route.params.id)].components"
      :key="comp.id"
    >
      <TextBox v-if="comp.isText" :text="comp.text"></TextBox>
      <LinkBox v-else :text="comp.text" :link="comp.link"></LinkBox>
    </section>
  </DirectionBox>
</template>

<script>
// @ is an alias to /src
import TopAppBar from "@/components/TopAppBar.vue";
import LinkBox from "@/components/LinkBox.vue";
import TextBox from "@/components/TextBox.vue";
import DirectionBox from "@/components/DirectionBox.vue";
import data from "@/data/data";

export default {
  name: "EducationView",
  components: {
    TopAppBar,
    LinkBox,
    TextBox,
    DirectionBox,
  },
  data: () => {
    return {
      educationPage: data.educationPages,
    };
  },
};
</script>
