"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Kitchen_Grid_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Stat",
  props: {
    stat: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Grid.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Grid.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dietology_Stat_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dietology/Stat.vue */ "./resources/js/components/Dietology/Stat.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Grid",
  components: {
    Stat: _Dietology_Stat_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: true,
      isSelect: true,
      orders: [],
      stat: {},
      rations: [],
      cuisine: {},
      dialog: false,
      order: {
        ration: {},
        tableware: {},
        wishlist: []
      },
      ration: {},
      panel: []
    };
  },
  mounted: function mounted() {
    this.getSelects();
    this.getStat();
    this.getCuisine();
  },
  methods: {
    getSelects: function getSelects() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/select/all').then(function (response) {
                  _this.orders = response.data;
                })["catch"](function (error) {
                  _this.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this.loading = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getStat: function getStat() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/select').then(function (response) {
                  _this2.stat = response.data.stat;
                })["catch"](function (error) {
                  _this2.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this2.loading = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCuisine: function getCuisine() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/cuisine/duty').then(function (response) {
                  _this3.cuisine = response.data.cuisine;
                  _this3.rations = response.data.dishes;
                })["catch"](function (error) {
                  _this3.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    openDialog: function openDialog(order) {
      if (!order.is_active) return;
      this.order = order;
      console.log(order);
      this.dialog = true;
    },
    done: function done(order) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/' + order.id + '/done').then(function (res) {
        _this4.getSelects();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dietology/Stat.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Dietology/Stat.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stat.vue?vue&type=template&id=ed2d80c4& */ "./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4&");
/* harmony import */ var _Stat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stat.vue?vue&type=script&lang=js& */ "./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Stat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dietology/Stat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kitchen/Grid.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Kitchen/Grid.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Grid_vue_vue_type_template_id_4841325c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue?vue&type=template&id=4841325c& */ "./resources/js/components/Kitchen/Grid.vue?vue&type=template&id=4841325c&");
/* harmony import */ var _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/Grid.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grid_vue_vue_type_template_id_4841325c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Grid_vue_vue_type_template_id_4841325c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/Grid.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Stat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kitchen/Grid.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Grid.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Grid.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Stat.vue?vue&type=template&id=ed2d80c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4&");


/***/ }),

