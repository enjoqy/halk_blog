<template>
  <div>
    <el-row :gutter="0" v-for="i in 3" :key="i">
      <el-col :span="24" :offset="0">
        <el-card>
          <div class="tag-card">
              点击排行
            <h4>1.111111</h4>
            <h4>2.222222</h4>
            <h4>3.3333333</h4>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "HomeTag",
  components: {
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 15px;
}
</style>
