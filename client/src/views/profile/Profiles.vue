<template>
    <div class="profiles">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center">开发者</h1>
                    <p class="lead text-center">代码，让世界更加精彩!</p>
                    <!-- 展示开发者 -->
                    <ProfileItem
                        v-for="profileItem in profiles"
                        :key="profileItem._id"
                        :profileItem="profileItem"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileItem from "../../components/profile/ProfileItem";
export default {
    name: "Profiles",
    data() {
        return {
            profiles: []
        };
    },
    components: {
        ProfileItem
    },
    methods: {
        async getProfiles() {
            try {
                let res = await this.$http.get("/api/profile/all");
                this.profiles = res.data;
                this.$store.dispatch("setProfiles", res.data);
            } catch (err) {
                this.profiles = [];
                this.$store.dispatch("setProfiles", []);
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getProfiles();
        });
    }
};
</script>

<style lang="scss" scoped>
.profiles {
    width: 100%;
    min-height: 90vh;
}
</style>
