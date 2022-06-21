"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Kitchen_PurchaseList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/PurchaseList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/PurchaseList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PurchaseList",
  data: function data() {
    return {
      purchase: {},
      loading: false,
      modal: false,
      item: {},
      left: null
    };
  },
  mounted: function mounted() {
    this.fetchIngredients();
  },
  methods: {
    fetchIngredients: function fetchIngredients() {
      var _this = this;

      axios.get('/api/purchase-list-kitchen').then(function (response) {
        _this.purchase = response.data;
        console.log(_this.purchase);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    calculatePurchase: function calculatePurchase() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading = true;
                _context.next = 3;
                return axios.get('/api/purchase-list-kitchen/calculate').then(function (res) {
                  _this2.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: res.data.msg,
                    color: 'success',
                    type: 'success'
                  });

                  _this2.loading = false;

                  _this2.fetchIngredients();
                })["catch"](function (err) {});

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    openModal: function openModal(item) {
      this.modal = true;
      this.item = item;
      this.left = item.left;
    },
    save: function save() {
      var _this3 = this;

      axios.post('/api/purchase-list-kitchen/left', {
        i_id: this.item.id,
        p_id: this.purchase.id,
        left: this.left
      }).then(function (res) {
        _this3.$store.dispatch('showAlert', {
          isVisible: true,
          msg: res.data.msg,
          color: 'success',
          type: 'success'
        });

        _this3.modal = false;
        _this3.item = {};

        _this3.fetchIngredients();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Kitchen/PurchaseList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Kitchen/PurchaseList.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PurchaseList_vue_vue_type_template_id_0e6b65d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseList.vue?vue&type=template&id=0e6b65d5& */ "./resources/js/components/Kitchen/PurchaseList.vue?vue&type=template&id=0e6b65d5&");
/* harmony import */ var _PurchaseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseList.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/PurchaseList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PurchaseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseList_vue_vue_type_template_id_0e6b65d5___WEBPACK_IMPORTED_MODULE_0__.render,
  _PurchaseList_vue_vue_type_template_id_0e6b65d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/PurchaseList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kitchen/PurchaseList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Kitchen/PurchaseList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/PurchaseList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kitchen/PurchaseList.vue?vue&type=template&id=0e6b65d5&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Kitchen/PurchaseList.vue?vue&type=template&id=0e6b65d5& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseList_vue_vue_type_template_id_0e6b65d5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseList_vue_vue_type_template_id_0e6b65d5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseList_vue_vue_type_template_id_0e6b65d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseList.vue?vue&type=template&id=0e6b65d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/PurchaseList.vue?vue&type=template&id=0e6b65d5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/PurchaseList.vue?vue&type=template&id=0e6b65d5&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/PurchaseList.vue?vue&type=template&id=0e6b65d5& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
          _c("v-col", { attrs: { cols: "12" } }, [
            _c(
              "div",
              {
                staticClass: "d-flex align-center justify-space-between mb-10"
              },
              [
                _c("h1", {}, [
                  _vm._v(
                    _vm._s(_vm.purchase.cuisine) +
                      " - " +
                      _vm._s(_vm.purchase.date)
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "primary",
                      loading: _vm.loading,
                      disabled: _vm.loading
                    },
                    on: { click: _vm.calculatePurchase }
                  },
                  [_vm._v("\n                    Get\n                ")]
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
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            _vm._l(_vm.purchase.ingredients, function(i, key) {
              return _c(
                "v-card",
                {
                  key: i.id,
                  staticClass: "mb-4",
                  attrs: { color: !i.diff ? "grey lighten-1" : "" },
                  on: {
                    click: function($event) {
                      return _vm.openModal(i)
                    }
                  }
                },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", { attrs: { cols: "12", md: "6" } }, [
                            _c("h3", [
                              _vm._v(_vm._s(key + 1) + ". " + _vm._s(i.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "2" } }, [
                            _c("h5", { staticClass: "text-uppercase" }, [
                              _vm._v("Остаток:")
                            ]),
                            _vm._v(" "),
                            _c("strong", { staticClass: "blue--text" }, [
                              _vm._v(_vm._s(i.left))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "2" } }, [
                            _c("h5", { staticClass: "text-uppercase" }, [
                              _vm._v("Итого:")
                            ]),
                            _vm._v(" "),
                            _c("strong", { staticClass: "red--text" }, [
                              _vm._v(_vm._s(i.total))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "12", md: "2" } }, [
                            _c("h5", { staticClass: "text-uppercase" }, [
                              _vm._v("Нужно взять:")
                            ]),
                            _vm._v(" "),
                            _c("strong", { staticClass: "green--text" }, [
                              _vm._v(_vm._s(i.diff))
                            ])
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
            }),
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
              attrs: { scrollable: "", "max-width": "500px" },
              model: {
                value: _vm.modal,
                callback: function($$v) {
                  _vm.modal = $$v
                },
                expression: "modal"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [_vm._v(_vm._s(_vm.item.name))]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-text-field", {
                                staticClass: "mt-5",
                                attrs: {
                                  outlined: "",
                                  clearable: "",
                                  type: "number"
                                },
                                model: {
                                  value: _vm.left,
                                  callback: function($$v) {
                                    _vm.left = $$v
                                  },
                                  expression: "left"
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
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              _vm.modal = false
                            }
                          }
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
                          on: { click: _vm.save }
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