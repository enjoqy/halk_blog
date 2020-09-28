<template>
  <div>
    <el-row>
      <el-col>
        <el-row>
          <el-col>
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

        <el-row>
          <el-col>
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
  width: 99%;
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
  width: 106%;
}

.el-card__body {
  background: #f6f6f6;;
}
</style>
