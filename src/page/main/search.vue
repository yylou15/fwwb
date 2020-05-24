<template>
    <div class="wrapper">
        <div class="sub-wrapper">
            <img src="../../assets/search/center_img.png" alt="" class="center-bg">
            <div class="caption-wrapper">
                <img src="../../assets/search/center_char_bg.png" alt="" class="caption-shadow-bg">
                <div class="caption-text">
                    企业画像检索
                </div>
            </div>
            <div class="input-wrapper">
                <img src="../../assets/search/center_input.png" alt="" class="input-bg">
                <div class="input">
                    <input size="large" value="" class="input-cnt">
                </div>
            </div>
            <router-link to="/home/result" class="arrow"></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
    .input {
        margin-top: 93px;
        margin-left: 100px;
        position: absolute;
        z-index: 9999;
        width: 70%;
    }

    .input-wrapper {
        width: 913px;
        height: 227px;
        position: absolute;
        left: -121.5px;
        top: 43%;

    }

    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sub-wrapper {
        width: 670px;
        height: 670px;
        position: relative;
    }

    .center-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -999;
    }

    .caption-wrapper {
        width: 100%;
        height: 55px;
        font-size: 39px;
        text-align: center;
        top: 45%;
        position: absolute;
    }


    .caption-shadow-bg {
        position: absolute;
        width: 50%;
        left: 25%;
        height: 100%;
        z-index: -1;

    }

    .caption-text {

        position: absolute;
        z-index: 888;
        width: 100%;
        height: 100%;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: white;
        line-height: 55px;
    }

    .input-bg {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .input-cnt {
        border: none;
        height: 40px;
        font-size: 30px;
        line-height: 40px;
        outline: none;
        width: 100%;
    }

    .arrow {
        cursor: pointer;
        width: 70px;
        height: 70px;
        position: absolute;
        top: 55%;
        right: -35px;
    }
</style>