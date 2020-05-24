<template>
    <div>
        <Header></Header>
        <div class="container">
            <img src="../assets/common/bg.png" alt="" style="width: 100%;height: 100%;position:absolute;z-index: -999">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/common/Header";

    export default {
        name: "Home",
        components: {Header}
    }
</script>

<style scoped>
    .container {
        height: calc(100vh - 111px);
        width: 100%;
        position: relative;
        /*background: url("../assets/common/bg.png") 100% 100%;*/

    }
</style>