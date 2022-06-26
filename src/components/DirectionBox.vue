<template>
  <div :class="l === 'fa' ? 'rtl' : 'ltr'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DirectionBox",
  data: () => {
    return {
      l: localStorage.lang ?? "en",
    };
  },
};
</script>

<style scoped>
.rtl {
  direction: rtl;
}

.ltr {
  direction: ltr;
}
</style>
