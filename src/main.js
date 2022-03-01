import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/reset.css";
import "@/assets/css/vazir.css";
import "@/assets/css/global.css";
import "./registerServiceWorker";

createApp(App).use(router).mount("#app");
