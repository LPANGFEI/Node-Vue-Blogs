<template>
    <div class="editeProfile">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <a class="btn btn-light" @click.prevent="$router.go(-1)">返回</a>
                    <h1 class="display-4 text-center" style="margin-top:40px;">编辑个人信息</h1>
                    <small class="d-block pb-3">* 表示必填项</small>

                    <!-- form表单 -->
                    <form @submit.prevent="submit">
                        <TextFile
                            type="text"
                            name="handle"
                            placeholder="* Profile handle"
                            v-model="msgInfo.handle"
                            :error="errors.handle"
                            info="此处的handle是在后端接口中需要用来查询数据的, 通常是写你email的名字"
                        />

                        <SelectList
                            name="status"
                            :error="errors.status"
                            v-model="msgInfo.status"
                            :options="options"
                            info="请告知我们您目前所从事的岗位"
                        />

                        <TextFile
                            type="text"
                            name="company"
                            placeholder="公司"
                            v-model="msgInfo.company"
                            :error="errors.company"
                            info="可以是你自己的公司或者是你的在职公司"
                        ></TextFile>

                        <TextFile
                            type="text"
                            name="website"
                            placeholder="网址"
                            v-model="msgInfo.website"
                            :error="errors.website"
                            info="你公司网址或者是你在职公司网址"
                        ></TextFile>

                        <TextFile
                            type="text"
                            name="location"
                            placeholder="位置"
                            v-model="msgInfo.location"
                            :error="errors.location"
                            info="你所在的城市及所在区 (例如. 北京市昌平区)"
                        ></TextFile>

                        <TextFile
                            type="text"
                            name="skills"
                            placeholder="* 编程语言技能"
                            v-model="msgInfo.skills"
                            :error="errors.skills"
                            info="请使用逗号隔开你所掌握的语言 (例如: HTML,CSS,JavaScript,PHP)"
                        ></TextFile>

                        <TextFile
                            type="text"
                            name="githubusername"
                            placeholder="Github 用户名"
                            v-model="msgInfo.githubusername"
                            :error="errors.githubusername"
                            info="如果你希望将你的项目分享给大家, 可以填写你的github用户名"
                        ></TextFile>

                        <TextArea
                            placeholder="自我介绍"
                            name="bio"
                            v-model="msgInfo.bio"
                            :error="errors.bio"
                            info="简单介绍一下自己"
                        ></TextArea>
                        <div class="mb-3">
                            <button
                                type="button"
                                class="btn btn-light"
                                @click="displaySocialInputs = !displaySocialInputs"
                            >添加社交账号</button>
                        </div>
                        <div v-show="displaySocialInputs">
                            <InputGroup
                                placeholder="微信公众号"
                                name="wechat"
                                v-model="msgInfo.wechat"
                                :error="errors.weichat"
                                icon="fab fa-weixin"
                            ></InputGroup>

                            <InputGroup
                                placeholder="QQ"
                                name="QQ"
                                v-model="msgInfo.QQ"
                                :error="errors.QQ"
                                icon="fab fa-qq"
                            ></InputGroup>

                            <InputGroup
                                placeholder="腾讯课堂网址"
                                name="tengxunkt"
                                v-model="msgInfo.tengxunkt"
                                :error="errors.tengxunkt"
                                icon="fab fa-wechat"
                            ></InputGroup>

                            <InputGroup
                                placeholder="网易课堂网址"
                                name="wangyikt"
                                v-model="msgInfo.wangyikt"
                                :error="errors.wangyikt"
                                icon="fab fa-wechat"
                            ></InputGroup>
                        </div>

                        <input type="submit" class="btn btn-info btn-block mt-4 mb-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import TextFile from "../../components/TextFile";
import TextArea from "../../components/TextArea";
import SelectList from "../../components/SelectList";
import InputGroup from "../../components/InputGroup";
export default {
    name: "EditProfile",
    data() {
        return {
            msgInfo: {
                handle: "",
                company: "",
                website: "",
                location: "",
                status: "请选择您的职业",
                skills: "",
                githubusername: "",
                bio: "",
                wechat: "",
                QQ: "",
                tengxunkt: "",
                wangyikt: ""
            },
            errors: {},
            displaySocialInputs: false,
            options: [
                { label: "0", value: "请选择您的职业" },
                { label: "Junior Developer", value: "前端初级工程师" },
                { label: "Senior Developer", value: "前端中级工程师" },
                { label: "HighDeveloper", value: "前端高级工程师" },
                { label: "Manager", value: "前端管理" },
                { label: "backend Developer", value: "后端开发" },
                { label: "Python machine learning", value: "Python机器学习" },
                { label: "Other", value: "其他" }
            ]
        };
    },
    computed: {
        ...mapGetters(["profile"])
    },
    components: {
        TextFile,
        TextArea,
        SelectList,
        InputGroup
    },
    methods: {
        getCurrentProfile() {
            this.profile.company = this.profile.company
                ? this.profile.company
                : "";
            this.profile.website = this.profile.website
                ? this.profile.website
                : "";
            this.profile.location = this.profile.location
                ? this.profile.location
                : "";
            this.profile.githubusername = this.profile.githubusername
                ? this.profile.githubusername
                : "";
            this.profile.bio = this.profile.bio ? this.profile.bio : "";

            this.profile.social = this.profile.social
                ? this.profile.social
                : {};
            this.profile.wechat = this.profile.social.wechat
                ? this.profile.social.wechat
                : "";
            this.profile.QQ = this.profile.social.QQ
                ? this.profile.social.QQ
                : "";
            this.profile.tengxunkt = this.profile.social.tengxunkt
                ? this.profile.social.tengxunkt
                : "";
            this.profile.wangyikt = this.profile.social.wangyikt
                ? this.profile.social.wangyikt
                : "";

            this.profile.skills = this.profile.skills.length
                ? this.profile.skills.join(",")
                : "";
            this.msgInfo = this.profile;
        },
        async submit() {
            try {
                let res = await this.$http.post("/api/profile", this.msgInfo);
                this.errors = {};
                this.displaySocialInputs = false;
                this.$store.dispatch("setProfile", res.data);
                this.$router.push("/dashboard");
            } catch (err) {
                if (err.response.data) {
                    this.errors = err.response.data;
                }
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getCurrentProfile();
        });
    }
};
</script>

<style lang="scss" scoped>
.editeProfile {
    width: 100%;
}
</style>
