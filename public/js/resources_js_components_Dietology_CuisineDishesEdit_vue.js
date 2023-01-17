"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dietology_CuisineDishesEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'CuisineDishesEdit',
  components: {
    TiptapVuetify: tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.TiptapVuetify
  },
  props: ['id'],
  data: function data() {
    return {
      ingredients: [],
      departments: [],
      all_rations: [],
      cuisine: {},
      dish: {
        name: '',
        cuisine_id: 0,
        ration_id: 0,
        code: '',
        department_id: 0,
        ingredients: [],
        description: null
      },
      dishes: [],
      loading: false,
      disabled: false,
      errors: [],
      extensions: [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.History, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Blockquote, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Link, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Underline, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Strike, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Italic, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Image, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.ListItem, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.BulletList, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.OrderedList, [tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }], tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Bold, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Code, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.HorizontalRule, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.Paragraph, tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.HardBreak]
    };
  },
  created: function created() {
    this.getDish();
    this.getIngredients();
    this.getDepartments();
    this.getAllRations();
  },
  methods: {
    getDish: function getDish() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/dishes/' + _this.id).then(function (response) {
                  _this.dish = response.data;
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
    getAllRations: function getAllRations() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get('/api/rations').then(function (response) {
                  _this4.all_rations = response.data;
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
    update: function update() {
      var _this5 = this;

      axios.patch('/api/dishes/' + this.dish.id, this.dish).then(function (response) {
        _this5.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': 'green',
          'type': 'success'
        });

        if (response.data.status) {
          _this5.$router.push({
            name: 'cuisine_dishes',
            params: {
              id: _this5.dish.cuisine_id
            }
          });
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

/***/ "./resources/js/components/Dietology/CuisineDishesEdit.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Dietology/CuisineDishesEdit.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CuisineDishesEdit_vue_vue_type_template_id_7f46567c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CuisineDishesEdit.vue?vue&type=template&id=7f46567c& */ "./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=template&id=7f46567c&");
/* harmony import */ var _CuisineDishesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CuisineDishesEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CuisineDishesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CuisineDishesEdit_vue_vue_type_template_id_7f46567c___WEBPACK_IMPORTED_MODULE_0__.render,
  _CuisineDishesEdit_vue_vue_type_template_id_7f46567c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dietology/CuisineDishesEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CuisineDishesEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=template&id=7f46567c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=template&id=7f46567c& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishesEdit_vue_vue_type_template_id_7f46567c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishesEdit_vue_vue_type_template_id_7f46567c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CuisineDishesEdit_vue_vue_type_template_id_7f46567c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CuisineDishesEdit.vue?vue&type=template&id=7f46567c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=template&id=7f46567c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=template&id=7f46567c&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/CuisineDishesEdit.vue?vue&type=template&id=7f46567c& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                [_vm._v("\n                Назад к кухне\n            ")]
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
          _vm.dish.i_name
            ? _c(
                "v-col",
                { attrs: { sm: "12", lg: "4" } },
                [
                  _c("h3", [_vm._v(_vm._s(_vm.dish.i_name))]),
                  _vm._v(" "),
                  _vm._l(_vm.dish.original_ingredients, function(item, key) {
                    return _c(
                      "v-list-item",
                      {
                        key: item.id,
                        class: !_vm.dish.ingredient_ids.includes(item.id)
                          ? "yellow lighten-3"
                          : "",
                        attrs: { dense: "" }
                      },
                      [
                        _c(
                          "v-list-item-content",
                          [
                            _c("v-list-item-title", [
                              _vm._v(_vm._s(key + 1) + ". " + _vm._s(item.name))
                            ])
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
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { sm: "12", lg: "8" } },
            [
              _c("h2", { staticClass: "mb-5" }, [
                _vm._v(_vm._s(_vm.dish.ration ? _vm.dish.ration.name : ""))
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
              _c("v-select", {
                attrs: {
                  items: _vm.all_rations,
                  dense: "",
                  "item-text": "name",
                  "item-value": "id",
                  outlined: "",
                  label: "Рационы"
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
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.departments,
                  "item-text": "name",
                  "item-value": "id",
                  clearable: "",
                  outlined: "",
                  label: "Цех",
                  "error-messages": _vm.errors.department_id
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
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.ingredients,
                  "item-text": "name",
                  "item-value": "id",
                  clearable: "",
                  outlined: "",
                  "small-chips": "",
                  label: "Ингредиенты",
                  "error-messages": _vm.errors.ingredient_ids,
                  multiple: ""
                },
                model: {
                  value: _vm.dish.ingredient_ids,
                  callback: function($$v) {
                    _vm.$set(_vm.dish, "ingredient_ids", $$v)
                  },
                  expression: "dish.ingredient_ids"
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
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mt-5",
                  attrs: { color: "primary" },
                  on: { click: _vm.update }
                },
                [_vm._v("\n                Сохранить\n            ")]
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