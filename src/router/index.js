import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/forgetPassword',
    component: () => import('@/views/forgetPassword'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '智能监护系统', icon: 'dashboard' }
    }]
  },
  {
    path: '/oldPeople',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/oldpeople/index'),
        name: 'oldPeople',
        meta: { title: '老人信息', icon: 'el-icon-s-custom', noCache: true }
      }
    ]
  },
  {
    path: '/enviroment',
    name: 'enviroment',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/enviroment/index'),
        meta: { title: '室内环境信息', icon: 'el-icon-s-home', noCache: true }
      }
    ]
  },
  {
    path: '/physiology',
    name: 'physiology',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/physiology/index'),
        meta: { title: '老人生理信息', icon: 'el-icon-s-data', noCache: true }
      }
    ]
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/equipment/index'),
        meta: { title: '设备信息', icon: 'el-icon-s-tools', noCache: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/admins',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/admins/index'),
        name: 'admins',
        meta: { title: '管理员管理', icon: 'el-icon-s-custom', noCache: true }
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index'),
        meta: { title: '用户管理', icon: 'el-icon-s-custom', noCache: true }
      }
    ]
  },
  {
    path: '/noteBook',
    name: 'noteBook',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/noteBook/noteBook'),
        meta: { title: '备忘录', icon: 'el-icon-edit-outline', noCache: true }
      }
    ]
  },
  {
    path: '/reminder',
    name: 'reminder',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/reminder/index'),
        meta: { title: '远程提醒', icon: 'el-icon-alarm-clock', noCache: true }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
