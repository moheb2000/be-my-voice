<template>
  <span @click="changeLang()">
    <img
      :src="require(`../assets/images/${l === 'fa' ? 'ir.svg' : 'gb.svg'}`)"
      :alt="l"
    />
    <p>{{ langName }}</p></span
  >
</template>

<script>
export default {
  name: "LangButton",
  data: () => {
    return {
      l: localStorage.lang ?? "en",
      langName: localStorage.lang == "fa" ? "FA" : "ENG",
    };
  },
  methods: {
    changeLang() {
      if (this.l === "fa") {
        this.l = "en";
        localStorage.setItem("lang", "en");
      } else {
        this.l = "fa";
        localStorage.setItem("lang", "fa");
      }
      this.$router.go(0);
    },
  },
};
</script>

<style scoped>
span {
  margin-right: 1rem;
  padding: 0.5rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  width: 48px;
  display: flex;
  direction: rtl;
  align-items: center;
}

span:hover,
span:focus {
  cursor: pointer;
}

img {
  border-radius: 0.3rem;
}

p {
  margin-right: 0.5rem;
}
</style>
