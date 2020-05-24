<template>
    <div class="wrapper">
        <router-link to="/home/search">
            <div class="card md">
                <img src="../../assets/main/fun1_img.png" class="card-bg" alt="img1">
                <div class="caption-wrapper" style="bottom: 32px">
                    <div class="title">企业画像检索</div>
                    <div class="subtitle">查询已聚类企业情况</div>
                </div>
            </div>
        </router-link>
        <router-link to="/home/analysis">
            <div class="card lg">
                <img src="../../assets/main/fun2_img.png" class="card-bg" alt="img2">
                <div class="caption-wrapper" style="bottom: 70px">
                    <div class="title">企业数据分析</div>
                    <div class="subtitle">录入企业信息，获得企业分类情况</div>
                </div>
            </div>
        </router-link>
        <router-link to="/home/build">
            <div class="card md">
                <img src="../../assets/main/fun3_img.png" class="card-bg" alt="img3">
                <div class="caption-wrapper" style="bottom: 32px">
                    <div class="title">批量画像构建</div>
                    <div class="subtitle">批量导入企业数据文件</div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "MyMain"
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .md {
        width: 415px;
        height: 342px;
        margin-top: 150px !important;
    }

    .lg {
        width: 513px;
        height: 548px;
    }

    .card {
        background: white;
        margin: 20px;
        border-radius: 20px;
        position: relative;
    }

    .card-bg {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .card::after {
        content: "";
        width: 92%;
        height: 92%;
        left: 4%;
        top: 4%;

        background: rgba(149, 227, 236, 1);
        border-radius: 20px;
        filter: blur(30px);
        z-index: -1;
        position: absolute;
    }

    .caption-wrapper {
        width: 100%;
        height: 90px;
        position: absolute;
        text-align: center;
    }

    .title {
        width: 210px;
        height: 49px;
        font-size: 35px;
        font-family: PingFangSC-Regular, PingFang SC, serif;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 49px;
        margin: 0 auto;
    }

    .subtitle {
        width: 250px;
        height: 36px;
        font-size: 16px!important;
        font-family: PingFangSC-Regular, PingFang SC, serif;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
        line-height: 36px;
        margin: 25px auto;
    }
    router-link {
        cursor: pointer;
    }
</style>