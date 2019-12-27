import axios from 'axios';
import store from '../store';

// 请求拦截  设置统一的Header
axios.interceptors.request.use(
    config => {
        // 请求成功 分发action中的loading为true，显示loading
        store.dispatch('setLoading', true);
        if (localStorage.jwtToken) {
            config.headers.Authorization = localStorage.jwtToken;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
axios.interceptors.response.use(
    config => {
        // 响应成功 分发action中的loading为false，隐藏loading
        store.dispatch('setLoading', false);
        return config;
    },
    error => {
        // 响应失败 分发action中的loading为false，隐藏loading
        store.dispatch('setLoading', false);
        return Promise.reject(error);
    }
);

export default axios;
