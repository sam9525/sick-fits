self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/RequestReset.js":
/*!************************************!*\
  !*** ./components/RequestReset.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RequestReset; }
/* harmony export */ });
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client/react */ "./node_modules/@apollo/client/react/index.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\RequestReset.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation REQUEST_RESET_MUTATION($email: String!) {\n    sendUserPasswordResetLink(email: $email) {\n      code\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var REQUEST_RESET_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());
function RequestReset() {
  _s();

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default)({
    email: ''
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm;

  var _useMutation = (0,_apollo_client_react__WEBPACK_IMPORTED_MODULE_9__.useMutation)(REQUEST_RESET_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      signup = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var res;
      return D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(inputs);
              _context.next = 4;
              return signup()["catch"](console.error);

            case 4:
              res = _context.sent;
              console.log(res);
              console.log({
                data: data,
                loading: loading,
                error: error
              });
              resetForm(); // Send the email and password to the graphqlAPI

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default, {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      children: "Request a Password Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "Success! Check your email for a link!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "submit",
        children: "Request Reset!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(RequestReset, "fSO9UAX3bbbf5xQ0esX282JvdkI=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_7__.default, _apollo_client_react__WEBPACK_IMPORTED_MODULE_9__.useMutation];
});

_c = RequestReset;

var _c;

$RefreshReg$(_c, "RequestReset");

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

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignInPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_SignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SignIn */ "./components/SignIn.js");
/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SignUp */ "./components/SignUp.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\pages\\signin.js";




var GridStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "signin__GridStyles",
  componentId: "sc-1iz4eat-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:2rem;"]);
_c = GridStyles;
function SignInPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignIn__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUp__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c2 = SignInPage;

var _c, _c2;

$RefreshReg$(_c, "GridStyles");
$RefreshReg$(_c2, "SignInPage");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ25pbi5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1JFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVxdWVzdFJlc2V0IiwidXNlRm9ybSIsImVtYWlsIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJzaWdudXAiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcyIsInNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsiLCJHcmlkU3R5bGVzIiwic3R5bGVkIiwiU2lnbkluUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHNCQUFzQixHQUFHQyxvREFBSCxtQkFBNUI7QUFTZSxTQUFTQyxZQUFULEdBQXdCO0FBQUE7O0FBQUEsaUJBQ09DLHFEQUFPLENBQUM7QUFDbERDLFNBQUssRUFBRTtBQUQyQyxHQUFELENBRGQ7QUFBQSxNQUM3QkMsTUFENkIsWUFDN0JBLE1BRDZCO0FBQUEsTUFDckJDLFlBRHFCLFlBQ3JCQSxZQURxQjtBQUFBLE1BQ1BDLFNBRE8sWUFDUEEsU0FETzs7QUFBQSxxQkFJTUMsaUVBQVcsQ0FDcERSLHNCQURvRCxFQUVwRDtBQUNFUyxhQUFTLEVBQUVKO0FBRGIsR0FGb0QsQ0FKakI7QUFBQTtBQUFBLE1BSTlCSyxNQUo4QjtBQUFBO0FBQUEsTUFJcEJDLElBSm9CLGtCQUlwQkEsSUFKb0I7QUFBQSxNQUlkQyxPQUpjLGtCQUlkQSxPQUpjO0FBQUEsTUFJTEMsS0FKSyxrQkFJTEEsS0FKSzs7QUFBQSxXQVV0QkMsWUFWc0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFRBVXJDLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVliLE1BQVo7QUFGRjtBQUFBLHFCQUdvQkssTUFBTSxXQUFOLENBQWVPLE9BQU8sQ0FBQ0osS0FBdkIsQ0FIcEI7O0FBQUE7QUFHUU0saUJBSFI7QUFJRUYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0FGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFUCxvQkFBSSxFQUFKQSxJQUFGO0FBQVFDLHVCQUFPLEVBQVBBLE9BQVI7QUFBaUJDLHFCQUFLLEVBQUxBO0FBQWpCLGVBQVo7QUFDQU4sdUJBQVMsR0FOWCxDQU9FOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVnFDO0FBQUE7QUFBQTs7QUFtQnJDLHNCQUNFLDhEQUFDLGlEQUFEO0FBQU0sVUFBTSxFQUFDLE1BQWI7QUFBb0IsWUFBUSxFQUFFTyxZQUE5QjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxrREFBRDtBQUFPLFdBQUssRUFBRUQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGlCQUNHLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFUyx5QkFBTixNQUFvQyxJQUFwQyxpQkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBS0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxjQUFJLEVBQUMsT0FGUDtBQUdFLHFCQUFXLEVBQUMsb0JBSGQ7QUFJRSxzQkFBWSxFQUFDLE9BSmY7QUFLRSxlQUFLLEVBQUVmLE1BQU0sQ0FBQ0QsS0FMaEI7QUFNRSxrQkFBUSxFQUFFRTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFnQkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0EzQ3VCSixZO1VBQ3NCQyxpRCxFQUdESyw2RDs7O0tBSnJCTixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmeEI7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNbUIsVUFBVSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw0RkFBaEI7S0FBTUQsVTtBQU1TLFNBQVNFLFVBQVQsR0FBc0I7QUFDbkMsc0JBQ0UsOERBQUMsVUFBRDtBQUFBLDRCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EO01BUnVCQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi5jOTE2YmQ1ZDc1YTFiODNjZjcyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvcmVhY3QnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5cclxuY29uc3QgUkVRVUVTVF9SRVNFVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBSRVFVRVNUX1JFU0VUX01VVEFUSU9OKCRlbWFpbDogU3RyaW5nISkge1xyXG4gICAgc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayhlbWFpbDogJGVtYWlsKSB7XHJcbiAgICAgIGNvZGVcclxuICAgICAgbWVzc2FnZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcXVlc3RSZXNldCgpIHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtzaWdudXAsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIFJFUVVFU1RfUkVTRVRfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzaWdudXAoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBjb25zb2xlLmxvZyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICAvLyBTZW5kIHRoZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gdGhlIGdyYXBocWxBUElcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPGgyPlJlcXVlc3QgYSBQYXNzd29yZCBSZXNldDwvaDI+XHJcbiAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICB7ZGF0YT8uc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICA8cD5TdWNjZXNzISBDaGVjayB5b3VyIGVtYWlsIGZvciBhIGxpbmshPC9wPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVxdWVzdCBSZXNldCE8L2J1dHRvbj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVxdWVzdFJlc2V0IGZyb20gJy4uL2NvbXBvbmVudHMvUmVxdWVzdFJlc2V0JztcclxuaW1wb3J0IFNpZ25JbiBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25Jbic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi4vY29tcG9uZW50cy9TaWduVXAnO1xyXG5cclxuY29uc3QgR3JpZFN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMnJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JblBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkU3R5bGVzPlxyXG4gICAgICA8U2lnbkluIC8+XHJcbiAgICAgIDxTaWduVXAgLz5cclxuICAgICAgPFJlcXVlc3RSZXNldCAvPlxyXG4gICAgPC9HcmlkU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==