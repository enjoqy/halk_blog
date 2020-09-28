<template>
  <div>
    <!--第1行空的-->
    <el-row>
      <el-col :span='24'>
        <div class="grid-content bg-purple">
          <div style="display: block; height: 65px"></div>
        </div>
      </el-col>
    </el-row>

    <!--页头-->
    <el-row>
      <el-col :offset='2' :span='15'>
        <h1 class="t_nav">
          <!--          <span>有些的时候，正是为了爱才悄悄躲开。躲开的是身影，躲不开的却是那份默默的情怀。</span>-->
          <a href="/" class="n1">网站首页</a>
          <a href="javascript:void(0);" class="n2">归档</a>
        </h1>
      </el-col>
    </el-row>

    <!--内容-->
    <el-row>
      <el-col :span='15' :offset='2'>
        <el-card>

          <h3 class="news_title" v-if="article.title">{{ article.title }}</h3>

          <!--作者、文章属性信息展示-->
          <div class="blog-info">
            <ul>
              <li class="author">
                <i class="el-icon-user-solid"></i>
                <a href="javascript:void(0);">{{ article.author }}</a>
              </li>
              <li class="sort">
                <i class="el-icon-menu"></i>
                <a href="javascript:void(0);">后端开发</a>
              </li>
              <li class="view">
                <i class="el-icon-view"></i>
                <a href="javascript:void(0);">{{ article.clickCount }}</a>
              </li>
              <li class="like">
                <i class="el-icon-star-on"></i>
                <a href="javascript:void(0);">{{ article.collectCount }}</a>
              </li>
              <li class="createTime">
                <i class="el-icon-time"></i>
                <a href="javascript:void(0);">{{ dateFormat("YYYY-mm-dd HH:MM:SS", article.updateTime) }}</a>
              </li>

            </ul>
          </div>

          <!--文章涉及的标签-->
          <div class="tags">
            <!--            <a-->
            <!--                v-for="item in article.tagList"-->
            <!--                :key="item.uid"-->
            <!--                href="javascript:void(0);"-->
            <!--            >{{item.content}}</a>-->
            <!--            >java</a>-->

            <a href="javascript:void(0);">java</a>
            <a href="javascript:void(0);">C</a>
          </div>

          <!--版权-->
          <div class="news_about">
            <strong>版权</strong>
            <!--            {{article.copyright}}-->
            本文为halk博客原创文章，转载无需和我联系，但请注明来自halk博客 http://www.halk.cn
          </div>

          <!--v-highlight代码高亮插件-->
          <div id="side-catalog" v-highlight v-html="article.content"></div>

        </el-card>
      </el-col>

      <!--侧边目录-->
      <el-col :span='5' :offset='1'>
        <div class="sidebar2">
          <side-catalog
              ref="catalog"
              class="side-catalog catalog3"
              v-bind="catalogProps"
          >
          </side-catalog>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import SideCatalog from 'vue-side-catalog'
import 'vue-side-catalog/lib/vue-side-catalog.css'
import {dateFormat} from "@/utils/webUtils";


export default {
  name: "ContentDetail",
  components: {
    SideCatalog
  },
  data() {
    return {
      article: '',
      catalogProps: {
        container: '#side-catalog',
      },
    }
  },
  created() {
    console.log(this.$route.query.article);
    this.article = JSON.parse(this.$route.query.article + '')
  },
  methods: {
    dateFormat
  }
  // props: {}
}
</script>

<style scoped>

.tags {
  margin: 30px 0;
}

.tags a {
  background: #f4650e;
  padding: 3px 8px;
  margin: 0 5px 0 0;
  color: #fff;
}

.news_about {
  color: #888;
  border: 1px solid #f3f3f3;
  padding: 10px;
  margin: 20px auto 15px;
  line-height: 23px;
  background: none repeat 0 0 #f6f6f6;
}

.news_about strong {
  color: #38485a;
  font-weight: 400!important;
  font-size: 13px;
  padding-right: 8px;
}

a, a:hover {
  text-decoration: none;
}

.news_title {
  font-size: 24px;
  color: #333;
  font-weight: 400;
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

.sidebar2 div {
  width: 250px;
  background: #fff;
  box-shadow: 0 2px 5px 0 hsla(0, 0%, 57%, .1);
}

.side-catalog {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  max-height: calc(100% - 200px);
}

.catalog3 {
  position: fixed;
  top: 100px;
}

.sidebar2 {
  width: 90%;
  overflow: hidden;
  float: right;
}

.n1 {
  background: #000;
}

.n2 {
  background: #3a6ab5;
}

.n1, .n2 {
  width: 100px;
  display: block;
  text-align: center;
  float: left;
  color: #fff;
}

h1.t_nav a {
  text-decoration: none;
}

h1.t_nav span {
  float: right;
  color: #000;
  display: none
}

h1.t_nav {
  border-bottom: #bfbfbf 1px solid;
  font-size: 14px;
  font-weight: normal;
  line-height: 40px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px
}

</style>
