import Vue from 'vue'
import Router from 'vue-router'
import rte from './view/RoutePage/Route'
import equipment from './view/EquipmentPage/equipment'
import ds from './view/DSPage/ds'
import behavior from './view/behaviorPage/behavior'

Vue.use(Router)
var router = new Router({
    routes:[{
        path: '/',
        name: 'rte',
        component: rte,
    },
    {
        path: '/equipment',
        name: 'equipment',
        component: equipment,//路由间共用组件
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/ds',
        name: 'ds',
        component: ds,
        meta: {
            keepAlive: true
          }
    },
    {
        path: '/behavior',
        name: 'behavior',
        component: behavior,
        meta: {
            keepAlive: true
          }
    }
    ]
})
export default router