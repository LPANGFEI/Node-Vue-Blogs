<template>
    <div class="loading">
        <img src="../assets/loading.gif" alt srcset />
    </div>
</template>

<style scoped lang="scss">
.loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-bottom: -50px;
    }
}
</style>
