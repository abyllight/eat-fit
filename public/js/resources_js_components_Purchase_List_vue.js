"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Purchase_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Purchase/List.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Purchase/List.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "List",
  data: function data() {
    return {
      purchase: {},
      loading: false,
      modal: false,
      item: {},
      msg: null,
      provider: {}
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
      })["catch"](function (error) {
        console.log(error);
      });
    },
    openWhatsapp: function openWhatsapp(i) {
      this.item = i;
      this.provider = i.providers[0];
      this.modal = true;
      this.msg = i.name + ' - ' + i.diff;
    },
    done: function done(i) {
      var _this2 = this;

      axios.post('/api/purchase-list-kitchen/done', {
        i_id: i.id,
        p_id: this.purchase.id
      }).then(function (res) {
        _this2.modal = false;
        _this2.item = {};

        _this2.fetchIngredients();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Purchase/List.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Purchase/List.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_4f001eb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=4f001eb1& */ "./resources/js/components/Purchase/List.vue?vue&type=template&id=4f001eb1&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/Purchase/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_4f001eb1___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_4f001eb1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Purchase/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Purchase/List.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Purchase/List.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Purchase/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Purchase/List.vue?vue&type=template&id=4f001eb1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Purchase/List.vue?vue&type=template&id=4f001eb1& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4f001eb1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4f001eb1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_4f001eb1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=4f001eb1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Purchase/List.vue?vue&type=template&id=4f001eb1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Purchase/List.vue?vue&type=template&id=4f001eb1&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Purchase/List.vue?vue&type=template&id=4f001eb1& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            _c("h1", {}, [
              _vm._v(
                _vm._s(_vm.purchase.cuisine) + " - " + _vm._s(_vm.purchase.date)
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.purchase.ingredients, function(i, key) {
        return i.diff > 0
          ? _c(
              "v-row",
              { key: i.id },
              [
                _c(
                  "v-col",
                  { attrs: { cols: "1" } },
                  [
                    _c("v-checkbox", {
                      on: {
                        change: function($event) {
                          return _vm.done(i)
                        }
                      },
                      model: {
                        value: i.done,
                        callback: function($$v) {
                          _vm.$set(i, "done", $$v)
                        },
                        expression: "i.done"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "11" } },
                  [
                    _c(
                      "v-card",
                      { attrs: { disabled: i.done === 1 } },
                      [
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12", md: "6" } },
                                  [
                                    _c("h3", [
                                      _vm._v(
                                        _vm._s(key + 1) + ". " + _vm._s(i.name)
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-col", { attrs: { cols: "6", sm: "4" } }, [
                                  _c("h5", { staticClass: "text-uppercase" }, [
                                    _vm._v("Нужно взять:")
                                  ]),
                                  _vm._v(" "),
                                  _c("strong", { staticClass: "green--text" }, [
                                    _vm._v(_vm._s(i.diff))
                                  ])
                                ]),
                                _vm._v(" "),
                                i.providers.length > 0
                                  ? _c(
                                      "v-col",
                                      { attrs: { sm: "1" } },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              icon: "",
                                              color: "green",
                                              dark: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.openWhatsapp(i)
                                              }
                                            }
                                          },
                                          [
                                            _c("v-icon", [
                                              _vm._v(
                                                "\n                                        mdi-whatsapp\n                                    "
                                              )
                                            ])
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
          : _vm._e()
      }),
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
                              _c("v-select", {
                                staticClass: "mt-5",
                                attrs: {
                                  items: _vm.item.providers,
                                  "item-text": "name",
                                  "item-value": "id",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.provider.id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.provider, "id", $$v)
                                  },
                                  expression: "provider.id"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: { outlined: "", clearable: "" },
                                model: {
                                  value: _vm.msg,
                                  callback: function($$v) {
                                    _vm.msg = $$v
                                  },
                                  expression: "msg"
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
                            "\n                            Закрыть\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "blue darken-1",
                            text: "",
                            href:
                              "https://api.whatsapp.com/send?phone=" +
                              _vm.provider.phone +
                              "&text=" +
                              encodeURIComponent(this.msg),
                            target: "_blank"
                          },
                          on: {
                            click: function($event) {
                              _vm.modal = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            Отправить\n                        "
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
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);