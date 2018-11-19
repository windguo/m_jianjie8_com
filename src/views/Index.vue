<template>
  <div class="main">
    <Header />
    <Slide />
    <router-link to='/appPublish/wangming'>发布内容</router-link>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/common/Header.vue';
import Slide from '../components/Index/Slide.vue';
import Footer from '../components/common/Footer.vue';
export default {
  components:{
    Header,Footer,Slide
  }
}
</script>
