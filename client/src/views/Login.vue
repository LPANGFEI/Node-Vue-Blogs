<template>
    <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">登录</h1>
                    <p class="lead text-center">请使用已有账户登录</p>
                    <form @submit.prevent="submit" autocomplete="off" method="post">
                        <TextField
                            type="email"
                            placeholder="邮箱"
                            name="email"
                            v-model="user.email"
                            :error="errors.email"
                        />
                        <TextField
                            type="password"
                            name="password"
                            placeholder="密码"
                            v-model="user.password"
                            :error="errors.password"
                        />
                        <input type="submit" class="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import TextField from "../components/TextFile";
export default {
    name: "Login",
    data() {
        return {
            user: {
                email: "799623837@qq.com",
                password: "123456"
                // email: "",
                // password: ""
            },
            errors: {}
        };
    },
    components: {
        TextField
    },
    methods: {
        async submit() {
            try {
                // 请求接口
                let res = await this.$http.post("/api/users/login", this.user);
                // 获取token
                const { token } = res.data;
                // 存储token到localStorage
                window.localStorage.setItem("jwtToken", token);
                // 解析token
                const decoded = jwtDecode(token);
                // 登陆成功，分发action 更改state
                this.$store.dispatch(
                    "setIsAuthenticated",
                    !this.$isEmpty(decoded)
                );
                this.$store.dispatch("setUser", decoded);
                this.errors = {};
                // 页面跳转
                if (this.$route.query.redirect) {
                    this.$router.push(this.$route.query.redirect);
                } else {
                    this.$router.push("/");
                }
            } catch (err) {
                if (err.response.data) this.errors = err.response.data;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 90vh;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .row {
            width: 100%;
            height: 100%;
        }

        .form-group {
            margin-bottom: 2rem;
        }
    }
}
</style>
