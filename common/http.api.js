// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
let wxHomeUrl = '/web/course/wxHome';
let wxLoginUrl = '/web/student/wxLogin';
let hLoginUrl = '/web/student/hLoginByCode';
let hRegisterUrl = '/web/student/hRegister';
let wxSmsUrl = '/web/student/wxSms';
let wxGetUserInfoUrl = '/web/student/wxGetUserInfo';
let wxInitInfoUrl = '/web/student/wxInitInfo';
let wxSetUserInfoUrl = '/web/student/wxSetUserInfo';
let wxSetWxInfoUrl = '/web/student/wxSetWxInfo';
let wxHistoryUrl = '/web/course/wxHistory';
let wxFeedbackUrl = '/web/student/wxFeedback';
let wxFinishQuizUrl = '/web/quiz/wxFinishQuiz';
let wxGetNextTopicUrl = '/web/quiz/wxGetNextTopic';

let wxGetProgressUrl='/web/classTest/getProgress';
let wxKeepProgressUrl='/web/classTest/keepProgress';

let wxSelectAllByGradeUrl = '/web/quiz/wxSelectAllByGrade';
let wxGradeListUrl = '/web/course/wxGradeList';
let wxCourseListUrl = '/web/course/wxCourseList';
let wxCourseDetailUrl = '/web/course/wxCourseDetail';
let wxAnswerAddUrl = '/web/quiz/wxAnswerAdd';
let wxGetNearResultUrl = '/web/quiz/wxGetNearResult';
let wxStartUrl = '/web/course/wxStart';
let wxEndUrl = '/web/course/wxEnd';
let wxBuyCourseUrl = '/web/course/wxBuyCourse';
let wxOrderHistoryUrl = '/web/course/wxOrderHistory';
let wxPayQueryUrl = '/web/course/wxPayQuery';
let wxTicketSignUrl = '/web/student/wxTicketSign';
// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	
	// 此处使用了传入的params参数，一切自定义即可
	let wxHome = (params = {}) => vm.$u.get(wxHomeUrl, params);
	let wxLogin = (params = {}) => vm.$u.post(wxLoginUrl, params);
	let hLogin = (params = {}) => vm.$u.post(hLoginUrl, params);
	let hRegister = (params = {}) => vm.$u.post(hRegisterUrl, params);
	let wxSms = (params = {}) => vm.$u.post(wxSmsUrl, params);
	let wxGetUserInfo = (params = {}) => vm.$u.post(wxGetUserInfoUrl, params);
	let wxInitInfo = (params = {}) => vm.$u.post(wxInitInfoUrl, params);
	let wxSetUserInfo = (params = {}) => vm.$u.post(wxSetUserInfoUrl, params);
	let wxSetWxInfo = (params = {}) => vm.$u.post(wxSetWxInfoUrl, params);
	let wxHistory = (params = {}) => vm.$u.post(wxHistoryUrl, params);
	let wxFeedback = (params = {}) => vm.$u.post(wxFeedbackUrl, params);
	let wxFinishQuiz = (params = {}) => vm.$u.post(wxFinishQuizUrl, params);
	let wxGetNextTopic = (params = {}) => vm.$u.post(wxGetNextTopicUrl, params);
	
	let wxGetProgress = (params = {}) => vm.$u.post(wxGetProgressUrl, params);
	let wxKeepProgress = (params = {}) => vm.$u.post(wxKeepProgressUrl, params);
	
	let wxSelectAllByGrade = (params = {}) => vm.$u.post(wxSelectAllByGradeUrl, params);
	let wxGradeList = (params = {}) => vm.$u.post(wxGradeListUrl, params);
	let wxCourseList = (params = {}) => vm.$u.post(wxCourseListUrl, params);
	let wxCourseDetail = (params = {}) => vm.$u.post(wxCourseDetailUrl, params);
	let wxAnswerAdd = (params = {}) => vm.$u.post(wxAnswerAddUrl, params);
	let wxGetNearResult = (params = {}) => vm.$u.post(wxGetNearResultUrl, params);
	let wxStart = (params = {}) => vm.$u.post(wxStartUrl, params);
	let wxEnd = (params = {}) => vm.$u.post(wxEndUrl, params);
	let wxBuyCourse = (params = {}) => vm.$u.post(wxBuyCourseUrl, params);
	let wxOrderHistory = (params = {}) => vm.$u.post(wxOrderHistoryUrl, params);
	let wxPayQuery = (params = {}) => vm.$u.post(wxPayQueryUrl, params);
	let wxTicketSign = (params = {}) => vm.$u.post(wxTicketSignUrl, params);
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = { 
		wxHome, wxLogin, hLogin, hRegister, wxSms, 
		wxGetUserInfo, wxInitInfo, wxSetUserInfo, 
		wxSetWxInfo, wxHistory, wxFeedback,
		wxFinishQuiz, wxGetNextTopic, wxSelectAllByGrade, 
		wxGradeList, wxCourseList, wxCourseDetail, 
		wxAnswerAdd, wxGetNearResult, wxStart, 
		wxEnd, wxBuyCourse, wxOrderHistory, wxPayQuery, 
		wxTicketSign,wxGetProgress,wxKeepProgress
	};
}

export default {
	install
}