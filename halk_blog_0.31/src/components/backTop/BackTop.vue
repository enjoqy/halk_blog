<template>
<!--  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">-->

  <el-row>
    <el-col>

      <el-backtop :bottom='90' :right='20'>
        <div
            style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        color: #1989fa;
      }"
        >
          <i class="el-icon-caret-top" style="font-size: 30px"></i>
          up
        </div>
      </el-backtop>
    </el-col>
  </el-row>

</template>

<script>
export default {
name: "BackTop"
}
</script>

<style scoped>

</style>
