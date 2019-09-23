const config = {
	
	//api url
	apiUrl:'',
	
	
	//get请求
	get(url, params={}, options={}){
		let headerConfig = {};
		let token = this.getLocalStorage("token") || '';
		
		url = this.config.apiUrl;
		let contentType = 'application/x-www-form-urlencoded';
		if(options.action == 'json'){
			contentType = 'application/json;charset=UTF-8'
		}
		headerConfig['content-type'] = contentType;
		token && (headerConfig['token'] = token);
		
		return new Promise((reslove,reject) =>{
			uni.request({
				url:url,
				data:params,
				method:options.method || 'GET',
				header:headerConfig,
				success:(res)=>{
					if(res.status == 200){
						let result = res.data;
						if(result.code == 0){
							reslove(result)
						}else if(result.code == 999){
							this.clearLoalStorage();
							uni.reLaunch({
								url:'/pages/login/login.vue'
							})
							reject('重新登录')
						}
					}
				}
				
			})
		})
		
		
	},
	
}	
	
export default{
	config
}