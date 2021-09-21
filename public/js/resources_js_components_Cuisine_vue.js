"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Cuisine_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cuisine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cuisine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Cuisine',
  data: function data() {
    return {
      cuisines: [],
      cuisine: {},
      dish: {},
      btn_loading: false,
      loading: false,
      disabled: false,
      dialog: false,
      name: '',
      errors: []
    };
  },
  mounted: function mounted() {
    this.getCuisines();
  },
  methods: {
    getCuisines: function getCuisines() {
      var _this = this;

      axios.get('/api/cuisines').then(function (response) {
        _this.cuisines = response.data.data;

        if (Object.keys(_this.cuisine).length === 0) {
          _this.cuisine = _this.cuisines[0];
        } else {
          _this.cuisine = _this.cuisines.find(function (x) {
            return x.id === _this.cuisine.id;
          });
        }

        _this.dish = _this.cuisine.dishes[0];
      })["catch"](function (error) {
        console.log(error);
      });
    },
    fetchCuisines: function fetchCuisines() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                /*this.iiko_loading = true
                await axios
                    .get('/api/webhook')
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => (this.iiko_loading = false))*/
                _this2.btn_loading = true;
                _this2.disabled = true;
                _context.next = 4;
                return axios.get('/api/iiko/cuisines').then(function (response) {
                  console.log(response);

                  _this2.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.data.status ? 'green' : 'error',
                    'type': response.data.status ? 'success' : 'error'
                  });

                  _this2.getCuisines();
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  _this2.btn_loading = false;
                  _this2.disabled = false;
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fetchDishes: function fetchDishes() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.btn_loading = true;
                _this3.disabled = true;
                _context2.next = 4;
                return axios.get('/api/iiko/dishes').then(function (response) {
                  _this3.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.data.status ? 'green' : 'error',
                    'type': response.data.status ? 'success' : 'error'
                  });
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  _this3.btn_loading = false;
                  _this3.disabled = false;
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchIngredients: function fetchIngredients(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.disabled = true;
                _this4.loading = true;
                _context3.next = 4;
                return axios.post('/api/iiko/ingredients', {
                  id: id
                }).then(function (response) {
                  _this4.getCuisines();

                  _this4.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.status ? 'green' : 'error',
                    'type': response.status ? 'success' : 'error'
                  });
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  _this4.disabled = false;
                  _this4.loading = false;
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    showDetails: function showDetails(cuisine) {
      if (this.disabled) return;
      this.cuisine = cuisine;
      this.dish = cuisine.dishes[0];
    },
    setCuisine: function setCuisine(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post('/api/cuisine/set', {
                  id: id
                }).then(function (response) {
                  _this5.cuisine = response.data;

                  _this5.getCuisines();

                  _this5.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.name,
                    'color': 'green',
                    'type': 'success'
                  });
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    setDish: function setDish(dish) {
      this.dish = dish;
    },
    close: function close() {
      this.dialog = false;
      this.name = '';
    },
    editDish: function editDish(dish) {
      this.dish = dish;
      this.dialog = true;
      this.name = this.dish.name;
    },
    saveDish: function saveDish() {
      var _this6 = this;

      axios.post('/api/dish/update', {
        id: this.dish.id,
        name: this.name
      }).then(function (response) {
        _this6.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': 'green',
          'type': 'success'
        });

        if (response.data.status) {
          _this6.dialog = false;
          _this6.name = '';

          _this6.getCuisines();
        } else {
          _this6.errors = response.data.errors;
        }
      })["catch"](function (error) {
        console.log(error);
        _this6.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Cuisine.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Cuisine.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cuisine_vue_vue_type_template_id_00db56ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuisine.vue?vue&type=template&id=00db56ae& */ "./resources/js/components/Cuisine.vue?vue&type=template&id=00db56ae&");
/* harmony import */ var _Cuisine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuisine.vue?vue&type=script&lang=js& */ "./resources/js/components/Cuisine.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Cuisine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Cuisine_vue_vue_type_template_id_00db56ae___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cuisine_vue_vue_type_template_id_00db56ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cuisine.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cuisine.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Cuisine.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cuisine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cuisine.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Cuisine.vue?vue&type=template&id=00db56ae&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Cuisine.vue?vue&type=template&id=00db56ae& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_template_id_00db56ae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_template_id_00db56ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_template_id_00db56ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cuisine.vue?vue&type=template&id=00db56ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cuisine.vue?vue&type=template&id=00db56ae&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cuisine.vue?vue&type=template&id=00db56ae&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Cuisine.vue?vue&type=template&id=00db56ae& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                loading: _vm.btn_loading,
                disabled: _vm.disabled,
                color: "primary"
              },
              on: { click: _vm.fetchCuisines }
            },
            [_vm._v("\n            Получить Кухни\n        ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-3",
              attrs: {
                loading: _vm.btn_loading,
                disabled: _vm.disabled,
                color: "primary"
              },
              on: { click: _vm.fetchDishes }
            },
            [_vm._v("\n            Получить Блюда\n        ")]
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
            { attrs: { sm: "12", md: "2" } },
            [
              _c("v-simple-table", {
                attrs: { dense: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                                #\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                                Name\n                            "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.cuisines, function(cuisine, index) {
                            return _c(
                              "tr",
                              {
                                key: cuisine.id,
                                class: cuisine.active
                                  ? "light-green lighten-3"
                                  : "",
                                on: {
                                  click: function($event) {
                                    return _vm.showDetails(cuisine)
                                  }
                                }
                              },
                              [
                                _c("td", [_vm._v(_vm._s(index + 1))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(cuisine.name))])
                              ]
                            )
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { sm: "12", md: "10", lg: "6" } },
            [
              _c(
                "v-card",
                {
                  attrs: {
                    color: _vm.cuisine.active
                      ? "light-green lighten-3"
                      : "light-blue lighten-3",
                    disabled: _vm.disabled,
                    loading: _vm.disabled
                  }
                },
                [
                  _c("v-card-title", [_vm._v(_vm._s(_vm.cuisine.name))]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              return _vm.fetchIngredients(_vm.cuisine.id)
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { dark: "", left: "" } }, [
                            _vm._v(
                              "\n                            mdi-silverware\n                        "
                            )
                          ]),
                          _vm._v(
                            "\n                        Получить Ингредиенты\n                    "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              return _vm.setCuisine(_vm.cuisine.id)
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { dark: "", left: "" } }, [
                            _vm._v(
                              "\n                            mdi-checkbox-marked-circle\n                        "
                            )
                          ]),
                          _vm._v(
                            "\n                        Назначить\n                    "
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
              _c(
                "v-card",
                {
                  staticClass: "mt-4",
                  attrs: { disabled: _vm.disabled, loading: _vm.loading }
                },
                [
                  _c(
                    "v-list",
                    _vm._l(_vm.cuisine.dishes, function(dish, index) {
                      return _c(
                        "v-list-item",
                        {
                          key: dish.id,
                          on: {
                            click: function($event) {
                              return _vm.setDish(dish)
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(index + 1) + ". " + _vm._s(dish.name)
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [
                                _c(
                                  "span",
                                  { staticClass: "font-weight-bold" },
                                  [_vm._v("[" + _vm._s(dish.ration) + "]")]
                                ),
                                _vm._v(" " + _vm._s(dish.i_name))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.editDish(dish)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { color: "grey lighten-1" } },
                                    [_vm._v("mdi-pencil")]
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
          _c(
            "v-col",
            { attrs: { sm: "12", lg: "4" } },
            [
              _c(
                "v-card",
                { attrs: { disabled: _vm.disabled, loading: _vm.loading } },
                [_c("v-card-title", [_vm._v(_vm._s(_vm.dish.name))])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "mt-4",
                  attrs: { disabled: _vm.disabled, loading: _vm.loading }
                },
                [
                  _c(
                    "v-list",
                    _vm._l(_vm.dish.ingredients, function(ing, index) {
                      return _c(
                        "v-list-item",
                        { key: ing.id },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(index + 1) + ". " + _vm._s(ing.name)
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
              attrs: { persistent: "", "max-width": "600px" },
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
                  _c("v-card-title", [
                    _c("span", { staticClass: "text-h5" }, [
                      _vm._v("Редактировать")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Название",
                                      required: "",
                                      clearable: "",
                                      "error-messages": _vm.errors.name
                                    },
                                    model: {
                                      value: _vm.name,
                                      callback: function($$v) {
                                        _vm.name = $$v
                                      },
                                      expression: "name"
                                    }
                                  })
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
                  ),
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
                        [
                          _vm._v(
                            "\n                        Закрыть\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.saveDish }
                        },
                        [
                          _vm._v(
                            "\n                        Сохранить\n                    "
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