"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Shop_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/Products.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/Products.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities_CRUD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utilities/CRUD */ "./resources/js/components/Utilities/CRUD.vue");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Products",
  components: {
    CRUD: _Utilities_CRUD__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: true,
      dialog: false,
      dialogDelete: false,
      title: 'Продукт',
      categories: [],
      headers: [{
        text: '#',
        value: 'index'
      }, {
        text: 'Image',
        value: 'image'
      }, {
        text: 'Имя',
        value: 'title'
      }, {
        text: 'Цена',
        value: 'price'
      }, {
        text: 'Категория',
        value: 'category_name'
      }, {
        text: 'Действия',
        value: 'actions',
        sortable: false
      }],
      items: [],
      id: null,
      multipart: true,
      models: [{
        model: 'title',
        label: 'Название',
        type: 'v-text-field',
        value: null
      }, {
        model: 'category_id',
        label: 'Категория',
        type: 'v-select',
        chips: false,
        multiple: false,
        item_name: 'title',
        items: [],
        value: null
      }, {
        model: 'image',
        label: 'Картинка',
        type: 'v-file-input',
        value: null
      }, {
        model: 'price',
        label: 'Цена',
        type: 'v-text-field',
        value: null
      }, {
        model: 'wholesale_price',
        label: 'Цена оптовая',
        type: 'v-text-field',
        value: null
      }, {
        model: 'description',
        label: 'Описание',
        type: 'v-textarea',
        value: null
      }, {
        model: 'composition',
        label: 'Состав',
        type: 'v-textarea',
        value: null
      }, {
        model: 'weight',
        label: 'Вес',
        type: 'v-text-field',
        value: null
      }, {
        model: 'kcal',
        label: 'Ккал',
        type: 'v-text-field',
        value: null
      }, {
        model: 'fat',
        label: 'Жиры',
        type: 'v-text-field',
        value: null
      }, {
        model: 'protein',
        label: 'Белки',
        type: 'v-text-field',
        value: null
      }, {
        model: 'carbohydrate',
        label: 'Углеводы',
        type: 'v-text-field',
        value: null
      }],
      link: '/api/products/',
      is_edit: false
    };
  },
  mounted: function mounted() {
    this.fetchProducts();
    this.fetchCategories();
  },
  methods: {
    fetchProducts: function fetchProducts() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/products').then(function (response) {
                  _this.items = response.data;
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
    fetchCategories: function fetchCategories() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/product-categories').then(function (response) {
                  _this2.categories = response.data;
                  _this2.models[1].items = response.data;
                })["catch"](function (error) {
                  console.log(error);
                })["finally"](function () {
                  return _this2.loading = false;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    create: function create() {
      this.dialog = true;
    },
    edit: function edit(item) {
      this.models.map(function (obj) {
        obj.value = item[obj.model];
      });
      this.id = item.id;
      this.is_edit = true;
      this.dialog = true;
    },
    close: function close() {
      this.dialog = false;
      this.dialogDelete = false;
      this.is_edit = false;
      this.models.map(function (obj) {
        obj.value = null;
      });
    },
    refresh: function refresh() {
      this.close();
      this.fetchCategories();
    },
    deleteItem: function deleteItem(id) {
      this.id = id;
      this.dialogDelete = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Utilities/CRUD.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Utilities/CRUD.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CRUD",
  props: {
    title: String,
    dialog: Boolean,
    dialogDelete: Boolean,
    id: Number,
    models: Array,
    link: String,
    isEdit: Boolean,
    multipart: Boolean
  },
  data: function data() {
    return {
      errors: []
    };
  },
  computed: {
    method: function method() {
      return this.isEdit ? 'PATCH' : 'POST';
    },
    action_link: function action_link() {
      return this.isEdit ? this.link + this.id : this.link;
    },
    delete_link: function delete_link() {
      return this.link + this.id;
    },
    hasImage: function hasImage() {
      var image = this.models.find(function (item) {
        return item.model === 'image';
      });
      if (!image) return false;
      return image.value !== null;
    },
    image: function image() {
      return '';
      /*let image = this.models.find(item => {
          return item.model === 'image'
      })
       return image.value !== null ? 'storage/'+image.value : ''*/
    }
  },
  methods: {
    close: function close() {
      this.errors = [];
      this.$emit('close');
    },
    save: function save() {
      var _this = this;

      var params = {};
      var dataForm = new FormData();
      this.models.map(function (item) {
        if (item.model === 'phone') {
          item.value = _this.getPhone(item.value);
        }

        dataForm.append(item.model, item.value);
        return params[item.model] = item.value;
      });
      axios({
        method: this.method,
        url: this.action_link,
        data: this.multipart ? dataForm : params,
        headers: {
          "Content-Type": this.multipart ? "multipart/form-data" : 'application/json'
        }
      }).then(function (response) {
        _this.$emit('refresh');

        _this.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this2 = this;

      axios["delete"](this.delete_link).then(function (response) {
        _this2.$emit('refresh');

        _this2.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getPhone: function getPhone(phone) {
      return phone.replace(/[^0-9]/g, '');
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Shop/Products.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Shop/Products.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_ae7774bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=ae7774bc& */ "./resources/js/components/Shop/Products.vue?vue&type=template&id=ae7774bc&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/Shop/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_ae7774bc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_ae7774bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Shop/Products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Utilities/CRUD.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Utilities/CRUD.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CRUD_vue_vue_type_template_id_414644ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CRUD.vue?vue&type=template&id=414644ce& */ "./resources/js/components/Utilities/CRUD.vue?vue&type=template&id=414644ce&");
/* harmony import */ var _CRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CRUD.vue?vue&type=script&lang=js& */ "./resources/js/components/Utilities/CRUD.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CRUD_vue_vue_type_template_id_414644ce___WEBPACK_IMPORTED_MODULE_0__.render,
  _CRUD_vue_vue_type_template_id_414644ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Utilities/CRUD.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Shop/Products.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Shop/Products.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Utilities/CRUD.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Utilities/CRUD.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CRUD.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Utilities/CRUD.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CRUD_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Shop/Products.vue?vue&type=template&id=ae7774bc&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Shop/Products.vue?vue&type=template&id=ae7774bc& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_ae7774bc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_ae7774bc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_ae7774bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=ae7774bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/Products.vue?vue&type=template&id=ae7774bc&");


/***/ }),

/***/ "./resources/js/components/Utilities/CRUD.vue?vue&type=template&id=414644ce&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Utilities/CRUD.vue?vue&type=template&id=414644ce& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CRUD_vue_vue_type_template_id_414644ce___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CRUD_vue_vue_type_template_id_414644ce___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CRUD_vue_vue_type_template_id_414644ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CRUD.vue?vue&type=template&id=414644ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Utilities/CRUD.vue?vue&type=template&id=414644ce&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/Products.vue?vue&type=template&id=ae7774bc&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Shop/Products.vue?vue&type=template&id=ae7774bc& ***!
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
    "v-row",
    [
      _c(
        "v-col",
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.items,
              loading: _vm.loading,
              "loading-text": "Загрузка..."
            },
            scopedSlots: _vm._u([
              {
                key: "item.index",
                fn: function(ref) {
                  var index = ref.index
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(index + 1) +
                        "\n            "
                    )
                  ]
                }
              },
              {
                key: "item.image",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("img", {
                      attrs: { src: "storage/" + item.image, width: "40" }
                    })
                  ]
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
                        _c("v-toolbar-title", [_vm._v("Продукты")]),
                        _vm._v(" "),
                        _c("v-divider", {
                          staticClass: "mx-4",
                          attrs: { inset: "", vertical: "" }
                        }),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "mb-2",
                            attrs: { color: "primary", dark: "" },
                            on: { click: _vm.create }
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
                      "v-btn",
                      {
                        staticClass: "mr-2",
                        attrs: { "x-small": "" },
                        on: {
                          click: function($event) {
                            return _vm.edit(item)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    редактировать\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { "x-small": "" },
                        on: {
                          click: function($event) {
                            return _vm.deleteItem(item.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    удалить\n                "
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("CRUD", {
            attrs: {
              dialog: _vm.dialog,
              "dialog-delete": _vm.dialogDelete,
              title: _vm.title,
              models: _vm.models,
              link: _vm.link,
              id: _vm.id,
              "is-edit": _vm.is_edit,
              multipart: _vm.multipart
            },
            on: { close: _vm.close, refresh: _vm.refresh }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Utilities/CRUD.vue?vue&type=template&id=414644ce&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Utilities/CRUD.vue?vue&type=template&id=414644ce& ***!
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
                    { attrs: { icon: "", dark: "" }, on: { click: _vm.close } },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))])
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
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { sm: "12", lg: "4", "offset-lg": "4" } },
                            [
                              _vm.hasImage
                                ? _c("img", {
                                    attrs: { src: _vm.image, width: "320" }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.models, function(model) {
                                return _c(model.type, {
                                  key: model.model,
                                  tag: "component",
                                  attrs: {
                                    label: model.label,
                                    "error-messages": _vm.errors[model.model],
                                    "v-mask":
                                      model.model === "phone"
                                        ? "+7 (###) ###-##-##"
                                        : "",
                                    chips: model.chips,
                                    items: model.items,
                                    "item-text": model.item_name,
                                    "item-value": "id",
                                    multiple: model.multiple,
                                    outlined: "",
                                    clearable: ""
                                  },
                                  model: {
                                    value: model.value,
                                    callback: function($$v) {
                                      _vm.$set(model, "value", $$v)
                                    },
                                    expression: "model.value"
                                  }
                                })
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
                                    "\n                                Сохранить\n                            "
                                  )
                                ]
                              )
                            ],
                            2
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
                    [_vm._v("ДА")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);