// 路由配置
import Home from '@/pages/home'
import Login from '@/pages/login'
import NotFound from '@/pages/404'

const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    exact: true,
    path: "/login",
    component: Login
  },
  {
    exact: true,
    path: "*",
    component: NotFound
  },
]

export default routes