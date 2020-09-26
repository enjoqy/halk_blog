<template>
  <!--轮播图-->
  <el-carousel indicator-position="outside" height="450px">
    <el-carousel-item v-for="(item, index) in items" :key="index">
      <div class="my-carousel">
        <img :src="item.imgUrl" alt="1111111111111">
        <div class="carousel-title">
          <span>{{item.name}}</span>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        {name: '使用Docker快速搭建博客', imgUrl: require('@/assets/carousel/1.jpg')},
        {name: '狗狗', imgUrl: require('@/assets/carousel/2.jpg')},
        {name: '黄山景区', imgUrl: require('@/assets/carousel/3.jpg'),},
        {name: '面朝大海，春暖花开', imgUrl: require('@/assets/carousel/4.jpg')},
        {name: '面对疾风吧', imgUrl: require('@/assets/carousel/5.jpg')},
      ]
    }
  }
}
</script>

<style scoped>
.my-carousel img {
  height: 450px;
  width: 100%;
}

.carousel-title {
  coursor: pointer;
  position: absolute;
  z-index: 10;
  bottom: 40px;
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
</style>

<style scoped>
/*element*/
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
