<template>
    <div class="post-form mb-3">
        <div class="card card-info">
            <div class="card-header bg-info text-white">留言：</div>
            <form @submit.prevent="submit" class="text-center">
                <TextArea name="text" placeholder="随便写点啥" v-model="text" :error="errors.text" />
                <input type="submit" class="btn btn-dark" />
            </form>
            <div class="card-body"></div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import TextArea from "../TextArea";
export default {
    name: "PostForm",
    data() {
        return {
            text: null,
            errors: {}
        };
    },
    computed: {
        ...mapGetters(["user"])
    },
    components: {
        TextArea
    },
    methods: {
        async submit() {
            try {
                const { name, avatar } = this.user;
                const newPost = {
                    text: this.text,
                    name,
                    avatar
                };
                let res = await this.$http.post("/api/posts", newPost);
                this.text = null;
                this.errors = {};
                this.$emit("getPosts");
            } catch (err) {
                if (err.response.data) this.errors = err.response.data;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
