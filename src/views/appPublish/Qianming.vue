<template>
  <div class="container">
    <h2>欢迎您，{{username}}</h2>
    <p class="info">
      您发布的内容会在24小时内审核。
    </p>
    <form name="add" method="POST" enctype="multipart/form-data" action="http://jianjie.92kaifa.com/e/DoInfo/ecms.php">
        <div class="listTitle">
            <input type=hidden value="MAddInfo" name=enews>
            <input name=mid type=hidden id="mid" value="15">
            <!--   -->
            <span v-for="(v,i) in listInfo" v-show="i!==0 && i!==39" :key="i">
              <label>
                <input @click="checkChange(v.classid)" :checked="checkitem(v.classid)" type="radio" name=classid :value="v.classid">{{v.classname}}
              </label>
            </span>
        </div>

        <input name="title" autofocus="autofocus" placeholder="请输入内容" class="title" />
        <input name="ftitle" placeholder="请输入内容" type="text" class="ctitle">

        <input type="hidden" name="diggtop" :value="diggtop">
        <input type="hidden" name="diggbot" :value="diggbot">

        <input type="hidden" name="prtype" value="1">
        <input type="hidden" name="ecmsfrom" value="9">

        <input name="addnews" value="立即提交" class="submits" type="submit">
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: "",
      listInfo: [],
      flag: true,
      diggtop:'',
      username:'',
      userid:'',
      diggbot:''
    };
  },
  watch: {
    $route() {
      console.log(this);
    }
  },
  mounted() {
    document.title = '发布签名';
    var that = this;
    this.axios.get("/qianming/?getJson=class").then(res => {
      // console.log(res.data);
      if (res.data.status == "1") {
        this.listInfo = res.data.result;
      }
    });
    function random(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);
    }
    this.diggtop = random(99,999);
    this.diggbot = random(9,99);
    var _userid = this.$cookies.get('tgugymluserid');
    if(_userid){
      this.axios
        .get("/member/info.php?getJson=info&userid="+_userid)
        .then(res => {
              if(res.data.status == "1"){
                this.username = res.data.result[0].username;
                this.userid = res.data.result[0].userid;
              }
        });
    }else{
      this.$router.push('/login');
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    checkChange(classid) {
      this.$router.push({ query: { classid: classid } });
    },
    checkitem(classid) {
      let classid1 = this.$route.query.classid;
      return classid1 == classid;
    }
  }
};
</script>
<style scoped>
.container{font-weight: 300;border-top: 10px solid #f5f5f5}
.container h2{text-align: center;margin-top:0.2rem;font-size: 0.4rem;padding:0.2rem 0 0 0;font-weight: 300}
.container form{margin:0 0.3rem}
.info{background:#fffff0;text-align: center;border:1px solid #eee;line-height: 1rem;margin:0.2rem 0 0.5rem 0;}
.listTitle {
  width: 90%;
  margin:0 auto;
}
.listTitle input{margin-right:0.2rem;}
.listTitle span {
  width: 33%;
  display: inline-block;
  font-size: 0.5rem;
  padding: 0.1rem 0;
}
input.title,input.ctitle {
  border: 1px solid #eee;
  width: 100%;
  padding: 0.5rem;
  font-size: 0.5rem;
  background:#f9f9f9;
  margin:0.3rem 0;
  border-radius: 0.3rem;
}
.submits {
  background: #f60;
  color: #fff;
  width: 100%;
  margin:0.3rem auto 0.5rem auto;
  padding: 0.5rem 0;
  border: 0px;
  font-size: 0.5rem;
  border-radius: 0.3rem;
}
</style>


