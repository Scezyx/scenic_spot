<template>
    <dv-border-box-10 class="titleContent">
        <div class="textbox">
            <div class="name">{{title}}</div>
            <div class="event">
                <div class="waitValue">等待处理: {{waitValue}}</div>
                <div class="valueIng">正在处理:  {{valueIng}}</div>
            </div>
        </div>
    </dv-border-box-10>
</template>

<script>
export default {
    name: 'titleContent',
    props:{
        title:String,
        waitValue:String,
        valueIng:String,
    }
}
</script>

<style scoped>
.titleContent{
    height:15%;
    display: flex;
    flex-direction: column;
}
.textbox{
    margin-top: 1%;
    padding: 5% 0;
    height:95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: none;
    border: none;
    align-items: center;
    color:#e6e6e6;
}
.event{
    width:80%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.name{
    
}
</style>