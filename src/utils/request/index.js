import axios from 'axios'
import loading from '@/assets/loaders'
import Vue from 'vue';

Vue.use(loading)

const vm = new Vue()


const instent = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 3000,
})

// 添加请求拦截器
instent.interceptors.request.use(function (config) {
    vm.$showLoading()
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    vm.$hiddenLoading()
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instent.interceptors.response.use(function (response) {
    vm.$hiddenLoading()
    return response
}, function ({ response }) {
    vm.$hiddenLoading()
    return Promise.reject(response);
});

export default instent