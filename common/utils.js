const CryptoJS = require("crypto-js");

Date.prototype.Format = function(fmt) {
	const o = {
		"M+": this.getMonth() + 1,						//月份
		"d+": this.getDate(),							//日
		"h+": this.getHours(),                 			//小时
		"m+": this.getMinutes(),                 		//分
		"s+": this.getSeconds(),                 		//秒
		"q+": Math.floor((this.getMonth() + 3) / 3), 	//季度
		"S": this.getMilliseconds()             		//毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (let k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}   

export default class common {
	static formatTimeToStr(times, pattern) {
		let d = new Date(times).Format("yyyy-MM-dd hh:mm:ss");
		if (pattern) {
			d = new Date(times).Format(pattern);
		}
		return d.toLocaleString();
	}
	
	static getConfigValue(data, value) {
		let obj = {}
		if (data) {
			obj = data.find(function(item) {
				return Number(item.value) === Number(value)
			})
		}
		return obj ? obj.text : ''
	}
	
	static cryptoEncode(secretKey, data) {
		//原始秘钥     
		//var password = "xlgy";     
		//对原始秘钥进行md5处理     
		var passMd5 = CryptoJS.MD5(secretKey).toString();     
		//生成秘钥(以utf8的格式转成字节数组)     
		var key = CryptoJS.enc.Utf8.parse(passMd5);     
		//原始数据，json对象     
		//var content = {"expireAlert":1,"expireDay":"2020-08-01","hasMember":1}     
		//将原始数据转成待加密字符串     
		var src = JSON.stringify(data);     
		//进行AES加密     
		var encrypt = CryptoJS.AES.encrypt(src, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});     
		//得到加密后的base64字符串     
		var result = encrypt.toString();  
		console.log(result);
		//U9oce2I3d6fjPOV4iio/9Q/xsiG114FQXw4zULJXW1VxUEY5CBThAsrC0TYq+BH1hNOKrGdJtql6+wZQbD9xVg== 
		return result
	}
	
	static cryptoDecode(secretKey, str) {
		//原始秘钥     
		// var password = "xlgy";     
		//对原始秘钥进行md5处理     
		var passMd5 = CryptoJS.MD5(secretKey).toString();     
		//生成秘钥(以utf8的格式转成字节数组)     
		var key = CryptoJS.enc.Utf8.parse(passMd5);     
		//待解密的base64字符串     
		// var src = "U9oce2I3d6fjPOV4iio/9Q/xsiG114FQXw4zULJXW1VxUEY5CBThAsrC0TYq+BH1hNOKrGdJtql6+wZQbD9xVg==";     
		//进行AES解密     
		var decrypt = CryptoJS.AES.decrypt(str, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});     
		//使用decrypt.toString(CryptoJS.enc.Utf8) 得到的utf8编码的字符串     
		console.log(decrypt.toString(CryptoJS.enc.Utf8))     
		//{"expireAlert":1,"expireDay":"2020-08-01","hasMember":1} 
		const result = decrypt.toString(CryptoJS.enc.Utf8);
		return result;
	}
}