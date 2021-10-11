"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MyOrders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MyOrders.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MyOrders.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MyOrders",
  data: function data() {
    return {
      orders: [],
      dialog: false,
      lead: {},
      delivered: 'Доставлено',
      comment: '',
      amount: null,
      payment_type: 'Без оплаты',
      types: [{
        name: 'Без оплаты',
        val: 'Без оплаты'
      }, {
        name: 'Наличный расчет',
        val: 'Наличный расчет'
      }, {
        name: 'POS-терминал ТОО',
        val: 'POS-терминал ТОО'
      }, {
        name: 'POS-терминал КС',
        val: 'POS-терминал КС'
      }, {
        name: 'POS-терминал Р',
        val: 'POS-терминал Р'
      }, {
        name: 'Kaspi Amir',
        val: 'Kaspi Amir'
      }]
    };
  },
  created: function created() {
    this.fetchOrders();
  },
  methods: {
    fetchOrders: function fetchOrders() {
      var _this = this;

      axios.get('/api/my-orders').then(function (response) {
        if (response.data.status) {
          _this.orders = response.data.data;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    notify: function notify(id) {
      var _this2 = this;

      axios.post('/api/my-orders/notify', {
        order_id: id
      }).then(function (response) {
        _this2.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.status ? 'green' : 'error',
          'type': response.status ? 'success' : 'error'
        });

        _this2.fetchOrders();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    openDialog: function openDialog(order) {
      this.lead = order;
      this.dialog = true;
    },
    report: function report() {
      var _this3 = this;

      axios.post('/api/my-orders/report', {
        status: this.delivered,
        order_id: this.lead.id,
        comment: this.comment,
        amount: this.amount,
        payment_type: this.payment_type
      }).then(function (response) {
        _this3.delivered = 'Доставлено';
        _this3.comment = '';
        _this3.amount = null;
        _this3.payment_type = 'Без оплаты';
        _this3.dialog = false;

        _this3.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.status ? 'green' : 'error',
          'type': response.status ? 'success' : 'error'
        });

        _this3.fetchOrders();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/MyOrders.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/MyOrders.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MyOrders_vue_vue_type_template_id_65de409c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyOrders.vue?vue&type=template&id=65de409c& */ "./resources/js/components/MyOrders.vue?vue&type=template&id=65de409c&");
/* harmony import */ var _MyOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyOrders.vue?vue&type=script&lang=js& */ "./resources/js/components/MyOrders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyOrders_vue_vue_type_template_id_65de409c___WEBPACK_IMPORTED_MODULE_0__.render,
  _MyOrders_vue_vue_type_template_id_65de409c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MyOrders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MyOrders.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MyOrders.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MyOrders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MyOrders.vue?vue&type=template&id=65de409c&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/MyOrders.vue?vue&type=template&id=65de409c& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrders_vue_vue_type_template_id_65de409c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrders_vue_vue_type_template_id_65de409c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyOrders_vue_vue_type_template_id_65de409c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MyOrders.vue?vue&type=template&id=65de409c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MyOrders.vue?vue&type=template&id=65de409c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MyOrders.vue?vue&type=template&id=65de409c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MyOrders.vue?vue&type=template&id=65de409c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "v-row",
    [
      _vm._l(_vm.orders, function(order, index) {
        return _c(
          "v-col",
          { key: order.id, attrs: { cols: "12", sm: "4" } },
          [
            _c(
              "v-card",
              [
                _c(
                  "div",
                  { staticClass: "d-flex align-start justify-space-between" },
                  [
                    _c(
                      "div",
                      [
                        _c("v-card-title", [_vm._v(_vm._s(order.name))]),
                        _vm._v(" "),
                        _c(
                          "v-card-subtitle",
                          [
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  label: "",
                                  color: order.color,
                                  small: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(order.tag) +
                                    "\n                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-chip",
                              {
                                attrs: {
                                  label: "",
                                  color: order.color,
                                  small: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(order.time) +
                                    "\n                        "
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
                    _c(
                      "div",
                      [_c("v-card-title", [_vm._v(_vm._s(index + 1))])],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("v-card-text", [
                  _vm._v(
                    "\n                " +
                      _vm._s(order.logistic) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c("v-card-text", [
                  _vm._v(
                    "\n                " +
                      _vm._s(order.address) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      { attrs: { href: "tel:" + order.phone, small: "" } },
                      [_vm._v("\n                    Тел\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          href:
                            "https://api.whatsapp.com/send?phone=" +
                            order.whatsapp +
                            "&text=" +
                            encodeURIComponent("Здравствуйте! Это, EAT&FIT "),
                          small: "",
                          target: "_blank"
                        }
                      },
                      [_vm._v("\n                    Ватсап\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          href:
                            "yandexmaps://maps.yandex.ru/?rtext=~" +
                            order.lat +
                            "," +
                            order.lng,
                          small: ""
                        }
                      },
                      [_vm._v("\n                    Yndx\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          href:
                            "dgis://2gis.ru/routeSearch/rsType/car/to/" +
                            order.lng +
                            "," +
                            order.lat,
                          small: ""
                        }
                      },
                      [_vm._v("\n                    2GIS\n                ")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-card-actions",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "white--text",
                        attrs: {
                          color: "blue-grey",
                          small: "",
                          disabled: order.is_notified
                        },
                        on: {
                          click: function($event) {
                            return _vm.notify(order.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Еду\n                    "
                        ),
                        order.is_notified
                          ? _c("v-icon", { attrs: { right: "" } }, [
                              _vm._v(
                                "\n                        mdi-check\n                    "
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "white--text",
                        attrs: { color: "blue-grey", small: "" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.openDialog(order)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    Отчет\n                    "
                        ),
                        order.is_reported
                          ? _c("v-icon", { attrs: { right: "" } }, [
                              _vm._v(
                                "\n                        mdi-check\n                    "
                              )
                            ])
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
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { transition: "dialog-bottom-transition", "max-width": "600" },
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
                { attrs: { color: "primary", dark: "" } },
                [
                  _vm._v(
                    "\n                Отчет " +
                      _vm._s(_vm.lead.name) +
                      "\n                "
                  ),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
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
                "v-card-text",
                [
                  _c(
                    "v-radio-group",
                    {
                      attrs: { row: "" },
                      model: {
                        value: _vm.delivered,
                        callback: function($$v) {
                          _vm.delivered = $$v
                        },
                        expression: "delivered"
                      }
                    },
                    [
                      _c("v-radio", {
                        staticClass: "mb-1",
                        attrs: { label: "Доставлено", value: "Доставлено" }
                      }),
                      _vm._v(" "),
                      _c("v-radio", {
                        attrs: {
                          label: "Не доставлено",
                          value: "Не доставлено"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: { outlined: "", label: "Комментарий" },
                    model: {
                      value: _vm.comment,
                      callback: function($$v) {
                        _vm.comment = $$v
                      },
                      expression: "comment"
                    }
                  }),
                  _vm._v(" "),
                  _vm.delivered === "Доставлено"
                    ? _c(
                        "v-radio-group",
                        {
                          attrs: { row: "" },
                          model: {
                            value: _vm.payment_type,
                            callback: function($$v) {
                              _vm.payment_type = $$v
                            },
                            expression: "payment_type"
                          }
                        },
                        _vm._l(_vm.types, function(type) {
                          return _c("v-radio", {
                            key: type.name,
                            staticClass: "mb-2",
                            attrs: { label: type.name, value: type.val }
                          })
                        }),
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.payment_type !== "Без оплаты"
                    ? _c("v-text-field", {
                        attrs: { label: "Сумма", outlined: "" },
                        model: {
                          value: _vm.amount,
                          callback: function($$v) {
                            _vm.amount = $$v
                          },
                          expression: "amount"
                        }
                      })
                    : _vm._e()
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
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n                    Закрыть\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.report }
                    },
                    [
                      _vm._v(
                        "\n                    Отправить\n                "
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
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);