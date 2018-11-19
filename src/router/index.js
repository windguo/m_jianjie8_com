import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Login from '@/views/Login'

import appPublishIndex from '@/views/appPublish/Index'

import appPublishWangming from '@/views/appPublish/Wangming'
import appPublishQianming from '@/views/appPublish/Qianming'
import appPublishDuanzi from '@/views/appPublish/Duanzi'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        pageTitle:'简洁设计网',
        flagLeft:false,
        flagAdd: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        pageTitle: '会员登录',
        flagLeft: false,
        flagAdd: false
      }
    },
    {
      path: '/appPublish/wangming',
      name: 'appPublishWangming',
      meta: {
        pageTitle: '发布网名'
      },
      component: appPublishWangming
    },
    {
      path: '/appPublish/qianming',
      name: 'appPublishQianming',
      meta: {
        pageTitle: '发布签名'
      },
      component: appPublishQianming
    },
    {
      path: '/appPublish/duanzi',
      name: 'appPublishDuanzi',
      meta: {
        pageTitle: '发布段子'
      },
      component: appPublishDuanzi
    }
  ]
})
