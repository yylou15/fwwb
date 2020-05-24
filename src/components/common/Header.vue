<template>
    <div class="wrapper">
        <div class="wrapper-shadow"></div>
        <img src="../../assets/common/top_logo.png" alt="" class="logo-pic">
        <img src="../../assets/common/top_icon_usr.png" alt="" class="usr-icon">


        <Button class="button" ghost shape="circle" style="color: white;" type="success">联系我们</Button>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .wrapper, .wrapper-shadow {
        width: 100%;
        height: 111px;
        background: linear-gradient(135deg, rgba(75, 227, 222, 1) 0%, rgba(97, 185, 246, 1) 100%);
        position: relative;
    }

    .wrapper-shadow {
        position: absolute;
        filter: blur(10px);
    }

    .wrapper {
        display: flex;
        align-items: center;
        padding-right: 70px;
    }

    .logo-pic {
        display: block;
        width: 263px;

        position: absolute;
        left: 42px;
        top: 35px;
    }
    .button {
        position: absolute;
        right: 70px;
        height: 50px;
        width: 120px;
        border-color: white;
        border-width: 3px;
    }

    .usr-icon {
        position: absolute;
        right: 220px;
        height: 48px;
        width: 48px;
        border-color: white;
        cursor: pointer;
    }
</style>