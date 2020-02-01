<template>
    <div class="navBar">
        <div class="navBar_btn">
            <div class="nav_btn show" @click="gotoRoute()">路径</div>
            <div class="nav_btn" @click="gotoEquipment()">设备</div>
            <div class="nav_btn" @click="gotoDS()">灾情</div>
            <div class="nav_btn" @click="gotoBehavior()">行为</div>
            <div class="nav_btn" @click="gotoLogout">注销</div>
        </div>
        <div class="navBar_text">
            <div class="navBar_time">{{ new Date() | moment("HH:mm:ss") }}</div>
            <div class="navBar_data">{{ new Date() | moment("YYYY/MM/DD") }} {{this.dateInfo.ncWeek}}</div>
            <div>{{this.dateInfo.gzYear}}{{this.dateInfo.gzMonth}}{{this.dateInfo.gzDay}}</div>
        </div>
    </div>
</template>

<script>
import Route from '../../view/RoutePage/Route.vue' //路径页面
import equipment from '../../view/EquipmentPage/equipment'
import ds from '../../view/DSPage/ds'
import behavior from '../../view/behaviorPage/behavior'

export default {
    data(){
        return{
            dateInfo: {}
        }
    },
    methods:{
        gotoRoute(){
            return this.$router.push({path:'/'})
        },
        gotoEquipment(){
            return this.$router.push({path:'/equipment'})
        },
        gotoDS(){
            return this.$router.push({path:'/ds'})
        },
        gotoBehavior(){
            return this.$router.push({path:'/behavior'})
        },
        gotoLogout(){
            return this.$router.push({path:'/logout'})
        }
    }
}
</script>

<style scoped>
.navBar{
    height:18%;
    width:100%;
    border-bottom: 1px solid #e6e6e6;
    padding: 5% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.navBar_btn{
    width:80%;
    height:70%;
    border: 3px solid #c5f4fe;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.nav_btn{
    display: block;
    height:100%;
    flex:1;
    margin: 0;
    border:0px none;
    background: #151531;
    color:#e6e6e8;
    font-size: 24px;
    text-align: center;
}
.show{
    background: #c5f4fe;
    color: #151531;
    font-size: 24px;
}
.navBar_text{
    padding-top: 2%;
    color:#e6e6e6;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:flex-end;
}
.navBar_time{
    font-size: 30px;
    margin-right: 8%;
}
</style>