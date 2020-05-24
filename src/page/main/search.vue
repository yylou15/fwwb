<template>
    <div class="wrapper">
        <div class="side-bar">
            <img src="../../assets/analysis/left_bg.png" alt="" class="side-bar-bg">
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon1.png" alt=""><span
                    class="section-text">基本信息</span></div>
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon2.png" alt=""><span
                    class="section-text">社会保险</span></div>
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon3.png" alt=""><span
                    class="section-text">产品质量</span></div>
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon4.png" alt=""><span
                    class="section-text">商业风险</span></div>
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon5.png" alt=""><span
                    class="section-text">信誉记录</span></div>
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon6.png" alt=""><span
                    class="section-text">经营规模</span></div>
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon7.png" alt=""><span
                    class="section-text">知识产权</span></div>
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon8.png" alt=""><span
                    class="section-text">司法信息</span></div>
            <div class="section"><img class="section-icon" src="../../assets/analysis/icon9.png" alt=""><span
                    class="section-text">招聘信息</span></div>
        </div>
        <div class="container">
            <div class="tab-caption">基本信息</div>
            <br>
            <Row>
                <Col span="9">
                    <Col span="3" class="text-col">
                        企业名称*
                    </Col>
                    <Col span="18" offset="3">
                        <Input placeholder="" style="width: 100%"/>
                    </Col>
                </Col>
            </Row>
            <br>
            <div class="tab-caption">社会保险</div>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="24" class="text-col">
                            单位参加城镇职工基本养老保险累计欠缴金额
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="24" class="text-col">
                            单位参加工伤保险累计欠缴金额
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="24" class="text-col">
                            单位参加失业保险累计欠缴金额
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="24" class="text-col">
                            单位参加生育保险累计欠缴金额
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="24" class="text-col">
                            单位参加职工基本医疗保险累计欠缴金额
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <div class="tab-caption">产品质量</div>
            <br>
            <Row>
                <Col span="9">
                    <Col span="7" class="text-col">
                        产品合格率
                    </Col>
                    <Col span="17" offset="">
                        <Input placeholder="" style="width: 100%"/>
                    </Col>
                </Col>
            </Row>
            <br>
            <div class="tab-caption">商业保险</div>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="7" class="text-col">
                            企业累计欠税额
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="7" class="text-col">
                            出质股权次数
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <div class="tab-caption">信誉记录</div>

            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="8" class="text-col">
                            企业经营处罚记录次数
                        </Col>
                        <Col span="16">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="12" class="text-col">
                            是否列入失信黑名单
                        </Col>
                        <Col span="12">
                            <RadioGroup style="margin-top: 5px;" >
                                <Radio label="是">是</Radio>
                                <Radio label="否">否</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="12" class="text-col">
                            是否列入经营异常
                        </Col>
                        <Col span="12">
                            <RadioGroup style="margin-top: 5px;" >
                                <Radio label="是">是</Radio>
                                <Radio label="否">否</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="12" class="text-col">
                            是否列为守合同重信用企业
                        </Col>
                        <Col span="12">
                            <RadioGroup style="margin-top: 5px;" >
                                <Radio label="是">是</Radio>
                                <Radio label="否">否</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="12" class="text-col">
                            是否列为工商部失信企业
                        </Col>
                        <Col span="12">
                            <RadioGroup style="margin-top: 5px;" >
                                <Radio label="是">是</Radio>
                                <Radio label="否">否</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="6" class="text-col">
                            信用等级
                        </Col>
                        <Col span="18">
                            <CheckboxGroup style="margin-top: 5px;">
                                <Checkbox label="N-"></Checkbox>
                                <Checkbox label="B-"></Checkbox>
                                <Checkbox label="A"></Checkbox>
                                <Checkbox label="C"></Checkbox>
                                <Checkbox label="N"></Checkbox>
                                <Checkbox label="A-"></Checkbox>
                            </CheckboxGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <div class="tab-caption">经营规模</div>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="7" class="text-col">
                            网店个数
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="7" class="text-col">
                            主债权数额
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="7" class="text-col">
                            对外投资次数
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="7" class="text-col">
                            认缴出资额
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="7" class="text-col">
                            中标次数
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="7" class="text-col">
                            分支机构数
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <div class="tab-caption">知识产权</div>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="12" class="text-col">
                            企业是否拥有域名的知识产权
                        </Col>
                        <Col span="12">
                            <RadioGroup style="margin-top: 5px;" >
                                <Radio label="是">是</Radio>
                                <Radio label="否">否</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="10" class="text-col">
                            企业软件著作登记次数
                        </Col>
                        <Col span="14">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="7" class="text-col">
                            企业专利申请次数
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="7" class="text-col">
                            商标申请次数
                        </Col>
                        <Col span="17">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <div class="tab-caption">司法信息</div>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="12" class="text-col">
                            公司是否有过行政处罚
                        </Col>
                        <Col span="12">
                            <RadioGroup style="margin-top: 5px;" >
                                <Radio label="是">是</Radio>
                                <Radio label="否">否</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="12" class="text-col">
                            是否列为行政异常
                        </Col>
                        <Col span="12">
                            <RadioGroup style="margin-top: 5px;" >
                                <Radio label="是">是</Radio>
                                <Radio label="否">否</Radio>
                            </RadioGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <div class="tab-caption">招聘信息</div>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="10" class="text-col">
                            智联招聘记录条数
                        </Col>
                        <Col span="14">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
                <Col span="9" offset="3">
                    <Row>
                        <Col span="10" class="text-col">
                            前程无忧招聘记录条数
                        </Col>
                        <Col span="14">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>
            <br>
            <Row>
                <Col span="9">
                    <Row>
                        <Col span="10" class="text-col">
                            中华英才网招聘记录条数
                        </Col>
                        <Col span="14">
                            <Input placeholder=""/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br>

            <br>
            <br>
            <div class="submit-wrapper">
                <router-link to="/home/result">
                    <div class="submit-button">
                        <img src="../../assets/login/login_btn.png" alt="login_btn" class="login-btn-bg">
                        <span class="login-text">
                            提&nbsp;&nbsp;交
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
    .submit-wrapper {
        width: 100%;
        margin-left: -36px;
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
    .container {
        padding: 32px 36px;
        display: inline-block;
        overflow-y: scroll;
        height: 100%;
        width: calc(100% - 250px);
        background-color: white;
    }

    .wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: left;
    }

    .side-bar {
        height: 100%;
        width: 250px;
        position: relative;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .side-bar-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -999;

    }

    .section {
        width: 100%;
        height: 31px;
        line-height: 31px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .section-icon {
        width: 31px;
        height: 31px;
    }

    .section-text {
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC, serif;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-left: 20px;

    }

    .tab-caption {
        height:40px;
        font-size:27px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:33px;
        position: relative;
    }
    .tab-caption::after{
        content: "";
        width: 108px;
        height: 5px;
        background: url("../../assets/analysis/title_line.png") 100% 100%;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .text-col {
        display: flex;
        justify-content: left;
        align-items: center;
        height: 100%;
        position: relative;
        line-height: 32px;
    }
</style>