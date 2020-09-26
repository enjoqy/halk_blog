<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="24" :offset="0">
        <el-card >
          <div class="my-card">
            <img src="~@/assets/carousel/4.jpg"
                 class="image">

            <div class="carousel-title">
              <span>面朝大海，春暖花开</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="24" :offset="0">
        <el-card>
          <div class="my-card-2">
            <img src="~@/assets/carousel/5.jpg"
                 class="image">

            <div class="carousel-title">
              <span>面对疾风吧</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "SecondDiagram",
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<style scoped>

.carousel-title {
  coursor: pointer;
  position: absolute;
  z-index: 10;
  bottom: 0px;
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  background: rgba(0,0,0,.3);
}

.carousel-title span {
  color: #fff;
  font-size: 22px;
  display: inline-block;
}

.text {
  font-size: 14px;
}

.my-card {
  margin: -20px 0 0 -20px;
  height: 200px;
}

.my-card-2 {
  margin: -11px 0 0 -20px;
  height: 200px;
}

.image {
  height: 220px;
  display: block;
}

</style>
