self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/PaginationField.js":
/*!********************************!*\
  !*** ./lib/PaginationField.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function paginationField() {
  return {
    keyArgs: false,
    // tells apollo we will take care of everything
    read: function read() {
      var _data$_allProductsMet;

      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          args = _ref.args,
          cache = _ref.cache;

      // console.log({ existing, args, cache });
      var skip = args.skip,
          first = args.first; // Read the number of items on the page from the cache

      var data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      var page = skip / first + 1;
      var pages = Math.ceil(count / first); // Check if we have existing items

      var items = existing.slice(skip, skip + first).filter(function (x) {
        return x;
      }); // If
      // There are items
      // AND there aren't enough items to satisfy how many were requested
      // AND we are on the last page
      // THEN JUST SEND IT

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      } // If there are items, just reutrn them from the cache, and we don't need to go to the network


      if (items.length) {
        // console.log(
        //   `There are ${items.length} items in the cache! Gonna send them to apollo`
        // );
        return items;
      }

      return false; // fallback to network
      // First thing it does it asks the read function for those items.
      // We can either do one of two things:
      // First things we can do is return the items because they are already in the cache
      // The other thing we can do is to return false from here, (network request)
    },
    merge: function merge(existing, incoming, _ref2) {
      var args = _ref2.args;
      var skip = args.skip,
          first = args.first; // This runs when the Apollo client comes back from the network with our product
      // console.log(`MErging items from the network ${incoming.length}`);

      var merged = existing ? existing.slice(0) : [];

      for (var i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      } // console.log(merged);
      // Finally we return the merged items from the cache,


      return merged;
    }
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL1BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtZXJnZSIsImluY29taW5nIiwibWVyZ2VkIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3hDLFNBQU87QUFDTEMsV0FBTyxFQUFFLEtBREo7QUFDVztBQUNoQkMsUUFGSyxrQkFFZ0M7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNuQztBQURtQyxVQUUzQkMsSUFGMkIsR0FFWEYsSUFGVyxDQUUzQkUsSUFGMkI7QUFBQSxVQUVyQkMsS0FGcUIsR0FFWEgsSUFGVyxDQUVyQkcsS0FGcUIsRUFJbkM7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyxvRUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCxnREFBR0EsSUFBSSxDQUFFSyxnQkFBVCwwREFBRyxzQkFBd0JELEtBQXRDO0FBQ0EsVUFBTUUsSUFBSSxHQUFHUixJQUFJLEdBQUdDLEtBQVAsR0FBZSxDQUE1QjtBQUNBLFVBQU1RLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVMLEtBQUssR0FBR0wsS0FBbEIsQ0FBZCxDQVJtQyxDQVVuQzs7QUFDQSxVQUFNVyxLQUFLLEdBQUdmLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZWIsSUFBZixFQUFxQkEsSUFBSSxHQUFHQyxLQUE1QixFQUFtQ2EsTUFBbkMsQ0FBMEMsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxPQUExQyxDQUFkLENBWG1DLENBWW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBSUgsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQWpDLElBQTBDTyxJQUFJLEtBQUtDLEtBQXZELEVBQThEO0FBQzVELGVBQU9HLEtBQVA7QUFDRDs7QUFDRCxVQUFJQSxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQzFCO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0F4QmtDLENBMEJuQzs7O0FBQ0EsVUFBSVcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGVBQU9KLEtBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQVAsQ0FsQ21DLENBa0NyQjtBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsS0ExQ0k7QUEyQ0xLLFNBM0NLLGlCQTJDQ3BCLFFBM0NELEVBMkNXcUIsUUEzQ1gsU0EyQytCO0FBQUEsVUFBUnBCLElBQVEsU0FBUkEsSUFBUTtBQUFBLFVBQzFCRSxJQUQwQixHQUNWRixJQURVLENBQzFCRSxJQUQwQjtBQUFBLFVBQ3BCQyxLQURvQixHQUNWSCxJQURVLENBQ3BCRyxLQURvQixFQUVsQztBQUNBOztBQUNBLFVBQU1rQixNQUFNLEdBQUd0QixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxDQUFmLENBQUgsR0FBdUIsRUFBOUM7O0FBQ0EsV0FBSyxJQUFJTyxDQUFDLEdBQUdwQixJQUFiLEVBQW1Cb0IsQ0FBQyxHQUFHcEIsSUFBSSxHQUFHa0IsUUFBUSxDQUFDRixNQUF2QyxFQUErQyxFQUFFSSxDQUFqRCxFQUFvRDtBQUNsREQsY0FBTSxDQUFDQyxDQUFELENBQU4sR0FBWUYsUUFBUSxDQUFDRSxDQUFDLEdBQUdwQixJQUFMLENBQXBCO0FBQ0QsT0FQaUMsQ0FRbEM7QUFDQTs7O0FBQ0EsYUFBT21CLE1BQVA7QUFDRDtBQXRESSxHQUFQO0FBd0REIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWEyZjk3MmEzNDhlOWQyNGY2ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBrZXlBcmdzOiBmYWxzZSwgLy8gdGVsbHMgYXBvbGxvIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmdcclxuICAgIHJlYWQoZXhpc3RpbmcgPSBbXSwgeyBhcmdzLCBjYWNoZSB9KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHsgZXhpc3RpbmcsIGFyZ3MsIGNhY2hlIH0pO1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG5cclxuICAgICAgLy8gUmVhZCB0aGUgbnVtYmVyIG9mIGl0ZW1zIG9uIHRoZSBwYWdlIGZyb20gdGhlIGNhY2hlXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogUEFHSU5BVElPTl9RVUVSWSB9KTtcclxuICAgICAgY29uc3QgY291bnQgPSBkYXRhPy5fYWxsUHJvZHVjdHNNZXRhPy5jb3VudDtcclxuICAgICAgY29uc3QgcGFnZSA9IHNraXAgLyBmaXJzdCArIDE7XHJcbiAgICAgIGNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKGNvdW50IC8gZmlyc3QpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBleGlzdGluZyBpdGVtc1xyXG4gICAgICBjb25zdCBpdGVtcyA9IGV4aXN0aW5nLnNsaWNlKHNraXAsIHNraXAgKyBmaXJzdCkuZmlsdGVyKCh4KSA9PiB4KTtcclxuICAgICAgLy8gSWZcclxuICAgICAgLy8gVGhlcmUgYXJlIGl0ZW1zXHJcbiAgICAgIC8vIEFORCB0aGVyZSBhcmVuJ3QgZW5vdWdoIGl0ZW1zIHRvIHNhdGlzZnkgaG93IG1hbnkgd2VyZSByZXF1ZXN0ZWRcclxuICAgICAgLy8gQU5EIHdlIGFyZSBvbiB0aGUgbGFzdCBwYWdlXHJcbiAgICAgIC8vIFRIRU4gSlVTVCBTRU5EIElUXHJcblxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QgJiYgcGFnZSA9PT0gcGFnZXMpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QpIHtcclxuICAgICAgICAvLyBXZSBkb24ndCBoYXZlIGFueSBpdGVtcywgd2UgbXVzdCBnbyB0byB0aGUgbmV0d29yayB0byBmZXRjaCB0aGVtXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgaXRlbXMsIGp1c3QgcmV1dHJuIHRoZW0gZnJvbSB0aGUgY2FjaGUsIGFuZCB3ZSBkb24ndCBuZWVkIHRvIGdvIHRvIHRoZSBuZXR3b3JrXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcclxuICAgICAgICAvLyAgIGBUaGVyZSBhcmUgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zIGluIHRoZSBjYWNoZSEgR29ubmEgc2VuZCB0aGVtIHRvIGFwb2xsb2BcclxuICAgICAgICAvLyApO1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBmYWxsYmFjayB0byBuZXR3b3JrXHJcblxyXG4gICAgICAvLyBGaXJzdCB0aGluZyBpdCBkb2VzIGl0IGFza3MgdGhlIHJlYWQgZnVuY3Rpb24gZm9yIHRob3NlIGl0ZW1zLlxyXG4gICAgICAvLyBXZSBjYW4gZWl0aGVyIGRvIG9uZSBvZiB0d28gdGhpbmdzOlxyXG4gICAgICAvLyBGaXJzdCB0aGluZ3Mgd2UgY2FuIGRvIGlzIHJldHVybiB0aGUgaXRlbXMgYmVjYXVzZSB0aGV5IGFyZSBhbHJlYWR5IGluIHRoZSBjYWNoZVxyXG4gICAgICAvLyBUaGUgb3RoZXIgdGhpbmcgd2UgY2FuIGRvIGlzIHRvIHJldHVybiBmYWxzZSBmcm9tIGhlcmUsIChuZXR3b3JrIHJlcXVlc3QpXHJcbiAgICB9LFxyXG4gICAgbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCB7IGFyZ3MgfSkge1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICAvLyBUaGlzIHJ1bnMgd2hlbiB0aGUgQXBvbGxvIGNsaWVudCBjb21lcyBiYWNrIGZyb20gdGhlIG5ldHdvcmsgd2l0aCBvdXIgcHJvZHVjdFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhgTUVyZ2luZyBpdGVtcyBmcm9tIHRoZSBuZXR3b3JrICR7aW5jb21pbmcubGVuZ3RofWApO1xyXG4gICAgICBjb25zdCBtZXJnZWQgPSBleGlzdGluZyA/IGV4aXN0aW5nLnNsaWNlKDApIDogW107XHJcbiAgICAgIGZvciAobGV0IGkgPSBza2lwOyBpIDwgc2tpcCArIGluY29taW5nLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbWVyZ2VkW2ldID0gaW5jb21pbmdbaSAtIHNraXBdO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG1lcmdlZCk7XHJcbiAgICAgIC8vIEZpbmFsbHkgd2UgcmV0dXJuIHRoZSBtZXJnZWQgaXRlbXMgZnJvbSB0aGUgY2FjaGUsXHJcbiAgICAgIHJldHVybiBtZXJnZWQ7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==