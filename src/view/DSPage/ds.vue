<template>
    <!-- 灾情页 start-->
    <div class="routePage">
        <div class="top">
            <topBar></topBar>
        </div>
        <div class="content">
            <div class="content_left layout">
                <titleContent class="content_left_cont" title="事件处理" waitValue="0" valueIng="0"></titleContent>
                <titleBar msg="当前情况"></titleBar>
                <pic></pic>
                <call callTitle="联系负责人" :users="names"></call>
            </div>

            <div class="content_main">
                <navBar></navBar>
                <dv-border-box-5 :reverse="true" class="text_border">
                    <div class="textBox">
                        <div>{{waring}}</div>
                        <a href="" class="waringBtn">详情>></a>
                    </div>
                </dv-border-box-5>
                <div class="map">

                </div>
            </div>

            <div class="content_right">
                <!-- <div class="history"> </div> -->
                <titleBar msg="历史记录"></titleBar>
                <div class="searchboxBy">
                    <input type="text" placeholder="请输入输入关键字查询">
                    <button>取消</button>
                </div>
                <dv-border-box-5 :reverse="true" class="waring_border">
                    <div class="waring_content">
                        <div class="waring_text" v-for="(obj , index) in waringInfo" :key="index">
                            <div class="waring_time">{{obj.time}}</div>
                            <div class="waring_address">
                                <div>{{obj.text}}</div>
                                <a href="">>></a>
                            </div>
                        </div>
                    </div>
                </dv-border-box-5>

                <titleBar msg="灾后恢复"></titleBar>

                <call class="recovery"></call>    
            </div>
        </div>
    </div>
    <!-- 灾情页 end-->
</template>

<script>
    import topBar from '../../components/public/topBar.vue'
    import titleBar from '../../components/public/titleBar.vue'
    import navBar from '../../components/public/navBar.vue'
    import Video from '../../components/public/video.vue'
    import titleContent from '../../components/public/titleContent.vue'
    import pic from '../../components/public/pic'
    import call from '../../components/public/call'

    export default {
        name:'ds',
        data() {
            return{
                names:[{name:"张三"},{name:"李四"},{name:"王五"}],
                waring:"当前xxx发生一起火灾,正在处理中",
                waringInfo:[{time:"2019/9/19",text:"办公区发生一起火灾"},{time:"2020/1/19",text:"xxx发生一起火灾"},],
            }
        },
        components: {
            topBar,
            titleBar,
            Video,
            navBar,
            titleContent,
            pic,
            call
        }
    }
</script>

<style scoped>
@import "../../css/public.css";
    a{
        color:#e6e6e6;
    }
    html,
    body {
        height: 100%;
        width: 100%;
    }
    .layout{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 0 2%;
    }
    
    .text_border{
        color: #e6e6e6;
        height:15%;
        width: 80%;
        margin: 0 auto;
        margin-top: 1%;
    }
    .textBox{
        height: 100%;
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .waringBtn{
        color: #e6e6e6;
        align-self:flex-end;
    }
    .map{
        margin-top: 2%;
        height:55%;
        background: #fff;
    }
    .searchboxBy{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height:5%;
        border:2px #ace4f3 solid;
        margin-top: 5%;
    }
    .searchboxBy>input{
        width: 85%;
        background: #151531;
        border:none;
        padding-left:5% ;
    }
    .splitLine{
        height: 80%;
        width:1%;
        background:#ace4f3;
        align-self:center;
        align-items: center;
    }
    .searchboxBy>button{
        width: 15%;
        background: #151531;
        border:none;
        color:#c7e8ef;
    }
    .waring_border{
        height:25%;
        margin-top: 7%;
        margin-bottom: 12%;
    }
    .waring_content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .waring_text{
        margin-top: 10%;
        color:#e6e6e6;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: left;
    }
    .waring_address{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .recovery{
        margin-top: 5%;
    }
</style>