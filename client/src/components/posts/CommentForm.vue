<template>
    <div class="commentForm mb-3">
        <div class="card card-info">
            <div class="card-header bg-info text-white">评论：</div>
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
    name: "CommentForm",
    data() {
        return {
            text: null,
            errors: {}
        };
    },
    props: {
        postId: String
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
                const newComment = {
                    text: this.text,
                    name,
                    avatar
                };
                console.log(newComment);
                await this.$http.post(
                    `/api/posts/comment/${this.postId}`,
                    newComment
                );
                this.text = null;
                this.errors = {};
                this.$emit("getPost");
            } catch (err) {
                if (err.response.data) this.errors = err.response.data;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
