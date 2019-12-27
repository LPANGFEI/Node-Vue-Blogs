<template>
    <div id="app">
        <NavBar />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <Footers />
        <Loading v-show="loading" />
    </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import { mapGetters } from "vuex";
import NavBar from "./components/NavBar";
import Footers from "./components/Footers";
import Loading from "./components/Loading";
export default {
    name: "App",
    computed: {
        ...mapGetters(["loading"])
    },
    components: {
        NavBar,
        Footers,
        Loading
    },
    created() {
        // 如果存在，解析
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            // 获取当前时间
            const currentTime = Date.now() / 1000;
            // token过期
            if (decoded.exp < currentTime) {
                // 分发action 更改state
                this.$store.dispatch("clearCurrentState");
                // 跳转登陆
                this.$router.push("/login");
            } else {
                // token未过期  分发action 更改state
                this.$store.dispatch(
                    "setIsAuthenticated",
                    !this.$isEmpty(decoded)
                );
                this.$store.dispatch("setUser", decoded);
            }
        }
    }
};
</script>

<style scoped lang="scss">
#app {
    width: 100%;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}
</style>
