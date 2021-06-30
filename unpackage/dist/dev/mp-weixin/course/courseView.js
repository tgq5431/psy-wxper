(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["course/courseView"],{

/***/ 78:
/*!***********************************************************************!*\
  !*** D:/project/svn3/psy-page/main.js?{"page":"course%2FcourseView"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _courseView = _interopRequireDefault(__webpack_require__(/*! ./course/courseView.vue */ 79));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_courseView.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 79:
/*!******************************************************!*\
  !*** D:/project/svn3/psy-page/course/courseView.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courseView.vue?vue&type=template&id=94328394&scoped=true& */ 80);
/* harmony import */ var _courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courseView.vue?vue&type=script&lang=js& */ 82);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _courseView_vue_vue_type_style_index_0_id_94328394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courseView.vue?vue&type=style&index=0&id=94328394&lang=scss&scoped=true& */ 84);
/* harmony import */ var _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "94328394",
  null,
  false,
  _courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "course/courseView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/*!*************************************************************************************************!*\
  !*** D:/project/svn3/psy-page/course/courseView.vue?vue&type=template&id=94328394&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./courseView.vue?vue&type=template&id=94328394&scoped=true& */ 81);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_template_id_94328394_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 81:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/svn3/psy-page/course/courseView.vue?vue&type=template&id=94328394&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uTabs: function() {
    return Promise.all(/*! import() | uview-ui/components/u-tabs/u-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-tabs/u-tabs")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-tabs/u-tabs.vue */ 205))
  },
  uPopup: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-popup/u-popup */ "uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-popup/u-popup.vue */ 163))
  },
  uButton: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-button/u-button */ "uview-ui/components/u-button/u-button").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-button/u-button.vue */ 184))
  },
  uModal: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-modal/u-modal */ "uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-modal/u-modal.vue */ 212))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.answerFeedback
    ? _vm.talkText.replace(new RegExp("（主角）", "g"), _vm.wxUser.nickName)
    : null
  var m0 = Number(this.courseId)
  var m1 = Number(this.courseId)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        m0: m0,
        m1: m1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 82:
/*!*******************************************************************************!*\
  !*** D:/project/svn3/psy-page/course/courseView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./courseView.vue?vue&type=script&lang=js& */ 83);
