"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Admin_Payments_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Payments.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Payments.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Payments',
  data: function data() {
    return {
      dialog: false,
      has_diff: false,
      menu: false,
      date: new Date().toISOString().split('T')[0],
      items: [],
      item: {},
      types: [],
      payType: null,
      payLoading: false,
      loading: false
    };
  },
  created: function created() {
    this.fetchItems();
  },
  computed: {
    total: function total() {
      return this.items.reduce(function (sum, item) {
        return sum + item.pay_fact;
      }, 0);
    },
    totalDiff: function totalDiff() {
      return this.items.reduce(function (sum, item) {
        return sum + item.fact_diff;
      }, 0);
    }
  },
  methods: {
    fetchItems: function fetchItems() {
      var _this = this;

      this.menu = false;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/payments', {
        params: {
          date: this.date,
          pay_type: this.payType,
          has_diff: this.has_diff
        }
      }).then(function (response) {
        _this.types = response.data.types;
        _this.items = response.data.items;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    fetchLeads: function fetchLeads() {
      var _this2 = this;

      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/payments/leads').then(function () {
        _this2.fetchItems();
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        _this2.loading = false;
      });
    },
    showDetails: function showDetails(item) {
      this.item = item;
      this.dialog = true;
    },
    closeDialog: function closeDialog() {
      this.item = {};
      this.dialog = false;
    },
    setPayFact: function setPayFact() {
      var _this3 = this;

      this.payLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/payments', {
        id: this.item.id,
        pay_fact: this.item.pay_fact,
        pay_type: this.item.pay_type
      }).then(function () {
        _this3.closeDialog();

        _this3.fetchItems();
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        _this3.payLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Admin/Payments.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Admin/Payments.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Payments_vue_vue_type_template_id_62229290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payments.vue?vue&type=template&id=62229290& */ "./resources/js/components/Admin/Payments.vue?vue&type=template&id=62229290&");
/* harmony import */ var _Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payments.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Payments.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payments_vue_vue_type_template_id_62229290___WEBPACK_IMPORTED_MODULE_0__.render,
  _Payments_vue_vue_type_template_id_62229290___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Payments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Payments.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Admin/Payments.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Payments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Payments.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Admin/Payments.vue?vue&type=template&id=62229290&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Admin/Payments.vue?vue&type=template&id=62229290& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_62229290___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_62229290___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payments_vue_vue_type_template_id_62229290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Payments.vue?vue&type=template&id=62229290& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Payments.vue?vue&type=template&id=62229290&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Payments.vue?vue&type=template&id=62229290&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Payments.vue?vue&type=template&id=62229290& ***!
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
        "v-row",
        [
          _c("v-col", [
            _c(
              "div",
              { staticClass: "d-flex justify-space-between align-start" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "primary",
                      loading: _vm.loading,
                      disabled: _vm.loading
                    },
                    on: { click: _vm.fetchLeads }
                  },
                  [_vm._v("Получить сделки")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("h4", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.totalDiff) + "тг")
                    ]),
                    _vm._v(" "),
                    _c("v-checkbox", {
                      staticClass: "mt-0",
                      attrs: { label: "Сверхоплаты" },
                      on: { click: _vm.fetchItems },
                      model: {
                        value: _vm.has_diff,
                        callback: function($$v) {
                          _vm.has_diff = $$v
                        },
                        expression: "has_diff"
                      }
                    })
                  ],
                  1
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
            [
              _c(
                "v-menu",
                {
                  attrs: {
                    "close-on-content-click": false,
                    "nudge-right": 40,
                    transition: "scale-transition",
                    "offset-y": "",
                    "min-width": "auto"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-text-field",
                            _vm._g(
                              _vm._b(
                                {
                                  attrs: {
                                    label: "Выберите дату",
                                    "prepend-icon": "mdi-calendar",
                                    readonly: "",
                                    outlined: ""
                                  },
                                  model: {
                                    value: _vm.date,
                                    callback: function($$v) {
                                      _vm.date = $$v
                                    },
                                    expression: "date"
                                  }
                                },
                                "v-text-field",
                                attrs,
                                false
                              ),
                              on
                            )
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.menu,
                    callback: function($$v) {
                      _vm.menu = $$v
                    },
                    expression: "menu"
                  }
                },
                [
                  _vm._v(" "),
                  _c("v-date-picker", {
                    on: {
                      input: function($event) {
                        _vm.menu = false
                      },
                      change: _vm.fetchItems
                    },
                    model: {
                      value: _vm.date,
                      callback: function($$v) {
                        _vm.date = $$v
                      },
                      expression: "date"
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
            "v-col",
            [
              _c("v-select", {
                attrs: {
                  items: _vm.types,
                  "item-value": "id",
                  "item-text": "name",
                  label: "Тип оплаты",
                  outlined: "",
                  clearable: ""
                },
                on: { change: _vm.fetchItems },
                model: {
                  value: _vm.payType,
                  callback: function($$v) {
                    _vm.payType = $$v
                  },
                  expression: "payType"
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
            [
              _c("h2", [_vm._v(_vm._s(_vm.total))]),
              _vm._v(" "),
              _c("v-simple-table", {
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
                                "\n                                Имя\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                                Курс\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                                Фактический оплачено\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                                Тип оплаты\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v(
                                "\n                                Оплата\n                            "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.items, function(item, index) {
                              return [
                                _c(
                                  "tr",
                                  {
                                    class:
                                      item.fact > item.course
                                        ? "light-green lighten-4"
                                        : "",
                                    on: {
                                      click: function($event) {
                                        return _vm.showDetails(item)
                                      }
                                    }
                                  },
                                  [
                                    _c("td", [_vm._v(_vm._s(index + 1))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.name))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.course))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.fact))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.pay_type))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(item.pay_fact))])
                                  ]
                                )
                              ]
                            })
                          ],
                          2
                        )
                      ]
                    },
                    proxy: true
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
        "div",
        { staticClass: "text-center" },
        [
          _c(
            "v-dialog",
            {
              attrs: { width: "500" },
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
                {
                  attrs: { disabled: _vm.payLoading, loading: _vm.payLoading }
                },
                [
                  _c(
                    "v-card-title",
                    { staticClass: "text-h5 grey lighten-2" },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.item.name) +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c("v-select", {
                        staticClass: "mt-5",
                        attrs: {
                          items: _vm.types,
                          "item-value": "id",
                          "item-text": "name",
                          label: "Тип оплаты",
                          outlined: "",
                          clearable: ""
                        },
                        model: {
                          value: _vm.item.pay_type,
                          callback: function($$v) {
                            _vm.$set(_vm.item, "pay_type", $$v)
                          },
                          expression: "item.pay_type"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          type: "number",
                          label: "Фактический оплачено",
                          outlined: "",
                          clearable: ""
                        },
                        model: {
                          value: _vm.item.pay_fact,
                          callback: function($$v) {
                            _vm.$set(_vm.item, "pay_fact", $$v)
                          },
                          expression: "item.pay_fact"
                        }
                      })
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
                          attrs: { color: "red", text: "" },
                          on: { click: _vm.closeDialog }
                        },
                        [
                          _vm._v(
                            "\n                        Закрыть\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "primary", text: "" },
                          on: { click: _vm.setPayFact }
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