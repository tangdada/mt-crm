import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource);

let apiBasePath = 'http://localhost:9000/manage-site';  //后端地址

Vue.http.options.emulateJSON = true;
Vue.http.options.credentials = true;  //跨域带cookie

var UNIQUE_SUBMIT_TOKEN = "unique-submit-token";
var token = undefined;

Vue.http.interceptors.push((request, next) => {
	request.url = `${apiBasePath}/action${request.url}`;

	if(localStorage.getItem('_token')){
	 	request.headers.set(UNIQUE_SUBMIT_TOKEN, localStorage.getItem('_token'));
	}

	next((response) => {
		if(response.headers.get(UNIQUE_SUBMIT_TOKEN)){
			token = response.headers.get(UNIQUE_SUBMIT_TOKEN);
			localStorage.setItem('_token', token);
		}

		if (!response.ok) {
			if (response.body && response.body.text == '未登录') {
			}
			return response.body || '系统出错啦'
		}
		return response
	});
});
