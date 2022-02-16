import { createRouter, createWebHistory } from "vue-router";
import NotesIndex from "../components/NotesIndex";

const routes = [
    {
        path: '/dashboard',
        name: 'notes.index',
        component : NotesIndex
    }
];

export default createRouter({
    history : createWebHistory(),
    routes
})