/* harmony import */ var _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 83:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/svn3/psy-page/course/courseView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var jweixin = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'jweixin-module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
//视频锁，用于延时暂停，避免调用多次延时暂停
var videoLock = false;
//默认弹框支付时间（秒）(如果出现第一个问题交互的时间大于默认弹框支付时间时，使用问题交互时间)
var default_pay_time = 2 * 60;
//上一次播放进度变化时间
var last_timeupdate = 0;
//两次播放进度变化间隔时间（last_timeupdate用于计算last_timeupdate，设置延时暂停的间隔时间）
var interval_time = 0;var _default =
{
  data: function data() {
    return {
      videoContext: null,
      audioContext: null,
      courseId: 0,
      course: {},
      wxUser: {},
      infoShow: false,
      infoTitle: "",
      infoContent: "",
      answerFeedback: {},
      talks: [],
      talkText: '',
      titleList: [{
        name: '主题说明' },
      {
        name: '背景知识' },
      {
        name: '教学目标' },
      {
        name: '重点难点' }],

      specialHandleData: this.specialHandleData,
      gradeList: this.cfgData.gradeList,
      current: 0,
      studentId: 0, //学生ID
      isStart: false, //是否开始学习
      recordId: 0, //课程记录id
      showPlayIcon: true, //是否显示播放按钮
      showPauseIcon: false, //是否显示暂停按钮
      questionShow: false, //是否显示问题弹框
      question32Show: false, //问题ID为32的问题弹框
      feedbackShow: false, //是否显示反馈弹框
      talkShow: false, //是否显示对话弹框
      questionnaireShow: false, //是否显示问卷答题弹框
      questionObj: {}, //当前问题对象
      currentQuestion: 0, //当前问题序号
      currentTalk: 0, //当前对话序号
      cruxErrorNum: 0, //关键问题错误次数 答题完后需清空
      isFail: false, //未完成本课学习
      isSuccess: false, //完成本课学习
      frameEnd: 0, //视频片段结束时间点  视频片段结束后清空该值
      frameNext: 0, //视频片段播放结束后，跳转回主线的时间点  视频片段结束后清空该值
      answerOptions: [], //记录用户回答问题的答案 
      multipleAnswerOptions: [], //记录用户多选问题的答案
      extend: [], //记录问卷答案
      questionnaireObj: null, //问卷答题对象
      questionnaireResult: "", //问卷答题结果
      isQuestionnaireResult: false, //是否显示问卷答题结果
      currentQuestionnaire: 0, //当前问卷答题序号
      questionnaireValues: 0, //问卷答题的value累加值
      endResult: true, //为true则是学习完成，为false则是学习未完成
      payShow: false, //支付弹框显示
      paySuccessShow: false, //支付成功弹框显示
      nextQuestionIndex: 0, //下一题序号(临时字段)  为连续问题后的下一个问题的序号使用
      specialHandleQuestion: {}, //特殊问题（不在接口中返回的问题）
      videoShow: true };

  },
  onLoad: function onLoad(options) {
    this.studentId = uni.getStorageSync(this.studentIdName);
    var wxUser = uni.getStorageSync(this.wxUserName);
    if (wxUser) {
      this.wxUser = JSON.parse(wxUser);
    }
    if (options.id) {
      this.courseId = options.id;
      this.initCourse(options.id);
    }
    this.initWxConfig();
  },
  onReady: function onReady() {
    this.videoContext = uni.createVideoContext('courseVideo');
    this.audioContext = uni.createInnerAudioContext();
    // uni.onNetworkStatusChange(function (res) {
    //     console.log(res.isConnected);
    //     console.log(res.networkType);
    // 	if(!res.isConnected){
    // 		this.videoPause();
    // 	}
    // });
  },
  onShow: function onShow() {
    console.log('Show');
    //this.videoPlay();
  },
  onHide: function onHide() {
    console.log('Hdie');
    this.feedbackShow = false;
    this.talkShow = false;
    //this.videoPause();
  },
  methods: {
    //初始化课程
    initCourse: function initCourse(id) {var _this = this;
      var params = {};
      params.studentId = this.studentId;
      params.courseId = id;
      this.$u.api.wxCourseDetail(params).then(function (res) {
        console.log(res);
        _this.course = res;
        _this.questionObj = _this.course.questions[_this.currentQuestion];
        var specialHandleObj = _this.specialHandleData[res.courseId];
        if (specialHandleObj && specialHandleObj.talkArray) {
          _this.talks = specialHandleObj.talkArray;
        }
        if (specialHandleObj && specialHandleObj.specialHandleQuestion) {
          _this.specialHandleQuestion = specialHandleObj.specialHandleQuestion;
        }
      });
    },
    change: function change(index) {
      this.current = index;
    },
    checkboxGroupChange: function checkboxGroupChange(e) {var _this2 = this;
      console.log(e.detail.value);
      var multipleAnswerArray = [];
      if (e.detail.value.length > 0) {
        e.detail.value.forEach(function (item) {
          var answer = _this2.questionObj.answers[item];
          multipleAnswerArray.push({
            questionId: _this2.questionObj.questionId,
            option: answer.answerOption,
            answerId: answer.answerId });

        });
      }
      this.multipleAnswerOptions = multipleAnswerArray;
    },
    specialHandleAnswerFun: function specialHandleAnswerFun(i) {
      var new_array = this.specialHandleQuestion.answers.filter(function (item) {
        return item.checked;
      });
      if (new_array.length >= 3 && !this.specialHandleQuestion.answers[i].checked) {
        return;
      }
      this.specialHandleQuestion.answers[i].checked = !this.specialHandleQuestion.answers[i].checked;
      this.$forceUpdate();
    },
    specialHandlePostBtn: function specialHandlePostBtn() {
      var new_array = this.specialHandleQuestion.answers.filter(function (item) {
        return item.checked;
      });
      if (new_array.length < 3) {
        this.$u.toast("请选择三样商品！");
        return;
      }
      var count = 0;
      new_array.forEach(function (item) {
        count += Number(item.value);
      });
      console.log(count);
      this.question32Show = false;
      //count为0则代表没有零食，count大于0则代表有零食
      if (count === 0) {
        this.videoContext.seek(144.56);
        this.videoPlay();
      } else {
        this.videoContext.seek(120.84);
        this.currentQuestion = 4;
        this.questionObj = this.course.questions[this.currentQuestion];
        this.videoPlay();
      }
      this.specialHandleQuestion.answers.forEach(function (item, index) {
        item.checked = false;
      });
    },
    //开始学习
    startStudy: function startStudy() {var _this3 = this;
      this.isStart = true;
      var params = {};
      params.studentId = this.studentId;
      params.courseId = this.course.courseId;
      this.$u.api.wxStart(params).then(function (res) {
        console.log("开始学习课程");
        _this3.recordId = res.recordId;
        _this3.showPlayIcon = false;
        _this3.videoContext.play();
      });
    },
    //重新学习
    resetStudy: function resetStudy() {
      this.currentQuestion = 0;
      this.questionObj = this.course.questions[this.currentQuestion];
      this.answerFeedback = {};
      this.talks = [],
      this.isStart = false;
      this.videoContext.seek(0);
      this.videoContext.pause();
      this.questionShow = false;
      this.showPlayIcon = true;
      this.showPauseIcon = false;
      this.questionnaireObj = {};
      this.questionnaireShow = false;
      this.isFail = false;
    },
    //结束学习
    endStudy: function endStudy(result) {var _this4 = this;
      //判断结束学习是否有问卷答题
      var params = {};
      params.recordId = this.recordId;
      params.options = JSON.stringify(this.answerOptions);
      params.result = result;
      params.extend = JSON.stringify(this.extend);
      this.$u.api.wxEnd(params).then(function (res) {
        console.log("本课学习结束");
        //结束后  属性数据初始化
        _this4.answerOptions = [];
        _this4.extend = [];
        //this.resetStudy();
      });
    },
    //视频播放
    videoPlay: function videoPlay() {
      console.log("视频播放");
      if (!this.videoShow) {
        this.videoShow = true;
      }
      if (this.videoContext) {
        this.videoContext.play();
      }
      this.showPauseIcon = false;
    },
    //视频暂停
    videoPause: function videoPause(isShow) {
      if (this.videoContext) {
        console.log("视频暂停");
        this.videoContext.pause();
        this.showPauseIcon = true;
        if (!isShow) {
          this.videoShow = false;
        }
      }
    },
    //初始化音频组件
    initAudio: function initAudio(src, closePopTime, callback) {
      console.log("开始播放反馈内容音频");
      this.audioContext = uni.createInnerAudioContext();
      this.audioContext.src = src;
      this.audioContext.play();
      this.audioContext.onEnded(function () {
        setTimeout(function () {
          if (callback) {
            callback();
          }
        }, closePopTime);
      });
    },
    //关闭支付弹框（返回课程列表页面）
    closePay: function closePay() {
      this.payShow = false;
      uni.navigateTo({
        url: 'courseList' });

    },
    initWxConfig: function initWxConfig() {
      var params = {};
      params.wyUrl = window.location.href.split('#')[0];
      params.accountId = this.studentId;
      this.$u.api.wxTicketSign(params).then(function (res) {
        jweixin.config({
          debug: true,
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: ['chooseWXPay'] });


        jweixin.error(function (res) {
          console.log(res);
        });
      });
    },
    pay: function pay() {var _this5 = this;
      var params = {};
      var studentId = uni.getStorageSync(this.studentIdName);
      params.studentId = studentId;
      params.grades = this.course.grade;
      this.$u.api.wxBuyCourse(params).then(function (res) {
        _this5.payment(res);
      });
    },
    payment: function payment(payObj) {
      var that = this;
      jweixin.chooseWXPay({
        timestamp: payObj.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: payObj.nonceStr, // 支付签名随机串，不长于 32 位
        package: payObj.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
        signType: payObj.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: payObj.paySign, // 支付签名
        success: function success(res) {
          that.queryWx(payObj.orderNo);
        } });


      // if (typeof WeixinJSBridge == "undefined"){
      //    if( document.addEventListener ){
      // 	   setTimeout(function(){
      // 		   document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(payObj), false);
      // 	   }, 500)
      //    }else if (document.attachEvent){
      //        document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady(payObj)); 
      //        document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady(payObj));
      //    }
      // }else{
      //    this.onBridgeReady(payObj);
      // }
    },
    // onBridgeReady(payObj){
    // 	console.log(payObj);
    // 	const that = this;
    // 	WeixinJSBridge.invoke(
    // 	  'getBrandWCPayRequest', {
    // 		 "appId":'wx1d04d5352d5c369b',  
    // 		 "timeStamp":payObj.timeStamp,
    // 		 "nonceStr":payObj.nonceStr,
    // 		 "package":payObj.package,
    // 		 "signType":payObj.signType,
    // 		 "paySign":payObj.paySign
    // 	  },
    // 	  function(res){
    // 	  if(res.err_msg == "get_brand_wcpay_request:ok" ){
    // 		// 使用以上方式判断前端返回,微信团队郑重提示：
    // 		//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
    // 		that.queryWx(payObj.orderNo);
    // 	  } 
    //    }); 
    // },
    queryWx: function queryWx(order_num) {var _this6 = this;
      this.$u.toast("查询微信订单");
      var params = {};
      params.orderNo = order_num;
      this.$u.api.wxPayQuery(params).then(function (res) {
        if (res.state === 1) {
          //支付成功
          _this6.initCourse(_this6.courseId);
          _this6.payShow = false;
          _this6.paySuccessShow = true;
        }
      });
    },
    paySuccess: function paySuccess() {
      this.paySuccessShow = false;
      this.videoPlay();
    },
    //视频播放进度变化时触发方法，触发频率 250ms 一次
    videoMonitor: function videoMonitor(e) {var _this7 = this;
      // console.log(e.detail.currentTime, e.detail.duration);
      if (videoLock) {
        console.log("方法锁定，等待下一次请求");
        return;
      }
      interval_time = e.detail.currentTime - last_timeupdate;
      //console.log(interval_time, e.detail.currentTime, last_timeupdate);
      last_timeupdate = e.detail.currentTime;
      //判断是否支付
      if (this.course.hasBuy === 0) {
        var pay_time = default_pay_time;
        if (this.course.questions.length > 0) {
          var showTime = this.course.questions[0].showTime;
          if (showTime < pay_time) {
            pay_time = showTime + 3;
          }
        }
        //延后1秒暂停并弹出支付弹框
        if (e.detail.currentTime > pay_time &&
        e.detail.currentTime < pay_time + 1) {
          console.log("该年级课程未支付，显示支付弹框");
          this.videoPause();
          this.payShow = true;
          return;
        }
        if (e.detail.currentTime > default_pay_time) {
          console.log("该年级课程未支付，显示支付弹框");
          this.videoPause();
          this.payShow = true;
          return;
        }
      }
      //32 特殊处理
      if (Number(this.courseId) === 32 && e.detail.currentTime > 118.8 &&
      e.detail.currentTime < 119.8) {
        this.videoPause();
        this.question32Show = true;
      }
      //如果有视频片段结束时间和视频主线的时间点，判断结束时间，回到视频主线
      // if(this.frameEnd > 0 && this.frameNext > 0){
      // 	if( e.detail.currentTime > (this.frameEnd - 2) 
      // 		&& e.detail.currentTime < this.frameEnd - 1 ){
      // 		console.log("视频片段播放完毕，回到主线，frameEnd=", this.frameEnd, "frameNext=", this.frameNext);
      // 		this.videoContext.seek(this.frameNext);
      // 		this.videoPlay();
      // 		this.frameEnd = 0;
      // 		this.frameNext = 0;
      // 	}

      // 	//启动延时暂停逻辑
      // 	// this.delayProgram(e.detail.currentTime, this.frameEnd, () => {
      // 	// 	console.log("视频片段播放完毕，回到主线，frameEnd=", this.frameEnd, "frameNext=", this.frameNext);
      // 	// 	this.videoContext.seek(this.frameNext);
      // 	// 	this.videoPlay();
      // 	// 	this.frameEnd = 0;
      // 	// 	this.frameNext = 0;
      // 	// })
      // }
      // //如果有视频片段结束时间没有视频主线的时间点，判断结束时间，直接结束
      // if(this.frameEnd > 0 && (!this.frameNext || this.frameNext <=0 )){
      // 	if( e.detail.currentTime > (this.frameEnd - 2)
      // 		&& e.detail.currentTime < this.frameEnd - 1){
      // 		console.log("视频提前结束，frameEnd=", this.frameEnd)
      // 		this.videoEnd();
      // 		this.frameEnd = 0;
      // 		this.frameNext = 0;
      // 		return;
      // 	}

      // 	//启动延时暂停逻辑
      // 	// this.delayProgram(e.detail.currentTime, this.frameEnd, () => {
      // 	// 	console.log("视频片段播放完毕，回到主线，frameEnd=", this.frameEnd, "frameNext=", this.frameNext);
      // 	// 	this.videoContext.seek(this.frameNext);
      // 	// 	this.videoPlay();
      // 	// 	this.frameEnd = 0;
      // 	// 	this.frameNext = 0;
      // 	// })
      // }
      //判断当前问题序号是否正确
      if (this.course.questions.length >= this.currentQuestion + 1) {
        // console.log(this.course.questions.length, this.currentQuestion);
        //const currentQuestionObj = this.course.questions[this.currentQuestion];
        //启动延时暂停逻辑
        this.delayProgram(e.detail.currentTime, this.questionObj.showTime, function () {
          console.log("视频暂停，显示问题弹框， showTime=", _this7.questionObj.showTime);
          _this7.videoPause();
          _this7.questionShow = true;
          return;
        });
      }
      //特殊处理（对话）
      if (this.talks && this.talks.length > 0) {
        if (this.talks.length >= this.currentTalk + 1) {
          // console.log("当前对话序号:", this.currentTalk);
          var talkObj = this.talks[this.currentTalk];
          if (!talkObj) {
            return;
          }
          var showTalkTime = talkObj.showTime;
          var talkArray = talkObj.talks;
          this.delayProgram(e.detail.currentTime, showTalkTime, function () {
            console.log("视频暂停，显示对话弹框", talkObj, _this7.talks, "序号：", _this7.currentTalk, ", 时间：", showTalkTime);
            _this7.videoPause();
            talkArray.forEach(function (item, index) {
              setTimeout(function () {
                _this7.talkText = item;
                _this7.talkShow = true;
                if (talkArray.length === index + 1) {
                  setTimeout(function () {
                    console.log("多个对话弹框显示完毕，播放视频");
                    if (talkObj.fail) {
                      console.log("流程失败，设置课程状态为未完成");
                      _this7.endResult = false;
                    }
                    _this7.talkShow = false;
                    if (_this7.talks.length >= _this7.currentTalk + 1) {
                      _this7.currentTalk = _this7.currentTalk + 1;
                    }
                    _this7.videoPlay();
                  }, talkObj.duration);
                }
              }, talkObj.duration * index);
            });
          });
        }
      }
      //解锁
      videoLock = false;
    },
    //视频自然结束 学习完成
    videoEnd: function videoEnd() {
      console.log("学习结束");
      this.currentQuestion = 0;
      this.questionObj = this.course.questions[this.currentQuestion];
      console.log(this.specialHandleData);
      var specialHandleObj = this.specialHandleData[this.courseId];
      console.log(specialHandleObj);
      this.videoPause();
      //视频结束判断是否有问卷题目
      if (specialHandleObj && specialHandleObj.questionnaire) {
        console.log(specialHandleObj.questionnaire);
        this.questionnaireShow = true;
        this.questionnaireObj = specialHandleObj.questionnaire;
        this.questionnaireResult = specialHandleObj.result;
        return;
      } else {
        if (this.endResult) {
          console.log("学习完成");
          this.isSuccess = true;
          this.endStudy(1);
        } else {
          console.log("学习未完成");
          this.isFail = true;
          this.endResult = true;
          this.endStudy(0);
        }
      }
    },
    //下一课  如果是最后一个点击跳转到课程列表页
    nextCourse: function nextCourse() {
      if (this.course.nextCourseId > 0) {
        var url = '../course/courseView?id=' + this.course.nextCourseId;
        uni.redirectTo({
          url: url });

      } else {
        uni.reLaunch({
          url: '../course/courseList' });

      }
    },
    //点击答案处理逻辑
    answerFun: function answerFun(obj, isMultiple) {var _this8 = this;
      console.log("点击回答问题");
      //判断是否是重点问题（如果有跳转则需重新播放对应点的视频再作答）
      if (this.questionObj.crux === 1) {
        console.log("关键问题");
        //判断是否选中的是关键答案
        if (!obj.crux) {
          this.cruxErrorNum = this.cruxErrorNum + 1;
          console.log("关键问题回答错误, 错误次数", this.cruxErrorNum);
          this.$u.toast("回答错误，请重新选择");
          //关键问题打错3次直接结束学习
          if (this.cruxErrorNum >= 3) {
            console.log("关键问题回答错误超过3次，未完成本课学习，需重新学习");
            this.isFail = true;
            this.cruxErrorNum = 0;
            this.endStudy(0);
            return;
          }
          //判断操作类型有无跳转
          // if(obj.type === 3 || obj.type === 4){
          // 	console.log("关键问题回答错误, 跳转相应起始点重新观看视频片段");
          // 	this.questionShow = false;
          // 	// this.videoContext.seek(obj.frameStart);
          // 	// this.frameEnd = obj.frameEnd;
          // 	// this.frameNext = obj.frameNext;
          // 	this.videoContext.seek(this.frameStart);
          // 	this.videoPlay();
          // }
          return;
        } else {
          //关键问题回答正确，初始化关键问题错误次数
          this.cruxErrorNum = 0;
        }
      }

      if (this.nextQuestionIndex > 0) {
        console.log('指定下一题序号, nextQuestionIndex=', this.nextQuestionIndex);
        setTimeout(function () {
          _this8.currentQuestion = _this8.nextQuestionIndex;
          _this8.questionObj = _this8.course.questions[_this8.nextQuestionIndex];
          _this8.nextQuestionIndex = 0;
        }, 500);
      } else {
        console.log('默认正常问题流程');
        setTimeout(function () {
          _this8.currentQuestion = _this8.currentQuestion + 1;
          _this8.questionObj = _this8.course.questions[_this8.currentQuestion];
        }, 500);
      }


      if (!isMultiple) {
        console.log("单选问题");
        //记录用户回答问题的答案
        this.answerOptions.push({
          questionId: this.questionObj.questionId,
          option: obj.answerOption,
          answerId: obj.answerId });


        //如存在问题间有相互跳转的情况时，序号为指定序号
        var specialHandleObj = this.specialHandleData[this.course.courseId];
        if (specialHandleObj) {
          if (specialHandleObj.questionJump && specialHandleObj.questionJump.length > 0) {
            try {
              specialHandleObj.questionJump.forEach(function (item, index) {
                if (obj.answerId === item.answerId) {
                  if (item.questionIndex >= 0) {
                    console.log('指定问题序号，questionIndex=', item.questionIndex);
                    setTimeout(function () {
                      _this8.currentQuestion = item.questionIndex;
                      _this8.questionObj = _this8.course.questions[_this8.currentQuestion];
                      if (item.nextQuestionIndex && item.nextQuestionIndex > 0) {
                        _this8.nextQuestionIndex = item.nextQuestionIndex;
                      }
                    }, 500);
                    if (item.isNext) {
                      throw new Error("结束循环，跳出方法并结束方法");
                    }
                    if (item.fail) {
                      console.log("设置课程未完成");
                      _this8.endResult = false;
                    }
                  }
                  if (item.talkIndex >= 0) {
                    console.log('指定对话序号，talkIndex=', item.talkIndex);
                    _this8.currentTalk = item.talkIndex;
                  }
                  //throw new Error("结束循环，跳出方法并结束方法")
                }
              });
            } catch (e) {
              console.log(e);
              return;
            }

          }
        }
        //判断后续操作类型
        switch (obj.type) {
          //无反馈，无跳转
          case 1:
            console.log("无反馈，无跳转");
            this.questionShow = false;
            this.videoPlay();
            break;
          //有反馈，无跳转
          case 2:
            console.log("有反馈，无跳转");
            //给反馈对象赋值
            this.answerFeedback = obj;
            this.questionShow = false;
            this.feedbackShow = true;
            this.initAudio(obj.feedbackVoice, obj.feedbackDuration, function () {
              console.log("执行音频结束后回调方法");
              _this8.feedbackShow = false;
              _this8.$forceUpdate();
              _this8.videoPlay();
            });
            break;
          //无反馈，有跳转
          case 3:
            console.log("无反馈，有跳转, frameEnd=", obj.frameEnd, "frameNext=", obj.frameNext);
            this.questionShow = false;
            this.$forceUpdate();
            this.videoContext.seek(obj.frameStart);
            this.videoPlay();
            // this.frameEnd = obj.frameEnd;
            // this.frameNext = obj.frameNext;
            console.log(obj.frameEnd - obj.frameStart);
            //如果有视频片段结束时间和视频主线的时间点，判断结束时间，回到视频主线
            if (obj.frameEnd > 0 && obj.frameNext > 0) {
              setTimeout(function () {
                console.log("视频片段播放完毕，回到主线，frameEnd=", obj.frameEnd, "frameNext=", obj.frameNext);
                _this8.videoContext.seek(obj.frameNext);
                _this8.videoPlay();
              }, (obj.frameEnd - obj.frameStart) * 1000);
            }
            //如果有视频片段结束时间没有视频主线的时间点，判断结束时间，直接结束
            if (obj.frameEnd > 0 && (!obj.frameNext || obj.frameNext <= 0)) {
              setTimeout(function () {
                console.log("视频提前结束，frameEnd=", obj.frameEnd);
                _this8.videoEnd();
              }, obj.frameEnd - obj.frameStart);
            }
            break;
          //有反馈，有跳转
          case 4:
            console.log("有反馈，有跳转, frameEnd=", obj.frameEnd, "frameNext=", obj.frameNext);
            this.answerFeedback = obj;
            this.questionShow = false;
            this.feedbackShow = true;
            this.initAudio(obj.feedbackVoice, obj.feedbackDuration, function () {
              console.log("执行音频结束后回调方法");
              _this8.videoContext.seek(obj.frameStart);
              _this8.videoPlay();
              // this.frameEnd = obj.frameEnd;
              // this.frameNext = obj.frameNext;
              _this8.feedbackShow = false;
              _this8.$forceUpdate();
              //如果有视频片段结束时间和视频主线的时间点，判断结束时间，回到视频主线
              if (obj.frameEnd > 0 && obj.frameNext > 0) {
                setTimeout(function () {
                  console.log("视频片段播放完毕，回到主线，frameEnd=", obj.frameEnd, "frameNext=", obj.frameNext);
                  _this8.videoContext.seek(obj.frameNext);
                  _this8.videoPlay();
                }, (obj.frameEnd - obj.frameStart) * 1000);
              }
              //如果有视频片段结束时间没有视频主线的时间点，判断结束时间，直接结束
              if (obj.frameEnd > 0 && (!obj.frameNext || obj.frameNext <= 0)) {
                setTimeout(function () {
                  console.log("视频提前结束，frameEnd=", obj.frameEnd);
                  _this8.videoEnd();
                }, (obj.frameEnd - obj.frameStart) * 1000);
              }

            });
            break;
          default:
            console.error("type参数错误");
            break;}

      } else {
        if (this.multipleAnswerOptions.length <= 0) {
          this.$u.toast("请选择答案");
        }
        console.log("多选问题");
        //多选
        this.answerOptions.push.apply(this.answerOptions, this.multipleAnswerOptions);
        this.multipleAnswerOptions = [];
        console.log(this.answerOptions);
        this.questionShow = false;
        // if(this.nextQuestionIndex && this.nextQuestionIndex > 0){
        // 	console.log('多选指定下一题序号, nextQuestionIndex=', this.nextQuestionIndex);
        // 	setTimeout(() => {
        // 		this.currentQuestion = this.nextQuestionIndex;
        // 		this.questionObj = this.course.questions[this.nextQuestionIndex];
        // 		this.nextQuestionIndex = 0;
        // 	}, 500)	
        // }
        // if(this.course.hasBuy === 0){
        // 	console.log("该年级课程未支付，显示支付弹框")
        // 	this.videoPause();
        // 	this.payShow = true;
        // 	return;
        // }
        this.videoPlay();
      }
    },
    //点击问卷答题答案处理逻辑
    questionnaireAnswerFun: function questionnaireAnswerFun(obj, qid) {
      var str = '{"q' + qid + '": "' + obj.answerOption + '"}';
      this.extend.push(
      str);

      this.questionnaireValues = this.questionnaireValues + Number(obj.value);
      console.log(this.extend);
      console.log(this.questionnaireValues);
      if (this.currentQuestionnaire + 1 >= this.questionnaireObj.questions.length) {
        console.log("最后一题");
        //课程ID=28，《三人行必有我师》问卷处理
        if (Number(this.courseId) === 28) {
          if (this.questionnaireValues > 2 * 60) {
            this.infoShow = true;
            this.infoTitle = "提示信息";
            this.infoContent = "时间总和不能超过2个小时, 请重新选择哦",
            this.currentQuestionnaire = 0;
            this.questionnaireValues = 0;
            this.extend = [];
            return;
          }
          this.currentQuestionnaire = 0;
          this.questionnaireValues = 0;
          this.questionnaireShow = false;
          this.questionnaireObj = {};
          this.isSuccess = true;
          this.endStudy(1);
          return;
        } else if (Number(this.courseId) === 69 || Number(this.courseId) === 70) {
          this.extend = {
            "count": this.questionnaireValues,
            "questions": this.extend };

          console.log(this.extend);
          this.isQuestionnaireResult = true;
          return;
        }
        this.currentQuestionnaire = 0;
        this.questionnaireValues = 0;
        this.questionnaireShow = false;
        this.questionnaireObj = {};
        if (this.endResult) {
          this.isSuccess = true;
          console.log("学习完成");
          this.endStudy(1);
        } else {
          console.log("学习未完成");
          this.isFail = true;
          this.endResult = true;
          this.endStudy(0);
        }
        return;
      } else {
        this.currentQuestionnaire = this.currentQuestionnaire + 1;
        return;
      }
    },
    questionnairePost: function questionnairePost() {
      this.endStudy(1);
      this.currentQuestionnaire = 0;
      this.questionnaireValues = 0;
      this.extend = [];
      this.questionnaireShow = false;
      this.questionnaireObj = {};
      this.questionnaireResult = "";
      this.isQuestionnaireResult = false;
      this.isSuccess = true;
    },
    //延时暂停方法
    delayProgram: function delayProgram(currentTime, showQuestionTime, callback) {
      //判断当前时间是否大于延时1s的显示时间并且小于显示时间
      showQuestionTime = showQuestionTime - 1;
      //间隔时间在跳转到指定位置视频的时候会出现差值过的情况，在这里判断避免此类问题发生
      interval_time = interval_time < 0.5 ? interval_time : 0.5;
      if (currentTime - showQuestionTime < interval_time && currentTime - showQuestionTime > 0) {
        console.log("触发延时暂停,interval_time=", interval_time, ",currentTime=", currentTime, ",showQuestionTime=", showQuestionTime);
        //触发延时暂停, 上锁
        videoLock = true;
        setTimeout(function () {
          // console.log("视频暂停，显示问题弹框");
          // this.videoPause();
          // this.questionShow = true;
          // //视频暂停，解锁
          // videoLock = false;
          if (callback) {
            callback();
          }
        }, (currentTime - showQuestionTime) * 1000);
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 84:
/*!****************************************************************************************************************!*\
  !*** D:/project/svn3/psy-page/course/courseView.vue?vue&type=style&index=0&id=94328394&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_style_index_0_id_94328394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Program Files/HBuilderX.2.8.6.20200814.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./courseView.vue?vue&type=style&index=0&id=94328394&lang=scss&scoped=true& */ 85);
/* harmony import */ var _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_style_index_0_id_94328394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_style_index_0_id_94328394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_style_index_0_id_94328394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_style_index_0_id_94328394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_2_8_6_20200814_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_courseView_vue_vue_type_style_index_0_id_94328394_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 85:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/svn3/psy-page/course/courseView.vue?vue&type=style&index=0&id=94328394&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[78,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/course/courseView.js.map