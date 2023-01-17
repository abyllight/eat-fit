"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dietology_SelectDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Blacklist.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Blacklist.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Blacklist",
  props: {
    ingredients: Array,
    categories: Array,
    blacklist: Array,
    mix: Array
  },
  data: function data() {
    return {
      applied_categories: []
    };
  },
  methods: {
    applyCategories: function applyCategories() {
      var _this = this;

      var ings = this.applied_categories.map(function (item) {
        var category = _this.categories.find(function (obj) {
          return obj.id === item;
        });

        return category.ingredient_ids;
      });
      ings = ings.flat();
      ings = ings.concat(this.blacklist);
      this.mix = _toConsumableArray(new Set(ings));
    },
    removeIngredientFromBlacklist: function removeIngredientFromBlacklist(id) {
      this.mix = this.mix.filter(function (item) {
        return item !== id;
      });
    },
    saveBlacklist: function saveBlacklist() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/blacklist', {
        id: this.order.id,
        blacklist: this.mix
      }).then(function (response) {
        _this2.getSelectDetailsByOrder(_this2.order.id);

        _this2.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': 'green',
          'type': 'success'
        });
      })["catch"](function (error) {
        console.log(error);
        _this2.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/DietDescription.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/DietDescription.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DietDescription",
  props: ['diet', 'diet_old']
});

