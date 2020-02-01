<template>
    <dv-border-box-5 :reverse="true" class="call">
        <div class="call_box">
            <div class="call_title">{{callTitle}}</div>
            <div class="call_content">
                <div class="call_content_line" v-for="user in users" :key="user.name">
                    <i><img src="../../static/images/peo.png" alt="人头"></i>
                    <div class="contacts">{{user.name}}</div>
                    <button class="call_click"><img src="../../static/images/phone.png" alt="电话"></button>
                </div>
            </div>
            <!-- <div class="call_content"><i><img src="../../static/images/peo.png" alt="人头"></i><div></div><button class="call_click"></button></div>
            <div class="call_content"><i><img src="../../static/images/peo.png" alt="人头"></i><div></div><button class="call_click"></button></div> -->
        </div>
       
    </dv-border-box-5>
</template>

<script>
export default {
    props:{
        callTitle:String,
        users:Array,
    },
    data() {
        return{
        }
    },
    watch: {
        users() {
            console.log(users.name);
        }
    }
}
</script>

<style scoped>
.call{
    height:40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.call_box{
    height:85%;
    margin-top: 8%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.call_title{
    width: 75%;
    color: #d9dade;
}
.call_content{
    height:60%;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.call_content_line{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.call_click{
    border:none;
    background: none;
}
.contacts{
    color: #e6e6e6;
}
</style>