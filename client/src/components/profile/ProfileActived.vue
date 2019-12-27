<template>
    <div class="btn-group mb-4" role="group">
        <router-link to="/editProfile" class="btn btn-light">
            <i class="fas fa-user-circle text-info mr-1"></i>
            编辑个人信息
        </router-link>
        <router-link to="/addExperience" class="btn btn-light">
            <i class="fab fa-black-tie text-info mr-1"></i>
            添加个人经历
        </router-link>
        <router-link to="/addEducation" class="btn btn-light">
            <i class="fas fa-graduation-cap text-info mr-1"></i>
            添加教育经历
        </router-link>
    </div>
</template>

<script>
export default {
    name: "ProfileActived",
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
</style>
