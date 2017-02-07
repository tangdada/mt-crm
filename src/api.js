import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource);

let apiBasePath = 'http://localhost:9000/crm-site';  //后端地址

Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push((request, next) => {
	request.url = `${apiBasePath}/action${request.url}`;

	console.log('http request start ...');
	next((response) => {
		console.log('http request end ...');

		if (!response.ok) {
			return response.body || '系统出错啦'
		}
		return response
	});
});
