import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 路由跳转规则
import router from "@/routes";

// Ant Design 組件
import { Button, Layout, Breadcrumb, Menu, LocaleProvider, Carousel, Row, Col, Icon, Card, Tabs, Table, Steps, Select} from 'ant-design-vue'
Vue.use(Button)
Vue.use(Layout)
Vue.use(Breadcrumb)
Vue.use(Menu)
Vue.use(LocaleProvider)
Vue.use(Carousel)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(Table)
Vue.use(Steps)
Vue.use(Select)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
