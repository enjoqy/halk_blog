<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <h2></h2>
        </div>
      </el-col>
    </el-row>


    <!--内容-->
    <el-row :gutter="0">
      <el-col :span="22" :offset="1">
        <div class="grid-content bg-purple">

          <h2>内容</h2>
          <h2>内容</h2>
          <h2>内容</h2>
          <h2>内容</h2>
          <h2>内容</h2>
          <h2>内容</h2>
          <h2>内容</h2>
          <h2>内容</h2>
        </div>
      </el-col>


    </el-row>
  </div>
</template>

<script>
export default {
  name: "about"
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
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
