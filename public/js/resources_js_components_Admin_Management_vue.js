"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_Management_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Management.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Management.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Management",
  data: function data() {
    return {
      plus: true,
      trial: true,
      work: true,
      loading: false
    };
  },
  mounted: function mounted() {
    this.index();
  },
  methods: {
    index: function index() {
      var _this = this;

      axios.get('/api/management').then(function (res) {
        _this.plus = res.data.plus;
        _this.trial = res.data.trial;
        _this.work = res.data.work;
      })["catch"](function (err) {});
    },
    plusOne: function plusOne() {
      var _this2 = this;

      this.loading = true;
      axios.post('/api/management/plus-one').then(function (res) {
        _this2.loading = false;

        _this2.$store.dispatch('showAlert', {
          isVisible: true,
          msg: res.data.msg,
          color: 'success',
          type: 'success'
        });
      })["catch"](function (err) {});
    },
    shiftTrial: function shiftTrial() {
      var _this3 = this;

      this.loading = true;
      axios.post('/api/management/trial').then(function (res) {
        _this3.loading = false;

        _this3.$store.dispatch('showAlert', {
          isVisible: true,
          msg: res.data.msg,
          color: 'success',
          type: 'success'
        });
      })["catch"](function (err) {});
    },
    shiftWork: function shiftWork() {
      var _this4 = this;

      this.loading = true;
      axios.post('/api/management/work').then(function (res) {
        _this4.loading = false;

        _this4.$store.dispatch('showAlert', {
          isVisible: true,
          msg: res.data.msg,
          color: 'success',
          type: 'success'
        });
      })["catch"](function (err) {});
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/Management.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Admin/Management.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Management_vue_vue_type_template_id_3c8d940e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Management.vue?vue&type=template&id=3c8d940e& */ "./resources/js/components/Admin/Management.vue?vue&type=template&id=3c8d940e&");
/* harmony import */ var _Management_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Management.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Management.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Management_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Management_vue_vue_type_template_id_3c8d940e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Management_vue_vue_type_template_id_3c8d940e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Management.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Management.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Admin/Management.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Management_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Management.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Management.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Management_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Management.vue?vue&type=template&id=3c8d940e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Admin/Management.vue?vue&type=template&id=3c8d940e& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Management_vue_vue_type_template_id_3c8d940e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Management_vue_vue_type_template_id_3c8d940e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Management_vue_vue_type_template_id_3c8d940e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Management.vue?vue&type=template&id=3c8d940e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Management.vue?vue&type=template&id=3c8d940e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Management.vue?vue&type=template&id=3c8d940e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Management.vue?vue&type=template&id=3c8d940e& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-10",
                  attrs: {
                    disabled: _vm.plus,
                    color: "green",
                    dark: !_vm.plus,
                    loading: _vm.loading
                  },
                  on: { click: _vm.plusOne }
                },
                [
                  _vm._v("\n                +1\n                "),
                  _vm.plus
                    ? _c("v-icon", { attrs: { right: "", dark: "" } }, [
                        _vm._v(
                          "\n                    mdi-check\n                "
                        )
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mr-10",
                  attrs: {
                    disabled: _vm.trial,
                    color: "indigo",
                    dark: !_vm.trial,
                    loading: _vm.loading
                  },
                  on: { click: _vm.shiftTrial }
                },
                [
                  _vm._v(
                    "\n                Закрытие смены(Пробный)\n                "
                  ),
                  _vm.trial
                    ? _c("v-icon", { attrs: { right: "", dark: "" } }, [
                        _vm._v(
                          "\n                    mdi-check\n                "
                        )
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    disabled: _vm.work,
                    color: "indigo",
                    dark: !_vm.work,
                    loading: _vm.loading
                  },
                  on: { click: _vm.shiftWork }
                },
                [
                  _vm._v(
                    "\n                Закрытие смены(В работе)\n                "
                  ),
                  _vm.work
                    ? _c("v-icon", { attrs: { right: "", dark: "" } }, [
                        _vm._v(
                          "\n                    mdi-check\n                "
                        )
                      ])
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);