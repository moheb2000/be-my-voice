<template>
  <div
    id="backgroundBlack"
    :class="{ disp: alarm === 'yes' }"
    class="opac"
    @click="hideAlarm"
  >
    <section class="ltr">
      <p>
        Some features of this online demo, like sending help message to
        supporting persons, are not working properly because of not connecting
        to the servers and mobile phone operators.
        <br />
        <em>(Touch the screen to continue)</em>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "DemoAlarm",
  data: () => {
    return {
      alarm: localStorage.alarmDisplay ?? "no",
    };
  },
  methods: {
    hideAlarm() {
      localStorage.setItem("alarmDisplay", "yes");
      document.getElementById("backgroundBlack").style.display = "none";
    },
  },
};
</script>

<style scoped>
.opac {
  position: fixed;
  top: 0;
  left: 0;
  background: hsl(0, 0%, 0%, 0.4);
  width: 100%;
  height: 100%;
}

section {
  position: relative;
  width: 75%;
  max-width: 700px;
  margin: 10vh auto;
  text-align: center;
  background: red;
  padding: 1.2rem 1rem;
  background: var(--cl-light-gray);
  border-radius: 0.7rem;
  overflow: hidden;
  box-shadow: 0px 0px 5px var(--cl-light-gray);
}

.ltr {
  direction: ltr;
  text-align: center;
}

.disp {
  display: none;
}

em {
  font-weight: 700;
}
</style>
