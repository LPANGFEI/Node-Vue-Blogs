<template>
    <div class="posts">
        <!-- Post Item -->
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-2">
                    <!-- <a href="profile.html"> -->
                    <img
                        style="width:150px"
                        class="rounded-circle d-nonse d-md-block"
                        :src="post.avatar"
                    />
                    <!-- </a> -->
                    <br />
                    <p class="text-center">{{post.name}}</p>
                </div>
                <div class="col-md-10">
                    <p class="lead">{{post.text}}</p>
                    <div class="mb-3" v-if="showAction">
                        <button
                            @click="likeClick(post._id)"
                            type="button"
                            class="btn btn-light mr-1"
                        >
                            <i class="text-info fas fa-thumbs-up"></i>
                            <span class="badge badge-light">{{post.likes.length}}</span>
                        </button>
                        <button
                            @click="unlikeClick(post._id)"
                            type="button"
                            class="btn btn-light mr-1"
                        >
                            <i class="text-secondary fas fa-thumbs-down"></i>
                        </button>
                        <router-link :to="`/feed/${post._id}`" class="btn btn-info mr-1">评论</router-link>
                        <button
                            @click="deleteClick(post._id)"
                            v-if="user !== null && user.id === post.user"
                            type="button"
                            class="btn btn-danger mr-1"
                        >删除</button>
                    </div>
                    <p v-if="errors" class="text-danger">{{errors}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "PostFeed",
    data: () => ({
        errors: null
    }),
    props: {
        post: Object,
        showAction: Boolean
    },
    computed: {
        ...mapGetters(["user"])
    },
    methods: {
        async deleteClick(id) {
            try {
                await this.$http.delete(`/api/posts/${id}`);
                this.errors = null;
                this.$emit("getPosts");
            } catch (err) {
                if (err.response.data) this.errors = err.response.data;
            }
        },
        async likeClick(id) {
            try {
                await this.$http.post(`/api/posts/like/${id}`);
                this.errors = null;
                this.$emit("getPosts");
            } catch (err) {
                if (err.response.data)
                    this.errors = err.response.data.alreadyliked;
            }
        },
        async unlikeClick(id) {
            try {
                await this.$http.post(`/api/posts/unlike/${id}`);
                this.errors = null;
                this.$emit("getPosts");
            } catch (err) {
                if (err.response.data) this.errors = err.response.data.notliked;
            }
        }
    }
};
</script>

<style scoped lang='scss'>
</style>
