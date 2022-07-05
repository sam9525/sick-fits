self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpdateProduct; }
/* harmony export */ });
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client/react */ "./node_modules/@apollo/client/react/index.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\UpdateProduct.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation UPDATE_PRODUCT_MUTATION(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      id\n      name\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());
var UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject2());
function UpdateProduct(_ref) {
  _s();

  var id = _ref.id;

  var _useQuery = (0,_apollo_client_react__WEBPACK_IMPORTED_MODULE_9__.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  var _useMutation = (0,_apollo_client_react__WEBPACK_IMPORTED_MODULE_9__.useMutation)(UPDATE_PRODUCT_MUTATION),
      _useMutation2 = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      updateProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      updateData = _useMutation2$.data,
      updateError = _useMutation2$.error,
      updateLoading = _useMutation2$.loading;

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default)((data === null || data === void 0 ? void 0 : data.Product) || {
    name: '',
    description: '',
    price: ''
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 23
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_6__.default, {
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
        var res;
        return D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return updateProduct({
                  variables: {
                    id: id,
                    name: inputs.name,
                    description: inputs.description,
                    price: inputs.price
                  }
                })["catch"](console.error);

              case 3:
                res = _context.sent;
                console.log(res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
      error: error || updateError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("fieldset", {
      disabled: updateLoading,
      "aria-busy": updateLoading,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        type: "submit",
        children: "Update Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

_s(UpdateProduct, "EEgEOkkqLxSXFdAtshGKz2E0/kc=", false, function () {
  return [_apollo_client_react__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client_react__WEBPACK_IMPORTED_MODULE_9__.useMutation, _lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default];
});

_c = UpdateProduct;

var _c;

$RefreshReg$(_c, "UpdateProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useForm() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial),
      inputs = _useState[0],
      setInputs = _useState[1];

  var initialValues = Object.values(initial).join('');
  useEffect(function () {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    var _e$target = e.target,
        value = _e$target.value,
        name = _e$target.name,
        type = _e$target.type;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      var _e$target$files = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(e.target.files, 1);

      value = _e$target$files[0];
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {
      var _ref2 = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [key, ''];
    }));
    setInputs(blankState);
  }

  return {
    inputs: inputs,
    handleChange: handleChange,
    clearForm: clearForm
  };
}

_s(useForm, "Ojj4hh6HHOsjtwWnkUaVb5V0o3U=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9saWIvdXNlRm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGVEYXRhIiwidXBkYXRlRXJyb3IiLCJ1cGRhdGVMb2FkaW5nIiwidXNlRm9ybSIsIlByb2R1Y3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJyZXMiLCJsb2ciLCJpbml0aWFsIiwidXNlU3RhdGUiLCJzZXRJbnB1dHMiLCJpbml0aWFsVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsInVzZUVmZmVjdCIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBhcnNlSW50IiwiZmlsZXMiLCJibGFua1N0YXRlIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxvREFBSCxtQkFBMUI7QUFXQSxJQUFNQyx1QkFBdUIsR0FBR0Qsb0RBQUgsb0JBQTdCO0FBbUJlLFNB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QixRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkQsV0FBSyxHQUFHRSxRQUFRLENBQUNGLEtBQUQsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJQyxJQUFJLEtBQUssTUFBYixFQUFxQjtBQUFBLDhLQUNUZixDQUFDLENBQUNhLE1BQUYsQ0FBU0ksS0FEQTs7QUFDbEJILFdBRGtCO0FBRXBCOztBQUNEUCxhQUFTLGlDQUNKWCxNQURJLDhKQUVOSCxJQUZNLEVBRUNxQixLQUZELEdBQVQ7QUFJRDs7QUFFRCxXQUFTZixTQUFULEdBQXFCO0FBQ25CUSxhQUFTLENBQUNGLE9BQUQsQ0FBVDtBQUNEOztBQUVELFdBQVNQLFNBQVQsR0FBcUI7QUFDbkIsUUFBTW9CLFVBQVUsR0FBR1QsTUFBTSxDQUFDVSxXQUFQLENBQ2pCVixNQUFNLENBQUNXLE9BQVAsQ0FBZXhCLE1BQWYsRUFBdUJ5QixHQUF2QixDQUEyQjtBQUFBO0FBQUEsVUFBRUMsR0FBRjtBQUFBLFVBQU9SLEtBQVA7O0FBQUEsYUFBa0IsQ0FBQ1EsR0FBRCxFQUFNLEVBQU4sQ0FBbEI7QUFBQSxLQUEzQixDQURpQixDQUFuQjtBQUdBZixhQUFTLENBQUNXLFVBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU87QUFDTHRCLFVBQU0sRUFBTkEsTUFESztBQUVMQyxnQkFBWSxFQUFaQSxZQUZLO0FBR0xDLGFBQVMsRUFBVEE7QUFISyxHQUFQO0FBS0Q7O0dBdEN1QlAsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGVDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXBkYXRlLmU5ZjcxNWRhZGQxNTk2OWNjYzFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQvcmVhY3QnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuXHJcbmNvbnN0IFNJTkdMRV9QUk9EVUNUX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFNJTkdMRV9QUk9EVUNUX1FVRVJZKCRpZDogSUQhKSB7XHJcbiAgICBQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHByaWNlXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04oXHJcbiAgICAkaWQ6IElEIVxyXG4gICAgJG5hbWU6IFN0cmluZ1xyXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcclxuICAgICRwcmljZTogSW50XHJcbiAgKSB7XHJcbiAgICB1cGRhdGVQcm9kdWN0KFxyXG4gICAgICBpZDogJGlkXHJcbiAgICAgIGRhdGE6IHsgbmFtZTogJG5hbWUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sIHByaWNlOiAkcHJpY2UgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcHJpY2VcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KHsgaWQgfSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtcclxuICAgIHVwZGF0ZVByb2R1Y3QsXHJcbiAgICB7IGRhdGE6IHVwZGF0ZURhdGEsIGVycm9yOiB1cGRhdGVFcnJvciwgbG9hZGluZzogdXBkYXRlTG9hZGluZyB9LFxyXG4gIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9NVVRBVElPTik7XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oXHJcbiAgICBkYXRhPy5Qcm9kdWN0IHx8IHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgcHJpY2U6ICcnLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5sb2FkaW5nLi4uPC9wPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB1cGRhdGVQcm9kdWN0KHtcclxuICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbmFtZTogaW5wdXRzLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dHMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHByaWNlOiBpbnB1dHMucHJpY2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yIHx8IHVwZGF0ZUVycm9yfSAvPlxyXG4gICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e3VwZGF0ZUxvYWRpbmd9IGFyaWEtYnVzeT17dXBkYXRlTG9hZGluZ30+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBQcm9kdWN0PC9idXR0b24+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKGluaXRpYWwpO1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGluaXRpYWwpLmpvaW4oJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBydW5zIHdoZW4gdGhlIHRoaW5ncyB3ZSBhcmUgd2F0Y2hpbmcgY2hhbmdlXHJcbiAgICBzZXRJbnB1dHMoaW5pdGlhbCk7XHJcbiAgfSwgW2luaXRpYWxWYWx1ZXNdKTtcclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICBbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XHJcbiAgICB9XHJcbiAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAuLi5pbnB1dHMsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgIHNldElucHV0cyhpbml0aWFsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcclxuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcclxuICAgICk7XHJcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRzLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgY2xlYXJGb3JtLFxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==