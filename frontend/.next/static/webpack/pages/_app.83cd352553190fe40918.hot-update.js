self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Checkout.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation CREATE_ORDER_MUTATION($token: String!) {\n    checkout {\n      id\n      charge\n      total\n      items {\n        id\n        name\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
_c = CheckoutFormStyles;
var CREATE_ORDER_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_14__.default)(_templateObject());
var stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_6__.loadStripe)("pk_test_51LBknDEBWavQEuEn8FFbGzsoFSXfFs8j1K3b3nBZaDIGy7ckzkt9fqls9m40ToXoJ47ocfnG9s0pPOjwHyUrBBN200q0g7w9qm");

function CheckoutForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.useElements)();
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();

  var _useCart = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_12__.useCart)(),
      closecart = _useCart.closecart;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_11__.CURRENT_USER_QUERY
    }]
  }),
      _useMutation2 = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      checkout = _useMutation2[0],
      graphQLERROR = _useMutation2[1].error;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var _yield$stripe$createP, error, paymentMethod, order;

      return D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              nprogress__WEBPACK_IMPORTED_MODULE_7___default().start();
              _context.next = 4;
              return stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.CardElement)
              });

            case 4:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;

              if (!error) {
                _context.next = 11;
                break;
              }

              setError(error);
              nprogress__WEBPACK_IMPORTED_MODULE_7___default().done();
              return _context.abrupt("return");

            case 11:
              _context.next = 13;
              return checkout({
                variables: {
                  token: paymentMethod.id
                }
              });

            case 13:
              order = _context.sent;
              router.push({
                pathname: "/order/[id]",
                query: {
                  id: order.data.checkout.id
                }
              });
              closecart();
              setLoading(false);
              nprogress__WEBPACK_IMPORTED_MODULE_7___default().done();

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, this), graphQLError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: graphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

_s(CheckoutForm, "jVv6WBHW5MNXlzRdypA4o7vCeng=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.useElements, next_dist_client_router__WEBPACK_IMPORTED_MODULE_9__.useRouter, _lib_cartState__WEBPACK_IMPORTED_MODULE_12__.useCart, _apollo_client__WEBPACK_IMPORTED_MODULE_15__.useMutation];
});

_c2 = CheckoutForm;
function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
_c3 = Checkout;

var _c, _c2, _c3;

$RefreshReg$(_c, "CheckoutFormStyles");
$RefreshReg$(_c2, "CheckoutForm");
$RefreshReg$(_c3, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0Rm9ybSIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUNhcnQiLCJjbG9zZWNhcnQiLCJ1c2VNdXRhdGlvbiIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJjaGVja291dCIsImdyYXBoUUxFUlJPUiIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5Qcm9ncmVzcyIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsInBheW1lbnRNZXRob2QiLCJ2YXJpYWJsZXMiLCJ0b2tlbiIsImlkIiwib3JkZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJkYXRhIiwibWVzc2FnZSIsImdyYXBoUUxFcnJvciIsImZvbnRTaXplIiwiQ2hlY2tvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUF4QjtLQUFNRCxrQjtBQVNOLElBQU1FLHFCQUFxQixHQUFHQyxxREFBSCxtQkFBM0I7QUFjQSxJQUFNQyxTQUFTLEdBQUdDLDZEQUFVLENBQUND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QUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7TUFOdUIyQyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODNjZDM1MjU1MzE5MGZlNDA5MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZEVsZW1lbnQsXHJcbiAgRWxlbWVudHMsXHJcbiAgdXNlRWxlbWVudHMsXHJcbiAgdXNlU3RyaXBlLFxyXG59IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gJy4vc3R5bGVzL1NpY2tCdXR0b24nO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgQ1JFQVRFX09SREVSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9PUkRFUl9NVVRBVElPTigkdG9rZW46IFN0cmluZyEpIHtcclxuICAgIGNoZWNrb3V0IHtcclxuICAgICAgaWRcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBjbG9zZWNhcnQgfSA9IHVzZUNhcnQoKTtcclxuICBjb25zdCBbY2hlY2tvdXQsIHsgZXJyb3I6IGdyYXBoUUxFUlJPUiB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgQ1JFQVRFX09SREVSX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgY2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCksXHJcbiAgICB9KTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgIG5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgY2hlY2tvdXQoe1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICB0b2tlbjogcGF5bWVudE1ldGhvZC5pZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogYC9vcmRlci9baWRdYCxcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBpZDogb3JkZXIuZGF0YS5jaGVja291dC5pZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY2xvc2VjYXJ0KCk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIG5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAge2Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgIHtncmFwaFFMRXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntncmFwaFFMRXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICA8Q2FyZEVsZW1lbnQgLz5cclxuICAgICAgPFNpY2tCdXR0b24+Q2hlY2sgT3V0IE5vdzwvU2lja0J1dHRvbj5cclxuICAgIDwvQ2hlY2tvdXRGb3JtU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVMaWJ9PlxyXG4gICAgICA8Q2hlY2tvdXRGb3JtIC8+XHJcbiAgICA8L0VsZW1lbnRzPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==