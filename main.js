import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import cuCustom from './colorui/components/cu-custom.vue';
import global from './common/global.js';
import utils from './common/utils.js';
import cfgData from './common/configData.js';
import specialHandleData from './common/specialHandleData.js';

Vue.use(uView)
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false
Vue.prototype.studentIdName = "studentId";
Vue.prototype.wechatIdName = "wechatId";
Vue.prototype.tokenName = "token";
Vue.prototype.memberInfoName = "memberInfo";
Vue.prototype.wxUserName = 'wxUser';
Vue.prototype.secretKey = 'xlgy';
Vue.prototype.defaultPageSize = 10;
Vue.prototype.contactPhone = '027-87506070';
Vue.prototype.global = global;
Vue.prototype.utils = utils;
Vue.prototype.cfgData = cfgData;
Vue.prototype.specialHandleData = specialHandleData;

App.mpType = 'app'

const app = new Vue({
    ...App
})

// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()
