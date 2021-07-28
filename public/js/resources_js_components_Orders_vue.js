(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Orders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Client',
  data: function data() {
    return {
      orders: [],
      lite: [],
      select: [],
      detox: 0,
      go: 0,
      itemsPerPage: 200,
      search: '',
      headers: [{
        text: '#',
        value: 'index'
      }, {
        text: 'Имя',
        value: 'name'
      }, {
        text: 'Тэг',
        value: 'tag'
      }, {
        text: 'Время',
        value: 'time'
      }, {
        text: 'Yandex',
        value: 'yaddress'
      }, {
        text: 'Geo',
        value: 'geo'
      }, {
        text: 'Int',
        value: 'int'
      }],
      amo_loading: false,
      loading: true
    };
  },
  mounted: function mounted() {
    this.getLeads();
  },
  methods: {
    getLeads: function getLeads() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return axios.get('/api/orders').then(function (response) {
                  _this.orders = response.data.orders;
                  _this.lite = response.data.lite;
                  _this.select = response.data.select;
                  _this.detox = response.data.detox;
                  _this.go = response.data.go;
                })["catch"](function (error) {
                  _this.loading = false;

                  _this.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this.loading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchLeads: function fetchLeads() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.amo_loading = true;
                _context2.next = 3;
                return axios.get('/api/amo/leads').then(function () {
                  _this2.getLeads();
                })["catch"](function (error) {
                  _this2.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this2.amo_loading = false;
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    showDetails: function showDetails(index) {
      console.log(index);
      this.dialog = true;
      this.client = index;
    },
    geocode: function geocode() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.amo_loading = true;
                _context3.next = 3;
                return axios.get('/api/map/geocode').then(function (response) {
                  _this3.getLeads();

                  _this3.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.message,
                    'color': response.status ? 'green' : 'error',
                    'type': response.status ? 'success' : 'error'
                  });
                })["catch"](function (error) {
                  _this3.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this3.amo_loading = false;
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    setInterval: function setInterval() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.amo_loading = true;
                _context4.next = 3;
                return axios.get('/api/map/interval').then(function (response) {
                  _this4.getLeads();

                  _this4.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.message,
                    'color': response.status ? 'green' : 'error',
                    'type': response.status ? 'success' : 'error'
                  });
                })["catch"](function (error) {
                  _this4.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this4.amo_loading = false;
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Orders.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Orders.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=aebdd2e0& */ "./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/components/Orders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Orders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Orders.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Orders.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=template&id=aebdd2e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            "v-btn",
            {
              staticClass: "ma-3",
              attrs: {
                loading: _vm.amo_loading,
                disabled: _vm.amo_loading,
                color: "primary"
              },
              on: { click: _vm.fetchLeads }
            },
            [_vm._v("\n            Получить данные\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-3",
              attrs: {
                loading: _vm.amo_loading,
                disabled: _vm.amo_loading,
                color: "primary"
              },
              on: { click: _vm.geocode }
            },
            [_vm._v("\n            Геокодировать\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-3",
              attrs: {
                loading: _vm.amo_loading,
                disabled: _vm.amo_loading,
                color: "primary"
              },
              on: { click: _vm.setInterval }
            },
            [_vm._v("\n            Интервал\n        ")]
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
            { attrs: { cols: "10" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    [
                      _c("v-text-field", {
                        attrs: {
                          "append-icon": "mdi-magnify",
                          label: "Поиск",
                          "single-line": "",
                          "hide-details": ""
                        },
                        model: {
                          value: _vm.search,
                          callback: function($$v) {
                            _vm.search = $$v
                          },
                          expression: "search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      loading: _vm.loading,
                      "loading-text": "Loading... Please wait",
                      headers: _vm.headers,
                      items: _vm.orders,
                      "items-per-page": _vm.itemsPerPage,
                      "item-key": "id",
                      search: _vm.search,
                      "hide-default-footer": ""
                    },
                    on: { "click:row": _vm.showDetails },
                    scopedSlots: _vm._u([
                      {
                        key: "item.index",
                        fn: function(ref) {
                          var index = ref.index
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(index + 1) +
                                "\n                    "
                            )
                          ]
                        }
                      },
                      {
                        key: "item.time",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "span",
                              { class: item.time_old ? "green--text" : "" },
                              [_vm._v(_vm._s(item.time))]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "red--text caption" }, [
                              _vm._v(_vm._s(item.time_old))
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.yaddress",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "span",
                              { class: item.yaddress_old ? "green--text" : "" },
                              [_vm._v(_vm._s(item.yaddress))]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "red--text caption" }, [
                              _vm._v(_vm._s(item.yaddress_old))
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.geo",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  color: item.lat ? "green" : "red",
                                  label: "",
                                  "x-small": "",
                                  "text-color": "white"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            geo\n                        "
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "item.int",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  color: item.interval > 0 ? "green" : "red",
                                  label: "",
                                  "x-small": "",
                                  "text-color": "white"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            int\n                        "
                                )
                              ]
                            )
                          ]
                        }
                      }
                    ])
                  })
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
                { staticClass: "mb-5", attrs: { color: "#385F73", dark: "" } },
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    Итого: " +
                        _vm._s(_vm.orders.length) +
                        "\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mb-5" },
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    Lite: " +
                        _vm._s(_vm.lite.total) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c(
                      "div",
                      [
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            XS: " +
                                _vm._s(_vm.lite.xs) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            S: " +
                                _vm._s(_vm.lite.s) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            M: " +
                                _vm._s(_vm.lite.m) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            L: " +
                                _vm._s(_vm.lite.l) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            XL: " +
                                _vm._s(_vm.lite.xl) +
                                "\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mb-5" },
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    Select: " +
                        _vm._s(_vm.select.total) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c(
                      "div",
                      [
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            XS: " +
                                _vm._s(_vm.select.xs) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            S: " +
                                _vm._s(_vm.select.s) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            M: " +
                                _vm._s(_vm.select.m) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            L: " +
                                _vm._s(_vm.select.l) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            XL: " +
                                _vm._s(_vm.select.xl) +
                                "\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mb-5" },
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    Detox: " +
                        _vm._s(_vm.detox) +
                        "\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    GO: " +
                        _vm._s(_vm.go) +
                        "\n                "
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);