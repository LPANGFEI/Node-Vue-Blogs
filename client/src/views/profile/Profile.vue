<template>
    <div class="profile">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <a class="btn btn-light mb-3 float-left" @click.prevent="$router.go(-1)">返回</a>
                </div>
            </div>
            <!-- 头部 -->
            <ProfileHeader v-if="profile" :profile="profile"></ProfileHeader>
            <!-- 个人介绍  个人技能 -->
            <ProfileAbout v-if="profile" :profile="profile"></ProfileAbout>
            <!-- 个人经历  教育经历 -->
            <ProfileCreds
                v-if="profile && (profile.education || profile.experience)"
                :experience="profile.experience"
                :education="profile.education"
            ></ProfileCreds>
            <!-- GitHub仓库 -->
            <ProfileGithub
                v-if="profile && profile.githubusername"
                :username="profile.githubusername"
            ></ProfileGithub>
        </div>
    </div>
</template>

<script>
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileAbout from "../../components/profile/ProfileAbout";
import ProfileCreds from "../../components/profile/ProfileCreds";
import ProfileGithub from "../../components/profile/ProfileGithub";
export default {
    name: "Profile",
    data() {
        return {
            profile: null
        };
    },
    components: {
        ProfileHeader,
        ProfileAbout,
        ProfileCreds,
        ProfileGithub
    },
    methods: {
        async getProfileByHandle(handle) {
            try {
                let res = await this.$http.get(`/api/profile/handle/${handle}`);
                this.profile = res.data;
            } catch (err) {
                this.profile = null;
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getProfileByHandle(to.params.handle);
        });
    }
};
</script>

<style lang="scss" scoped>
.profile {
    width: 100%;
    min-height: 90vh;
}
</style>
