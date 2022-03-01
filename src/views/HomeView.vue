<template>
  <TopAppBar
    :isShowArrow="false"
    :title="languages['fa'].homeViewTitle"
    color="var(--cl-pale-purple)"
  ></TopAppBar>
  <HomeBox
    v-for="homeBox in homeBoxList"
    :key="homeBox.id"
    :text="homeBox.text"
    :img="homeBox.img"
    :alt="homeBox.alt"
    :color="homeBox.color"
    :link="homeBox.link"
  ></HomeBox>
</template>

<script>
// @ is an alias to /src
import TopAppBar from "@/components/TopAppBar.vue";
import HomeBox from "@/components/HomeBox.vue";
import data from "@/data/data";
import languages from "@/data/languages";

export default {
  name: "HomeView",
  components: {
    TopAppBar,
    HomeBox,
  },
  data: () => {
    return {
      homeBoxList: data.homeBox,
      languages: languages,
    };
  },
};
</script>
