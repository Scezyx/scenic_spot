<template>
    <!-- 路径页 start-->
    <div class="routePage">
        <div class="top">
            <topBar></topBar>
        </div>
        <div class="content">
            <div class="content_left">
                <!-- 实时监控 start -->
                <div class=monitor>
                    <titleBar msg="实时监控"></titleBar>
                    <div class="video">
                        <Video></Video>
                    </div>
                </div>
                <!-- 实时监控 end -->

                <!-- 途经监控 start-->
                <div class="via">
                    <titleBar msg="途经监控"></titleBar>
                    <select name="" id="" class="via_sel">
                        <option value="设备一"></option>
                    </select>
                    <div class="video">
                        <Video></Video>
                    </div>
                </div>
                <!-- 途经监控 end-->

                <div class="recent_staff">
                    <ComboBox valueField="id" textField="name" :virtualScroll="true" :data="data" :total="total"
                        :pageSize="pageSize" :rowHeight="rowHeight">
                    </ComboBox>
                </div>
            </div>
            <div class="content_main">
                <navBar></navBar>
            </div>

            <div class="content_right">
                <!-- 人员寻找 start -->
                <div class="peo_search">
                    <titleBar msg="人员寻找"></titleBar>
                    <dv-border-box-1 class="peo_search_pic">

                    </dv-border-box-1>
                </div>
                <!-- 人员寻找 end -->

                <!-- 追踪结果 start -->
                <div class="track">
                    <titleBar msg="追踪结果"></titleBar>
                    <div class="track_table"></div>
                </div>
                <!-- 追踪结果 end -->

            </div>
        </div>
    </div>
    <!-- 路径页 end-->
</template>

<script>
    import topBar from '../../components/public/topBar.vue'
    import titleBar from '../../components/public/titleBar.vue'
    import Video from '../../components/public/video.vue'
    import navBar from '../../components/public/navBar.vue'

    export default {
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
            navBar
        }
    }
</script>

<style scoped>
    html,
    body {
        height: 100%;
        width: 100%;
    }

    .routePage {
        height: 100%;
        width: 100%;
    }

    .top {
        height: 10%;
        width: 100%;
    }

    .content {
        height: 90%;
        padding: 0 1.5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .content_left,.content_right {
        width: 22%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    /* 监控 */
    .monitor,
    .via {
        height: 29%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .via {
        height: 42%;
        margin-top: 10%;
    }

    .via_sel {
        width: 30%;
        margin-top: 5%;
    }

    .video {
        flex: 1;
    }
    .recent_staff{
        height:5%;
        margin-top: 10%;
    }
    .peo_search{
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .peo_search_pic{
        margin-top: 5%;
    }
    .track{
        margin-top: 10%;
        height: 40%;
    }

    .track_table{
        margin-top: 5%;
    }

    .content_main{
        width:52%;  
    }
</style>