<template>
    <div class="post">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <a class="btn btn-light mt-2 mb-2" @click.prevent="$router.go(-1)">返回</a>
                    <!-- 展示评论内容 -->
                    <PostFeed v-if="postData !== null" :post="postData" :showAction="false" />

                    <!-- 评论表单 -->
                    <CommentForm
                        v-if="postData !== null"
                        :postId="postData._id"
                        @getPost="getPost(postData._id)"
                    />

                    <!-- 展示评论信息 -->
                    <CommentFeed
                        v-for="comment in comments"
                        :key="comment._id"
                        :comment="comment"
                        :postId="postData._id"
                        @getPost="getPost(postData._id)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostFeed from "../../components/posts/PostFeed";
import CommentForm from "../../components/posts/CommentForm";
import CommentFeed from "../../components/posts/CommentFeed";
export default {
    name: "Post",
    data() {
        return {
            postData: null,
            errors: {},
            comments: []
        };
    },
    components: {
        PostFeed,
        CommentForm,
        CommentFeed
    },
    methods: {
        async getPost(id) {
            try {
                let res = await this.$http.get(`/api/posts/${id}`);
                this.errors = {};
                this.postData = res.data;
                this.comments = res.data.comments;
            } catch (err) {
                if (err.response.data) {
                    this.postData = null;
                    this.errors = err.response.data;
                }
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getPost(to.params.id);
        });
    }
};
</script>

<style scoped lang="scss">
.post {
    width: 100%;
    min-height: 90vh;
}
</style>
