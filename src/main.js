import { createApp } from "vue";
import App from "./App.vue";
import router from "./utilities/router"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyDXu6v0FyNnP_5WFTkjnMJFd8NVRNpLsEU",
    authDomain: "echo-vuejs.firebaseapp.com",
    projectId: "echo-vuejs",
    storageBucket: "echo-vuejs.appspot.com",
    messagingSenderId: "275245027821",
    appId: "1:275245027821:web:94dd53b250383dcf1217e4",
    measurementId: "G-Y3DSL5J2XD"
};
const fApp = initializeApp(firebaseConfig);
const auth = getAuth(fApp)

const app = createApp(App)
app.use(router)
// app.use(createPinia())
app.mount("#app");