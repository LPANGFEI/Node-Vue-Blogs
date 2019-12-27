<template>
    <div class="form-group">
        <textarea
            :class="['form-control','form-control-lg',{'is-invalid': error}]"
            :placeholder="placeholder"
            :value="value"
            :name="name"
            @input="$emit('input', $event.target.value)"
            autocomplete
        />
        <div v-if="error" class="invalid-feedback">{{error}}</div>
        <small v-if="info" class="form-text text-muted">{{info}}</small>
    </div>
</template>

<script>
export default {
    name: "TextArea",
    props: {
        placeholder: String,
        value: String,
        name: String,
        error: String,
        info: String
    }
};
</script>

<style lang="scss" scoped>
small {
    display: flex;
    justify-content: start;
}
</style>
