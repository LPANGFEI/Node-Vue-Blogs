<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">首页</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mobile-nav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profiles">开发者</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-show="isLogin">
                        <router-link class="nav-link" to="/feed">留言</router-link>
                    </li>
                    <li class="nav-item" v-show="isLogin">
                        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                    </li>
                    <li class="nav-item" v-show="!isLogin">
                        <router-link class="nav-link" to="/register">注册</router-link>
                    </li>
                    <li class="nav-item" v-show="!isLogin">
                        <router-link class="nav-link" to="/login">登录</router-link>
                    </li>
                    <li class="nav-item" v-if="user !== null" v-show="isLogin">
                        <a @click.prevent="logout" class="nav-link" to="/login">
                            <img
                                :src="user.avatar"
                                :alt="user.name"
                                class="rounded-circle headerImg"
                            />
                            退出
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "NavBar",
    computed: {
        ...mapGetters(["isAuthenticated", "user"]),
        isLogin() {
            if (this.isAuthenticated) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        // 退出
        logout() {
            // 删除localStorage
            localStorage.removeItem("jwtToken");
            // 去除请求认证 清除用户数据 清除用户信息
            this.$store.dispatch("clearCurrentState");
            // 跳转登陆
            this.$router.push("/login");
        }
    }
};
</script>

<style scoped lang="scss">
.navbar {
    width: 100%;
    height: 5vh;
    line-height: 5vh;
}
.headerImg {
    width: 25px;
    margin-right: 5px;
}
</style>
