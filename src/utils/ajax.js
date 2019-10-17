import axios from 'axios'
import {user} from './index'  //用户token
import config from './config'
axios.defaults.timeout = 50000;                      //响应时间
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers['Content-Type'] = "application/json";
axios.defaults.baseURL = config.VUE_APP_BASEURL;   //配置接口地址

axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if (config.method == 'get') {//axios中设置Content-Type不生效的问题
        config.data = true
    }
    config.headers.Authorization = user.get();
    return config;
},(error) =>{
    return Promise.reject(error);
});
 
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    //对响应数据做些事
    if(!res.status==200){
        return Promise.reject(res);
    }
    
    return res;
}, (error) => {
    if (error.response) {
        switch (error.response.status) {
          case 401:
            router.replace({
              name: 'HelloWorld',
              param: {redirect: router.currentRoute.fullPath}
            })
        }
      }
    return Promise.reject(error);
});
export default axios;