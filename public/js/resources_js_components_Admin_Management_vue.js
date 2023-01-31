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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      plus: null,
      saturday: null,
      trial: null,
      work: null,
      select: null,
      plus_loading: false,
      saturday_loading: false,
      trial_loading: false,
      work_loading: false,
      select_loading: false,
      prompt: false,
      type: 1,
      link: '/api/management/plus-one'
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
        _this.select = res.data.select; //this.saturday = res.data.saturday
      })["catch"](function (err) {
        console.log(err);
      });
    },
    doAction: function doAction() {
      var _this2 = this;

      this.prompt = false;
      this.plus = true;
      this.trial = true;
      this.work = true;
      this.select = true;
      this.saturday = true;
      axios.post(this.link).then(function (res) {
        _this2.$store.dispatch('showAlert', {
          isVisible: true,
          msg: res.data.msg,
          color: 'success',
          type: 'success'
        });

        location.reload();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    plusOne: function plusOne() {
      this.link = '/api/management/plus-one';
      this.type = 1;
      this.prompt = true;
      this.plus_loading = true;
    },
    plusOneSaturday: function plusOneSaturday() {
      this.link = '/api/management/plus-one-saturday';
      this.type = 4;
      this.prompt = true;
      this.saturday_loading = true;
    },
    shiftTrial: function shiftTrial() {
      this.link = '/api/management/trial';
      this.type = 2;
      this.prompt = true;
      this.trial_loading = true;
    },
    shiftWork: function shiftWork() {
      this.link = '/api/management/work';
      this.type = 3;
      this.prompt = true;
      this.work_loading = true;
    },
    sendSelect: function sendSelect() {
      this.link = '/api/management/select';
      this.type = 5;
      this.prompt = true;
      this.select_loading = true;
    },
    close: function close() {
      this.prompt = false;
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
                    loading: _vm.plus_loading
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-10",
                  attrs: {
                    disabled: _vm.saturday,
                    color: "green",
                    dark: !_vm.saturday,
                    loading: _vm.saturday_loading
                  },
                  on: { click: _vm.plusOneSaturday }
                },
                [
                  _vm._v("\n                +1 суббота\n                "),
                  _vm.saturday
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "mr-10",
                  attrs: {
                    disabled: _vm.trial,
                    color: "indigo",
                    dark: !_vm.trial,
                    loading: _vm.trial_loading
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
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  attrs: {
                    disabled: _vm.work,
                    color: "indigo",
                    dark: !_vm.work,
                    loading: _vm.work_loading
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
      ),
      _vm._v(" "),
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
                    disabled: _vm.select,
                    color: "green",
                    dark: !_vm.select,
                    loading: _vm.select_loading
                  },
                  on: { click: _vm.sendSelect }
                },
                [
                  _vm._v("\n                Меню Селект\n                "),
                  _vm.select
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
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "500px" },
              model: {
                value: _vm.prompt,
                callback: function($$v) {
                  _vm.prompt = $$v
                },
                expression: "prompt"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v("Вы уверены, что хотите продолжить действие?")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.close }
                        },
                        [_vm._v("Отмена")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.doAction }
                        },
                        [_vm._v("ДА")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer")
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);