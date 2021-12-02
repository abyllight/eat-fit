"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Kitchen_Select_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Select",
  data: function data() {
    return {
      orders: [],
      order: {},
      ration: {},
      cuisine: {},
      categories: [],
      ingredients: [],
      dishes: [],
      rations: [],
      dialog: false,
      yesterday: []
    };
  },
  created: function created() {
    this.getOrders();
    this.getCuisine();
  },
  methods: {
    getOrders: function getOrders() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/orders/select-orders').then(function (response) {
                  _this.orders = response.data.data;
                })["catch"](function (error) {
                  _this.loading = false;

                  _this.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCuisine: function getCuisine() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/cuisine/duty').then(function (response) {
                  _this2.cuisine = response.data;
                })["catch"](function (error) {
                  _this2.loading = false;

                  _this2.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    showDetails: function showDetails(order) {
      this.order = order;
    },
    close: function close() {
      this.dialog = false;
    },
    openSelect: function openSelect(ration) {
      this.ration = ration;
      this.yesterday = this.order.yesterday.find(function (item) {
        return item.time === ration.position;
      });
      this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Kitchen/Select.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Kitchen/Select.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=2117acdc& */ "./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc&");
/* harmony import */ var _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/Select.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Select.vue?vue&type=template&id=2117acdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc& ***!
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
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c("v-row", [_c("h2", [_vm._v(_vm._s(_vm.cuisine.name))])]),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { sm: "4", md: "2", lg: "3" } },
                [
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    [
                      _c("v-subheader", [_vm._v("Select")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-group",
                        { attrs: { color: "primary" } },
                        _vm._l(_vm.orders, function(order, i) {
                          return _c(
                            "v-list-item",
                            { key: i, on: { click: function($event) {} } },
                            [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", [
                                    _vm._v(
                                      _vm._s(i + 1) +
                                        ". " +
                                        _vm._s(order.size) +
                                        " - " +
                                        _vm._s(order.name)
                                    )
                                  ])
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
                  )
                ],
                1
              ),
              _vm._v(" "),
              Object.keys(_vm.order).length > 0
                ? _c(
                    "v-col",
                    { attrs: { sm: "8", md: "10", lg: "9" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-card",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.openSelect(_vm.rations[0])
                                    }
                                  }
                                },
                                [
                                  _c("v-card-title", [
                                    _vm._v(_vm._s(_vm.rations[0].name))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-card-subtitle", [
                                    _vm._v(_vm._s(_vm.order.select))
                                  ])
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
                                "v-card",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.openSelect(_vm.rations[1])
                                    }
                                  }
                                },
                                [
                                  _c("v-card-title", [
                                    _vm._v(_vm._s(_vm.rations[1].name))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-card-subtitle", [
                                    _vm._v(_vm._s(_vm.order.select))
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
                : _vm._e()
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
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition"
              },
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
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: { click: _vm.close }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [
                        _vm._v(
                          _vm._s(_vm.order.name) +
                            " " +
                            _vm._s(_vm.order.tag) +
                            " - " +
                            _vm._s(_vm.ration.name)
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-toolbar-items",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { dark: "", text: "" },
                              on: { click: function($event) {} }
                            },
                            [
                              _vm._v(
                                "\n                            Сохранить\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        { attrs: { fluid: "" } },
                        [
                          _c(
                            "v-row",
                            [
                              _vm.yesterday
                                ? _c(
                                    "v-col",
                                    { attrs: { sm: "12", lg: "3" } },
                                    [
                                      _c("h4", [_vm._v("Вчера")]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.yesterday.cuisine))
                                      ]),
                                      _vm._v(" "),
                                      _vm.yesterday
                                        ? _c(
                                            "v-list",
                                            { attrs: { dense: "" } },
                                            [
                                              _c("v-subheader", [
                                                _vm._v(
                                                  _vm._s(_vm.yesterday.dish)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _vm._l(
                                                _vm.yesterday.ingredients,
                                                function(ing, i) {
                                                  return _c(
                                                    "v-list-item",
                                                    { key: i },
                                                    [
                                                      _c(
                                                        "v-list-item-content",
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            [
                                                              _vm._v(
                                                                _vm._s(i + 1) +
                                                                  ". " +
                                                                  _vm._s(
                                                                    ing.name
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  )
                                                }
                                              )
                                            ],
                                            2
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    sm: "12",
                                    lg: _vm.yesterday ? 9 : 12
                                  }
                                },
                                [
                                  _c("h4", [_vm._v("Сегодня")]),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(_vm.cuisine.name))])
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