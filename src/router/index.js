import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Blogs from '../views/Blogs.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        }, {
            path: "/about",
            name: "About",
            component: About,

        },
        {
            path: "/:notFound(.*)",


            component: PageNotFound,
        },
        {
            path: "/blogs",
            name: "Blogs",

            component: Blogs,
        },
    ]
});

export default router;