/***/ "./resources/js/components/Kitchen/Grid.vue?vue&type=template&id=4841325c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Grid.vue?vue&type=template&id=4841325c& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_4841325c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_4841325c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_4841325c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grid.vue?vue&type=template&id=4841325c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Grid.vue?vue&type=template&id=4841325c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        "v-chip",
        {
          staticClass: "mr-2",
          attrs: { color: "teal", "text-color": "white", label: "" }
        },
        [_vm._v("\n        Итого: " + _vm._s(_vm.stat.total) + "\n    ")]
      ),
      _vm._v(" "),
      _c("v-chip", { staticClass: "mr-2", attrs: { label: "" } }, [
        _vm._v("\n        XS: " + _vm._s(_vm.stat.xs) + "\n    ")
      ]),
      _vm._v(" "),
      _c("v-chip", { staticClass: "mr-2", attrs: { label: "" } }, [
        _vm._v("\n        S: " + _vm._s(_vm.stat.s) + "\n    ")
      ]),
      _vm._v(" "),
      _c("v-chip", { staticClass: "mr-2", attrs: { label: "" } }, [
        _vm._v("\n        M: " + _vm._s(_vm.stat.m) + "\n    ")
      ]),
      _vm._v(" "),
      _c("v-chip", { staticClass: "mr-2", attrs: { label: "" } }, [
        _vm._v("\n        L: " + _vm._s(_vm.stat.l) + "\n    ")
      ]),
      _vm._v(" "),
      _c("v-chip", { attrs: { label: "" } }, [
        _vm._v("\n        XL: " + _vm._s(_vm.stat.xl) + "\n    ")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Grid.vue?vue&type=template&id=4841325c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Grid.vue?vue&type=template&id=4841325c& ***!
  \************************************************************************************************************************************************************************************************************************/
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
            { staticClass: "d-flex justify-space-between" },
            [
              _c("stat", { attrs: { stat: _vm.stat } }),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: { type: "button", href: "/api/select/export/stickers" }
                },
                [
                  _c("v-btn", { attrs: { color: "primary" } }, [
                    _vm._v(
                      "\n                        Excel\n                    "
                    )
                  ])
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
        [_c("v-col", [_c("h2", [_vm._v(_vm._s(_vm.cuisine.name))])])],
        1
      ),
      _vm._v(" "),
      _vm.loading
        ? _c(
            "v-row",
            { staticClass: "d-flex justify-center" },
            [
              _c("v-progress-circular", {
                attrs: {
                  size: 70,
                  width: 7,
                  color: "primary",
                  indeterminate: ""
                }
              })
            ],
            1
          )
        : _c(
            "v-row",
            [
              _c(
                "v-expansion-panels",
                {
                  attrs: { multiple: "" },
                  model: {
                    value: _vm.panel,
                    callback: function($$v) {
                      _vm.panel = $$v
                    },
                    expression: "panel"
                  }
                },
                _vm._l(_vm.orders, function(order, index) {
                  return _c(
                    "v-expansion-panel",
                    { key: index },
                    [
                      _c("v-expansion-panel-header", [
                        _c("p", [
                          _c(
                            "span",
                            { staticClass: "text-sm-body-2 font-weight-bold" },
                            [
                              _vm._v(
                                _vm._s(order[0].order_name) +
                                  " - " +
                                  _vm._s(order[0].order_tag)
                              )
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        [
                          _c(
                            "v-row",
                            _vm._l(order, function(o) {
                              return _c(
                                "v-col",
                                { key: o.name, attrs: { cols: "12", md: "3" } },
                                [
                                  _c(
                                    "v-card",
                                    {
                                      staticClass: "mb-3",
                                      staticStyle: { cursor: "pointer" },
                                      attrs: {
                                        color: o.done ? "teal" : o.color,
                                        dark: o.done === 1
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.openDialog(o)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-card-text", [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "d-flex justify-space-between mb-2"
                                          },
                                          [
                                            o.is_active
                                              ? _c(
                                                  "h2",
                                                  { staticClass: "mb-2" },
                                                  [_vm._v(_vm._s(o.code))]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "text-sm-body-2 mb-0"
                                              },
                                              [_vm._v(_vm._s(o.ration.name))]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "mb-2" }, [
                                          _vm._v(_vm._s(o.dish_name))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass: "font-weight-bold mb-0"
                                          },
                                          [_vm._v(_vm._s(o.weight) + "гр")]
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  o.is_active
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "teal",
                                            dark: "",
                                            block: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.done(o)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    сделано\n                                    "
                                          ),
                                          o.done
                                            ? _c(
                                                "v-icon",
                                                { attrs: { right: "" } },
                                                [_vm._v("mdi-check")]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            }),
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "space-around" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "auto" } },
            [
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "720" },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { color: "primary", dark: "" } },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.order.order_name) +
                              "\n                            "
                          ),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "", dark: "" },
                              on: {
                                click: function($event) {
                                  _vm.dialog = false
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-close")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-title", [_vm._v(_vm._s(_vm.order.dish_name))]),
                      _vm._v(" "),
                      _c("v-card-subtitle", [
                        _vm._v(_vm._s(_vm.order.ration.name))
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                _vm._l(_vm.order.ingredients, function(
                                  i,
                                  index
                                ) {
                                  return _c(
                                    "v-sheet",
                                    { key: i.name, staticClass: "mb-2" },
                                    [
                                      _c("strong", [
                                        _vm._v(_vm._s(index + 1) + ".")
                                      ]),
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(i.name) +
                                          "\n                                    "
                                      )
                                    ]
                                  )
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c("v-col", [
                                _vm.order.weight
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "mb-3 rounded pa-2",
                                        staticStyle: {
                                          border: "1px solid grey"
                                        }
                                      },
                                      [
                                        _c("h4", [_vm._v("Вес:")]),
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.order.weight) +
                                            " грамм\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.order.description
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "mb-3 rounded pa-2",
                                        staticStyle: {
                                          border: "1px solid grey"
                                        }
                                      },
                                      [
                                        _c("h4", [_vm._v("Описание:")]),
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(_vm.order.description) +
                                            "\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.order.wishlist.length > 0
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "mb-3 rounded pa-2",
                                        staticStyle: {
                                          border: "1px solid darkseagreen"
                                        }
                                      },
                                      [
                                        _c("h4", [_vm._v("Хотелки:")]),
                                        _vm._v(" "),
                                        _vm._l(_vm.order.wishlist, function(
                                          w,
                                          index
                                        ) {
                                          return _c(
                                            "p",
                                            { key: w.id, staticClass: "mb-0" },
                                            [
                                              _c("strong", [
                                                _vm._v(_vm._s(index + 1) + ".")
                                              ]),
                                              _vm._v(
                                                " " +
                                                  _vm._s(w.wish) +
                                                  "\n                                        "
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.order.tableware
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "mb-3 rounded pa-2",
                                        staticStyle: {
                                          border: "1px solid dodgerblue"
                                        }
                                      },
                                      [
                                        _c("h4", [_vm._v("Посуда:")]),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "mb-1" }, [
                                          _vm._v(
                                            _vm._s(_vm.order.tableware.name)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("img", {
                                          attrs: {
                                            src:
                                              /storage/ +
                                              _vm.order.tableware.img,
                                            width: "100"
                                          }
                                        })
                                      ]
                                    )
                                  : _vm._e()
                              ])
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