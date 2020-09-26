<template>

  <div>
    <!--第1行空的-->
    <el-row :gutter="0">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <div style="display: block; height: 65px"></div>
        </div>
      </el-col>
    </el-row>

    <!--轮播-->
    <el-row :gutter="0">
      <el-col :span="15" :offset="1">
        <div class="grid-content bg-purple">
          <Carousel></Carousel>
        </div>
      </el-col>
      <el-col :span="6" :offset="1">
        <div class="grid-content bg-purple">
          <SecondDiagram></SecondDiagram>
        </div>
      </el-col>
    </el-row>

    <!--内容-->
    <el-row :gutter="0">
      <el-col :span="15" :offset="1">
        <div class="grid-content bg-purple">

          <ContentCard></ContentCard>

        </div>
      </el-col>

      <!--标签-->
      <el-col :span="6" :offset="1">
        <div class="grid-content bg-purple">
          <HomeTag></HomeTag>
        </div>
      </el-col>

    </el-row>

  </div>
</template>

<script>
import Carousel from "../components/carousel/Carousel";
import SecondDiagram from "../components/secondDiagram/SecondDiagram";
import ContentCard from "../components/content/ContentCard";
import HomeTag from "../components/homeTag/HomeTag";

export default {
  name: "home",
  components: {
    Carousel,
    SecondDiagram,
    ContentCard,
    HomeTag
  }
}
</script>

<!--饿了么容器样式-->
<style scoped>

/*饿了么样式*/
.el-row {
  margin-bottom: 10px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  /*background: #d3dce6;*/
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
