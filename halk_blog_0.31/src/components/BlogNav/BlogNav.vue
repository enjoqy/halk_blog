<template>
  <header id="header" :class="isVisible?'header-navigation slideDown':'header-navigation slideUp'">
    <nav>
      <div class="logo">
        <router-link to="/">
          <a href="javascript:void(0);">halk博客</a>
        </router-link>
      </div>
      <ul id="starlist">
        <li>
          <router-link to="/">
            <a href="javascript:void(0);" :class="[saveTitle == '/home' ? 'title' : '']">首页</a>
          </router-link>
        </li>

        <li>
          <router-link to="/about">
            <a href="javascript:void(0);" :class="[saveTitle == '/about' ? 'title' : '']">关于我</a>
          </router-link>
        </li>

        <li>
          <router-link to="/sort">
            <a href="javascript:void(0);" :class="[saveTitle == '/sort' ? 'title' : '']">归档</a>
          </router-link>
        </li>

        <li>
          <router-link to="/classify">
            <a href="javascript:void(0);" :class="[saveTitle == '/classify' ? 'title' : '']">分类</a>
          </router-link>
        </li>

        <li>
          <router-link to="/tag">
            <a href="javascript:void(0);" :class="[saveTitle == '/tag' ? 'title' : '']">标签</a>
          </router-link>
        </li>

        <!--              <li>-->
        <!--                <router-link to="/share">-->
        <!--                  <a href="javascript:void(0);" :class="[saveTitle == '/share' ? 'title' : '']">学习教程</a>-->
        <!--                </router-link>-->
        <!--              </li>-->

        <!--              <li>-->
        <!--                <router-link to="/time">-->
        <!--                  <a href="javascript:void(0);" :class="[saveTitle == '/time' ? 'title' : '']">时间轴</a>-->
        <!--                </router-link>-->
        <!--              </li>-->

        <li>
          <router-link to="/messageBoard">
            <a href="javascript:void(0);" :class="[saveTitle == '/messageBoard' ? 'title' : '']">留言板</a>
          </router-link>
        </li>
      </ul>

    </nav>
  </header>

</template>

<script>
export default {
  name: "BlogNav",
  data() {
    return {
      isVisible: true,
      saveTitle: "",
    }
  },
  watch: {
    $route() {
      this.getCurrentPageTitle()
    }
  },
  created() {
    this.getCurrentPageTitle()
  },
  methods: {
    /**
     * 获取当前所在页面的标题
     * @returns {{}}
     */
    getCurrentPageTitle: function () {
      var test = window.location.href;
      var start = 0;
      var end = test.length;
      for (var i = 0; i < test.length; i++) {
        if (test[i] == "#") {
          start = i;
        }
        if (test[i] == "?" && i > start) {
          end = i;
        }
      }
      var result = test.substring(start + 1, end);
      this.saveTitle = result;
    }
  },
  mounted() {
    var that = this;
    var offset = 300;
    var after = 0;
    window.addEventListener("scroll", function () {
      let scrollTop = document.documentElement.scrollTop; //当前的的位置
      // let scrollHeight = document.documentElement.scrollHeight; //最高的位置

      if (scrollTop > offset) {
        that.isCdTopVisible = true;
      } else {
        that.isCdTopVisible = false;
      }

      if (scrollTop > after) {
        that.isVisible = false;
      } else {
        that.isVisible = true;
      }
      after = scrollTop;
    });
  },
}
</script>

<style scoped>


img {
  border: 0;
  display: block
}

ul, li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #bdbdbd;
}

a:hover {
  text-decoration: none;
  color: #00A7EB;
}


#starlist li .title {
  color: #00a7eb;
}

/*header*/
.header-navigation {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: rgba(0, 0, 0, .9);
  text-align: center;
  z-index: 9999;
}


header {
  position: fixed;
  top: 0;
  z-index: 99999;
  margin-left: -8px;
}

.container {
  width: 1140px;
  margin: 20px auto
}

.slideDown {
  transform: translateY(0);
}

.slideDown, .slideUp {
  transition: transform .5s ease-out;
}

.slideUp {
  transform: translateY(-100px);
}


.logo {
  float: left;
  font-size: 22px;
  font-weight: bold
}

.logo a {
  color: #00A7EB
}

nav {
  width: 1140px;
  margin: auto;
  position: relative
}

#starlist {
  float: left;
  margin-left: 50px;
  margin-top: 0px;
  overflow: hidden
}

#starlist li {
  float: left;
  display: block;
  font-size: 16px;
  padding: 0 25px
}

.navicon {
  display: block;
  position: relative;
  width: 30px;
  height: 5px;
  background-color: #fff;
  margin-top: 20px
}

.navicon:before, .navicon:after {
  content: '';
  display: block;
  width: 30px;
  height: 5px;
  position: absolute;
  background: #fff;
  -webkit-transition-property: margin, -webkit-transform;
  transition-property: margin, -webkit-transform;
  transition-property: margin, transform;
  transition-property: margin, transform, -webkit-transform;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}

.navicon:before {
  margin-top: -10px;
}

.navicon:after {
  margin-top: 10px;
}

</style>
