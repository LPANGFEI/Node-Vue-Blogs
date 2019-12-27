<template>
    <div class="landing">
        <div class="dark-overlay landing-inner text-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img :src="user.avatar" alt />
                        <h1 class="display-4 mb-4">(｡･∀･)ﾉﾞ嗨</h1>
                        <h1 class="display-3 mb-4">{{user.name}}</h1>
                        <hr />
                        <router-link
                            v-show="!isLogin"
                            to="/register"
                            class="btn btn-lg btn-info mr-2"
                        >注册</router-link>
                        <router-link v-show="!isLogin" to="/login" class="btn btn-lg btn-light">登录</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Landing",
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["isAuthenticated", "user"]),
        isLogin() {
            if (this.isAuthenticated) {
                return true;
            } else {
                return false;
            }
        }
    }
};
</script>

<style scoped lang="scss">
.landing {
    width: 100%;
    height: 90vh;
    background: url("../assets/showcase.jpg") no-repeat;
    background-size: cover;
    background-position: center;

    img {
        width: 100px;
        height: 100px;
    }

    .landing-inner {
        padding-top: 80px;
    }

    .dark-overlay {
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
    }
}

.card-form {
    opacity: 0.9;
}

.latest-profiles-img {
    width: 40px;
    height: 40px;
}

.form-control::placeholder {
    color: #bbb !important;
}
</style>
