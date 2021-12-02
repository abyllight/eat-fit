"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Kitchen_Ingredients_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Ingredients.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Ingredients.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Ingredients",
  data: function data() {
    return {
      ingredients: [],
      categories: [],
      ingredient: {
        name: '',
        description: '',
        category_ids: []
      },
      errors: [],
      edit: -1,
      dialog: false,
      dialogDelete: false
    };
  },
  mounted: function mounted() {
    this.getIngredients();
    this.getCategories();
  },
  methods: {
    getIngredients: function getIngredients() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/ingredients').then(function (response) {
                  _this.ingredients = response.data;
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
    getCategories: function getCategories() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/categories').then(function (response) {
                  _this2.categories = response.data;
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
    action: function action() {
      if (this.edit === 1) {
        this.update();
      } else {
        this.store();
      }
    },
    store: function store() {
      var _this3 = this;

      axios.post('/api/ingredients', this.ingredient).then(function (response) {
        if (response.data.status) {
          _this3.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'green',
            'type': 'success'
          });

          _this3.close();

          _this3.getIngredients();
        } else {
          _this3.errors = response.data.errors;
        }
      })["catch"](function (error) {
        console.log(error);
        _this3.errors = error.response.data.errors;
      });
    },
    update: function update() {
      var _this4 = this;

      axios.patch('/api/ingredients/' + this.ingredient.id, this.ingredient).then(function (response) {
        if (response.data.status) {
          _this4.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'green',
            'type': 'success'
          });

          _this4.close();

          _this4.getIngredients();
        } else {
          _this4.errors = response.data.errors;
        }
      })["catch"](function (error) {
        console.log(error);
        _this4.errors = error.response.data.errors;
      });
    },
    close: function close() {
      this.dialog = false;
      this.dialogDelete = false;
      this.edit = -1;
      this.ingredient = {
        name: '',
        description: ''
      };
    },
    editItem: function editItem(ingredient) {
      this.edit = 1;
      this.ingredient = ingredient;
      this.dialog = true;
    },
    deleteIngredient: function deleteIngredient(ingredient) {
      this.ingredient = ingredient;
      this.dialogDelete = true;
    },
    deleteConfirm: function deleteConfirm() {
      var _this5 = this;

      axios["delete"]('/api/ingredients/' + this.ingredient.id).then(function (response) {
        if (response.data.status) {
          _this5.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'green',
            'type': 'success'
          });

          _this5.close();

          _this5.getIngredients();
        } else {
          _this5.errors = response.data.errors;
        }
      })["catch"](function (error) {
        console.log(error);
        _this5.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Kitchen/Ingredients.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Kitchen/Ingredients.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ingredients_vue_vue_type_template_id_e9650dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ingredients.vue?vue&type=template&id=e9650dc8& */ "./resources/js/components/Kitchen/Ingredients.vue?vue&type=template&id=e9650dc8&");
/* harmony import */ var _Ingredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingredients.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/Ingredients.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Ingredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Ingredients_vue_vue_type_template_id_e9650dc8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Ingredients_vue_vue_type_template_id_e9650dc8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/Ingredients.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kitchen/Ingredients.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Ingredients.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ingredients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Ingredients.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingredients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kitchen/Ingredients.vue?vue&type=template&id=e9650dc8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Ingredients.vue?vue&type=template&id=e9650dc8& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingredients_vue_vue_type_template_id_e9650dc8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingredients_vue_vue_type_template_id_e9650dc8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingredients_vue_vue_type_template_id_e9650dc8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ingredients.vue?vue&type=template&id=e9650dc8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Ingredients.vue?vue&type=template&id=e9650dc8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Ingredients.vue?vue&type=template&id=e9650dc8&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Ingredients.vue?vue&type=template&id=e9650dc8& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                  attrs: { color: "primary" },
                  on: {
                    click: function($event) {
                      _vm.dialog = true
                    }
                  }
                },
                [_vm._v("\n                Добавить ингредиент\n            ")]
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
            { attrs: { cols: "12" } },
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
                                "\n                            #\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                            Название\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                            Категории\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                            Actions\n                        "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.ingredients, function(ing, index) {
                            return _c("tr", { key: ing.id }, [
                              _c("td", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ing.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(ing.categories.length))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      staticClass: "mr-2",
                                      attrs: { small: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editItem(ing)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                mdi-pencil\n                            "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  ing.is_custom
                                    ? _c(
                                        "v-icon",
                                        {
                                          attrs: { small: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteIngredient(ing)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                mdi-delete\n                            "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "500px" },
                  model: {
                    value: _vm.dialogDelete,
                    callback: function($$v) {
                      _vm.dialogDelete = $$v
                    },
                    expression: "dialogDelete"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-title", { staticClass: "text-h5" }, [
                        _vm._v("Вы уверены?")
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
                              on: {
                                click: function($event) {
                                  _vm.dialogDelete = false
                                }
                              }
                            },
                            [_vm._v("Отмена")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "blue darken-1", text: "" },
                              on: { click: _vm.deleteConfirm }
                            },
                            [_vm._v("Да")]
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
                      _c("v-toolbar-title", [_vm._v("Ингредиент")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-title", [
                    _c("span", { staticClass: "text-h5" }, [
                      _vm._v(
                        " " +
                          _vm._s(_vm.edit === 1 ? "Редактировать" : "Добавить")
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
                                { attrs: { sm: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Название",
                                      "error-messages": _vm.errors.name,
                                      outlined: "",
                                      clearable: ""
                                    },
                                    model: {
                                      value: _vm.ingredient.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.ingredient, "name", $$v)
                                      },
                                      expression: "ingredient.name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.categories,
                                      "item-text": "name",
                                      "item-value": "id",
                                      clearable: "",
                                      outlined: "",
                                      label: "Категории",
                                      multiple: ""
                                    },
                                    model: {
                                      value: _vm.ingredient.category_ids,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.ingredient,
                                          "category_ids",
                                          $$v
                                        )
                                      },
                                      expression: "ingredient.category_ids"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-textarea", {
                                    attrs: {
                                      outlined: "",
                                      clearable: "",
                                      label: "Доп. инфо"
                                    },
                                    model: {
                                      value: _vm.ingredient.description,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.ingredient,
                                          "description",
                                          $$v
                                        )
                                      },
                                      expression: "ingredient.description"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: { click: _vm.action }
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