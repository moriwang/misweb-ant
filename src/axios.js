import axios from 'axios'
import qs from 'qs'
import router from '@/routes'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 5000;

// 传参拦截器
axios.interceptors.request.use(config => {
    // 序列化传来的参数
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
        config.data = qs.stringify(config.data)
    }
    // Development Use
    // eslint-disable-next-line no-console
    console.log('REQUEST');
    // eslint-disable-next-line no-console
    console.log(config);
    return config
}, error => {
    // 处理错误信息
    // alert(error.data.error.message)
    return Promise.reject(error)
});

// 响应拦截器
axios.interceptors.response.use(res => {
    // 请求成功时要做的处理
    // 1.判空
    if (res.data === '' || res.data === 'undefined' || res.data === undefined) {
        // eslint-disable-next-line no-console
        console.log('后台传来的data为空/为undefined')
    }
    // Development Use
    // eslint-disable-next-line no-console
    console.log('后台传来的data');
    // eslint-disable-next-line no-console
    console.log(res.data);
    return res.data
}, error => {
    // 请求错误时做些事(接口错误、超时等)

    // Development Use
    // eslint-disable-next-line no-console
    console.log("ERROR.response", error.response);

    //  1.判断请求超时
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        // Development Use
        // eslint-disable-next-line no-console
        console.log('请求超时了，你可以在这里加入超时的处理方案')
        // return service.request(originalRequest) //例如再重复请求一次
    }

    // 2.判断 401
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        router.push('/login')
    }

    // 3.其他情况
    if (error.response === undefined) {
        localStorage.removeItem('token')
    }

    return Promise.reject(error)
});

export default axios;
