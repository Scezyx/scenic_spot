<template>
  <div class="titleBar">
    <div class="titleBar_text">{{ msg }}</div>
    <div class="titleBar_pic">
      <dv-decoration-6 />
    </div>
  </div>
</template>

<script>
export default {
  name: 'titleBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleBar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.titleBar_text{
  flex: 0.8;
  color:#c5f4fe;
  font-size: 25px;
  text-align: left;
}
.titleBar_pic{
  flex: 1.2;
  overflow: hidden;
}
</style>