/***/ }),

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dishes",
  components: {
    TiptapVuetify: tiptap_vuetify__WEBPACK_IMPORTED_MODULE_1__.TiptapVuetify
  },
  data: function data() {
    return {
      dishes: [],
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
                return axios.get('/api/dishes').then(function (response) {
                  _this.dishes = response.data;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/SelectDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/SelectDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Kitchen_SelectModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Kitchen/SelectModal */ "./resources/js/components/Kitchen/SelectModal.vue");
/* harmony import */ var _Stat_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Stat.vue */ "./resources/js/components/Dietology/Stat.vue");
/* harmony import */ var _DietDescription_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DietDescription.vue */ "./resources/js/components/Dietology/DietDescription.vue");
/* harmony import */ var _Blacklist_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Blacklist.vue */ "./resources/js/components/Dietology/Blacklist.vue");
/* harmony import */ var _Dishes_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dishes.vue */ "./resources/js/components/Dietology/Dishes.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Select',
  props: {
    id: Number,
    r_id: Number
  },
  components: {
    Blacklist: _Blacklist_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DietDescription: _DietDescription_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Stat: _Stat_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectModal: _Kitchen_SelectModal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      items: [{
        text: 'Селекты',
        disabled: false,
        href: '/select'
      }, {
        text: 'Детали',
        disabled: true
      }],
      order: {},
      stat: {},
      loading: true,
      select_loading: false,
      dialog: false,
      dialog2: false,
      dialog3: false,
      ingredients: [],
      categories: [],
      dishes: [],
      dish: {},
      duty_dish_id: null,
      rations: [],
      select_previous: [],
      select_result: [],
      previous: {},
      result: {
        dish_name: ''
      },
      blacklist: [],
      mix: [],
      wishlist: [],
      wish_ids: [],
      tag: '',
      tags: [],
      cuisine: {},
      ration: {},
      applied_categories: [],
      ration_id: null,
      ingredient_categories: [],
      chosen_category: {},
      chosen_ingredient: {},
      target_ingredient: null,
      tablewares: [],
      errors: [],
      r1_val: null,
      r2_val: null
    };
  },
  mounted: function mounted() {
    this.getSelectDetailsByOrder();
    this.getCuisine();
    this.getCategories();
    this.getIngredients();
    this.getTablewares();
    this.getRations();
    this.getDishesByRation(this.r_id);
  },
  computed: {
    isDutyDishId: function isDutyDishId() {
      return this.dish.id === this.duty_dish_id;
    },
    isDisabled: function isDisabled() {
      return this.result.dish_id === this.dish.id;
    },
    tw_id: function tw_id() {
      return this.result.tableware ? this.result.tableware.id : this.ration.tableware_id;
    }
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/ingredients').then(function (response) {
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
    getTablewares: function getTablewares() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/tableware').then(function (response) {
                  _this2.tablewares = response.data.data;
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
    getCategories: function getCategories() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories').then(function (response) {
                  _this3.categories = response.data;
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
    getRations: function getRations() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/rations').then(function (response) {
                  _this4.rations = response.data;
                  _this4.ration = _this4.rations.find(function (x) {
                    return x.id === _this4.r_id;
                  });
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
    getCuisine: function getCuisine() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/cuisine/duty').then(function (response) {
                  _this5.cuisine = response.data.cuisine;
                })["catch"](function (error) {
                  _this5.loading = false;

                  _this5.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    setTW: function setTW(id) {
      var _this6 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/tableware', {
        order_id: this.order.id,
        ration_id: this.r_id,
        dish_id: this.dish.id,
        cuisine_id: this.cuisine.id,
        tableware_id: id
      }).then(function (response) {
        if (!response.data.status) {
          _this6.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this6.getSelectDetailsByOrder();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getSelectDetailsByOrder: function getSelectDetailsByOrder() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/select/order/' + _this7.id).then(function (response) {
                  _this7.order = response.data.order;
                  _this7.previous = response.data.previous;
                  _this7.result = response.data.result;
                  _this7.blacklist = response.data.blacklist;
                  _this7.mix = response.data.blacklist;
                  _this7.wishlist = response.data.wishlist;
                  _this7.wish_ids = Object.keys(_this7.result).length > 0 ? _this7.result.selected_wishes : [];
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    getDishesByRation: function getDishesByRation(id) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this8.ration_id = _this8.r_id;
                _context7.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/dishes/ration/' + id).then(function (response) {
                  _this8.dishes = response.data;

                  if (_this8.dishes.length > 0) {
                    if (id === _this8.r_id) {
                      _this8.duty_dish_id = _this8.dishes[0].id;
                    }

                    _this8.dish = _this8.dishes.find(function (obj) {
                      return obj.id === _this8.result.dish_id;
                    });

                    if (!_this8.dish) {
                      _this8.dish = _this8.dishes[0];
                    }
                  } else {
                    _this8.dish.ingredients = [];
                  }
                })["catch"](function (error) {
                  console.log(error);
                });

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    applyCategories: function applyCategories() {
      var _this9 = this;

      var ings = this.applied_categories.map(function (item) {
        var category = _this9.categories.find(function (obj) {
          return obj.id === item;
        });

        return category.ingredient_ids;
      });
      ings = ings.flat();
      ings = ings.concat(this.blacklist);
      this.mix = _toConsumableArray(new Set(ings));
    },
    removeIngredientFromBlacklist: function removeIngredientFromBlacklist(id) {
      this.mix = this.mix.filter(function (item) {
        return item !== id;
      });
    },
    saveBlacklist: function saveBlacklist() {
      var _this10 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/blacklist', {
        id: this.order.id,
        blacklist: this.mix
      }).then(function (response) {
        _this10.getSelectDetailsByOrder(_this10.order.id);

        _this10.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': 'green',
          'type': 'success'
        });
      })["catch"](function (error) {
        console.log(error);
        _this10.errors = error.response.data.errors;
      });
    },
    addTag: function addTag() {
      var _this11 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/wishlist', {
        id: this.order.id,
        tag: this.tag
      }).then(function (response) {
        _this11.getSelectDetailsByOrder(_this11.order.id);

        _this11.tag = '';

        _this11.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });

        _this11.errors = [];
      })["catch"](function (error) {
        _this11.errors = error.response.data.errors;
      });
    },
    removeTag: function removeTag(tag) {
      var _this12 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/wishlist/remove', {
        id: this.order.id,
        tag: tag.wish
      }).then(function (response) {
        _this12.wishlist = _this12.wishlist.filter(function (item) {
          return item !== tag;
        });

        _this12.getSelectDetailsByOrder(_this12.order.id);

        _this12.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });
      })["catch"](function (error) {
        console.log(error);
        _this12.errors = error.response.data.errors;
      });
    },
    addWishToSelect: function addWishToSelect(id) {
      var _this13 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/wish', {
        order_id: this.order.id,
        ration_id: this.ration_id,
        cuisine_id: this.cuisine.id,
        dish_id: this.dish.id,
        w_id: id
      }).then(function (response) {
        _this13.wish_ids = response.data.data;

        _this13.getSelectDetailsByOrder();
      })["catch"](function (error) {
        _this13.errors = error.response.data.errors;
      });
    },
    hasResultIncludeIngredient: function hasResultIncludeIngredient(id) {
      if (Object.keys(this.result).length === 0) return true;
      return this.result.ingredient_ids.includes(id);
    },
    setDish: function setDish() {
      var _this14 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/add/dish', {
        order_id: this.order.id,
        ration_id: this.r_id,
        dish_id: this.dish.id,
        cuisine_id: this.cuisine.id
      }).then(function (response) {
        if (!response.data.status) {
          _this14.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this14.result = response.data.data;

        _this14.getSelectDetailsByOrder();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getAnalogName: function getAnalogName(id) {
      return this.result.ingredients.find(function (obj) {
        return obj.pivot.analog_id === id;
      }).name;
    },
    hasAnalog: function hasAnalog(id) {
      if (!this.result.ingredient_ids) return false;
      var index = this.result.ingredients.findIndex(function (obj) {
        return obj.pivot.analog_id === id;
      });
      return index >= 0;
    },
    addIngredient: function addIngredient(id) {
      var _this15 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/add/ingredient', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        if (!response.data.status) {
          _this15.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this15.result = response.data.data;

        _this15.getSelectDetailsByOrder(_this15.order.id);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    removeIngredient: function removeIngredient(id) {
      var _this16 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/remove/ingredient', {
        order_id: this.order.id,
        ration_id: this.r_id,
        cuisine_id: this.cuisine.id,
        dish_id: this.dish.id,
        ingredient_id: id
      }).then(function (response) {
        if (!response.data.status) {
          _this16.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this16.result = response.data.data;

        _this16.getSelectDetailsByOrder(_this16.order.id);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    showAnalogs: function showAnalogs(id) {
      this.getCategoriesByIngredient(id);
      this.target_ingredient = id;
      this.dialog2 = true;
    },
    getAnalogId: function getAnalogId(id) {
      return this.result.ingredients.find(function (obj) {
        return obj.pivot.analog_id === id;
      }).id;
    },
    replaceIngredient: function replaceIngredient(id) {
      var _this17 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/replace/ingredient', {
        order_id: this.order.id,
        ration_id: this.r_id,
        cuisine_id: this.cuisine.id,
        dish_id: this.dish.id,
        ingredient_id: this.target_ingredient,
        analog_id: id
      }).then(function (response) {
        if (response.data.status) {
          _this17.result = response.data.select;

          _this17.getSelectDetailsByOrder(_this17.order.id);

          _this17.closeDialog2();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    returnIngredient: function returnIngredient(target_id) {
      var _this18 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/return/ingredient', {
        select_id: this.result.id,
        ingredient_id: target_id,
        analog_id: this.getAnalogId(target_id)
      }).then(function (response) {
        if (response.data.status) {
          _this18.result = response.data.select;

          _this18.getSelectDetailsByOrder(_this18.order.id);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getCategoriesByIngredient: function getCategoriesByIngredient(id) {
      var _this19 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories/ingredient/' + id).then(function (response) {
                  _this19.ingredient_categories = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getSelectColor: function getSelectColor(order, r_id) {
      var select = order.result.find(function (x) {
        return x.r_id === r_id;
      });
      return select ? select.color : 'lime lighten-2';
    },
    isActive: function isActive(order, r_id) {
      var select = order.result.find(function (x) {
        return x.r_id === r_id;
      });
      return select ? select.is_active : true;
    },
    getSelectName: function getSelectName(id) {
      if (this.select_result.length > 0) {
        var select = this.select_result.find(function (x) {
          return x.ration_id === id;
        });
        return select ? select.dish_name : '';
      }

      return '';
    },
    closeDialog: function closeDialog() {
      this.dish = {};
      this.dialog = false;
      this.getSelectDetailsByOrder(this.order.id);
    },
    closeDialog2: function closeDialog2() {
      this.ingredient_categories = [];
      this.chosen_category = {};
      this.chosen_ingredient = {};
      this.target_ingredient = null;
      this.r1_val = null;
      this.dialog2 = false;
    },
    saveDetails: function saveDetails() {
      var _this20 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/add/details', this.result).then(function (response) {
        _this20.result = response.data.data;
        _this20.dialog3 = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    exportExcel: function exportExcel() {},
    r1: function r1() {
      this.replaceIngredient(this.r1_val);
    },
    addExtra: function addExtra(id) {
      var _this21 = this;

      if (!id) return;
      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/add/extra', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        _this21.result = response.data.data;

        _this21.getSelectDetailsByOrder(_this21.order.id);

        _this21.r2_val = null;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    removeExtra: function removeExtra(id) {
      var _this22 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/remove/extra', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        _this22.result = response.data.data;

        _this22.getSelectDetailsByOrder(_this22.order.id);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    showIngredient: function showIngredient(id) {
      var _this23 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/show/ingredient', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        _this23.result = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    hideIngredient: function hideIngredient(id) {
      var _this24 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/hide/ingredient', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        _this24.result = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Stat",
  props: {
    stat: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SelectModal",
  props: {
    dialog: Boolean,
    order: Object,
    cuisine: Object,
    ration: Object,
    blacklist: Array,
    wishlist: Array,
    result: Object,
    previous: Object,
    dishes: Array,
    dish: Object
  },
  data: function data() {
    return {
      categories: [],
      ingredients: [],
      applied_categories: [],
      errors: [],
      tag: '',
      rations: [],
      ration_id: null
    };
  },
  created: function created() {
    this.getCategories();
    this.getIngredients();
    this.getRations();
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/ingredients').then(function (response) {
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories').then(function (response) {
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
    getRations: function getRations() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/rations/required').then(function (response) {
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
    applyCategories: function applyCategories() {
      var _this4 = this;

      var ingredients = this.applied_categories.map(function (item) {
        var category = _this4.categories.find(function (obj) {
          return obj.id === item;
        });

        return category.ingredient_ids;
      });
      ingredients = ingredients.flat();
      ingredients = ingredients.concat(this.blacklist);
      this.$emit('update-blacklist', _toConsumableArray(new Set(ingredients)));
    },
    remove: function remove(id) {
      var array = this.blacklist.filter(function (item) {
        return item !== id;
      });
      this.$emit('update-blacklist', array);
    },
    addTag: function addTag() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/wishlist', {
        id: this.order.id,
        tag: this.tag
      }).then(function (response) {
        _this5.$emit('add-tag', _this5.tag);

        _this5.tag = '';

        _this5.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });

        _this5.errors = [];
      })["catch"](function (error) {
        _this5.errors = error.response.data.errors;
      });
    },
    removeTag: function removeTag(tag) {
      var _this6 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/wishlist/remove', {
        id: this.order.id,
        tag: tag
      }).then(function (response) {
        _this6.$emit('remove-tag', tag);

        _this6.tag = '';

        _this6.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });
      })["catch"](function (error) {
        _this6.errors = error.response.data.errors;
      });
    },
    hasResultIncludeIngredient: function hasResultIncludeIngredient(id) {
      if (!this.result.ingredient_ids) return;
      return this.result.ingredient_ids.includes(id);
    },
    setDish: function setDish() {
      var _this7 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/add/dish', {
        select_id: this.result.id,
        ration_id: this.ration.iiko_id,
        dish_id: this.dish.id
      }).then(function (response) {
        if (!response.data.status) {
          _this7.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this7.$emit('update-result', response.data.data);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    showAnalogs: function showAnalogs(id) {
      this.getCategoriesByIngredient(id);
      this.target_ingredient = id;
      this.dialog2 = true;
    },
    hasAnalog: function hasAnalog(id) {
      if (!this.result.ingredient_ids) return;
      var index = this.result.ingredients.findIndex(function (obj) {
        return obj.pivot.analog_id === id;
      });
      return index >= 0;
    },
    getAnalogId: function getAnalogId(id) {
      return this.result.ingredients.find(function (obj) {
        return obj.pivot.analog_id === id;
      }).id;
    },
    getAnalogName: function getAnalogName(id) {
      return this.result.ingredients.find(function (obj) {
        return obj.pivot.analog_id === id;
      }).name;
    },
    addIngredient: function addIngredient(id) {
      var _this8 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/add/ingredient', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        if (!response.data.status) {
          _this8.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this8.result = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    removeIngredient: function removeIngredient(id) {
      var _this9 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/remove/ingredient', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        if (!response.data.status) {
          _this9.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this9.result = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    replaceIngredient: function replaceIngredient(id) {
      var _this10 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/replace/ingredient', {
        select_id: this.result.id,
        ingredient_id: this.target_ingredient,
        analog_id: id
      }).then(function (response) {
        if (response.data.status) {
          _this10.result = response.data.select;

          _this10.closeDialog2();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    returnIngredient: function returnIngredient(target_id) {
      var _this11 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/return/ingredient', {
        select_id: this.result.id,
        ingredient_id: target_id,
        analog_id: this.getAnalogId(target_id)
      }).then(function (response) {
        if (response.data.status) {
          _this11.result = response.data.select;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getDishesByRation: function getDishesByRation(id) {
      this.$emit('update-dishes', id);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Dietology/Blacklist.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dietology/Blacklist.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Blacklist_vue_vue_type_template_id_1b17d3c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blacklist.vue?vue&type=template&id=1b17d3c3& */ "./resources/js/components/Dietology/Blacklist.vue?vue&type=template&id=1b17d3c3&");
/* harmony import */ var _Blacklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blacklist.vue?vue&type=script&lang=js& */ "./resources/js/components/Dietology/Blacklist.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blacklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blacklist_vue_vue_type_template_id_1b17d3c3___WEBPACK_IMPORTED_MODULE_0__.render,
  _Blacklist_vue_vue_type_template_id_1b17d3c3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dietology/Blacklist.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dietology/DietDescription.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Dietology/DietDescription.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DietDescription_vue_vue_type_template_id_cf4e6be4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DietDescription.vue?vue&type=template&id=cf4e6be4& */ "./resources/js/components/Dietology/DietDescription.vue?vue&type=template&id=cf4e6be4&");
/* harmony import */ var _DietDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DietDescription.vue?vue&type=script&lang=js& */ "./resources/js/components/Dietology/DietDescription.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DietDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DietDescription_vue_vue_type_template_id_cf4e6be4___WEBPACK_IMPORTED_MODULE_0__.render,
  _DietDescription_vue_vue_type_template_id_cf4e6be4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dietology/DietDescription.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/Dietology/SelectDetails.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Dietology/SelectDetails.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectDetails_vue_vue_type_template_id_0c3448cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectDetails.vue?vue&type=template&id=0c3448cc& */ "./resources/js/components/Dietology/SelectDetails.vue?vue&type=template&id=0c3448cc&");
/* harmony import */ var _SelectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/Dietology/SelectDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectDetails_vue_vue_type_template_id_0c3448cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectDetails_vue_vue_type_template_id_0c3448cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dietology/SelectDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dietology/Stat.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Dietology/Stat.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stat.vue?vue&type=template&id=ed2d80c4& */ "./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4&");
/* harmony import */ var _Stat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stat.vue?vue&type=script&lang=js& */ "./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Stat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dietology/Stat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kitchen/SelectModal.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Kitchen/SelectModal.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectModal_vue_vue_type_template_id_21ed83eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectModal.vue?vue&type=template&id=21ed83eb& */ "./resources/js/components/Kitchen/SelectModal.vue?vue&type=template&id=21ed83eb&");
/* harmony import */ var _SelectModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/SelectModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectModal_vue_vue_type_template_id_21ed83eb___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectModal_vue_vue_type_template_id_21ed83eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/SelectModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dietology/Blacklist.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Dietology/Blacklist.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blacklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blacklist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Blacklist.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blacklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dietology/DietDescription.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Dietology/DietDescription.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DietDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DietDescription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/DietDescription.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DietDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Dietology/SelectDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Dietology/SelectDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/SelectDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Stat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kitchen/SelectModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Kitchen/SelectModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dietology/Blacklist.vue?vue&type=template&id=1b17d3c3&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Dietology/Blacklist.vue?vue&type=template&id=1b17d3c3& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blacklist_vue_vue_type_template_id_1b17d3c3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blacklist_vue_vue_type_template_id_1b17d3c3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blacklist_vue_vue_type_template_id_1b17d3c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blacklist.vue?vue&type=template&id=1b17d3c3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Blacklist.vue?vue&type=template&id=1b17d3c3&");


/***/ }),

/***/ "./resources/js/components/Dietology/DietDescription.vue?vue&type=template&id=cf4e6be4&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Dietology/DietDescription.vue?vue&type=template&id=cf4e6be4& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DietDescription_vue_vue_type_template_id_cf4e6be4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DietDescription_vue_vue_type_template_id_cf4e6be4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DietDescription_vue_vue_type_template_id_cf4e6be4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DietDescription.vue?vue&type=template&id=cf4e6be4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/DietDescription.vue?vue&type=template&id=cf4e6be4&");


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

/***/ "./resources/js/components/Dietology/SelectDetails.vue?vue&type=template&id=0c3448cc&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Dietology/SelectDetails.vue?vue&type=template&id=0c3448cc& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDetails_vue_vue_type_template_id_0c3448cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDetails_vue_vue_type_template_id_0c3448cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectDetails_vue_vue_type_template_id_0c3448cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectDetails.vue?vue&type=template&id=0c3448cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/SelectDetails.vue?vue&type=template&id=0c3448cc&");


/***/ }),

/***/ "./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Stat_vue_vue_type_template_id_ed2d80c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Stat.vue?vue&type=template&id=ed2d80c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4&");


/***/ }),

/***/ "./resources/js/components/Kitchen/SelectModal.vue?vue&type=template&id=21ed83eb&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Kitchen/SelectModal.vue?vue&type=template&id=21ed83eb& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectModal_vue_vue_type_template_id_21ed83eb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectModal_vue_vue_type_template_id_21ed83eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectModal_vue_vue_type_template_id_21ed83eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectModal.vue?vue&type=template&id=21ed83eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectModal.vue?vue&type=template&id=21ed83eb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Blacklist.vue?vue&type=template&id=1b17d3c3&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Blacklist.vue?vue&type=template&id=1b17d3c3& ***!
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
      _c("h3", { staticClass: "mb-5" }, [_vm._v("Черный список")]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12", lg: "4" } },
            [
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
                on: { change: _vm.applyCategories },
                model: {
                  value: _vm.applied_categories,
                  callback: function($$v) {
                    _vm.applied_categories = $$v
                  },
                  expression: "applied_categories"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12", lg: "8" } },
            [
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.ingredients,
                  "item-text": "name",
                  "item-value": "id",
                  clearable: "",
                  outlined: "",
                  "small-chips": "",
                  label: "Ингредиенты",
                  multiple: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "selection",
                    fn: function(data) {
                      return [
                        _c(
                          "v-chip",
                          _vm._b(
                            {
                              attrs: {
                                small: "",
                                "input-value": data.selected,
                                close: ""
                              },
                              on: {
                                click: data.select,
                                "click:close": function($event) {
                                  return _vm.removeIngredientFromBlacklist(
                                    data.item.id
                                  )
                                }
                              }
                            },
                            "v-chip",
                            data.attrs,
                            false
                          ),
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(data.item.name) +
                                "\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.mix,
                  callback: function($$v) {
                    _vm.mix = $$v
                  },
                  expression: "mix"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { dark: "" }, on: { click: _vm.saveBlacklist } },
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/DietDescription.vue?vue&type=template&id=cf4e6be4&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/DietDescription.vue?vue&type=template&id=cf4e6be4& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            { attrs: { sm: "12", md: "6" } },
            [
              _vm.diet
                ? _c(
                    "v-card",
                    { staticClass: "mb-4", attrs: { color: "lime lighten-4" } },
                    [
                      _c("v-card-text", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.diet) +
                            "\n                "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { sm: "12", md: "6" } },
            [
              _vm.diet_old
                ? _c(
                    "v-card",
                    { attrs: { color: "red lighten-4" } },
                    [
                      _c("v-card-text", [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.diet_old) +
                            "\n                "
                        )
                      ])
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
}
var staticRenderFns = []
render._withStripped = true



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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/SelectDetails.vue?vue&type=template&id=0c3448cc&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/SelectDetails.vue?vue&type=template&id=0c3448cc& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("v-breadcrumbs", { attrs: { large: "", items: _vm.items } }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", [
            _c("h3", [
              _vm._v(
                _vm._s(_vm.order.name) +
                  " - " +
                  _vm._s(_vm.ration.name) +
                  " - " +
                  _vm._s(_vm.order.tag)
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("diet-description", {
        attrs: { diet: _vm.order.diet, diet_old: _vm.order.diet_old }
      }),
      _vm._v(" "),
      _c("v-divider", { staticClass: "my-8" }),
      _vm._v(" "),
      _c("h3", { staticClass: "mb-5" }, [_vm._v("Черный список")]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12", lg: "4" } },
            [
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
                on: { change: _vm.applyCategories },
                model: {
                  value: _vm.applied_categories,
                  callback: function($$v) {
                    _vm.applied_categories = $$v
                  },
                  expression: "applied_categories"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", sm: "12", lg: "8" } },
            [
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.ingredients,
                  "item-text": "name",
                  "item-value": "id",
                  clearable: "",
                  outlined: "",
                  "small-chips": "",
                  label: "Ингредиенты",
                  multiple: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "selection",
                    fn: function(data) {
                      return [
                        _c(
                          "v-chip",
                          _vm._b(
                            {
                              attrs: {
                                small: "",
                                "input-value": data.selected,
                                close: ""
                              },
                              on: {
                                click: data.select,
                                "click:close": function($event) {
                                  return _vm.removeIngredientFromBlacklist(
                                    data.item.id
                                  )
                                }
                              }
                            },
                            "v-chip",
                            data.attrs,
                            false
                          ),
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(data.item.name) +
                                "\n                        "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.mix,
                  callback: function($$v) {
                    _vm.mix = $$v
                  },
                  expression: "mix"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { dark: "" }, on: { click: _vm.saveBlacklist } },
                [_vm._v("\n                    Сохранить\n                ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("h3", { staticClass: "my-5" }, [_vm._v("Зеленый список")]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "mb-4" },
        [
          _c(
            "v-col",
            { attrs: { sm: "12", lg: "4" } },
            [
              _c("v-text-field", {
                attrs: {
                  clearable: "",
                  label: "Тэг",
                  outlined: "",
                  "error-messages": _vm.errors.tag
                },
                model: {
                  value: _vm.tag,
                  callback: function($$v) {
                    _vm.tag = $$v
                  },
                  expression: "tag"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { color: "primary" }, on: { click: _vm.addTag } },
                [_vm._v("\n                    Добавить\n                ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { sm: "12", lg: "8" } },
            _vm._l(_vm.wishlist, function(t) {
              return _c(
                "v-chip",
                {
                  key: t.id,
                  staticClass: "ma-2",
                  attrs: {
                    color: _vm.wish_ids.includes(t.id) ? "lime" : "",
                    close: ""
                  },
                  on: {
                    click: function($event) {
                      return _vm.addWishToSelect(t.id)
                    },
                    "click:close": function($event) {
                      return _vm.removeTag(t)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(t.wish) +
                      "\n                "
                  )
                ]
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider", { staticClass: "my-6" }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-col", [
            _c("h2", { staticClass: "mb-2" }, [
              _vm._v(_vm._s(_vm.cuisine.name) + " - " + _vm._s(_vm.ration.name))
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "py-3" },
        [
          _vm.previous
            ? _c(
                "v-col",
                { attrs: { cols: "3" } },
                [
                  _c("h4", [_vm._v(_vm._s(_vm.previous.created_at))]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.previous.cuisine))]),
                  _vm._v(" "),
                  _vm.previous.dish_name
                    ? _c(
                        "v-card",
                        {
                          staticClass: "mb-5 mt-3",
                          attrs: { color: "blue-grey lighten-5" }
                        },
                        [
                          _c("v-card-title", [
                            _vm._v(_vm._s(_vm.previous.dish_name))
                          ]),
                          _vm._v(" "),
                          _c("v-card-subtitle", [
                            _vm._v(_vm._s(_vm.previous.description))
                          ])
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { dense: "" } },
                    _vm._l(_vm.previous.ingredients, function(ing, i) {
                      return _c(
                        "v-list-item",
                        {
                          key: i,
                          class: _vm.hasResultIncludeIngredient(ing.id)
                            ? "yellow lighten-3"
                            : ""
                        },
                        [
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(_vm._s(i + 1) + ". " + _vm._s(ing.name))
                              ])
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
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "5" } },
            [
              _c("h4", [_vm._v("Сегодня")]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.cuisine.name))]),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mt-2" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "3" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.rations,
                          dense: "",
                          "item-text": "name",
                          "item-value": "id",
                          outlined: "",
                          label: "Рационы"
                        },
                        on: {
                          change: function($event) {
                            return _vm.getDishesByRation(_vm.ration_id)
                          }
                        },
                        model: {
                          value: _vm.ration_id,
                          callback: function($$v) {
                            _vm.ration_id = $$v
                          },
                          expression: "ration_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.dish
                    ? _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              dense: "",
                              items: _vm.dishes,
                              "item-text": "name",
                              "return-object": "",
                              outlined: "",
                              label: "Блюда"
                            },
                            model: {
                              value: _vm.dish,
                              callback: function($$v) {
                                _vm.dish = $$v
                              },
                              expression: "dish"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.dish
                    ? _c(
                        "v-col",
                        { attrs: { cols: "3" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "primary",
                                disabled: _vm.isDisabled
                              },
                              on: { click: _vm.setDish }
                            },
                            [
                              _vm._v(
                                "\n                            выбрать\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm.dish
                ? _c(
                    "div",
                    _vm._l(_vm.dish.ingredients, function(ing, key) {
                      return _c(
                        "v-sheet",
                        {
                          key: ing.id,
                          staticClass: "pa-3 mb-3 flex justify-center",
                          attrs: {
                            elevation: "1",
                            color: _vm.mix.includes(ing.id)
                              ? "red lighten-3"
                              : ""
                          }
                        },
                        [
                          _c("div", { staticClass: "flex flex-row" }, [
                            _c(
                              "p",
                              {
                                class: _vm.hasResultIncludeIngredient(ing.id)
                                  ? ""
                                  : "text-decoration-line-through"
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(key + 1) +
                                    ". " +
                                    _vm._s(ing.name) +
                                    "\n                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm.hasAnalog(ing.id)
                              ? _c("span", [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.getAnalogName(ing.id)) +
                                      "\n                            "
                                  )
                                ])
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _vm.isDisabled
                            ? _c(
                                "div",
                                { staticClass: "mt-2" },
                                [
                                  !_vm.hasAnalog(ing.id)
                                    ? _c(
                                        "v-btn",
                                        {
                                          class: _vm.hasResultIncludeIngredient(
                                            ing.id
                                          )
                                            ? "red white&#45;&#45;text"
                                            : "green",
                                          attrs: { "x-small": "" },
                                          on: {
                                            click: function($event) {
                                              _vm.hasResultIncludeIngredient(
                                                ing.id
                                              )
                                                ? _vm.removeIngredient(ing.id)
                                                : _vm.addIngredient(ing.id)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                _vm.hasResultIncludeIngredient(
                                                  ing.id
                                                )
                                                  ? "Убрать"
                                                  : "Вернуть"
                                              ) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !_vm.isDutyDishId
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass: "ml-2",
                                          attrs: { "x-small": "" },
                                          on: {
                                            click: function($event) {
                                              !_vm.hasAnalog(ing.id)
                                                ? _vm.showAnalogs(ing.id)
                                                : _vm.returnIngredient(ing.id)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(
                                                !_vm.hasAnalog(ing.id)
                                                  ? "Замена"
                                                  : "Отменить замену"
                                              ) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      )
                    }),
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "4" } }, [
            _c("h4", [_vm._v("Итог")]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.cuisine.name))]),
            _vm._v(" "),
            _vm.result
              ? _c(
                  "div",
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "mb-5 mt-3",
                        attrs: { color: "blue-grey lighten-3" }
                      },
                      [
                        _c("v-card-title", [
                          _vm._v(_vm._s(_vm.result.dish_name))
                        ]),
                        _vm._v(" "),
                        _c("v-card-subtitle", [
                          _vm._v(_vm._s(_vm.result.description))
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { text: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dialog3 = true
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                редактировать\n                            "
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
                    _vm.result.status === 2
                      ? _c("v-autocomplete", {
                          attrs: {
                            items: _vm.ingredients,
                            "item-text": "name",
                            "item-value": "id",
                            clearable: "",
                            outlined: "",
                            label: "Добавить ингредиент"
                          },
                          on: { change: _vm.addExtra },
                          model: {
                            value: _vm.r2_val,
                            callback: function($$v) {
                              _vm.r2_val = $$v
                            },
                            expression: "r2_val"
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.result.ingredients, function(ing, i) {
                      return _c(
                        "v-sheet",
                        {
                          key: i,
                          staticClass: "pa-3 mb-3",
                          attrs: {
                            elevation: "1",
                            color: _vm.mix.includes(ing.id)
                              ? "red lighten-3"
                              : ""
                          }
                        },
                        [
                          _c(
                            "v-row",
                            [
                              ing.pivot.is_visible
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "1" } },
                                    [
                                      _c("v-icon", { attrs: { left: "" } }, [
                                        _vm._v(
                                          "\n                                    mdi-checkbox-marked-circle\n                                "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-col", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(i + 1) +
                                    ". " +
                                    _vm._s(ing.name) +
                                    "\n                            "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              ing.pivot.is_editable
                                ? _c(
                                    "v-col",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { "x-small": "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.removeExtra(ing.id)
                                            }
                                          }
                                        },
                                        [_vm._v("убрать")]
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
                    })
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4" }, [
              _c("h5", { staticClass: "mb-1" }, [_vm._v("Выбрать посуду:")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex" },
                _vm._l(_vm.tablewares, function(tw) {
                  return _c(
                    "v-sheet",
                    {
                      key: tw.id,
                      staticClass: "mr-4 v-alert--border",
                      staticStyle: { cursor: "pointer" },
                      style:
                        tw.id === _vm.tw_id
                          ? "border: 3px solid dodgerblue"
                          : "",
                      attrs: { rounded: "" },
                      on: {
                        click: function($event) {
                          return _vm.setTW(tw.id)
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "rounded",
                        attrs: {
                          src: /storage/ + tw.img,
                          width: "64",
                          height: "64"
                        }
                      })
                    ]
                  )
                }),
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", persistent: "", "max-width": "800px" },
          model: {
            value: _vm.dialog2,
            callback: function($$v) {
              _vm.dialog2 = $$v
            },
            expression: "dialog2"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v("\n                    Замена\n                ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "400px" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "4" } },
                        [
                          _vm.ingredient_categories.length > 0
                            ? _c("v-select", {
                                attrs: {
                                  items: _vm.ingredient_categories,
                                  label: "Категории",
                                  "item-text": "name",
                                  "return-object": "",
                                  outlined: "",
                                  clearable: ""
                                },
                                model: {
                                  value: _vm.chosen_category,
                                  callback: function($$v) {
                                    _vm.chosen_category = $$v
                                  },
                                  expression: "chosen_category"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.ingredients,
                              "item-text": "name",
                              "item-value": "id",
                              clearable: "",
                              outlined: "",
                              label: "Ингредиенты"
                            },
                            on: { change: _vm.r1 },
                            model: {
                              value: _vm.r1_val,
                              callback: function($$v) {
                                _vm.r1_val = $$v
                              },
                              expression: "r1_val"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.chosen_category
                        ? _c(
                            "v-col",
                            _vm._l(_vm.chosen_category.ingredients, function(
                              ing,
                              key
                            ) {
                              return _c(
                                "v-sheet",
                                {
                                  key: key,
                                  staticClass: "pa-3 mb-3 flex justify-center",
                                  class: _vm.mix.includes(ing.id)
                                    ? "red lighten-3"
                                    : "",
                                  attrs: { elevation: "1" }
                                },
                                [
                                  _c("p", [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(key + 1) +
                                        ". " +
                                        _vm._s(ing.name) +
                                        "\n                                "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "mt-2" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { "x-small": "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.replaceIngredient(
                                                ing.id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        выбрать\n                                    "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            }),
                            1
                          )
                        : _vm._e()
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
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.closeDialog2 }
                    },
                    [
                      _vm._v(
                        "\n                        Закрыть\n                    "
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
          attrs: { "max-width": "700px" },
          model: {
            value: _vm.dialog3,
            callback: function($$v) {
              _vm.dialog3 = $$v
            },
            expression: "dialog3"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v("\n                    Редактировать\n                ")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { clearable: "", outlined: "", label: "Название" },
                    model: {
                      value: _vm.result.dish_name,
                      callback: function($$v) {
                        _vm.$set(_vm.result, "dish_name", $$v)
                      },
                      expression: "result.dish_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-textarea", {
                    attrs: {
                      outlined: "",
                      clearable: "",
                      label: "Дополнительная информация"
                    },
                    model: {
                      value: _vm.result.description,
                      callback: function($$v) {
                        _vm.$set(_vm.result, "description", $$v)
                      },
                      expression: "result.description"
                    }
                  })
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
                      attrs: { color: "primary", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog3 = false
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
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.saveDetails }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dietology/Stat.vue?vue&type=template&id=ed2d80c4& ***!
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
        "v-chip",
        {
          staticClass: "mr-2",
          attrs: { color: "teal", "text-color": "white", label: "" }
        },
        [_vm._v("\n        Итого: " + _vm._s(_vm.stat.total) + "\n    ")]
      ),
      _vm._v(" "),
      _c("v-chip", { staticClass: "mr-2", attrs: { label: "" } }, [
        _vm._v("\n        XS: " + _vm._s(_vm.stat.xs) + "\n    ")
      ]),
      _vm._v(" "),
      _c("v-chip", { staticClass: "mr-2", attrs: { label: "" } }, [
        _vm._v("\n        S: " + _vm._s(_vm.stat.s) + "\n    ")
      ]),
      _vm._v(" "),
      _c("v-chip", { staticClass: "mr-2", attrs: { label: "" } }, [
        _vm._v("\n        M: " + _vm._s(_vm.stat.m) + "\n    ")
      ]),
      _vm._v(" "),
      _c("v-chip", { staticClass: "mr-2", attrs: { label: "" } }, [
        _vm._v("\n        L: " + _vm._s(_vm.stat.l) + "\n    ")
      ]),
      _vm._v(" "),
      _c("v-chip", { attrs: { label: "" } }, [
        _vm._v("\n        XL: " + _vm._s(_vm.stat.xl) + "\n    ")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectModal.vue?vue&type=template&id=21ed83eb&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/SelectModal.vue?vue&type=template&id=21ed83eb& ***!
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
                      on: {
                        click: function($event) {
                          return _vm.$emit("close")
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [
                    _vm._v("Диета - " + _vm._s(_vm.ration.name))
                  ]),
                  _vm._v(" "),
                  _c("v-spacer")
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-title", [
                _vm._v(_vm._s(_vm.order.name) + " - " + _vm._s(_vm.order.tag))
              ]),
              _vm._v(" "),
              _vm.order
                ? _c(
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
                                { attrs: { cols: "12", sm: "12", lg: "4   " } },
                                [
                                  _vm.order.diet
                                    ? _c(
                                        "v-card",
                                        {
                                          staticClass: "mb-4",
                                          attrs: { color: "lime lighten-4" }
                                        },
                                        [
                                          _c("v-card-text", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.order.diet) +
                                                "\n                                    "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", lg: "4   " } },
                                [
                                  _vm.order.diet_old
                                    ? _c(
                                        "v-card",
                                        { attrs: { color: "red lighten-4" } },
                                        [
                                          _c("v-card-text", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(_vm.order.diet_old) +
                                                "\n                                    "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "my-8" }),
                          _vm._v(" "),
                          _c("h3", { staticClass: "mb-5" }, [
                            _vm._v("Черный список")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", lg: "4" } },
                                [
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
                                    on: { change: _vm.applyCategories },
                                    model: {
                                      value: _vm.applied_categories,
                                      callback: function($$v) {
                                        _vm.applied_categories = $$v
                                      },
                                      expression: "applied_categories"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", lg: "8" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: _vm.ingredients,
                                      "item-text": "name",
                                      "item-value": "id",
                                      clearable: "",
                                      outlined: "",
                                      "small-chips": "",
                                      label: "Ингредиенты",
                                      multiple: ""
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "selection",
                                          fn: function(data) {
                                            return [
                                              _c(
                                                "v-chip",
                                                _vm._b(
                                                  {
                                                    attrs: {
                                                      small: "",
                                                      "input-value":
                                                        data.selected,
                                                      close: ""
                                                    },
                                                    on: {
                                                      click: data.select,
                                                      "click:close": function(
                                                        $event
                                                      ) {
                                                        return _vm.remove(
                                                          data.item.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  "v-chip",
                                                  data.attrs,
                                                  false
                                                ),
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(data.item.name) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      2740152871
                                    ),
                                    model: {
                                      value: _vm.blacklist,
                                      callback: function($$v) {
                                        _vm.blacklist = $$v
                                      },
                                      expression: "blacklist"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { dark: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$emit("save-blacklist")
                                        }
                                      }
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
                          ),
                          _vm._v(" "),
                          _c("h3", { staticClass: "my-5" }, [
                            _vm._v("Зеленый список")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { staticClass: "mb-4" },
                            [
                              _c(
                                "v-col",
                                { attrs: { sm: "12", lg: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      clearable: "",
                                      label: "Тэг",
                                      outlined: "",
                                      "error-messages": _vm.errors.tag
                                    },
                                    model: {
                                      value: _vm.tag,
                                      callback: function($$v) {
                                        _vm.tag = $$v
                                      },
                                      expression: "tag"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: { click: _vm.addTag }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Добавить\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { sm: "12", lg: "8" } },
                                _vm._l(_vm.wishlist, function(tag) {
                                  return _c(
                                    "v-chip",
                                    {
                                      key: tag,
                                      staticClass: "ma-2",
                                      attrs: { close: "" },
                                      on: {
                                        "click:close": function($event) {
                                          return _vm.removeTag(tag)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(tag) +
                                          "\n                                "
                                      )
                                    ]
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "my-6" }),
                          _vm._v(" "),
                          _c("h2", { staticClass: "mb-6" }, [
                            _vm._v(
                              _vm._s(_vm.cuisine.name) +
                                " - " +
                                _vm._s(_vm.ration.name)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { staticClass: "py-3" },
                            [
                              Object.keys(_vm.previous).length > 0
                                ? _c(
                                    "v-col",
                                    { attrs: { cols: "3" } },
                                    [
                                      _c("h4", [
                                        _vm._v(_vm._s(_vm.previous.created_at))
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [
                                        _vm._v(_vm._s(_vm.previous.cuisine))
                                      ]),
                                      _vm._v(" "),
                                      _vm.previous.dish_name
                                        ? _c(
                                            "v-card",
                                            {
                                              staticClass: "mb-5 mt-3",
                                              attrs: {
                                                color: "blue-grey lighten-5"
                                              }
                                            },
                                            [
                                              _c("v-card-title", [
                                                _vm._v(
                                                  _vm._s(_vm.previous.dish_name)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("v-card-subtitle", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.previous.description
                                                  )
                                                )
                                              ])
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "v-list",
                                        { attrs: { dense: "" } },
                                        _vm._l(
                                          _vm.previous.ingredients,
                                          function(ing, i) {
                                            return _c(
                                              "v-list-item",
                                              {
                                                key: i,
                                                class: _vm.hasResultIncludeIngredient(
                                                  ing.id
                                                )
                                                  ? "yellow lighten-3"
                                                  : ""
                                              },
                                              [
                                                _c(
                                                  "v-list-item-content",
                                                  [
                                                    _c("v-list-item-title", [
                                                      _vm._v(
                                                        _vm._s(i + 1) +
                                                          ". " +
                                                          _vm._s(ing.name)
                                                      )
                                                    ])
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          }
                                        ),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "5" } },
                                [
                                  _c("h4", [_vm._v("Сегодня")]),
                                  _vm._v(" "),
                                  _c("span", [
                                    _vm._v(_vm._s(_vm.cuisine.name))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    { staticClass: "mt-2" },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "3" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.rations,
                                              dense: "",
                                              "item-text": "name",
                                              "item-value": "iiko_id",
                                              outlined: "",
                                              label: "Рационы"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.getDishesByRation(
                                                  _vm.ration_id
                                                )
                                              }
                                            },
                                            model: {
                                              value: _vm.ration_id,
                                              callback: function($$v) {
                                                _vm.ration_id = $$v
                                              },
                                              expression: "ration_id"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _vm.dish
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "6" } },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  dense: "",
                                                  items: _vm.dishes,
                                                  "item-text": "name",
                                                  "return-object": "",
                                                  outlined: "",
                                                  label: "Блюда"
                                                },
                                                model: {
                                                  value: _vm.dish,
                                                  callback: function($$v) {
                                                    _vm.dish = $$v
                                                  },
                                                  expression: "dish"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.dish
                                        ? _c(
                                            "v-col",
                                            { attrs: { cols: "3" } },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    small: "",
                                                    disabled:
                                                      _vm.dish.id ===
                                                      _vm.result.dish_id
                                                  },
                                                  on: { click: _vm.setDish }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            Выбрать\n                                        "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.dish && _vm.result
                                    ? _c(
                                        "div",
                                        _vm._l(_vm.dish.ingredients, function(
                                          ing,
                                          key
                                        ) {
                                          return _c(
                                            "v-sheet",
                                            {
                                              key: ing.id,
                                              staticClass:
                                                "pa-3 mb-3 flex justify-center",
                                              attrs: {
                                                elevation: "1",
                                                color: _vm.blacklist.includes(
                                                  ing.id
                                                )
                                                  ? "red lighten-3"
                                                  : ""
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "flex flex-row"
                                                },
                                                [
                                                  _c(
                                                    "p",
                                                    {
                                                      class: _vm.hasResultIncludeIngredient(
                                                        ing.id
                                                      )
                                                        ? ""
                                                        : "text-decoration-line-through"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                " +
                                                          _vm._s(key + 1) +
                                                          ". " +
                                                          _vm._s(ing.name) +
                                                          "\n                                            "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm.hasAnalog(ing.id)
                                                    ? _c("span", [
                                                        _vm._v(
                                                          "\n                                                    " +
                                                            _vm._s(
                                                              _vm.getAnalogName(
                                                                ing.id
                                                              )
                                                            ) +
                                                            "\n                                                "
                                                        )
                                                      ])
                                                    : _vm._e()
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm.dish.id === _vm.result.dish_id
                                                ? _c(
                                                    "div",
                                                    { staticClass: "mt-2" },
                                                    [
                                                      !_vm.hasAnalog(ing.id)
                                                        ? _c(
                                                            "v-btn",
                                                            {
                                                              class: _vm.hasResultIncludeIngredient(
                                                                ing.id
                                                              )
                                                                ? "red white&#45;&#45;text"
                                                                : "green",
                                                              attrs: {
                                                                "x-small": ""
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.hasResultIncludeIngredient(
                                                                    ing.id
                                                                  )
                                                                    ? _vm.removeIngredient(
                                                                        ing.id
                                                                      )
                                                                    : _vm.addIngredient(
                                                                        ing.id
                                                                      )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                " +
                                                                  _vm._s(
                                                                    _vm.hasResultIncludeIngredient(
                                                                      ing.id
                                                                    )
                                                                      ? "Убрать"
                                                                      : "Вернуть"
                                                                  ) +
                                                                  "\n                                            "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e(),
                                                      _vm._v(" "),
                                                      _vm.hasResultIncludeIngredient(
                                                        ing.id
                                                      ) || _vm.hasAnalog(ing.id)
                                                        ? _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "ml-2",
                                                              attrs: {
                                                                "x-small": ""
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  !_vm.hasAnalog(
                                                                    ing.id
                                                                  )
                                                                    ? _vm.showAnalogs(
                                                                        ing.id
                                                                      )
                                                                    : _vm.returnIngredient(
                                                                        ing.id
                                                                      )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                " +
                                                                  _vm._s(
                                                                    !_vm.hasAnalog(
                                                                      ing.id
                                                                    )
                                                                      ? "Замена"
                                                                      : "Отменить замену"
                                                                  ) +
                                                                  "\n                                            "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        }),
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);