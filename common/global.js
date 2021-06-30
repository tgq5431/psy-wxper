export default {
	globalObj:{
		isUploadWxInfo: false,
	},
	setGlobalObj(data){
		this.globalObj = Object.assign({},this.globalObj,data) 
	}
}