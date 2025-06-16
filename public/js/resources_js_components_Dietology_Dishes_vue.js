"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dietology_Dishes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Dishes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Dishes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-vuetify */ "./node_modules/tiptap-vuetify/dist/bundle-esm.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dishes",
  components: {
    TiptapVuetify: tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.TiptapVuetify
  },
  data: function data() {
    return {
      dishes: [],
      total: 1,
      name: null,
      filter: {
        page: 1,
        name: ''
      },
      dish: {
        name: '',
        time: 0,
        description: '',
        department: null,
        code: '',
        ingredients: [],
        is_custom: true
      },
      ingredients: [],
      departments: [],
      rations: [],
      errors: [],
      edit: -1,
      dialog: false,
      extensions: [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.History, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Blockquote, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Link, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Underline, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Strike, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Italic, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.ListItem, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.BulletList, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.OrderedList, [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Bold, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Code, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Paragraph, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.HardBreak]
    };
  },
  mounted: function mounted() {
    this.getDishes();
    this.getIngredients();
    this.getRations();
    this.getDepartments();
  },
  methods: {
    getDishes: function getDishes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/dishes?page=' + _this.filter.page + '&name=' + _this.filter.name).then(function (response) {
                  _this.dishes = response.data.data;
                  _this.total = response.data.meta.last_page;
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
    getRations: function getRations() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get('/api/rations').then(function (response) {
                  _this3.rations = response.data;
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
    getDepartments: function getDepartments() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get('/api/departments').then(function (response) {
                  _this4.departments = response.data;
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
    changePage: function changePage(event) {
      this.filter.page = event;
      this.getDishes();
    },
    action: function action() {
      if (this.edit === 1) {
        this.update();
      } else {
        this.store();
      }
    },
    store: function store() {
      var _this5 = this;

      axios.post('/api/dishes', this.dish).then(function (response) {
        if (response.data.status) {
          _this5.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'green',
            'type': 'success'
          });

          _this5.close();

          _this5.getDishes();
        } else {
          _this5.errors = response.data.errors;
        }
      })["catch"](function (error) {
        console.log(error);
        _this5.errors = error.response.data.errors;
      });
    },
    update: function update() {
      var _this6 = this;

      axios.patch('/api/dishes/' + this.dish.id, this.dish).then(function (response) {
        if (response.data.status) {
          _this6.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'green',
            'type': 'success'
          });

          _this6.close();

          _this6.getDishes();
        } else {
          _this6.errors = response.data.errors;
        }
      })["catch"](function (error) {
        console.log(error);
        _this6.errors = error.response.data.errors;
      });
    },
    close: function close() {
      this.dialog = false;
      this.edit = -1;
      this.dish = {
        name: '',
        ration_id: 0,
        description: '',
        ingredient_ids: []
      };
      this.errors = [];
    },
    editItem: function editItem(dish) {
      this.edit = 1;
      this.dish = dish;
      this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dietology/Dishes.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Dietology/Dishes.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dishes_vue_vue_type_template_id_55741692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dishes.vue?vue&type=template&id=55741692& */ "./resources/js/components/Dietology/Dishes.vue?vue&type=template&id=55741692&");
/* harmony import */ var _Dishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dishes.vue?vue&type=script&lang=js& */ "./resources/js/components/Dietology/Dishes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dishes_vue_vue_type_template_id_55741692___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dishes_vue_vue_type_template_id_55741692___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dietology/Dishes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dietology/Dishes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Dietology/Dishes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dishes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Dishes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dishes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dietology/Dishes.vue?vue&type=template&id=55741692&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Dietology/Dishes.vue?vue&type=template&id=55741692& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dishes_vue_vue_type_template_id_55741692___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dishes_vue_vue_type_template_id_55741692___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dishes_vue_vue_type_template_id_55741692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dishes.vue?vue&type=template&id=55741692& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Dishes.vue?vue&type=template&id=55741692&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Dishes.vue?vue&type=template&id=55741692&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Dishes.vue?vue&type=template&id=55741692& ***!
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
                  attrs: { color: "primary" },
                  on: {
                    click: function($event) {
                      _vm.dialog = true
                    }
                  }
                },
                [_vm._v("\n                Добавить блюдо\n            ")]
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
              _c("v-text-field", {
                attrs: { outlined: "", label: "Название" },
                on: { change: _vm.getDishes },
                model: {
                  value: _vm.filter.name,
                  callback: function($$v) {
                    _vm.$set(_vm.filter, "name", $$v)
                  },
                  expression: "filter.name"
                }
              })
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
                                "\n                            Рацион\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                            Ингредиенты\n                        "
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
                          _vm._l(_vm.dishes, function(dish, index) {
                            return _c("tr", { key: dish.id }, [
                              _c("td", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(dish.name))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  _vm._s(dish.ration ? dish.ration.name : "")
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(dish.ingredient_ids.length))
                              ]),
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
                                          return _vm.editItem(dish)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                mdi-pencil\n                            "
                                      )
                                    ]
                                  )
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
                "div",
                { staticClass: "mt-8" },
                [
                  _c("v-pagination", {
                    attrs: { length: _vm.total, "total-visible": 10 },
                    on: { input: _vm.changePage },
                    model: {
                      value: _vm.filter.page,
                      callback: function($$v) {
                        _vm.$set(_vm.filter, "page", $$v)
                      },
                      expression: "filter.page"
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
                                { attrs: { sm: "12", lg: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Название",
                                      "error-messages": _vm.errors.name,
                                      outlined: "",
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
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.rations,
                                      "item-text": "name",
                                      "item-value": "id",
                                      label: "Рацион",
                                      "error-messages": _vm.errors.ration_id,
                                      clearable: "",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.dish.ration_id,
                                      callback: function($$v) {
                                        _vm.$set(_vm.dish, "ration_id", $$v)
                                      },
                                      expression: "dish.ration_id"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.departments,
                                      "item-text": "name",
                                      "item-value": "id",
                                      label: "Цех",
                                      "error-messages":
                                        _vm.errors.department_id,
                                      clearable: "",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.dish.department_id,
                                      callback: function($$v) {
                                        _vm.$set(_vm.dish, "department_id", $$v)
                                      },
                                      expression: "dish.department_id"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("tiptap-vuetify", {
                                    attrs: { extensions: _vm.extensions },
                                    model: {
                                      value: _vm.dish.description,
                                      callback: function($$v) {
                                        _vm.$set(_vm.dish, "description", $$v)
                                      },
                                      expression: "dish.description"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { sm: "12", lg: "6" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.ingredients,
                                      "item-text": "name",
                                      "item-value": "id",
                                      "error-messages":
                                        _vm.errors.ingredient_ids,
                                      clearable: "",
                                      outlined: "",
                                      "small-chips": "",
                                      label: "Ингредиенты",
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