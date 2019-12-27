<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">
                <i :class="icon"></i>
            </span>
        </div>
        <input
            :class="['form-control','form-control-lg',{'is-invalid': error}]"
            :placeholder="placeholder"
            :name="name"
            :value="value"
            @input="$emit('input', $event.target.value)"
            autocomplete
        />
        <div v-if="error" class="invalid-feedback">{{error}}</div>
    </div>
</template>

<script>
export default {
    name: "InputGroup",
    props: {
        placeholder: String,
        value: String,
        name: String,
        error: String,
        icon: String
    }
};
</script>

<style lang="scss" scoped>
</style>
