<template>
    <div class="dashboard">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4">Dashboard</h1>
                    <p v-if="user !== null" class="lead text-muted">
                        Welcome
                        <router-link v-if="profile === null" to="/profiles">{{user.name}}</router-link>
                        <router-link v-else :to="`/profile/${profile.handle}`">{{user.name}}</router-link>
                    </p>
                    <div v-if="profile !== null">
                        <!-- 编辑个人信息  添加个人经历 添加教育经历 -->
                        <ProfileActived />

                        <!-- 展示个人经历 -->
                        <Experience
                            @deleteExperience="deleteExperience"
                            :experience="profile.experience"
                        />

                        <!-- 展示教育经历 -->
                        <Education
                            @deleteEducation="deleteEducation"
                            :education="profile.education"
                        />

                        <!-- 删除账户按钮 -->
                        <div class="mb-5">
                            <button class="btn btn-danger" @click="deleteClick">删除当前账户</button>
                        </div>
                    </div>
                    <div v-else>
                        <p>还未填写相关个人信息，请添加您的个人信息！</p>
                        <router-link to="/createProfile" class="btn btn-lg btn-info">添加个人信息</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileActived from "../../components/profile/ProfileActived";
import Experience from "../../components/profile/Experience";
import Education from "../../components/profile/Education";
export default {
    name: "Dashboard",
    data() {
        return {
            profile: null
        };
    },
    components: {
        ProfileActived,
        Experience,
        Education
    },
    computed: {
        ...mapGetters(["user"])
    },
    methods: {
        // 获取用户信息
        async getProfileData() {
            try {
                let res = await this.$http.get("/api/profile");
                this.profile = res.data;
                // 分发actions 更新profile
                this.$store.dispatch("setProfile", this.profile);
            } catch (err) {
                if (err.response.data) console.log(err.response.data);
            }
        },
        // 删除账户
        async deleteClick() {
            try {
                let res = await this.$http.delete("/api/profile");
                // 情况数据
                this.profile = null;
                // 更新store
                this.$store.dispatch("clearCurrentState");
                // 路由跳转
                this.$router.push("/login");
            } catch (err) {
                console.log(err);
            }
        },
        // 删除个人经历
        async deleteExperience(id) {
            try {
                let res = await this.$http.delete(
                    `api/profile/experience/${id}`
                );
                this.profile = res.data;
            } catch (err) {
                console.log(err);
            }
        },
        // 删除教育经历
        async deleteEducation(id) {
            try {
                let res = await this.$http.delete(
                    `api/profile/education/${id}`
                );
                this.profile = res.data;
            } catch (err) {
                console.log(err);
            }
        }
    },
    // 组件内守卫  没有this，可用vm代替
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getProfileData();
        });
    }
};
</script>

<style scoped lang='scss'>
.dashboard {
    width: 100%;
    min-height: 90vh;
}
</style>
