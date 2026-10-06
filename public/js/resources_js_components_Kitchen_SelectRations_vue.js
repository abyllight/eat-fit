"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Kitchen_SelectRations_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectRations.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectRations.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SelectRations",
  data: function data() {
    return {
      rations: [],
      dialog: false,
      item: {},
      ingredients: [],
      cityId: 1,
      cities: [{
        id: 1,
        name: 'Астана'
      }, {
        id: 2,
        name: 'Алматы'
      }]
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters['auth/user'];
    },
    // only diet works with both cities; everyone else is scoped to their own on the server
    isDiet: function isDiet() {
      return this.user.role_slugs.includes('diet');
    }
  },
  created: function created() {
    this.cityId = Number(this.$route.query.city_id) || this.user.city_id || 1;
    this.generateCode();
    this.getList();
  },
  methods: {
    generateCode: function generateCode() {
      axios.get('/api/select/generate-code').then(function (response) {})["catch"](function (error) {
        console.log(error);
      });
    },
    getList: function getList() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/select/rations', {
                  params: _this.isDiet ? {
                    city_id: _this.cityId
                  } : {}
                }).then(function (response) {
                  _this.rations = response.data;
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
    changeCity: function changeCity() {
      this.$router.replace({
        query: {
          city_id: this.cityId
        }
      })["catch"](function () {});
      this.getList();
    },
    openDetails: function openDetails(id) {
      this.$router.push({
        name: 'stickers',
        params: {
          id: id
        },
        query: this.isDiet ? {
          city_id: this.cityId
        } : {}
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Kitchen/SelectRations.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Kitchen/SelectRations.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectRations_vue_vue_type_template_id_77fe754e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectRations.vue?vue&type=template&id=77fe754e& */ "./resources/js/components/Kitchen/SelectRations.vue?vue&type=template&id=77fe754e&");
/* harmony import */ var _SelectRations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectRations.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/SelectRations.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectRations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectRations_vue_vue_type_template_id_77fe754e___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectRations_vue_vue_type_template_id_77fe754e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/SelectRations.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kitchen/SelectRations.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Kitchen/SelectRations.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectRations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectRations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectRations.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectRations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kitchen/SelectRations.vue?vue&type=template&id=77fe754e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Kitchen/SelectRations.vue?vue&type=template&id=77fe754e& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectRations_vue_vue_type_template_id_77fe754e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectRations_vue_vue_type_template_id_77fe754e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectRations_vue_vue_type_template_id_77fe754e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectRations.vue?vue&type=template&id=77fe754e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectRations.vue?vue&type=template&id=77fe754e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectRations.vue?vue&type=template&id=77fe754e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectRations.vue?vue&type=template&id=77fe754e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _vm.isDiet
        ? _c(
            "v-btn-toggle",
            {
              staticClass: "mb-5",
              attrs: { mandatory: "", dense: "", color: "primary" },
              on: { change: _vm.changeCity },
              model: {
                value: _vm.cityId,
                callback: function($$v) {
                  _vm.cityId = $$v
                },
                expression: "cityId"
              }
            },
            _vm._l(_vm.cities, function(c) {
              return _c("v-btn", { key: c.id, attrs: { value: c.id } }, [
                _vm._v("\n            " + _vm._s(c.name) + "\n        ")
              ])
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.rations.length === 0
        ? _c("p", [_vm._v("Пусто")])
        : _c(
            "v-row",
            _vm._l(_vm.rations, function(r) {
              return _c(
                "v-col",
                { key: r.ration, attrs: { cols: "12", sm: "4" } },
                [
                  _c(
                    "v-sheet",
                    {
                      staticClass:
                        "d-flex flex-column align-center justify-center text-center pa-5",
                      staticStyle: { cursor: "pointer" },
                      attrs: {
                        color: "blue-grey lighten-5",
                        elevation: "2",
                        rounded: ""
                      },
                      on: {
                        click: function($event) {
                          return _vm.openDetails(r.ration_id)
                        }
                      }
                    },
                    [
                      _c("h1", { staticClass: "display-1 mb-5" }, [
                        _vm._v(_vm._s(r.ration))
                      ]),
                      _vm._v(" "),
                      _c("h1", { staticClass: "display-1 font-weight-bold" }, [
                        _vm._v(_vm._s(r.items.length))
                      ])
                    ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);