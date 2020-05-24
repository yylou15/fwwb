<template>
    <div class="wrapper">
        <div class="button-wrapper">
            <Button type="success" shape="circle" class="button" style="background-color: #4BE3DE;margin-left:70px">注册
            </Button>
            <Button ghost type="success" shape="circle" class="button" style="margin-left: 50px;color: #4BE3DE;">联系我们
            </Button>
        </div>

        <div class="left-wrapper">
            <img src="../assets/login/left_triangle.png" alt="左三角" class="left-tri">
            <img src="../assets/login/top_logo.png" alt="左上logo" class="left-top-logo">
        </div>

        <div class="panel">
            <div class="input-wrapper">
                <div class="login-caption">
                    登录
                </div>
                <div class="username-wrapper">
                    <div class="input-label">
                        账号
                    </div>
                    <br>
                    <Input prefix="" placeholder="" style="width: 100%" size="large"/>
                </div>
                <div class="password-wrapper">
                    <div class="input-label">
                        密码
                    </div>
                    <br>
                    <Input prefix="" placeholder="" style="width: 100%" size="large"/>
                </div>
                <div class="submit-wrapper">
                    <router-link to="/home/main">
                        <div class="submit-button">
                            <img src="../assets/login/login_btn.png" alt="login_btn" class="login-btn-bg">
                            <span class="login-text">
                            登&nbsp;&nbsp;录
                        </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
    .wrapper {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: url("../assets/login/Group.png") 100% 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper-bg {
        display: block;
        position: absolute;
        width: 100%;

        /*height: 100%;*/
    }

    .button-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        height: 116px;
        width: 430px;
        display: flex;
        align-items: center;
    }

    .button {
        height: 50px;
        width: 120px;
        border-color: #4BE3DE;
    }

    .ivu-btn-success.active, .ivu-btn-success:active {
        background-color: #4BE3DE;
        border-color: #4BE3DE;
    }

    .ivu-btn-success:hover {
        border-color: #4BE3DE;
    }

    .panel {
        width: 1371px;
        height: 648px;
        background: rgba(255, 255, 255, 1);
        border-radius: 13px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }

    .left-wrapper {
        width: 50%;
        height: 100%;
        position: absolute;
        left: 0;
    }

    .left-wrapper > image {
        display: block;
        position: absolute;
        z-index: 999;
    }

    .left-tri {
        height: 100%;
        left: 0;
    }

    .left-top-logo {
        position: absolute;
        top: 25px;
        left: 40px;
    }

    .input-wrapper {
        height: 80%;
        margin-top: 64.8px;
        width: 30%;
        float: right;
        margin-right: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .input-label {
        width: 38px;
        height: 26px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC, serif;
        font-weight: 400;
        color: rgba(166, 175, 175, 1);
        line-height: 21px;
    }

    .login-caption {
        width: 147px;
        height: 62px;
        font-size: 35px;
        font-family: PingFangSC-Regular, PingFang SC, serif;
        font-weight: 400;
        color: rgba(70, 179, 202, 1);
        line-height: 49px;
    }

    .submit-wrapper {
        width: 100%;
    }

    .submit-button {
        margin: 0 auto;
        width: 300px;
        height: 60px;
        position: relative;
        cursor: pointer;
        border-radius: 20px;
        transition: 0.3s;
    }

    .submit-button:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    }

    .login-text {
        font-size: 25px;
        font-family: PingFangSC-Regular, PingFang SC, serif;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        display: block;
        position: absolute;
        line-height: 60px;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .login-btn-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
</style>

<style>
    .ivu-input-large {
        border: none !important;
        border-radius: 0 !important;
        transition: .3s !important;
        border-bottom: 1px rgba(166, 175, 175, 1) solid !important;
    }

    .ivu-input-large:focus {
        box-shadow: unset !important;
        transition: 0.3s;
    }
</style>