import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EducationView from "../views/EducationView.vue";
import SmnView from "../views/SmnView.vue";
import EmergencyView from "../views/EmergencyView.vue";
import FormView from "../views/FormView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/education/:id",
    name: "Education",
    component: EducationView,
  },
  {
    path: "/smn",
    name: "Smn",
    component: SmnView,
  },
  {
    path: "/emergency",
    name: "Emergency",
    component: EmergencyView,
  },
  {
    path: "/form",
    name: "Form",
    component: FormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
