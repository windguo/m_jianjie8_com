<style>
.header {
  width: 100%;
  text-align: center;
  line-height: 1.5rem;
  font-size: 0.55rem;
  background: #d73a41;
  color: #fff;
  display: flex;
  justify-content:space-between;
  padding:0 .5rem;
  font-weight:300;
  background:#fe5a5a;
  background:-webkit-linear-gradient(281deg,#fe96aa 0,#fe5a5a 100%);
  background:-moz-linear-gradient(281deg,#fe96aa 0,#fe5a5a 100%);
  background:-o-linear-gradient(281deg,#fe96aa 0,#fe5a5a 100%);
  background:linear-gradient(11deg,#fe96aa 0,#fe5a5a 100%)
}
.header span a{color:#fff;font-weight: 300;}
.header i {
  font-size: 0.8rem;
  margin-top:0.2rem;
}
</style>

<template>
  <header class="header">
    <p>
      <i class="fa fa-angle-left refresh" v-show="$route.meta.flagLeft" @click="back"></i>
    </p>
    <span>
      {{$route.meta.pageTitle}}
    </span>
    <p>
      <i class="fa fa-home edit" @click="edit" v-show="$route.meta.flagAdd"></i>
    </p>
  </header>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
    edit() {
      this.$router.push({ name: "edit" });
    },
    refreshBtn() {
      location.reload(true);
    }
  }
}
</script>
