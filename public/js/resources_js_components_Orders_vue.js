"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Orders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      week: '',
      is_weekend: false,
      itemsPerPage: 300,
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
        text: 'Курьер',
        value: 'courier_name'
      }, {
        text: 'Geo',
        value: 'geo'
      }, {
        text: 'Int',
        value: 'int'
      }],
      amo_loading: false,
      loading: true,
      dialog: false,
      ingredients: [],
      blacklist: [],
      order: {},
      duty: {},
      t: []
    };
  },
  mounted: function mounted() {
    this.getWeek();
    this.getLeads();
    this.getIngredients();
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
      this.order = index;
      this.blacklist = index.blacklist.map(function (a) {
        return a.id;
      });
      this.dialog = true;
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
    },
    getWeek: function getWeek() {
      var _this5 = this;

      axios.get('/api/week/get').then(function (response) {
        _this5.is_weekend = response.data.is_weekend;
        _this5.week = _this5.is_weekend ? 'Выходные' : 'Будни';
        _this5.duty = response.data.duty;
      })["catch"](function (error) {
        _this5.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': error.message,
          'color': 'error',
          'type': 'error'
        });
      });
    },
    setWeek: function setWeek() {
      var _this6 = this;

      axios.post('/api/week/set').then(function () {
        _this6.getWeek();

        _this6.getLeads();
      })["catch"](function (error) {
        _this6.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': error.message,
          'color': 'error',
          'type': 'error'
        });
      });
    },
    getIngredients: function getIngredients() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.get('/api/ingredients').then(function (response) {
                  _this7.ingredients = response.data.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    close: function close() {
      this.order = {};
      this.blacklist = [];
      this.dialog = false;
    },
    save: function save() {
      var _this8 = this;

      axios.post('/api/blacklist', {
        id: this.order.id,
        blacklist: this.blacklist
      }).then(function (response) {
        _this8.close();

        _this8.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': 'green',
          'type': 'success'
        });

        _this8.getLeads();
      })["catch"](function (error) {
        console.log(error);
        _this8.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Orders.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Orders.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Orders_vue_vue_type_template_id_aebdd2e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=aebdd2e0& */ "./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/components/Orders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Orders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Orders.vue?vue&type=template&id=aebdd2e0& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
          ),
          _vm._v(" "),
          _c("v-switch", {
            staticClass: "ma-3",
            attrs: { color: "primary", label: _vm.week },
            on: { change: _vm.setWeek },
            model: {
              value: _vm.is_weekend,
              callback: function($$v) {
                _vm.is_weekend = $$v
              },
              expression: "is_weekend"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12", lg: "9" } },
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
                        key: "item.tag",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("span", { class: item.diet_color }, [
                              _vm._v(_vm._s(item.tag))
                            ])
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
                                  "\n                            " +
                                    _vm._s(item.interval) +
                                    "\n                        "
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
                      _c("v-toolbar-title", [_vm._v("Анкета")]),
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
                              on: { click: _vm.save }
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
                  _c("v-card-title", [
                    _c("span", { staticClass: "text-h5" }, [
                      _vm._v(
                        " " +
                          _vm._s(_vm.order.name) +
                          " " +
                          _vm._s(_vm.order.tag)
                      )
                    ])
                  ]),
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
                              _c(
                                "v-col",
                                { attrs: { sm: "12", lg: "6" } },
                                [
                                  _vm.order.diet
                                    ? _c(
                                        "v-card",
                                        { attrs: { color: "lime lighten-4" } },
                                        [
                                          _c("v-card-text", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.order.diet) +
                                                "\n                                    "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                [
                                  _vm.order.diet_old
                                    ? _c(
                                        "v-card",
                                        {
                                          staticClass: "mt-4",
                                          attrs: { color: "red lighten-4" }
                                        },
                                        [
                                          _c("v-card-text", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.order.diet_old) +
                                                "\n                                    "
                                            )
                                          ])
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
                            { staticClass: "mb-4" },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("h3", { staticClass: "mb-4" }, [
                                    _vm._v("Черный список")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.ingredients,
                                      "item-text": "name",
                                      "item-value": "id",
                                      clearable: "",
                                      outlined: "",
                                      "small-chips": "",
                                      label: "Ингредиенты",
                                      multiple: ""
                                    },
                                    model: {
                                      value: _vm.blacklist,
                                      callback: function($$v) {
                                        _vm.blacklist = $$v
                                      },
                                      expression: "blacklist"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { dark: "" },
                                      on: { click: _vm.save }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Сохранить\n                                "
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
                          _c("v-divider", { staticClass: "my-6" }),
                          _vm._v(" "),
                          _c("h2", { staticClass: "mb-3" }, [
                            _vm._v(_vm._s(_vm.duty.name))
                          ]),
                          _vm._v(" "),
                          Object.keys(_vm.duty).length > 0
                            ? _c(
                                "v-row",
                                { staticClass: "py-3" },
                                [
                                  _c(
                                    "v-expansion-panels",
                                    [
                                      _c(
                                        "v-expansion-panel",
                                        [
                                          _c("v-expansion-panel-header", [
                                            _vm._v(
                                              "\n                                        Завтрак 1\n                                    "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-expansion-panel-content",
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c("v-col"),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    [
                                                      _c(
                                                        "v-list",
                                                        {
                                                          attrs: { dense: "" }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-item-group",
                                                            {
                                                              attrs: {
                                                                multiple: ""
                                                              },
                                                              model: {
                                                                value: _vm.t,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.t = $$v
                                                                },
                                                                expression: "t"
                                                              }
                                                            },
                                                            _vm._l(
                                                              _vm.duty.dishes[0]
                                                                .ingredients,
                                                              function(
                                                                ing,
                                                                index
                                                              ) {
                                                                return _c(
                                                                  "v-list-item",
                                                                  {
                                                                    key: ing.id,
                                                                    class: _vm.blacklist.includes(
                                                                      ing.id
                                                                    )
                                                                      ? "red lighten-3"
                                                                      : "",
                                                                    attrs: {
                                                                      dense: ""
                                                                    },
                                                                    scopedSlots: _vm._u(
                                                                      [
                                                                        {
                                                                          key:
                                                                            "default",
                                                                          fn: function(
                                                                            ref
                                                                          ) {
                                                                            var active =
                                                                              ref.active
                                                                            return [
                                                                              _c(
                                                                                "v-list-item-action",
                                                                                [
                                                                                  _c(
                                                                                    "v-checkbox",
                                                                                    {
                                                                                      attrs: {
                                                                                        "input-value": active
                                                                                      }
                                                                                    }
                                                                                  )
                                                                                ],
                                                                                1
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "v-list-item-title",
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      index +
                                                                                        1
                                                                                    ) +
                                                                                      ". " +
                                                                                      _vm._s(
                                                                                        ing.name
                                                                                      )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          }
                                                                        }
                                                                      ],
                                                                      null,
                                                                      true
                                                                    )
                                                                  }
                                                                )
                                                              }
                                                            ),
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("v-col")
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