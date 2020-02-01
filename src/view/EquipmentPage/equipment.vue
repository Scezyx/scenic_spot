<template>
    <!-- 设备页 start-->
    <div class="routePage">
        <div class="top">
            <topBar></topBar>
        </div>
        <div class="content">
            <div class="content_left">
                <div class="text">
                    <text></text>
                </div>
                <!-- 设备分布 starrt-->
                <div class="distribution">
                    <titleBar msg="设备分布"></titleBar>
                    <div class="dis_pic"></div>
                </div>
                <!-- 设备分布 end-->
            </div>
            <div class="content_main">
                <navBar></navBar>
                <div class="content_videos">
                    <Video v-for=""></Video>
                </div>
            </div>

            <div class="content_right">
                <!-- 查找设备 start-->
               <div class="search">
                   <titleBar msg="查找设备"></titleBar>
                   <div class="searchbox">
                       <div class="searchboxBy"> 
                           <input type="text" placeholder="输入设备号">
                           <div class="splitLine"></div>
                           <button>取消</button>
                       </div>
                       <div class="searchboxBy">
                           <input type="text" placeholder="输入查找时间:年/月/日/分/秒">
                           <div class="splitLine"></div>
                           <button>取消</button>
                       </div>
                   </div>
               </div>
                <!-- 查找设备 end-->

                <!-- 当前设备状态 -->
                <div class="nowState">
                    <div class="nowStateTitle">
                        <div>当前设备状态：</div>
                        <div>良好</div>
                    </div>
                    <div class="nowStateContent">
                        <Video></Video>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 设备页 end-->
</template>

<script>
    import topBar from '../../components/public/topBar.vue'
    import titleBar from '../../components/public/titleBar.vue'
    import navBar from '../../components/public/navBar.vue'
    import Video from '../../components/public/video.vue'
    import titleContent   from '../../components/public/titleContent.vue'

    export default {
        name:'equipment',
        data() {
            return {
                data: [],
                total: 10000,
                pageSize: 20,
                rowHeight: 30
            };
        },
        created() {
            let data = [];
            for (let i = 0; i < this.total; i++) {
                data.push({
                    id: i,
                    name: "Item" + i
                });
            }
            this.data = data;
        },
        components: {
            topBar,
            titleBar,
            Video,
            navBar,
            titleContent
        }
    }
</script>

<style scoped>
@import "../../css/public.css";
    html,
    body {
        height: 100%;
        width: 100%;
    }
    .text{
        height:20%;
        width: 100%;
        background: #ffffff;
    }
    .distribution{
        margin-top: 5%;
        height:75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    .dis_pic{
        flex:1;
        margin-top: 5%;
        background: #fff;
    }
    .search{
        height:30%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .searchbox{
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 10%;
        align-items: center;
    }
    .searchboxBy{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height:25%;
        width: 80%;
        border:2px #ace4f3 solid;
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
    .nowState{
        height:30%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .nowStateTitle{
        height:20%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        font-size: 26px;
        color:#c7e8ef;
    }
</style>