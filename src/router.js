import { createRouter, createWebHistory } from "vue-router";
import Home from "./view/home";
import Category from "./view/Category/index";
import Product from "./view/Product/index";
import Role from "./view/Role/index";
import Account from "./view/Account/index";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,

    },
    {
        path: "/danh-muc",
        name: "Category",
        component: Category,

    },
    {
        path: "/san-pham",
        name: "Product",
        component: Product,

    },
    {
        path: "/vai-tro",
        name: "Role",
        component: Role,

    },
    {
        path: "/tai-khoan",
        name: "Account",
        component: Account,

    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
// router.beforeEach((to, from, next) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ["/login"];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem("user");

//     if (authRequired && !loggedIn) {
//         return next({
//             path: "/login",
//             query: { returnUrl: to.path }
//         });
//     }
//     next();
// });
// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next()
//             return
//         }
//         next('/')
//     } else {
//         next()
//     }
// })
export default router;