<template>
    <!-- 边框start -->
    <dv-border-box-5 :reverse="true" class="video_border">
        <div class="video_pic"></div>
        <div class="video_ctr">
            <!-- 后退 -->
            <input type="button">

            <!-- 暂停播放 -->
            <input type="button">

            <!-- 前进 -->
            <input type="button">
        </div>
    </dv-border-box-5>
    <!-- 边框end -->

</template>

<script>
    export default {

    }
</script>

<style scoped>
.video_border{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.video_pic{
    margin-top: 5%;
    margin-right: 0;
    height:70%;
    width: 80%;
}
.video_ctr{
    height: 10%;
    padding:0 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>