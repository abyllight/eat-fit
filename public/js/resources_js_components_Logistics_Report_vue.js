"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Logistics_Report_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Report',
  data: function data() {
    return {
      max: null,
      date: null,
      menu: false,
      couriers: [],
      fact: null,
      fact_loading: false
    };
  },
  created: function created() {
    this.getFact();
    this.fetchReports();
  },
  methods: {
    fetchReports: function fetchReports() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/reports').then(function (response) {
        _this.max = response.data.max;
        _this.date = response.data.max;
        _this.couriers = response.data.reports;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    filter: function filter() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/reports/filter', {
        date: this.date
      }).then(function (response) {
        _this2.menu = false;
        _this2.couriers = response.data.reports;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    excel: function excel() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/reports/export/' + this.date).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getFact: function getFact() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/management/fact').then(function (response) {
        _this3.fact = response.data.fact;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    payFact: function payFact() {
      var _this4 = this;

      this.fact = true;
      this.fact_loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/management/fact').then(function (res) {
        console.log(res);

        _this4.$store.dispatch('showAlert', {
          isVisible: true,
          msg: res.data.msg,
          color: 'success',
          type: 'success'
        });

        location.reload();
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        _this4.fact = false;
        _this4.fact_loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntable[data-v-182bf18a], td[data-v-182bf18a] {\n    border: 1px solid black;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_182bf18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_182bf18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_182bf18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Logistics/Report.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Logistics/Report.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Report_vue_vue_type_template_id_182bf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=182bf18a&scoped=true& */ "./resources/js/components/Logistics/Report.vue?vue&type=template&id=182bf18a&scoped=true&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/components/Logistics/Report.vue?vue&type=script&lang=js&");
/* harmony import */ var _Report_vue_vue_type_style_index_0_id_182bf18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css& */ "./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_182bf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Report_vue_vue_type_template_id_182bf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "182bf18a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Logistics/Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Logistics/Report.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Logistics/Report.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_style_index_0_id_182bf18a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=style&index=0&id=182bf18a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Logistics/Report.vue?vue&type=template&id=182bf18a&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Logistics/Report.vue?vue&type=template&id=182bf18a&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_182bf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_182bf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_182bf18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=template&id=182bf18a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=template&id=182bf18a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=template&id=182bf18a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Report.vue?vue&type=template&id=182bf18a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "12", sm: "12", lg: "3" } },
            [
              _c(
                "v-menu",
                {
                  ref: "menu",
                  attrs: {
                    "close-on-content-click": false,
                    "return-value": _vm.date,
                    transition: "scale-transition",
                    "offset-y": "",
                    "min-width": "auto"
                  },
                  on: {
                    "update:returnValue": function($event) {
                      _vm.date = $event
                    },
                    "update:return-value": function($event) {
                      _vm.date = $event
                    }
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-text-field",
                            _vm._g(
                              _vm._b(
                                {
                                  attrs: {
                                    label: "Выберите дату",
                                    "prepend-icon": "mdi-calendar",
                                    readonly: ""
                                  },
                                  model: {
                                    value: _vm.date,
                                    callback: function($$v) {
                                      _vm.date = $$v
                                    },
                                    expression: "date"
                                  }
                                },
                                "v-text-field",
                                attrs,
                                false
                              ),
                              on
                            )
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.menu,
                    callback: function($$v) {
                      _vm.menu = $$v
                    },
                    expression: "menu"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-date-picker",
                    {
                      attrs: { max: _vm.max, "no-title": "", scrollable: "" },
                      model: {
                        value: _vm.date,
                        callback: function($$v) {
                          _vm.date = $$v
                        },
                        expression: "date"
                      }
                    },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.menu = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", color: "primary" },
                          on: { click: _vm.filter }
                        },
                        [
                          _vm._v(
                            "\n                        OK\n                    "
                          )
                        ]
                      )
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
          _c("v-col", { attrs: { sm: "12", lg: "3" } }, [
            _c(
              "a",
              {
                attrs: {
                  type: "button",
                  href: "/api/reports/export/" + _vm.date
                }
              },
              [
                _c(
                  "v-btn",
                  { attrs: { color: "primary" }, on: { click: _vm.excel } },
                  [
                    _vm._v(
                      "\n                    Скачать отчет\n                "
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "d-flex justify-space-between",
              attrs: { sm: "12", lg: "6" }
            },
            [
              _c("p"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    color: "primary",
                    disabled: _vm.fact,
                    loading: _vm.fact_loading
                  },
                  on: { click: _vm.payFact }
                },
                [_vm._v("\n                фактический оплачено\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.couriers, function(courier) {
        return _c(
          "v-row",
          { key: courier.id },
          [
            _c(
              "v-col",
              [
                _c("h3", [
                  _vm._v(
                    _vm._s(
                      courier[0]
                        ? courier[0].courier + " - " + courier.length
                        : ""
                    )
                  )
                ]),
                _vm._v(" "),
                _c("v-simple-table", {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                Имя\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                Время\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                Адрес\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                Тип\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                Сумма\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                Статус отчета\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                Время отчета\n                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v(
                                    "\n                                Время Еду\n                            "
                                  )
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              [
                                _vm._l(courier, function(item) {
                                  return [
                                    _c("tr", [
                                      _c("td", [_vm._v(_vm._s(item.name))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.time))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.address))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.type))]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.amount))]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "v-chip",
                                            {
                                              attrs: {
                                                label: "",
                                                small: "",
                                                color: item.report_color
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                     " +
                                                  _vm._s(item.report_status) +
                                                  "\n                                 "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _vm._v(
                                            "\n                                 " +
                                              _vm._s(item.reported_at) +
                                              "\n                                 "
                                          ),
                                          _c(
                                            "v-chip",
                                            {
                                              attrs: {
                                                label: "",
                                                small: "",
                                                color: item.report_time_color
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                     " +
                                                  _vm._s(
                                                    item.report_time_status
                                                  ) +
                                                  "\n                                 "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _vm._v(
                                            "\n                                 " +
                                              _vm._s(item.notified_at) +
                                              "\n                                 "
                                          ),
                                          _c(
                                            "v-chip",
                                            {
                                              attrs: {
                                                label: "",
                                                small: "",
                                                color: item.notification_color
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                     " +
                                                  _vm._s(
                                                    item.notification_status
                                                  ) +
                                                  "\n                                 "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tr",
                                      { staticClass: "grey lighten-3" },
                                      [
                                        _c("td", { attrs: { colspan: "10" } }, [
                                          _vm._v(_vm._s(item.comment))
                                        ])
                                      ]
                                    )
                                  ]
                                })
                              ],
                              2
                            )
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                })
              ],
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);