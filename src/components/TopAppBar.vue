<template>
  <header :style="{ background: color }">
    <span @click="$router.back()" class="material-icons" v-if="isShowArrow"
      >arrow_back</span
    >
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "TopAppBar",
  props: {
    title: String,
    isShowArrow: Boolean,
    color: String,
  },
};
</script>

<style scoped>
header {
  color: var(--cl-white);
  text-align: center;
  padding: 1.5rem 3.5rem;
  border-bottom-left-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  margin-bottom: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

h1 {
  font-size: 1.2rem;
  font-weight: 700;
}

span {
  margin-left: 1rem;
  padding: 0.5rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
}

span:hover,
span:focus {
  cursor: pointer;
}
</style>
