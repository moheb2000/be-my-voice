<template>
  <DirectionBox>
    <TopAppBar
      :isShowArrow="false"
      :title="languages[l].homeViewTitle"
      color="var(--cl-pale-purple)"
      ><LangButton></LangButton
    ></TopAppBar>
    <DemoAlarm></DemoAlarm>
    <HomeBox
      v-for="homeBox in homeBoxList"
      :key="homeBox.id"
      :text="homeBox.text"
      :img="homeBox.img"
      :alt="homeBox.alt"
      :color="homeBox.color"
      :link="homeBox.link"
    ></HomeBox>
  </DirectionBox>
</template>

<script>
// @ is an alias to /src
import TopAppBar from "@/components/TopAppBar.vue";
import HomeBox from "@/components/HomeBox.vue";
import LangButton from "@/components/LangButton.vue";
import DirectionBox from "@/components/DirectionBox.vue";
import DemoAlarm from "@/components/DemoAlarm.vue";
import data from "@/data/data";
import languages from "@/data/languages";

export default {
  name: "HomeView",
  components: {
    TopAppBar,
    HomeBox,
    LangButton,
    DirectionBox,
    DemoAlarm,
  },
  data: () => {
    return {
      homeBoxList: data.homeBox,
      languages: languages,
      l: localStorage.lang ?? "fa",
    };
  },
};
</script>
