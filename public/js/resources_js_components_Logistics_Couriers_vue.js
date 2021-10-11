"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Logistics_Couriers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Couriers.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Users.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Couriers',
  data: function data() {
    return {
      dialog: false,
      dialogDelete: false,
      loading: true,
      headers: [{
        text: '#',
        value: 'index'
      }, {
        text: 'Имя',
        value: 'name'
      }, {
        text: 'Телефон',
        value: 'phone',
        sortable: false
      }, {
        text: 'Номер машины',
        value: 'car',
        sortable: false
      }, {
        text: 'Действия',
        value: 'actions',
        sortable: false
      }],
      couriers: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        name: '',
        phone: '',
        car: '',
        password: ''
      },
      defaultItem: {
        id: 0,
        name: null,
        phone: null,
        car: null,
        password: null
      },
      errors: []
    };
  },
  created: function created() {
    this.fetchCouriers();
  },
  methods: {
    fetchCouriers: function fetchCouriers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/couriers').then(function (response) {
                  var _response$data$data;

                  console.log(response, 'fetch');
                  _this.couriers = (_response$data$data = response.data.data) !== null && _response$data$data !== void 0 ? _response$data$data : [];
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  return _this.loading = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.couriers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.id = item.id;
      this.editedItem.password = '1';
      this.dialog = true;
    },
    editPass: function editPass(item) {
      this.$router.push('couriers/' + item.id);
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.couriers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedItem.id = item.id;
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this2 = this;

      axios["delete"]('/api/couriers/' + this.editedItem.id).then(function (response) {
        _this2.close();

        if (response.data.status) {
          _this2.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.message,
            'color': 'green',
            'type': 'success'
          });

          _this2.fetchCouriers();
        } else {
          _this2.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.message,
            'color': 'error',
            'type': 'error'
          });
        }
      })["catch"](function (error) {
        _this2.$store.commit('SET_ALERT', {
          'isVisible': true,
          'msg': error.message,
          'color': 'error',
          'type': 'error'
        });
      });
      this.close();
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.dialogDelete = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    getPhone: function getPhone() {
      return this.editedItem.phone ? this.editedItem.phone.replace(/[^0-9]/g, '') : '';
    },
    save: function save() {
      var _this4 = this;

      var phone = this.getPhone();
      var link = '/api/couriers/';

      if (this.editedIndex > -1) {
        link += this.editedItem.id;
      }

      axios.post(link, {
        name: this.editedItem.name,
        phone: phone,
        car: this.editedItem.car,
        password: this.editedItem.password
      }).then(function (response) {
        _this4.close();

        _this4.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.message,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });

        _this4.fetchCouriers();
      })["catch"](function (error) {
        _this4.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Logistics/Couriers.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Logistics/Users.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Couriers_vue_vue_type_template_id_349f312d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=349f312d& */ "./resources/js/components/Logistics/Couriers.vue?vue&type=template&id=349f312d&");
/* harmony import */ var _Couriers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/Logistics/Couriers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Couriers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Couriers_vue_vue_type_template_id_349f312d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Couriers_vue_vue_type_template_id_349f312d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Logistics/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Logistics/Couriers.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Logistics/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Couriers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Couriers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Couriers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./resources/js/components/Logistics/Couriers.vue?vue&type=template&id=349f312d&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Logistics/Users.vue?vue&type=template&id=349f312d& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Couriers_vue_vue_type_template_id_349f312d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Couriers_vue_vue_type_template_id_349f312d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Couriers_vue_vue_type_template_id_349f312d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=349f312d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Couriers.vue?vue&type=template&id=349f312d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Couriers.vue?vue&type=template&id=349f312d&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Logistics/Users.vue?vue&type=template&id=349f312d& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.couriers,
      loading: _vm.loading,
      "loading-text": "Loading... Please wait"
    },
    scopedSlots: _vm._u([
      {
        key: "item.index",
        fn: function(ref) {
          var index = ref.index
          return [_vm._v("\n        " + _vm._s(index + 1) + "\n    ")]
        }
      },
      {
        key: "top",
        fn: function() {
          return [
            _c(
              "v-toolbar",
              { attrs: { flat: "" } },
              [
                _c("v-toolbar-title", [_vm._v("Курьеры")]),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "mx-4",
                  attrs: { inset: "", vertical: "" }
                }),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-dialog",
                  {
                    attrs: { "max-width": "600px" },
                    scopedSlots: _vm._u([
                      {
                        key: "activator",
                        fn: function(ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-btn",
                              _vm._g(
                                _vm._b(
                                  {
                                    staticClass: "mb-2",
                                    attrs: { color: "primary", dark: "" }
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [
                                _vm._v(
                                  "\n                        Добавить\n                    "
                                )
                              ]
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.dialog,
                      callback: function($$v) {
                        _vm.dialog = $$v
                      },
                      expression: "dialog"
                    }
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "v-card",
                      [
                        _c("v-card-title", [
                          _c("span", { staticClass: "text-h5" }, [
                            _vm._v("Курьер")
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
                                      {
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Имя",
                                            "error-messages": _vm.errors.name
                                          },
                                          model: {
                                            value: _vm.editedItem.name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "name",
                                                typeof $$v === "string"
                                                  ? $$v.trim()
                                                  : $$v
                                              )
                                            },
                                            expression: "editedItem.name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          directives: [
                                            {
                                              name: "mask",
                                              rawName: "v-mask",
                                              value: "+7 (###) ###-##-##",
                                              expression: "'+7 (###) ###-##-##'"
                                            }
                                          ],
                                          attrs: {
                                            label: "Телефон",
                                            "error-messages": _vm.errors.phone
                                          },
                                          model: {
                                            value: _vm.editedItem.phone,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "phone",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.phone"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: { label: "Номер машины" },
                                          model: {
                                            value: _vm.editedItem.car,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "car",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.car"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "4" }
                                      },
                                      [
                                        _vm.editedIndex === -1
                                          ? _c("v-text-field", {
                                              attrs: {
                                                label: "Пароль",
                                                "error-messages":
                                                  _vm.errors.password
                                              },
                                              model: {
                                                value: _vm.editedItem.password,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.editedItem,
                                                    "password",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editedItem.password"
                                              }
                                            })
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
                                  "\n                            Отмена\n                        "
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
                                  "\n                            Сохранить\n                        "
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
                ),
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
                          _vm._v("Вы уверены, что хотите удалить?")
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
                                on: { click: _vm.close }
                              },
                              [_vm._v("Отмена")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: { click: _vm.deleteItemConfirm }
                              },
                              [_vm._v("OK")]
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
          ]
        },
        proxy: true
      },
      {
        key: "item.actions",
        fn: function(ref) {
          var item = ref.item
          return [
            _c(
              "v-icon",
              {
                staticClass: "mr-2",
                attrs: { small: "" },
                on: {
                  click: function($event) {
                    return _vm.editItem(item)
                  }
                }
              },
              [_vm._v("\n            mdi-pencil\n        ")]
            ),
            _vm._v(" "),
            _c(
              "v-icon",
              {
                staticClass: "mr-2",
                attrs: { small: "" },
                on: {
                  click: function($event) {
                    return _vm.editPass(item)
                  }
                }
              },
              [_vm._v("\n            mdi-lock\n        ")]
            ),
            _vm._v(" "),
            _c(
              "v-icon",
              {
                attrs: { small: "" },
                on: {
                  click: function($event) {
                    return _vm.deleteItem(item)
                  }
                }
              },
              [_vm._v("\n            mdi-delete\n        ")]
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
