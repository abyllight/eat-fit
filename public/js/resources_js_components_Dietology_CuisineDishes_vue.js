"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dietology_CuisineDishes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CuisineDishes',
  props: ['id'],
  data: function data() {
    return {
      left_rations: [],
      all_rations: [],
      cuisine: {},
      dish: {
        name: '',
        cuisine_id: 0,
        ration_id: 0,
        code: '',
        department_id: 0,
        ingredients: [],
        is_custom: false
      },
      dishes: [],
      loading: false,
      disabled: false,
      dialog: false,
      dialogSm: false,
      errors: [],
      targetDish: {}
    };
  },
  mounted: function mounted() {
    this.getCuisine();
    this.getAllRations();
  },
  methods: {
    getCuisine: function getCuisine() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/cuisines/' + _this.id).then(function (response) {
                  _this.cuisine = response.data.data;
                  _this.dishes = _this.cuisine.dishes;
                  _this.dish = _this.dishes[0];
                  _this.left_rations = _this.cuisine.left_rations;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getAllRations: function getAllRations() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/rations').then(function (response) {
                  _this2.all_rations = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    fetchDishesByCuisineId: function fetchDishesByCuisineId(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.disabled = true;
                _this3.loading = true;
                _context3.next = 4;
                return axios.get('/api/dishes/iiko/cuisine/' + id).then(function (response) {
                  _this3.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.data.status ? 'green' : 'error',
                    'type': response.data.status ? 'success' : 'error'
                  });

                  _this3.getCuisine();
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  _this3.disabled = false;
                  _this3.loading = false;
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    fetchIngredientsByCuisine: function fetchIngredientsByCuisine() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.disabled = true;
                _this4.loading = true;
                _context4.next = 4;
                return axios.get('/api/ingredients/iiko/' + _this4.id).then(function (response) {
                  _this4.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.status ? 'green' : 'error',
                    'type': response.status ? 'success' : 'error'
                  });

                  _this4.getCuisine();
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  _this4.disabled = false;
                  _this4.loading = false;
                });

              case 4:
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
    editDish: function editDish(id) {
      this.$router.push({
        name: 'cuisine_dishes_edit',
        params: {
          id: id
        }
      });
    },
    addDish: function addDish(id) {
      this.$router.push({
        name: 'cuisine_dishes_create',
        params: {
          id: this.cuisine.id,
          r_id: id
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dietology/CuisineDishes.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Dietology/CuisineDishes.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CuisineDishes_vue_vue_type_template_id_323b0652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CuisineDishes.vue?vue&type=template&id=323b0652& */ "./resources/js/components/Dietology/CuisineDishes.vue?vue&type=template&id=323b0652&");
/* harmony import */ var _CuisineDishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CuisineDishes.vue?vue&type=script&lang=js& */ "./resources/js/components/Dietology/CuisineDishes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CuisineDishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CuisineDishes_vue_vue_type_template_id_323b0652___WEBPACK_IMPORTED_MODULE_0__.render,
  _CuisineDishes_vue_vue_type_template_id_323b0652___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dietology/CuisineDishes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dietology/CuisineDishes.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Dietology/CuisineDishes.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CuisineDishes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dietology/CuisineDishes.vue?vue&type=template&id=323b0652&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Dietology/CuisineDishes.vue?vue&type=template&id=323b0652& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishes_vue_vue_type_template_id_323b0652___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishes_vue_vue_type_template_id_323b0652___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishes_vue_vue_type_template_id_323b0652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CuisineDishes.vue?vue&type=template&id=323b0652& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishes.vue?vue&type=template&id=323b0652&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishes.vue?vue&type=template&id=323b0652&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishes.vue?vue&type=template&id=323b0652& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                  on: {
                    click: function($event) {
                      return _vm.$router.back()
                    }
                  }
                },
                [_vm._v("\n                Назад к кухням мира\n            ")]
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
            { attrs: { sm: "12", md: "6" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "blue-grey lighten-4",
                  attrs: { loading: _vm.loading, disabled: _vm.disabled }
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
                              return _vm.fetchDishesByCuisineId(_vm.cuisine.id)
                            }
                          }
                        },
                        [
                          _c("v-icon", { attrs: { dark: "", left: "" } }, [
                            _vm._v(
                              "\n                            mdi-refresh\n                        "
                            )
                          ]),
                          _vm._v(
                            "\n                        Получить блюда\n                    "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: { click: _vm.fetchIngredientsByCuisine }
                        },
                        [
                          _c("v-icon", { attrs: { dark: "", left: "" } }, [
                            _vm._v(
                              "\n                            mdi-refresh\n                        "
                            )
                          ]),
                          _vm._v(
                            "\n                        Получить ингредиенты\n                    "
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
              _vm.dishes.length > 0
                ? _c(
                    "v-card",
                    { staticClass: "mt-4", attrs: { disabled: _vm.disabled } },
                    [
                      _c(
                        "v-list",
                        _vm._l(_vm.dishes, function(dish, index) {
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
                                      _vm._s(index + 1) +
                                        ". " +
                                        _vm._s(dish.name)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  dish.ration
                                    ? _c("v-list-item-subtitle", [
                                        _c(
                                          "span",
                                          { staticClass: "font-weight-bold" },
                                          [
                                            _vm._v(
                                              "[" +
                                                _vm._s(dish.ration.name) +
                                                "] " +
                                                _vm._s(dish.i_name)
                                            )
                                          ]
                                        )
                                      ])
                                    : _vm._e()
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
                                          return _vm.editDish(dish.id)
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
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.left_rations, function(item) {
                return _c(
                  "v-card",
                  {
                    key: item.id,
                    staticClass: "mt-4",
                    attrs: { disabled: _vm.disabled }
                  },
                  [
                    _c("v-card-title", [_vm._v(_vm._s(item.name))]),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: { text: "", rounded: "", outlined: "" },
                            on: {
                              click: function($event) {
                                return _vm.addDish(item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        Добавить\n                    "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.dish
            ? _c(
                "v-col",
                { attrs: { sm: "12", md: "6" } },
                [
                  _c(
                    "v-card",
                    { attrs: { disabled: _vm.disabled, loading: _vm.loading } },
                    [_c("v-card-title", [_vm._v(_vm._s(_vm.dish.name))])],
                    1
                  ),
                  _vm._v(" "),
                  _vm.dish.ingredients.length > 0
                    ? _c(
                        "v-card",
                        {
                          staticClass: "mt-4",
                          attrs: { disabled: _vm.disabled }
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
                                        _c("strong", [
                                          _vm._v(_vm._s(index + 1) + ".")
                                        ]),
                                        _vm._v(
                                          " " +
                                            _vm._s(ing.name) +
                                            "\n                            "
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
                    : _vm._e()
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);