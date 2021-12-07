"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Kitchen_Cuisine_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Cuisine.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Cuisine.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Cuisine',
  data: function data() {
    return {
      cuisines: [],
      ingredients: [],
      departments: [],
      rations: [],
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
      btn_loading: false,
      loading: false,
      disabled: false,
      dialog: false,
      errors: []
    };
  },
  created: function created() {
    this.getCuisines();
    this.getIngredients();
    this.getDepartments();
  },
  methods: {
    getCuisines: function getCuisines() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/cuisines').then(function (response) {
                  _this.cuisines = response.data;
                  _this.cuisine = _this.cuisines.find(function (obj) {
                    return obj.duty === 1;
                  });

                  _this.getDishesByCuisine(_this.cuisine.id);

                  _this.getRations();
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
    getIngredients: function getIngredients() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/ingredients').then(function (response) {
                  _this2.ingredients = response.data;
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
    getDepartments: function getDepartments() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get('/api/departments').then(function (response) {
                  _this3.departments = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getRations: function getRations() {
      var _this4 = this;

      axios.get('/api/rations/required/' + this.cuisine.id).then(function (response) {
        _this4.rations = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    fetchCuisines: function fetchCuisines() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this5.btn_loading = true;
                _this5.disabled = true;
                _context4.next = 4;
                return axios.get('/api/cuisines/iiko').then(function (response) {
                  _this5.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.data.status ? 'green' : 'error',
                    'type': response.data.status ? 'success' : 'error'
                  });

                  _this5.getCuisines();
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  _this5.btn_loading = false;
                  _this5.disabled = false;
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    fetchDishes: function fetchDishes() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this6.btn_loading = true;
                _this6.disabled = true;
                _context5.next = 4;
                return axios.get('/api/dishes/iiko').then(function (response) {
                  _this6.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.data.status ? 'green' : 'error',
                    'type': response.data.status ? 'success' : 'error'
                  });
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  _this6.btn_loading = false;
                  _this6.disabled = false;
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    fetchIngredients: function fetchIngredients(id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this7.disabled = true;
                _this7.loading = true;
                _context6.next = 4;
                return axios.get('/api/ingredients/iiko/' + id).then(function (response) {
                  _this7.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.status ? 'green' : 'error',
                    'type': response.status ? 'success' : 'error'
                  });

                  _this7.getCuisines();
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  _this7.disabled = false;
                  _this7.loading = false;
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getDishesByCuisine: function getDishesByCuisine(id) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios.get('/api/dishes/cuisine/' + id).then(function (response) {
                  _this8.dishes = response.data;
                  _this8.dish = _this8.dishes[0];
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    showDetails: function showDetails(cuisine) {
      if (this.disabled) return;
      this.cuisine = cuisine;
      this.getDishesByCuisine(cuisine.id);
      this.getRations();
    },
    setCuisine: function setCuisine(id) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios.post('/api/cuisine/duty/set', {
                  id: id
                }).then(function (response) {
                  _this9.cuisine = response.data;

                  _this9.getCuisines();

                  _this9.$store.dispatch('showAlert', {
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
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    setDish: function setDish(dish) {
      this.dish = dish;
    },
    close: function close() {
      this.dialog = false;
      this.dish = {
        id: null,
        name: '',
        cuisine_id: 0,
        ration_id: 0,
        code: '',
        department_id: null,
        ingredients: [],
        is_custom: false
      };
    },
    editDish: function editDish(dish) {
      this.dish = dish;
      this.dish.cuisine_id = this.cuisine.id;
      this.dialog = true;
    },
    save: function save() {
      if (this.dish.id === null) {
        this.create();
      } else {
        this.update();
      }
    },
    update: function update() {
      var _this10 = this;

      axios.patch('/api/dishes/' + this.dish.id, this.dish).then(function (response) {
        _this10.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': 'green',
          'type': 'success'
        });

        if (response.data.status) {
          _this10.dialog = false;

          _this10.getCuisines();
        } else {
          _this10.errors = response.data.errors;
        }
      })["catch"](function (error) {
        console.log(error);
        _this10.errors = error.response.data.errors;
      });
    },
    create: function create() {
      var _this11 = this;

      axios.post('/api/dishes', this.dish).then(function (response) {
        _this11.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': 'green',
          'type': 'success'
        });

        if (response.data.status) {
          _this11.dialog = false;

          _this11.getCuisines();
        } else {
          _this11.errors = response.data.errors;
        }
      })["catch"](function (error) {
        console.log(error);
        _this11.errors = error.response.data.errors;
      });
    },
    addDish: function addDish(ration) {
      this.dish = {
        id: null,
        name: '',
        cuisine_id: this.cuisine.id,
        ration_id: ration.id,
        code: '',
        department_id: 0,
        ingredients: [],
        is_custom: false,
        ration: ration
      };
      this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Kitchen/Cuisine.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Kitchen/Cuisine.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cuisine_vue_vue_type_template_id_1ceebd9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cuisine.vue?vue&type=template&id=1ceebd9e& */ "./resources/js/components/Kitchen/Cuisine.vue?vue&type=template&id=1ceebd9e&");
/* harmony import */ var _Cuisine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cuisine.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/Cuisine.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cuisine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cuisine_vue_vue_type_template_id_1ceebd9e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cuisine_vue_vue_type_template_id_1ceebd9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/Cuisine.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kitchen/Cuisine.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Cuisine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cuisine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Cuisine.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kitchen/Cuisine.vue?vue&type=template&id=1ceebd9e&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Cuisine.vue?vue&type=template&id=1ceebd9e& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_template_id_1ceebd9e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_template_id_1ceebd9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cuisine_vue_vue_type_template_id_1ceebd9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cuisine.vue?vue&type=template&id=1ceebd9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Cuisine.vue?vue&type=template&id=1ceebd9e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Cuisine.vue?vue&type=template&id=1ceebd9e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Cuisine.vue?vue&type=template&id=1ceebd9e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            { attrs: { sm: "12", md: "2", lg: "2" } },
            [
              _c(
                "v-list",
                { attrs: { dense: "" } },
                [
                  _c("v-subheader", [_vm._v("Кухни мира")]),
                  _vm._v(" "),
                  _c(
                    "v-list-item-group",
                    { attrs: { color: "primary" } },
                    _vm._l(_vm.cuisines, function(cuisine, i) {
                      return _c(
                        "v-list-item",
                        {
                          key: i,
                          class: cuisine.duty ? "light-green lighten-3" : "",
                          on: {
                            click: function($event) {
                              return _vm.showDetails(cuisine)
                            }
                          }
                        },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  _vm._s(i + 1) + ". " + _vm._s(cuisine.name)
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
          _c(
            "v-col",
            { attrs: { sm: "12", md: "10", lg: "6" } },
            [
              _vm.cuisine
                ? _c(
                    "v-card",
                    {
                      attrs: {
                        color: _vm.cuisine.duty
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
                          ),
                          _vm._v(" "),
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
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "mt-4",
                  attrs: { disabled: _vm.disabled, loading: _vm.loading }
                },
                [
                  _vm.cuisine
                    ? _c(
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
                                                "]"
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
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.rations, function(item) {
                return _c(
                  "v-card",
                  { key: item.id, staticClass: "mt-4" },
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
                                return _vm.addDish(item)
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
          _c(
            "v-col",
            { attrs: { sm: "12", lg: "4" } },
            [
              _vm.dish
                ? _c(
                    "v-card",
                    { attrs: { disabled: _vm.disabled, loading: _vm.loading } },
                    [_c("v-card-title", [_vm._v(_vm._s(_vm.dish.name))])],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.dish
                ? _c(
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
                                      _vm._s(index + 1) +
                                        ". " +
                                        _vm._s(ing.name)
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
                      _c("v-toolbar-title", [_vm._v("Блюдо")])
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
                          _vm.dish
                            ? _c(
                                "v-row",
                                [
                                  _vm.dish.i_name
                                    ? _c(
                                        "v-col",
                                        { attrs: { sm: "12", lg: "4" } },
                                        [
                                          _c("h3", [
                                            _vm._v(_vm._s(_vm.dish.i_name))
                                          ]),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.dish.i_ingredients,
                                            function(item, key) {
                                              return _c(
                                                "v-list-item",
                                                {
                                                  key: item.id,
                                                  attrs: { dense: "" }
                                                },
                                                [
                                                  _c(
                                                    "v-list-item-content",
                                                    [
                                                      _c("v-list-item-title", [
                                                        _vm._v(
                                                          _vm._s(key + 1) +
                                                            ". " +
                                                            _vm._s(item.name)
                                                        )
                                                      ])
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
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { sm: "12", lg: "8" } },
                                    [
                                      _c("h2", { staticClass: "mb-5" }, [
                                        _vm._v(
                                          _vm._s(
                                            _vm.dish.ration
                                              ? _vm.dish.ration.name
                                              : ""
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Название",
                                          "error-messages": _vm.errors.name,
                                          outlined: "",
                                          dense: "",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.dish.name,
                                          callback: function($$v) {
                                            _vm.$set(_vm.dish, "name", $$v)
                                          },
                                          expression: "dish.name"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Код",
                                          "error-messages": _vm.errors.code,
                                          outlined: "",
                                          dense: "",
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.dish.code,
                                          callback: function($$v) {
                                            _vm.$set(_vm.dish, "code", $$v)
                                          },
                                          expression: "dish.code"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.departments,
                                          "item-text": "name",
                                          "item-value": "id",
                                          clearable: "",
                                          outlined: "",
                                          label: "Цех",
                                          "error-messages":
                                            _vm.errors.department_id
                                        },
                                        model: {
                                          value: _vm.dish.department_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.dish,
                                              "department_id",
                                              $$v
                                            )
                                          },
                                          expression: "dish.department_id"
                                        }
                                      }),
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
                                          "error-messages":
                                            _vm.errors.ingredient_ids,
                                          multiple: ""
                                        },
                                        model: {
                                          value: _vm.dish.ingredient_ids,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.dish,
                                              "ingredient_ids",
                                              $$v
                                            )
                                          },
                                          expression: "dish.ingredient_ids"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary" },
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