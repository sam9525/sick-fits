self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGINATION_QUERY": function() { return /* binding */ PAGINATION_QUERY; },
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Pagination.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_data_Program_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  query PAGINATION_QUERY {\n    _allProductsMeta {\n      count\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var PAGINATION_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_7__.default)(_templateObject());
function Pagination(_ref) {
  _s();

  var page = _ref.page;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(PAGINATION_QUERY),
      error = _useQuery.error,
      loading = _useQuery.loading,
      data = _useQuery.data;

  if (loading) return 'Loading...';
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }, this);
  var count = data._allProductsMeta.count;
  var pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_6__.perPage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Sick Fits - Page ", page, " of"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/products/".concat(page - 1),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page <= 1,
        children: "\u2190 Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Page ", page, " of ", pageCount]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [count, " Items Total"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: "/products/".concat(page + 1),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page >= pageCount,
        children: "Next \u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(Pagination, "MadqETWYtkFh3dDWW9IjxDLlwQw=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery];
});

_c = Pagination;

var _c;

$RefreshReg$(_c, "Pagination");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbIlBBR0lOQVRJT05fUVVFUlkiLCJncWwiLCJQYWdpbmF0aW9uIiwicGFnZSIsInVzZVF1ZXJ5IiwiZXJyb3IiLCJsb2FkaW5nIiwiZGF0YSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUdDLG9EQUFILG1CQUF0QjtBQVFRLFNBQVNDLFVBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ1ZDLHdEQUFRLENBQUNKLGdCQUFELENBREU7QUFBQSxNQUNuQ0ssS0FEbUMsYUFDbkNBLEtBRG1DO0FBQUEsTUFDNUJDLE9BRDRCLGFBQzVCQSxPQUQ0QjtBQUFBLE1BQ25CQyxJQURtQixhQUNuQkEsSUFEbUI7O0FBRTNDLE1BQUlELE9BQUosRUFBYSxPQUFPLFlBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU8sOERBQUMsa0RBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUhnQyxNQUluQ0csS0FKbUMsR0FJekJELElBQUksQ0FBQ0UsZ0JBSm9CLENBSW5DRCxLQUptQztBQUszQyxNQUFNRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixLQUFLLEdBQUdLLDRDQUFsQixDQUFsQjtBQUVBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLHdDQUNvQlYsSUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLHNCQUFlQSxJQUFJLEdBQUcsQ0FBdEIsQ0FBVjtBQUFBLDZCQUNFO0FBQUcseUJBQWVBLElBQUksSUFBSSxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVNFO0FBQUEsMEJBQ1FBLElBRFIsVUFDa0JPLFNBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBWUU7QUFBQSxpQkFBSUYsS0FBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWFFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxzQkFBZUwsSUFBSSxHQUFHLENBQXRCLENBQVY7QUFBQSw2QkFDRTtBQUFHLHlCQUFlQSxJQUFJLElBQUlPLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQTFCdUJSLFU7VUFDV0Usb0Q7OztLQURYRixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUyZTJmNTQwZjA0MGJlYzI2MzFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQYWdpbmF0aW9uU3R5bGVzIGZyb20gJy4vc3R5bGVzL1BhZ2luYXRpb25TdHlsZXMnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgUEFHSU5BVElPTl9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBQQUdJTkFUSU9OX1FVRVJZIHtcclxuICAgIF9hbGxQcm9kdWN0c01ldGEge1xyXG4gICAgICBjb3VudFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlIH0pIHtcclxuICBjb25zdCB7IGVycm9yLCBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShQQUdJTkFUSU9OX1FVRVJZKTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJztcclxuICBpZiAoZXJyb3IpIHJldHVybiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgY29uc3QgeyBjb3VudCB9ID0gZGF0YS5fYWxsUHJvZHVjdHNNZXRhO1xyXG4gIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguY2VpbChjb3VudCAvIHBlclBhZ2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2luYXRpb25TdHlsZXM+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIFNpY2sgRml0cyAtIFBhZ2Uge3BhZ2V9IG9mXHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSAtIDF9YH0+XHJcbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA8PSAxfT7ihpAgUHJldjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8cD5cclxuICAgICAgICBQYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPntjb3VudH0gSXRlbXMgVG90YWw8L3A+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwYWdlICsgMX1gfT5cclxuICAgICAgICA8YSBhcmlhLWRpc2FibGVkPXtwYWdlID49IHBhZ2VDb3VudH0+TmV4dCDihpI8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvUGFnaW5hdGlvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=