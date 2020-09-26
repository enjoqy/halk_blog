<template>
  <div>
    <el-row v-for="i in 6" :key="i">
      <el-col :span="24" :offset="0">
        <el-card>
          <div class="content-card">
            <el-row>
              <h3 class="blog-title">
                <a href="javascript:void(0);">大象放进冰箱的流程</a>
              </h3>
            </el-row>

            <el-row>
              <el-col span="10">
                <div class="content-card-img">
                  <img src="~@/assets/carousel/3.jpg" alt="22222222">
                </div>
              </el-col>

              <el-col span="13" offset="1">

                <el-row>
                  <el-col>
                    <div style="display: block; margin-top: 10px; height: 120px;">
                      第一步打开冰箱门，第二步把大象塞进去，第三步。。。
                      第一步打开冰箱门，第二步把大象塞进去，第三步。。。
                      第一步打开冰箱门，第二步把大象塞进去，第三步。。。
                    </div>
                  </el-col>
                </el-row>

                <el-row>
                  <div class="blog-info">
                    <ul>
                      <li class="author">
                        <i class="el-icon-user-solid"></i>
                        <a href="javascript:void(0);">halk</a>
                      </li>
                      <li class="sort">
                        <i class="el-icon-menu"></i>
                        <a href="javascript:void(0);">后端开发</a>
                      </li>
                      <li class="view">
                        <i class="el-icon-view"></i>
                        <a href="javascript:void(0);">201</a>
                      </li>
                      <li class="like">
                        <i class="el-icon-star-on"></i>
                        <a href="javascript:void(0);">108</a>
                      </li>
                      <li class="createTime">
                        <i class="el-icon-time"></i>
                        <a href="javascript:void(0);">2020-08-15 15:32:07</a>
                      </li>

                    </ul>
                  </div>

                </el-row>

              </el-col>
            </el-row>


          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "contentCard"
}
</script>


<style scoped>
ul, li {
  list-style: none;
}

.blog-info {
  overflow: hidden;
  margin: 10px 0 0 -50px;
}

.blog-info ul li {
  float: left;
  font-size: 14px;
  padding: 0 0 0 15px;
  color: #748594;
  line-height: 1.5;
  display: inline-block;
}

.blog-info ul li a {
  margin-left: 5px;
}

.content-card {
  display: block;
  width: 100%;
  height: 255px;
}

.content-card-img img {
  width: 100%;
  height: auto;
  transition: all .6s ease;
  margin-bottom: 10px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.el-row {
  margin-bottom: 15px;
}

.blog-title {
  margin: 0 0 10px;
  font-size: 20px;
  overflow: hidden;
}

a, a:hover {
  text-decoration: none;
}

a {
  color: #555;
}
</style>
