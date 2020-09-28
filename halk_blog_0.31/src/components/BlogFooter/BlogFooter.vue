<template>
<!--<div>-->
<!--  <h2 style="text-align: center; background: #333; color: #a5a4a4;">尾部</h2>-->
<!--</div>-->
  <div>


    <!--内容-->
    <el-row :gutter="0">
      <el-col :span="24" :offset="0">
        <div style="height: 60px; background: #333; display: block;">
          <h2 style="text-align: center;  color: #a5a4a4; padding-top: 10px;">Copyright 2019 halk </h2>
        </div>
      </el-col>


    </el-row>
  </div>
</template>

<script>
export default {
name: "BlogFooter"
}
</script>

<style scoped>

</style>

<!--饿了么容器样式-->
<style scoped>

/*饿了么样式*/
.el-row {
  margin-bottom: 0px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  /*padding: 10px 0;*/
  background-color: #f9fafc;
}
</style>
