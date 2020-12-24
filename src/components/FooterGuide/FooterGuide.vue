<template >
  <div class="footer-guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:'/mSite'===$route.path}" @click="goTo('/mSite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
     <a href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
     <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
     <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="less" scoped>
  .footer-guide{
    display: flex;
    position:fixed;
    z-index:100;
    left:0;
    right :0;
    bottom: 0;
    background-color: #fff;
    width :100%;
    height :50px;
    &::before{
      position:relative;
      content:'';
      position:absolute;
      z-index:200;
      left:0;
      top:0;
      width:100%;
      height:1px;
      background-color:#e4e4e4;
    }
    .guide_item{
      display:flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      flex:1;
      margin: 5px;
      color: #999999;
      span{
        font-size: 12px;
        margin-top :2px;
        margin-bottom :2px;
        .iconfont{
          font-size: 22px;
        }
      }
    }
    .on{
      color: #02a774;
    }
  }

</style>
