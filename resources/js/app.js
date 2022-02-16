require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from "vue";

import NotesIndex from "./components/NotesIndex.vue"
import router from './router';

window.Alpine = Alpine;

Alpine.start();

createApp({
    components: {
        NotesIndex
    }
})
.use(router)
.mount('#app');