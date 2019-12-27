<template>
    <div class="commentfeed">
        <!-- Post Item -->
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-2">
                    <!-- <a href="profile.html"> -->
                    <img
                        style="width:150px"
                        class="rounded-circle d-nonse d-md-block"
                        :src="comment.avatar"
                    />
                    <!-- </a> -->
                    <br />
                    <p class="text-center">{{comment.name}}</p>
                </div>
                <div class="col-md-10">
                    <p class="lead">{{comment.text}}</p>
                    <button
                        @click="deleteClick(comment._id)"
                        v-if="user !== null && user.id === comment.user"
                        type="button"
                        class="btn btn-danger mr-1"
                    >删除</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "CommentFeed",
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["user"])
    },
    props: {
        comment: Object,
        postId: String
    },
    methods: {
        async deleteClick(id) {
            try {
                let res = await this.$http.delete(
                    `/api/posts/comment/${this.postId}/${id}`
                );
                // 删除成功 更新数据
                this.$emit("getPost");
            } catch (err) {
                if (err.response.data) this.errors = err.response.data;
            }
        }
    }
};
</script>

<style scoped>
</style>
