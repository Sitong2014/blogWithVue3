import {createRouter, createWebHashHistory} from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
      {
        path: '/',
        // 必须添加.vue后缀
        component: () => import('../layout/page/index.vue'),
        redirect:'/home',
        children:[
            {
                path:"home",
                component:() => import('../views/home/index.vue')
            },
            {
                path:"serial",
                component:() => import('../views/serial/index.vue')
            },
            {
              path:"msg",
              component:() => import('../views/msg/index.vue')
            },
            
        ]
      }
      
  ]
})

