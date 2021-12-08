"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Kitchen_KitchenOrders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'KitchenOrders',
  data: function data() {
    return {
      orders: [],
      lite: [],
      select: [],
      detox: [],
      go: [],
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
      amo_loading: false,
      loading: true,
      dialog: false,
      dialog2: false,
      ingredients: [],
      categories: [],
      applied_categories: [],
      ingredient_categories: [],
      chosen_category: {},
      chosen_ingredient: {},
      target_ingredient: null,
      dishes: [],
      dish: {},
      select_previous: [],
      select_result: [],
      previous: {},
      result: {},
      order: {},
      cuisine: {},
      mix: [],
      tag: '',
      tags: [],
      errors: [],
      rations: [],
      result_description: '',
      previous_description: ''
    };
  },
  created: function created() {
    this.getLeads();
    this.getLite();
    this.getSelect();
    this.getDetox();
    this.getGo();
    this.getIngredients();
    this.getCategories();
    this.getCuisine();
    this.getRations();
  },
  methods: {
    getLeads: function getLeads() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/select-orders').then(function (response) {
                  _this.orders = response.data;
                })["catch"](function (error) {
                  _this.loading = false;

                  _this.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this.loading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getLite: function getLite() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/lite').then(function (response) {
                  _this2.lite = response.data;
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
    getSelect: function getSelect() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/select').then(function (response) {
                  _this3.select = response.data;
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
    getDetox: function getDetox() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/detox').then(function (response) {
                  _this4.detox = response.data;
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
    getGo: function getGo() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/go').then(function (response) {
                  _this5.go = response.data;
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
    webhook: function webhook() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.amo_loading = true;
                _context6.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/webhook').then(function (response) {
                  console.log(response);
                })["catch"](function (error) {
                  _this6.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this6.amo_loading = false;
                });

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    fetchLeads: function fetchLeads() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.amo_loading = true;
                _context7.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/amo/leads').then(function () {
                  _this7.getLeads();
                })["catch"](function (error) {
                  _this7.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                })["finally"](function () {
                  return _this7.amo_loading = false;
                });

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    getIngredients: function getIngredients() {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/ingredients').then(function (response) {
                  _this8.ingredients = response.data;
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
    getCategories: function getCategories() {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories').then(function (response) {
                  _this9.categories = response.data;
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
    getCategoriesByIngredient: function getCategoriesByIngredient(id) {
      var _this10 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/categories/ingredient/' + id).then(function (response) {
                  _this10.ingredient_categories = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    getRations: function getRations() {
      var _this11 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/rations/required').then(function (response) {
                  _this11.rations = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    getDishes: function getDishes(id) {
      var _this12 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/dishes/ration/' + id).then(function (response) {
                  _this12.dishes = response.data;

                  if (_this12.dishes.length > 0) {
                    _this12.dish = _this12.dishes.find(function (obj) {
                      return obj.id === _this12.result && _this12.result.dish_id;
                    });

                    if (!_this12.dish) {
                      _this12.dish = _this12.dishes[0];
                    }
                  } else {
                    _this12.dish.ingredients = [];
                  }
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    getCuisine: function getCuisine() {
      var _this13 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/cuisine/duty').then(function (response) {
                  _this13.cuisine = response.data;
                })["catch"](function (error) {
                  _this13.loading = false;

                  _this13.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': error.message,
                    'color': 'error',
                    'type': 'error'
                  });
                });

              case 2:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    getPreviousOrderSelectByRationId: function getPreviousOrderSelectByRationId(id) {
      var _this14 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/' + _this14.order.id + '/previous/select/ration/' + id).then(function (response) {
                  _this14.previous = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }))();
    },
    getOrderSelectByRationId: function getOrderSelectByRationId(id) {
      var _this15 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee15() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/orders/' + _this15.order.id + '/today/select/ration/' + id).then(function (response) {
                  _this15.result = response.data;
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }))();
    },
    showDetails: function showDetails(index) {
      this.order = index;
      this.mix = index.blacklist;
      this.tags = index.wishlist;
      this.select_previous = index.previous;
      this.select_result = index.result;
      this.dialog = true;
    },
    close: function close() {
      this.order = {};
      this.mix = [];
      this.dialog = false;
      this.applied_categories = [];
      this.tag = '';
      this.result_description = '';
      this.previous_description = '';
    },
    closeDialog2: function closeDialog2() {
      this.ingredient_categories = [];
      this.chosen_category = {};
      this.chosen_ingredient = {};
      this.target_ingredient = null;
      this.dialog2 = false;
    },
    applyCategories: function applyCategories() {
      var _this16 = this;

      var ings = this.applied_categories.map(function (item) {
        var category = _this16.categories.find(function (obj) {
          return obj.id === item;
        });

        return category.ingredient_ids;
      });
      ings = ings.flat();
      ings = ings.concat(this.order.blacklist);
      this.mix = _toConsumableArray(new Set(ings));
    },
    getBlacklist: function getBlacklist() {
      var _this17 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/order/blacklist/' + this.order.id).then(function (response) {})["catch"](function (error) {
        _this17.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': error.msg,
          'color': 'error',
          'type': 'error'
        });
      });
    },
    addToBlacklist: function addToBlacklist() {
      var _this18 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/blacklist', {
        id: this.order.id,
        blacklist: this.mix
      }).then(function (response) {
        _this18.getBlacklist();

        _this18.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': 'green',
          'type': 'success'
        });
      })["catch"](function (error) {
        console.log(error);
        _this18.errors = error.response.data.errors;
      });
    },
    getWishlist: function getWishlist() {
      var _this19 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/order/wishlist/' + this.order.id).then(function (response) {
        _this19.tags = response.data.data;
      })["catch"](function (error) {
        _this19.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': error.msg,
          'color': 'error',
          'type': 'error'
        });
      });
    },
    addTag: function addTag() {
      var _this20 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/wishlist', {
        id: this.order.id,
        tag: this.tag
      }).then(function (response) {
        _this20.tag = '';

        _this20.getWishlist();

        _this20.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });

        _this20.errors = [];
      })["catch"](function (error) {
        _this20.errors = error.response.data.errors;
      });
    },
    removeTag: function removeTag(tag) {
      var _this21 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/wishlist/remove', {
        id: this.order.id,
        tag: tag
      }).then(function (response) {
        _this21.getWishlist();

        _this21.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'green' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });
      })["catch"](function (error) {
        console.log(error);
        _this21.errors = error.response.data.errors;
      });
    },
    openRation: function openRation(id) {
      var _this$select_previous, _this$select_result$f;

      this.previous = (_this$select_previous = this.select_previous.find(function (obj) {
        return obj.ration_id === id;
      })) !== null && _this$select_previous !== void 0 ? _this$select_previous : {};
      this.result = (_this$select_result$f = this.select_result.find(function (obj) {
        return obj.ration_id === id;
      })) !== null && _this$select_result$f !== void 0 ? _this$select_result$f : {};
      this.result_description = this.result.description;
      this.previous_description = this.previous.description;
      this.getDishes(id);
    },
    hasResultIncludeIngredient: function hasResultIncludeIngredient(id) {
      return Object.keys(this.result).length !== 0 && this.result.ingredient_ids.includes(id);
    },
    hasPreviousIncludeIngredient: function hasPreviousIncludeIngredient(id) {
      return Object.keys(this.dish).length !== 0 && this.dish.ingredient_ids.includes(id);
    },
    setDish: function setDish() {
      var _this22 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/' + this.result.id + '/dish/' + this.dish.id).then(function (response) {
        if (!response.data.status) {
          _this22.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this22.result = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    setDescription: function setDescription() {
      var _this23 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/' + this.result.id + '/description', {
        description: this.result_description
      }).then(function (response) {
        _this23.$store.dispatch('showAlert', {
          'isVisible': true,
          'msg': response.data.msg,
          'color': response.data.status ? 'success' : 'error',
          'type': response.data.status ? 'success' : 'error'
        });

        _this23.result_description = response.data.description;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    showAnalogs: function showAnalogs(id) {
      this.getCategoriesByIngredient(id);
      this.target_ingredient = id;
      this.dialog2 = true;
    },
    addIngredient: function addIngredient(id) {
      var _this24 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/add/ingredient', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        if (!response.data.status) {
          _this24.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this24.result = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    removeIngredient: function removeIngredient(id) {
      var _this25 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/remove/ingredient', {
        select_id: this.result.id,
        ingredient_id: id
      }).then(function (response) {
        if (!response.data.status) {
          _this25.$store.dispatch('showAlert', {
            'isVisible': true,
            'msg': response.data.msg,
            'color': 'error',
            'type': 'error'
          });
        }

        _this25.result = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    replaceIngredient: function replaceIngredient(id) {
      var _this26 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/replace/ingredient', {
        select_id: this.result.id,
        ingredient_id: this.target_ingredient,
        analog_id: id
      }).then(function (response) {
        if (response.data.status) {
          _this26.result = response.data.select;
          var ingredient = response.data.ingredient;

          var index = _this26.dish.ingredients.findIndex(function (obj) {
            return obj.id === ingredient.id;
          });

          _this26.dish.ingredients[index] = ingredient;

          _this26.closeDialog2();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    returnIngredient: function returnIngredient(target_id, analog_id) {
      var _this27 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/select/return/ingredient', {
        select_id: this.result.id,
        ingredient_id: target_id,
        analog_id: analog_id
      }).then(function (response) {
        if (response.data.status) {
          _this27.result = response.data.select;
          var ingredient = response.data.ingredient;

          var index = _this27.dish.ingredients.findIndex(function (obj) {
            return obj.id === ingredient.id;
          });

          _this27.dish.ingredients[index] = ingredient;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Kitchen/KitchenOrders.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Kitchen/KitchenOrders.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KitchenOrders_vue_vue_type_template_id_ca05cffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KitchenOrders.vue?vue&type=template&id=ca05cffa& */ "./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=template&id=ca05cffa&");
/* harmony import */ var _KitchenOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KitchenOrders.vue?vue&type=script&lang=js& */ "./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _KitchenOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KitchenOrders_vue_vue_type_template_id_ca05cffa___WEBPACK_IMPORTED_MODULE_0__.render,
  _KitchenOrders_vue_vue_type_template_id_ca05cffa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kitchen/KitchenOrders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KitchenOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=template&id=ca05cffa&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=template&id=ca05cffa& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenOrders_vue_vue_type_template_id_ca05cffa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenOrders_vue_vue_type_template_id_ca05cffa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KitchenOrders_vue_vue_type_template_id_ca05cffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./KitchenOrders.vue?vue&type=template&id=ca05cffa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=template&id=ca05cffa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=template&id=ca05cffa&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kitchen/KitchenOrders.vue?vue&type=template&id=ca05cffa& ***!
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
      _c(
        "v-row",
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
              on: { click: _vm.fetchLeads }
            },
            [_vm._v("\n            Получить данные с AMOCRM\n        ")]
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
            { attrs: { cols: "12", sm: "12", lg: "9" } },
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
                      loading: _vm.loading,
                      "loading-text": "Loading... Please wait",
                      headers: _vm.headers,
                      items: _vm.orders,
                      "items-per-page": _vm.itemsPerPage,
                      "item-key": "id",
                      search: _vm.search,
                      "hide-default-footer": ""
                    },
                    on: { "click:row": _vm.showDetails },
                    scopedSlots: _vm._u([
                      {
                        key: "item.index",
                        fn: function(ref) {
                          var index = ref.index
                          return [
                            _vm._v(
                              "\n                        " +
                                _vm._s(index + 1) +
                                "\n                    "
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
          _c(
            "v-col",
            [
              _c(
                "v-card",
                { staticClass: "mb-5", attrs: { color: "#385F73", dark: "" } },
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    Итого: " +
                        _vm._s(_vm.orders.length) +
                        "\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "mb-5" },
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    Lite: " +
                        _vm._s(_vm.lite.total) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c(
                      "div",
                      [
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            XS: " +
                                _vm._s(_vm.lite.xs) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            S: " +
                                _vm._s(_vm.lite.s) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            M: " +
                                _vm._s(_vm.lite.m) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            L: " +
                                _vm._s(_vm.lite.l) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            XL: " +
                                _vm._s(_vm.lite.xl) +
                                "\n                        "
                            )
                          ]
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
                "v-card",
                { staticClass: "mb-5" },
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    Select: " +
                        _vm._s(_vm.select.total) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c(
                      "div",
                      [
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            XS: " +
                                _vm._s(_vm.select.xs) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            S: " +
                                _vm._s(_vm.select.s) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            M: " +
                                _vm._s(_vm.select.m) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            L: " +
                                _vm._s(_vm.select.l) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          { staticClass: "ma-2", attrs: { label: "" } },
                          [
                            _vm._v(
                              "\n                            XL: " +
                                _vm._s(_vm.select.xl) +
                                "\n                        "
                            )
                          ]
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
                "v-card",
                { staticClass: "mb-5" },
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    Detox: " +
                        _vm._s(_vm.detox) +
                        "\n                "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "text-h5" }, [
                    _vm._v(
                      "\n                    GO: " +
                        _vm._s(_vm.go) +
                        "\n                "
                    )
                  ])
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
                      _c("v-toolbar-title", [_vm._v("Диета")]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.order
                    ? _c("v-card-title", [
                        _c("span", { staticClass: "text-h5" }, [
                          _vm._v(
                            " " +
                              _vm._s(_vm.order.name) +
                              " " +
                              _vm._s(_vm.order.tag)
                          )
                        ])
                      ])
                    : _vm._e(),
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
                                      attrs: { cols: "12", sm: "12", lg: "6" }
                                    },
                                    [
                                      _vm.order.diet
                                        ? _c(
                                            "v-card",
                                            {
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
                                    [
                                      _vm.order.diet_old
                                        ? _c(
                                            "v-card",
                                            {
                                              staticClass: "mt-4",
                                              attrs: { color: "red lighten-4" }
                                            },
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
                              _c("h3", { staticClass: "my-5" }, [
                                _vm._v("Черный список")
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
                                    { attrs: { sm: "12", lg: "8" } },
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
                                          on: { click: _vm.addToBlacklist }
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
                                    _vm._l(_vm.tags, function(tag, index) {
                                      return _c(
                                        "v-chip",
                                        {
                                          key: index,
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
                                _vm._v(_vm._s(_vm.cuisine.name))
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                { staticClass: "py-3" },
                                [
                                  _c(
                                    "v-expansion-panels",
                                    _vm._l(_vm.rations, function(ration) {
                                      return _c(
                                        "v-expansion-panel",
                                        {
                                          key: ration.id,
                                          on: {
                                            click: function($event) {
                                              return _vm.openRation(ration.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("v-expansion-panel-header", [
                                            _vm._v(
                                              "\n                                        " +
                                                _vm._s(ration.name) +
                                                "\n                                    "
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-expansion-panel-content",
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _vm.previous
                                                    ? _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "3" }
                                                        },
                                                        [
                                                          _c("h4", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.previous
                                                                  .created_at
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _c("span", [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm.previous
                                                                  .cuisine
                                                              )
                                                            )
                                                          ]),
                                                          _vm._v(" "),
                                                          _vm.dish
                                                            ? _c(
                                                                "v-list",
                                                                {
                                                                  attrs: {
                                                                    dense: ""
                                                                  }
                                                                },
                                                                [
                                                                  _vm.previous
                                                                    .dish
                                                                    ? _c(
                                                                        "v-subheader",
                                                                        [
                                                                          _vm._v(
                                                                            _vm._s(
                                                                              _vm
                                                                                .previous
                                                                                .dish
                                                                                .name
                                                                            )
                                                                          )
                                                                        ]
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  _vm._l(
                                                                    _vm.previous
                                                                      .ingredients,
                                                                    function(
                                                                      ing,
                                                                      i
                                                                    ) {
                                                                      return _c(
                                                                        "v-list-item",
                                                                        {
                                                                          key: i,
                                                                          class: _vm.hasPreviousIncludeIngredient(
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
                                                                                    _vm._s(
                                                                                      i +
                                                                                        1
                                                                                    ) +
                                                                                      ". " +
                                                                                      _vm._s(
                                                                                        ing.name
                                                                                      )
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
                                                                  )
                                                                ],
                                                                2
                                                              )
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c("p", [
                                                            _vm._v(
                                                              "\n                                                    " +
                                                                _vm._s(
                                                                  _vm.previous_description
                                                                ) +
                                                                "\n                                                "
                                                            )
                                                          ])
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "5" } },
                                                    [
                                                      _c("h4", [
                                                        _vm._v("Сегодня")
                                                      ]),
                                                      _vm._v(" "),
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.cuisine.name
                                                          )
                                                        )
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-row",
                                                        { staticClass: "mt-2" },
                                                        [
                                                          _c(
                                                            "v-col",
                                                            [
                                                              _c("v-select", {
                                                                attrs: {
                                                                  dense: "",
                                                                  items:
                                                                    _vm.dishes,
                                                                  "item-text":
                                                                    "name",
                                                                  "return-object":
                                                                    "",
                                                                  outlined: "",
                                                                  label: "Блюда"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.dish,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.dish = $$v
                                                                  },
                                                                  expression:
                                                                    "dish"
                                                                }
                                                              })
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _vm.dish
                                                            ? _c(
                                                                "v-col",
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      attrs: {
                                                                        color:
                                                                          "primary",
                                                                        small:
                                                                          "",
                                                                        disabled:
                                                                          _vm
                                                                            .dish
                                                                            .id ===
                                                                          _vm
                                                                            .result
                                                                            .dish_id
                                                                      },
                                                                      on: {
                                                                        click:
                                                                          _vm.setDish
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                            Выбрать\n                                                        "
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
                                                              _vm.dish
                                                                .ingredients,
                                                              function(
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
                                                                      elevation:
                                                                        "1"
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
                                                                              "\n                                                                    " +
                                                                                _vm._s(
                                                                                  key +
                                                                                    1
                                                                                ) +
                                                                                ". " +
                                                                                _vm._s(
                                                                                  ing.name
                                                                                ) +
                                                                                "\n                                                                "
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        ing.analog
                                                                          ? _c(
                                                                              "span",
                                                                              [
                                                                                _vm._v(
                                                                                  "\n                                                                    " +
                                                                                    _vm._s(
                                                                                      ing
                                                                                        .analog
                                                                                        .name
                                                                                    ) +
                                                                                    "\n                                                                "
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _vm._e()
                                                                      ]
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "mt-2"
                                                                      },
                                                                      [
                                                                        _vm.dish
                                                                          .id ===
                                                                          _vm
                                                                            .result
                                                                            .dish_id &&
                                                                        !ing.analog
                                                                          ? _c(
                                                                              "v-btn",
                                                                              {
                                                                                class: _vm.hasResultIncludeIngredient(
                                                                                  ing.id
                                                                                )
                                                                                  ? "red"
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
                                                                                  "\n                                                                " +
                                                                                    _vm._s(
                                                                                      _vm.hasResultIncludeIngredient(
                                                                                        ing.id
                                                                                      )
                                                                                        ? "Убрать"
                                                                                        : "Вернуть"
                                                                                    ) +
                                                                                    "\n                                                            "
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _vm._e(),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _vm.dish &&
                                                                        _vm.dish
                                                                          .id ===
                                                                          _vm
                                                                            .result
                                                                            .dish_id
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
                                                                                    !ing.analog
                                                                                      ? _vm.showAnalogs(
                                                                                          ing.id
                                                                                        )
                                                                                      : _vm.returnIngredient(
                                                                                          ing.id,
                                                                                          ing
                                                                                            .analog
                                                                                            .id
                                                                                        )
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _vm._v(
                                                                                  "\n                                                                " +
                                                                                    _vm._s(
                                                                                      !ing.analog
                                                                                        ? "Замена"
                                                                                        : "Отменить замену"
                                                                                    ) +
                                                                                    "\n                                                            "
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _vm._e()
                                                                      ],
                                                                      1
                                                                    )
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
                                                  _c("v-col", [
                                                    _c("h4", [_vm._v("Итог")]),
                                                    _vm._v(" "),
                                                    _c("span", [
                                                      _vm._v(
                                                        _vm._s(_vm.cuisine.name)
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _vm.result
                                                      ? _c(
                                                          "div",
                                                          [
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "my-4"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.result
                                                                      .dish
                                                                      ? _vm
                                                                          .result
                                                                          .dish
                                                                          .name
                                                                      : ""
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _vm._l(
                                                              _vm.result
                                                                .ingredients,
                                                              function(
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
                                                                      elevation:
                                                                        "1",
                                                                      color: _vm.mix.includes(
                                                                        ing.id
                                                                      )
                                                                        ? "red lighten-3"
                                                                        : ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                        " +
                                                                        _vm._s(
                                                                          key +
                                                                            1
                                                                        ) +
                                                                        ". " +
                                                                        _vm._s(
                                                                          ing.name
                                                                        ) +
                                                                        "\n                                                    "
                                                                    )
                                                                  ]
                                                                )
                                                              }
                                                            ),
                                                            _vm._v(" "),
                                                            _c("v-textarea", {
                                                              attrs: {
                                                                outlined: "",
                                                                clearable: "",
                                                                label:
                                                                  "Доп. инфо"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.result_description,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.result_description = $$v
                                                                },
                                                                expression:
                                                                  "result_description"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "primary"
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.setDescription
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                                                        сохранить\n                                                    "
                                                                )
                                                              ]
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
                                    }),
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
                _vm._v("\n                Замена\n            ")
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
                          _c("v-select", {
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
                                      "\n                                " +
                                        _vm._s(key + 1) +
                                        ". " +
                                        _vm._s(ing.name) +
                                        "\n                            "
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
                                            "\n                                    выбрать\n                                "
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
                    [_vm._v("\n                    Закрыть\n                ")]
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