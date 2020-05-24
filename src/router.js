import VueRouter from "vue-router";
import Login from "@/page/Login";
import Home from "@/page/Home";
import MyMain from "@/page/main/MyMain";
import Search from "@/page/main/search";
import Build from "@/page/main/build";
import analysis from "@/page/main/analysis";
import Result from "@/page/main/Result";

const routes = [
    {path: '/login', component: Login},
    {
        path: '/home', component: Home, children: [
            {path: 'main', component: MyMain},
            {path: 'search', component: Search},
            {path: 'build', component: Build},
            {path: 'analysis', component: analysis},
            {path: 'result', component: Result},
        ]
    },
]

export const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})