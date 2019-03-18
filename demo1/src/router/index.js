import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'



import Head from '../components/01head'
import Inlinemarket from '../components/02inlinemarket'
import Login from '../components/03login'
import jianguo from '../components/04jianguo'
import jianguo05 from '../components/05jianguo'
import Tnt from '../components/06tnt'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			component:Head,
			
    },
		{
		  path: '/02inlinemarket',
			component:Inlinemarket,
			
		},
		{
		  path: '/03login',
			component:Login,
			
		},
		{
		  path: '/04jianguo',
			component:jianguo,
			
		},
		{
		  path: '/06tnt',
			component:Tnt,
			
		},
  ]
})
