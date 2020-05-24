<template>
    <div class="wrapper">
        <div class="sub-wrapper">
            <div class="left">
                <div class="left-top">
                    <img src="../../assets/build/left_tittle1.png" alt="">
                    <div class="p">
                        用户通过上传一个包含多个企业数据的xls表格文件，实现批量导入企业数据，进而获得多个企业的分类结果。
                    </div>
                </div>
                <div class="left-bottom">
                    <img src="../../assets/build/left_tittle2.png" alt="">
                    <div class="p">
                        批量录入功能要求用户使用系统提供的表格模板，每一行记录一个企业的信息，将该文件在系统内上传提交，即可得到多个企业的分析报告。
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="step">
                    <div class="caption">
                        <div class="caption-num">
                            01
                        </div>
                        <div class="circle-dot" style="margin-left: 17px;"></div>
                        <div class="caption-text">
                            下载数据模板
                        </div>
                    </div>
                    <div class="button">点击下载</div>
                </div>
                <div class="step">
                    <div class="caption">
                        <div class="caption-num">
                            02
                        </div>
                        <div class="circle-dot"></div>
                        <div class="caption-text">
                            上传数据文件
                        </div>
                    </div>
                    <div class="button" style="background: #caf5fe;color: #666666">点击上传</div>
                </div>
                <div class="step">
                    <div class="caption">
                        <div class="caption-num">
                            03
                        </div>
                        <div class="circle-dot"></div>
                        <div class="caption-text">
                            获得批量画像
                        </div>
                    </div>
                    <div class="button" @click="show">提&nbsp;&nbsp;&nbsp;交</div>
                </div>

                <div class="line">
                </div>
            </div>
        </div>

        <div class="modal-wrapper" v-if="showModal">
            <div class="modal">
                <img src="../../assets/build/submit_img.png" alt="" class="submit-img">
                <div class="modal-text">
                    <div>
                        提交成功！
                    </div>
                    <div style="margin-top: 15px;">
                        分析结果下载中
                    </div>
                </div>
                <div class="submit-btn" @click="showModal = false">
                    确定
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "build",
        data() {
            return {
                showModal: false
            }
        },
        methods:{
            show(){
                this.showModal = true;
            }
        }
    }
</script>

<style scoped>

    .button {
        width: 261px;
        height: 52px;
        background: linear-gradient(137deg, rgba(75, 227, 222, 1) 0%, rgba(97, 185, 246, 1) 100%);
        border-radius: 11px;

        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 52px;
        text-align: center;
        float: right;
        margin-right: 140px;
        margin-top: 20px;
        cursor: pointer;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sub-wrapper {
        width: 1000px;
        height: 500px;
        position: relative;
        margin-top: -70px;
    }

    .left {
        width: 50%;
        height: 100%;
        float: left;
        padding: 50px;
    }

    .right {
        width: 50%;
        height: 100%;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
    }

    .left-bottom {
    }

    .left-top {
    }

    .left-top, .left-bottom {
        height: 50%;
    }

    .p {
        font-size: 17px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 24px;
        text-indent: 34px;
        margin-top: 10px;
    }

    .caption-num {
        font-size: 39px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: transparent;
        text-shadow: rgba(190, 239, 248, 1) 0 0 5px;
        line-height: 55px;
    }

    .circle-dot {
        width: 13px;
        height: 13px;
        background: rgba(190, 239, 248, 1);
        border: 3px solid rgba(66, 218, 228, 1);
        border-radius: 7px;
        margin-left: 10px;
    }

    .caption-text {
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(66, 218, 228, 1);
        line-height: 37px;
        margin-left: 10px;

    }

    .caption {
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .step {
        margin-bottom: 20px;
    }

    .line {
        position: absolute;
        width: 2px;
        height: 460px;
        border: 3px solid;
        border-image: linear-gradient(180deg, rgba(183, 229, 227, 1), rgba(183, 229, 227, 1), rgba(255, 255, 255, 0)) 3 3;
        left: 12%;
        z-index: -999;
        top: 23px;
    }

    .modal-wrapper {
        position: absolute;
        width: 100%;
        height: 100vh;
        margin-top: -55.5px;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        width: 591px;
        height: 321px;
        background: rgba(255, 255, 255, 1);
        border-radius: 9px;
        position: relative;
    }

    .submit-img {
        margin-top: 69px;
        margin-left: 69px;
    }

    .modal-text {
        width: 109px;
        height: 31px;
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 31px;
        position: absolute;
        left: 280px;
        top: 95px;
        width: 50%;
    }

    .submit-btn {
        width: 105px;
        height: 40px;
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 40px;
        margin: 0 auto;
        background: linear-gradient(137deg, rgba(75, 227, 222, 1) 0%, rgba(97, 185, 246, 1) 100%);
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
    }
</style>