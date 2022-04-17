"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Kitchen_Select_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectModal */ "./resources/js/components/Kitchen/SelectModal.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    SelectModal: _SelectModal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      amo_loading: false,
      orders: [],
      order: {},
      select_stat: [],
      itemsPerPage: 300,
      search: '',
      headers: [{
        text: '#',
        value: 'index'
      }, {
        text: 'Имя',
        value: 'name'
      }, {
        text: 'Тэг',
        value: 'tag'
      }],
      loading: true,
      select_loading: false,
      dialog: false,
      dialog2: false,
      dialog3: false,
      ingredients: [],
      categories: [],
      dishes: [],
      dish: {},
      rations: [],
      select_previous: [],
      select_result: [],
      previous: {},
      result: {},
      blacklist: [],
      mix: [],
      wishlist: [],
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
      errors: [],
      r1_val: null,
      r2_val: null
    };
  },
  created: function created() {
    this.getOrders();
    this.getCuisine();
    this.getCategories();
    this.getIngredients();
    this.getRations();
  },
  methods: {
    fetchOrdersFromAmo: function fetchOrdersFromAmo() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.amo_loading = true;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/eat-fit').then(function () {
                  _this.getOrders();
                })["catch"](function (error) {
                  _this.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this.amo_loading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getOrders: function getOrders() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/select').then(function (response) {
                  _this2.orders = response.data.orders;
                  _this2.select_stat = response.data.stat;
                })["catch"](function (error) {
                  _this2.loading = false;

                  _this2.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this2.loading = false;
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getIngredients: function getIngredients() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/ingredients').then(function (response) {
                  _this3.ingredients = response.data;
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
    getCategories: function getCategories() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories').then(function (response) {
                  _this4.categories = response.data;
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
    getRations: function getRations() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/rations/required').then(function (response) {
                  _this5.rations = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    getCuisine: function getCuisine() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/cuisine/duty').then(function (response) {
                  _this6.cuisine = response.data;
                })["catch"](function (error) {
                  _this6.loading = false;

                  _this6.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    showOrderDetails: function showOrderDetails(order) {
      this.order = order;
      this.getSelectDetailsByOrder(order.id);
    },
    getSelectDetailsByOrder: function getSelectDetailsByOrder(id) {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.select_loading = true;
                _context7.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/select/order/' + id).then(function (response) {
                  _this7.select_previous = response.data.previous;
                  _this7.select_result = response.data.result;
                  _this7.blacklist = response.data.blacklist;
                  _this7.mix = response.data.blacklist;
                  _this7.wishlist = response.data.wishlist;
                  _this7.select_loading = false;
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
    openSettings: function openSettings(ration) {
      var _this$select_previous, _this$select_result$f;

      this.ration = ration;
      this.ration_id = ration.id;
      this.previous = (_this$select_previous = this.select_previous.find(function (obj) {
        return obj.ration.id === ration.id;
      })) !== null && _this$select_previous !== void 0 ? _this$select_previous : {};
      this.result = (_this$select_result$f = this.select_result.find(function (obj) {
        return obj.ration.id === ration.id;
      })) !== null && _this$select_result$f !== void 0 ? _this$select_result$f : {};
      this.getDishesByRation(this.ration.iiko_id);
      this.dialog = true;
    },
    activateDeactivate: function activateDeactivate(id) {
      var _this8 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/activate-deactivate', {
        select_id: id
      }).then(function (response) {
        _this8.getSelectDetailsByOrder(_this8.order.id);
      })["catch"](function (error) {
        console.log(error);
      });
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
        _this11.wishlist.push(_this11.tag);

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
        tag: tag
      }).then(function (response) {
        _this12.wishlist = _this12.wishlist.filter(function (item) {
          return item !== tag;
        });

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
    hasResultIncludeIngredient: function hasResultIncludeIngredient(id) {
      if (!this.result.ingredient_ids) return;
      return this.result.ingredient_ids.includes(id);
    },
    getDishesByRation: function getDishesByRation(id) {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/dishes/ration/' + id).then(function (response) {
                  _this13.dishes = response.data;

                  if (_this13.dishes.length > 0) {
                    _this13.dish = _this13.dishes.find(function (obj) {
                      return obj.id === _this13.result.dish_id;
                    });

                    if (!_this13.dish) {
                      _this13.dish = _this13.dishes[0];
                    }
                  } else {
                    _this13.dish.ingredients = [];
                  }
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
    setDish: function setDish() {
      var _this14 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/add/dish', {
        select_id: this.result.id,
        ration_id: this.ration.iiko_id,
        dish_id: this.dish.id
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
      if (!this.result.ingredient_ids) return;
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
        select_id: this.result.id,
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
        select_id: this.result.id,
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

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories/ingredient/' + id).then(function (response) {
                  _this19.ingredient_categories = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    getSelectColor: function getSelectColor(id) {
      if (this.select_result.length > 0) {
        var select = this.select_result.find(function (x) {
          return x.ration_id === id;
        });
        return select ? select.color : '';
      }

      return '';
    },
    isActive: function isActive(id) {
      if (this.select_result.length > 0) {
        var select = this.select_result.find(function (x) {
          return x.ration_id === id;
        });
        return select ? select.is_active : true;
      }

      return true;
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

/***/ "./resources/js/components/Kitchen/Select.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Kitchen/Select.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=2117acdc& */ "./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc&");
/* harmony import */ var _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/Select.vue"
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

/***/ "./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_2117acdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Select.vue?vue&type=template&id=2117acdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/Select.vue?vue&type=template&id=2117acdc& ***!
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
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  staticClass: "ma-3",
                  attrs: {
                    loading: _vm.amo_loading,
                    disabled: _vm.amo_loading,
                    color: "primary"
                  },
                  on: { click: _vm.fetchOrdersFromAmo }
                },
                [
                  _vm._v(
                    "\n                    Получить данные с AMOCRM\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                { attrs: { type: "button", href: "/api/select/export" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "my-3 mr-7",
                      attrs: { color: "primary" },
                      on: { click: _vm.exportExcel }
                    },
                    [
                      _vm._v(
                        "\n                        Excel\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-chip",
                {
                  staticClass: "ma-2",
                  attrs: { color: "teal", "text-color": "white", label: "" }
                },
                [
                  _vm._v(
                    "\n                    Итого: " +
                      _vm._s(_vm.select_stat.total) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-chip", { staticClass: "ma-2", attrs: { label: "" } }, [
                _vm._v(
                  "\n                    XS: " +
                    _vm._s(_vm.select_stat.xs) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("v-chip", { staticClass: "ma-2", attrs: { label: "" } }, [
                _vm._v(
                  "\n                    S: " +
                    _vm._s(_vm.select_stat.s) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("v-chip", { staticClass: "ma-2", attrs: { label: "" } }, [
                _vm._v(
                  "\n                    M: " +
                    _vm._s(_vm.select_stat.m) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("v-chip", { staticClass: "ma-2", attrs: { label: "" } }, [
                _vm._v(
                  "\n                    L: " +
                    _vm._s(_vm.select_stat.l) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("v-chip", { staticClass: "ma-2", attrs: { label: "" } }, [
                _vm._v(
                  "\n                    XL: " +
                    _vm._s(_vm.select_stat.xl) +
                    "\n                "
                )
              ])
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
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    [
                      _c("v-text-field", {
                        attrs: {
                          "append-icon": "mdi-magnify",
                          label: "Поиск",
                          "single-line": "",
                          "hide-details": ""
                        },
                        model: {
                          value: _vm.search,
                          callback: function($$v) {
                            _vm.search = $$v
                          },
                          expression: "search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      height: "90vh",
                      loading: _vm.loading,
                      "loading-text": "Loading... Please wait",
                      headers: _vm.headers,
                      items: _vm.orders,
                      "items-per-page": _vm.itemsPerPage,
                      "item-key": "id",
                      search: _vm.search,
                      "hide-default-footer": ""
                    },
                    on: { "click:row": _vm.showOrderDetails },
                    scopedSlots: _vm._u([
                      {
                        key: "item.index",
                        fn: function(ref) {
                          var index = ref.index
                          return [
                            _vm._v(
                              "\n                            " +
                                _vm._s(index + 1) +
                                "\n                        "
                            )
                          ]
                        }
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
          Object.keys(_vm.order).length > 0
            ? _c(
                "v-col",
                [
                  _c("h3", { staticClass: "mb-3" }, [
                    _vm._v(_vm._s(_vm.order.name))
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    _vm._l(_vm.select_result, function(result, key) {
                      return _c(
                        "v-col",
                        { key: key, attrs: { cols: "12", md: "4" } },
                        [
                          _c(
                            "v-card",
                            {
                              attrs: {
                                color: result.color,
                                loading: _vm.select_loading
                              }
                            },
                            [
                              _c("v-card-title", [
                                _vm._v(_vm._s(result.ration.name))
                              ]),
                              _vm._v(" "),
                              _c("v-card-subtitle", [
                                _vm._v(_vm._s(result.dish_name))
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  result.is_active
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary", text: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.openSettings(
                                                result.ration
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    настроить\n                                "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "black", text: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.activateDeactivate(
                                            result.id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            result.is_active
                                              ? "Убрать"
                                              : "Вернуть"
                                          ) +
                                          "\n                                "
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
                    }),
                    1
                  )
                ],
                1
              )
            : _vm._e()
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
                          on: {
                            click: function($event) {
                              _vm.dialog = false
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
                    _vm._v(
                      _vm._s(_vm.order.name) + " - " + _vm._s(_vm.order.tag)
                    )
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
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        lg: "4   "
                                      }
                                    },
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
                                                  "\n                                            " +
                                                    _vm._s(_vm.order.diet) +
                                                    "\n                                        "
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
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        lg: "4   "
                                      }
                                    },
                                    [
                                      _vm.order.diet_old
                                        ? _c(
                                            "v-card",
                                            {
                                              attrs: { color: "red lighten-4" }
                                            },
                                            [
                                              _c("v-card-text", [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(_vm.order.diet_old) +
                                                    "\n                                        "
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
                                    {
                                      attrs: { cols: "12", sm: "12", lg: "4" }
                                    },
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
                                    {
                                      attrs: { cols: "12", sm: "12", lg: "8" }
                                    },
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
                                                        "\n                                                " +
                                                          _vm._s(
                                                            data.item.name
                                                          ) +
                                                          "\n                                            "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              }
                                            }
                                          ],
                                          null,
                                          false,
                                          222228305
                                        ),
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
                                        {
                                          attrs: { dark: "" },
                                          on: { click: _vm.saveBlacklist }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Сохранить\n                                    "
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
                                            "\n                                        Добавить\n                                    "
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
                                    _vm._l(_vm.wishlist, function(t) {
                                      return _c(
                                        "v-chip",
                                        {
                                          key: t,
                                          staticClass: "ma-2",
                                          attrs: { close: "" },
                                          on: {
                                            "click:close": function($event) {
                                              return _vm.removeTag(t)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(t) +
                                              "\n                                    "
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
                                            _vm._v(
                                              _vm._s(_vm.previous.created_at)
                                            )
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
                                                      _vm._s(
                                                        _vm.previous.dish_name
                                                      )
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
                                                        _c(
                                                          "v-list-item-title",
                                                          [
                                                            _vm._v(
                                                              _vm._s(i + 1) +
                                                                ". " +
                                                                _vm._s(ing.name)
                                                            )
                                                          ]
                                                        )
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
                                                        "\n                                                Выбрать\n                                            "
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
                                            _vm._l(
                                              _vm.dish.ingredients,
                                              function(ing, key) {
                                                return _c(
                                                  "v-sheet",
                                                  {
                                                    key: ing.id,
                                                    staticClass:
                                                      "pa-3 mb-3 flex justify-center",
                                                    attrs: {
                                                      elevation: "1",
                                                      color: _vm.mix.includes(
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
                                                        staticClass:
                                                          "flex flex-row"
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
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  key + 1
                                                                ) +
                                                                ". " +
                                                                _vm._s(
                                                                  ing.name
                                                                ) +
                                                                "\n                                                "
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
                                                    _vm.dish.id ===
                                                    _vm.result.dish_id
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass: "mt-2"
                                                          },
                                                          [
                                                            !_vm.hasAnalog(
                                                              ing.id
                                                            )
                                                              ? _c(
                                                                  "v-btn",
                                                                  {
                                                                    class: _vm.hasResultIncludeIngredient(
                                                                      ing.id
                                                                    )
                                                                      ? "red white--text"
                                                                      : "green",
                                                                    attrs: {
                                                                      "x-small":
                                                                        ""
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
                                                                      "\n                                                    " +
                                                                        _vm._s(
                                                                          _vm.hasResultIncludeIngredient(
                                                                            ing.id
                                                                          )
                                                                            ? "Убрать"
                                                                            : "Вернуть"
                                                                        ) +
                                                                        "\n                                                "
                                                                    )
                                                                  ]
                                                                )
                                                              : _vm._e(),
                                                            _vm._v(" "),
                                                            _vm.hasResultIncludeIngredient(
                                                              ing.id
                                                            ) ||
                                                            _vm.hasAnalog(
                                                              ing.id
                                                            )
                                                              ? _c(
                                                                  "v-btn",
                                                                  {
                                                                    staticClass:
                                                                      "ml-2",
                                                                    attrs: {
                                                                      "x-small":
                                                                        ""
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
                                                                      "\n                                                    " +
                                                                        _vm._s(
                                                                          !_vm.hasAnalog(
                                                                            ing.id
                                                                          )
                                                                            ? "Замена"
                                                                            : "Отменить замену"
                                                                        ) +
                                                                        "\n                                                "
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
                                              }
                                            ),
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
                                    _c("span", [
                                      _vm._v(_vm._s(_vm.cuisine.name))
                                    ]),
                                    _vm._v(" "),
                                    Object.keys(_vm.result).length > 0
                                      ? _c(
                                          "div",
                                          [
                                            _c(
                                              "v-card",
                                              {
                                                staticClass: "mb-5 mt-3",
                                                attrs: {
                                                  color: "blue-grey lighten-3"
                                                }
                                              },
                                              [
                                                _c("v-card-title", [
                                                  _vm._v(
                                                    _vm._s(_vm.result.dish_name)
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("v-card-subtitle", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.result.description
                                                    )
                                                  )
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
                                                          click: function(
                                                            $event
                                                          ) {
                                                            _vm.dialog3 = true
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                    редактировать\n                                                "
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
                                            _vm._l(
                                              _vm.result.ingredients,
                                              function(ing, i) {
                                                return _c(
                                                  "v-sheet",
                                                  {
                                                    key: i,
                                                    staticClass: "pa-3 mb-3",
                                                    attrs: {
                                                      elevation: "1",
                                                      color: _vm.mix.includes(
                                                        ing.id
                                                      )
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
                                                              {
                                                                attrs: {
                                                                  cols: "1"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-icon",
                                                                  {
                                                                    attrs: {
                                                                      left: ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                        mdi-checkbox-marked-circle\n                                                    "
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c("v-col", [
                                                          _vm._v(
                                                            "\n                                                    " +
                                                              _vm._s(i + 1) +
                                                              ". " +
                                                              _vm._s(ing.name) +
                                                              "\n                                                "
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-row",
                                                      [
                                                        ing.pivot.editable
                                                          ? _c(
                                                              "v-col",
                                                              [
                                                                _c(
                                                                  "v-btn",
                                                                  {
                                                                    attrs: {
                                                                      "x-small":
                                                                        ""
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.removeExtra(
                                                                          ing.id
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "убрать"
                                                                    )
                                                                  ]
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
                                              }
                                            )
                                          ],
                                          2
                                        )
                                      : _vm._e()
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
                    : _vm._e()
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