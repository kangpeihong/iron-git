
import request from '@/utils/request'
// 用户登录
const user = {
	post(url, obj) {
		return new Promise((resolve, reject) => {
			request.post(url, obj).then(res => {
				resolve(res);
			}).catch(err => {
				reject(err)
			})
		})

	}
}
export default user


