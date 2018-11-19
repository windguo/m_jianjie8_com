<template>
  <div class="con">
    <Header />
    <div class="wraps" v-if="!flag">
      <form name="form1" method="POST" action="http://www.jianjie8.com/e/member/doaction.php">
    <input type=hidden name=ecmsfrom value="9">
    <input type=hidden name=hfrom value="">
    <input type=hidden name=enews value=login>
    <input name="tobind" type="hidden" id="tobind" value="0">
        <ul class="wrapUl">
          <li>
            用户名：<input name="username" placeholder="请输入用户名" type="text" id="username" size="30">
          </li>
          <li>
            密码：<input name="password" type="password" placeholder="请输入密码" id="password" size="30">
          </li>
          <li style="display:none">
            <input type=radio name=lifetime value=315360000 checked>永久
          </li>
          <li>
          <input type="submit" name="Submit" class="loginSubmit" value=" 立即登录 ">
        </li>
        <li class="c">
          <router-link class="regLink" to='/reg'>我要注册</router-link>
        </li>
      </ul>
    </form>
    </div>
</div>
</template>

<script>
import Header from "../components/common/Header.vue";
export default {
    components: {
      Header
    },
    data() {
        return {
            flag: true
        }
    },
    mounted() {
      var _userid = this.$cookies.get('tgugymluserid');
      if(_userid){
        this.$router.push('/my/index');
      }else{
        this.flag = false;
      };
    },
    methods: {

    }
}
</script>
<style scoped>
.wraps{padding-top:0.5rem;}
.wrapUl{font-size:0.4rem;width:80%;margin:0 auto}
.wrapUl li{margin:0.2rem 0;}
.wrapUl li input{padding:0.2rem;font-size:0.3rem;margin-top:0.2rem;width:100%;background:#f8f8f8;border:1px solid #ccc;border-radius:0.1rem;}
.wrapUl .loginSubmit{width:100%;border:0px;background:#f60;color:#fff;font-weight:normal;border-radius:0.5rem;}
.wrapUl li.c{text-align: center;padding-top:0.3rem;}
.regLink{font-size:0.3rem;color: #c00;}
</style>
