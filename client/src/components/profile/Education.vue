<template>
    <div>
        <h4 class="mb-2">教育经历</h4>
        <table class="table">
            <thead>
                <tr>
                    <th class="w-300">学校</th>
                    <th class="w-300">学历</th>
                    <th class="w-300">年份</th>
                    <th class="w-300">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in education" :key="item._id">
                    <td>{{item.school}}</td>
                    <td>{{item.degree}}</td>
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
    name: "Education",
    data() {
        return {};
    },
    props: {
        education: Array
    },
    methods: {
        deleteClick(id) {
            this.$emit("deleteEducation", id);
        }
    }
};
</script>

<style scoped lang='scss'>
.w-300 {
    width: 300px;
}
</style>
