<template>
    <div class="form-group">
        <select
            :class="['form-control','form-control-lg',{'is-invalid': error}]"
            :value="value"
            :name="name"
            @input="$emit('input', $event.target.value)"
            autocomplete
        >
            <option
                v-for="(option,index) in options"
                :key="index"
                :value="option.value"
            >{{option.value}}</option>
        </select>
        <div v-if="error" class="invalid-feedback">{{error}}</div>
        <small v-if="info" class="form-text text-muted">{{info}}</small>
    </div>
</template>

<script>
export default {
    name: "SelectList",
    props: {
        value: String,
        name: String,
        error: String,
        info: String,
        options: Array
    }
};
</script>

<style lang="scss" scoped>
small {
    display: flex;
    justify-content: start;
}
</style>
