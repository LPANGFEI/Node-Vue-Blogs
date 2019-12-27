<template>
    <div>
        <h4 class="mb-2">个人经历</h4>
        <table class="table">
            <thead>
                <tr>
                    <th class="w-300">公司</th>
                    <th class="w-300">职位</th>
                    <th class="w-300">年份</th>
                    <th class="w-300">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in experience" :key="item._id">
                    <td>{{item.company}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.from}} ~ {{item.to}}</td>
                    <td>
                        <button @click="deleteClick(item._id)" class="btn btn-danger">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Experience",
    data() {
        return {};
    },
    props: {
        experience: Array
    },
    methods: {
        deleteClick(id) {
            this.$emit("deleteExperience", id);
        }
    }
};
</script>

<style lang="scss" scoped>
.w-300 {
    width: 300px;
}
</style>
