<template>
    <div class="feed">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- 展示评论表单 -->
                    <PostForm @getPosts="getPosts" />
                    <!-- 展示评论内容 -->
                    <PostFeed
                        v-for="post in posts"
                        :key="post._id"
                        :post="post"
                        @getPosts="getPosts"
                        :showAction="true"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from "../../components/posts/PostForm";
import PostFeed from "../../components/posts/PostFeed";
export default {
    name: "Feed",
    data() {
        return {
            posts: [],
            errors: {}
        };
    },
    components: {
        PostForm,
        PostFeed
    },
    methods: {
        async getPosts() {
            try {
                let res = await this.$http.get("/api/posts");
                this.errors = {};
                this.posts = res.data;
            } catch (err) {
                if (err.response.data) this.errors = err.response.data;
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getPosts();
        });
    }
};
</script>

<style lang="scss" scoped>
.feed {
    width: 100%;
    min-height: 90vh;
}
</style>
