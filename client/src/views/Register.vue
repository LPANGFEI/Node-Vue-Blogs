<template>
    <div class="register">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">注册</h1>
                    <p class="lead text-center">创建新账户</p>
                    <form @submit.prevent="submit" autocomplete="off" method="post">
                        <TextField
                            type="text"
                            name="name"
                            placeholder="用户名"
                            v-model="newUser.name"
                            :error="errors.name"
                        />
                        <TextField
                            type="email"
                            name="email"
                            placeholder="邮箱"
                            v-model="newUser.email"
                            :error="errors.email"
                            info="我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱"
                        />
                        <TextField
                            type="password"
                            name="password"
                            placeholder="密码"
                            v-model="newUser.password"
                            :error="errors.password"
                        />
                        <TextField
                            type="password"
                            name="password2"
                            placeholder="确认密码"
                            v-model="newUser.password2"
                            :error="errors.password2"
                        />
                        <input type="submit" class="btn btn-info btn-block" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextField from "../components/TextFile";
export default {
    name: "Register",
    data() {
        return {
            newUser: {
                name: "",
                email: "",
                password: "",
                password2: ""
            },
            errors: {},
            userData: {}
        };
    },
    components: {
        TextField
    },
    methods: {
        async submit() {
            try {
                let res = await this.$http.post(
                    "/api/users/register",
                    this.newUser
                );
                res = res.data;
                // 执行mutations
                // this.$store.commit(SET_USER, res);

                // 执行acyions异步操作
                this.$store.dispatch("setUser", res);
                // 跳转
                this.$router.push("/login");
            } catch (err) {
                if (err.response.data) this.errors = err.response.data;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.register {
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
