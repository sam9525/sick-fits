(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _lib_clacTotalPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/clacTotalPrice */ "./lib/clacTotalPrice.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Checkout */ "./components/Checkout.js");

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Cart.js";










const CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-19s6z00-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);

function CartItem({
  cartItem
}) {
  const {
    product
  } = cartItem;
  if (!product) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItemStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(product.price * cartItem.quantity), "-", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(product.price), " each"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_9__.default, {
      id: cartItem.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

function Cart() {
  const me = (0,_User__WEBPACK_IMPORTED_MODULE_6__.useUser)();
  const {
    cartOpen,
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_8__.useCart)();
  if (!me) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__.default, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [me.name, "'s Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: closeCart,
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(cartItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
        cartItem: cartItem
      }, cartItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)((0,_lib_clacTotalPrice__WEBPACK_IMPORTED_MODULE_7__.default)(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkout__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartCount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\CartCount.js";


const Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-xxvp4g-0"
})(["background:var(--red);color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"]);
const AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-xxvp4g-1"
})(["position:relative;.count{display:block;position:relative;transition:transform 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
function CartCount({
  count
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimationStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 400,
          exit: 400
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dot, {
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Checkout.js";











const CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_6___default().form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
const CREATE_ORDER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
const stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)("pk_test_51LBknDEBWavQEuEn8FFbGzsoFSXfFs8j1K3b3nBZaDIGy7ckzkt9fqls9m40ToXoJ47ocfnG9s0pPOjwHyUrBBN200q0g7w9qm");

function CheckoutForm() {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.useElements)();
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_11__.useCart)();
  const [checkout, {
    error: graphQLError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_10__.CURRENT_USER_QUERY
    }]
  });

  async function handleSubmit(e) {
    e.preventDefault();
    nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.CardElement)
    });

    if (error) {
      setError(error);
      nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
      return;
    }

    const order = await checkout({
      variables: {
        token: paymentMethod.id
      }
    });
    router.push({
      pathname: `/order/[id]`,
      query: {
        id: order.data.checkout.id
      }
    });
    closeCart();
    setLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, this), graphQLError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: graphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__.default, {
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

function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_1__.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutForm, {}, void 0, false, {
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

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search */ "./components/Search.js");

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Header.js";





const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;background:red;transform:skew(-7deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: "Sick fits"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sub-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");


var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Nav.js";






function Nav() {
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_6__.useUser)();
  const {
    openCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_2__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/sell",
        children: "Sell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/orders",
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/account",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: openCart,
        children: ["My Cart", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartCount__WEBPACK_IMPORTED_MODULE_3__.default, {
          count: user.cart.reduce((tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0), 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)]
    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/signin",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Page.js";



const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3A3A3A;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:10px;}*,*:before,*:after{box-sizing:inherit;}body{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(--black);}a:hover{text-decoration:underline;}button{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]);
const InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PAGINATION_QUERY": function() { return /* binding */ PAGINATION_QUERY; },
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Pagination.js";







const PAGINATION_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;
function Pagination({
  page
}) {
  const {
    error,
    loading,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }, this);
  const {
    count
  } = data._allProductsMeta;
  const pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_7__.perPage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Sick Fits - Page ", page, " of ", pageCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/products/${page - 1}`,
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/products/${page + 1}`,
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

/***/ }),

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RemoveFromCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\RemoveFromCart.js";



const BigButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
const REMOVE_FROM_CART_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart({
  id
}) {
  const [removeFromCart, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id
    },
    update
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BigButton, {
    onClick: removeFromCart,
    disabled: loading,
    type: "button",
    title: "Remove This Item from Cart",
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");


var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\Search.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SEARCH_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_4___default())`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
function Search() {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const [findItems, {
    loading,
    data,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  });
  const items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  const findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(findItems, 350);
  (0,downshift__WEBPACK_IMPORTED_MODULE_3__.resetIdCounter)();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex
  } = (0,downshift__WEBPACK_IMPORTED_MODULE_3__.useCombobox)({
    items,

    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },

    onSelectedItemChange({
      selectedItem
    }) {
      router.push({
        pathname: `/product/${selectedItem.id}`
      });
    },

    itemToString: item => (item === null || item === void 0 ? void 0 : item.name) || ''
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Search for an Item',
        id: 'search',
        className: loading ? 'loading' : null
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map((item, index) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
        item,
        index
      })), {}, {
        key: item.id,
        highlighted: index === highlightedIndex,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: item.photo.image.publicUrlTransformed,
        alt: item.name,
        width: "50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }, this), item.name)), isOpen && !items.length && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, {
        children: ["Sorry, No items found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react */ "@apollo/client/react");
/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\components\\SignOut.js";



const SIGNOUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client_react__WEBPACK_IMPORTED_MODULE_2__.useMutation)(SIGNOUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__.CURRENT_USER_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_USER_QUERY": function() { return /* binding */ CURRENT_USER_QUERY; },
/* harmony export */   "useUser": function() { return /* binding */ useUser; }
/* harmony export */ });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


const CURRENT_USER_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

/***/ }),

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid var(--black);margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double var(--black);margin-top:2rem;padding-top:2rem;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDown": function() { return /* binding */ DropDown; },
/* harmony export */   "DropDownItem": function() { return /* binding */ DropDownItem; },
/* harmony export */   "SearchStyles": function() { return /* binding */ SearchStyles; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown",
  componentId: "sc-n5d97g-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid var(--lightGray);"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-n5d97g-1"
})(["border-bottom:1px solid var(--lightGray);background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.highlighted ? '#f7f7f7' : 'white', props => props.highlighted ? 'padding-left: 2rem;' : null, props => props.highlighted ? props.theme.lightgrey : 'white');
const glow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid var(--lightGray);border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid var(--lightGray);&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SickButton",
  componentId: "sc-l04z44-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./components/styles/Supreme.js":
/*!**************************************!*\
  !*** ./components/styles/Supreme.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Supreme = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-xv30qb-0"
})(["background:var(--red);color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (Supreme);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": function() { return /* binding */ endpoint; },
/* harmony export */   "prodEndpoint": function() { return /* binding */ prodEndpoint; },
/* harmony export */   "perPage": function() { return /* binding */ perPage; }
/* harmony export */ });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:3000/api/graphql`;
const prodEndpoint = `fill me in when we deploy`;
const perPage = 2;

/***/ }),

/***/ "./lib/PaginationField.js":
/*!********************************!*\
  !*** ./lib/PaginationField.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");

function paginationField() {
  return {
    keyArgs: false,

    read(existing = [], {
      args,
      cache
    }) {
      var _data$_allProductsMet;

      const {
        skip,
        first
      } = args;
      const data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      const count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      const items = existing.slice(skip, skip + first).filter(x => x);

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        return false;
      }

      if (items.length) {
        return items;
      }

      return false;
    },

    merge(existing, incoming, {
      args
    }) {
      const {
        skip,
        first
      } = args;
      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      return merged;
    }

  };
}

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStateProvider": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\lib\\cartState.js";

const LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {
    value: {
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

function useCart() {
  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);
  return all;
}



/***/ }),

/***/ "./lib/clacTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/clacTotalPrice.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calcTotalPrice; }
/* harmony export */ });
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "@apollo/link-error");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _PaginationField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PaginationField */ "./lib/PaginationField.js");








function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: (0,_PaginationField__WEBPACK_IMPORTED_MODULE_6__.default)()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree
}));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");

var _jsxFileName = "D:\\data\\Program\\sick-fits\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().start());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.CartStateProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_6__.default)(MyApp));

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react":
/*!***************************************!*\
  !*** external "@apollo/client/react" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/react-stripe-js");;

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("downshift");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash.debounce");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js-lib_formatMoney_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DaGVja291dC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvUmVtb3ZlRnJvbUNhcnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9TaWduT3V0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvVXNlci5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9DYXJ0U3R5bGVzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL0Nsb3NlQnV0dG9uLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL0Ryb3BEb3duLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL05hdlN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1NpY2tCdXR0b24uanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvU3VwcmVtZS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL1BhZ2luYXRpb25GaWVsZC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvY2FydFN0YXRlLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi9jbGFjVG90YWxQcmljZS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvd2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L3JlYWN0XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9saW5rLWVycm9yXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3RyaXBlL3N0cmlwZS1qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZG93bnNoaWZ0XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJsb2Rhc2guZGVib3VuY2VcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9pZ25vcmVkfEQ6XFxkYXRhXFxQcm9ncmFtXFxzaWNrLWZpdHNcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ2FydEl0ZW1TdHlsZXMiLCJzdHlsZWQiLCJDYXJ0SXRlbSIsImNhcnRJdGVtIiwicHJvZHVjdCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJmb3JtYXRNb25leSIsInByaWNlIiwicXVhbnRpdHkiLCJpZCIsIkNhcnQiLCJtZSIsInVzZVVzZXIiLCJjYXJ0T3BlbiIsImNsb3NlQ2FydCIsInVzZUNhcnQiLCJjYXJ0IiwibWFwIiwiY2FsY1RvdGFsUHJpY2UiLCJEb3QiLCJBbmltYXRpb25TdHlsZXMiLCJDYXJ0Q291bnQiLCJjb3VudCIsImVudGVyIiwiZXhpdCIsIkNoZWNrb3V0Rm9ybVN0eWxlcyIsIkNSRUFURV9PUkRFUl9NVVRBVElPTiIsImdxbCIsInN0cmlwZUxpYiIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiQ2hlY2tvdXRGb3JtIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2hlY2tvdXQiLCJncmFwaFFMRXJyb3IiLCJ1c2VNdXRhdGlvbiIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuUHJvZ3Jlc3MiLCJwYXltZW50TWV0aG9kIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50Iiwib3JkZXIiLCJ2YXJpYWJsZXMiLCJ0b2tlbiIsInB1c2giLCJwYXRobmFtZSIsImRhdGEiLCJtZXNzYWdlIiwiZm9udFNpemUiLCJDaGVja291dCIsIkxvZ28iLCJIZWFkZXJTdHlsZXMiLCJIZWFkZXIiLCJOYXYiLCJ1c2VyIiwib3BlbkNhcnQiLCJyZWR1Y2UiLCJ0YWxseSIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5uZXJTdHlsZXMiLCJQYWdlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJQQUdJTkFUSU9OX1FVRVJZIiwiUGFnaW5hdGlvbiIsInBhZ2UiLCJ1c2VRdWVyeSIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlQ291bnQiLCJNYXRoIiwiY2VpbCIsInBlclBhZ2UiLCJCaWdCdXR0b24iLCJSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiZXZpY3QiLCJpZGVudGlmeSIsImRlbGV0ZUNhcnRJdGVtIiwiUmVtb3ZlRnJvbUNhcnQiLCJyZW1vdmVGcm9tQ2FydCIsIlNFQVJDSF9QUk9EVUNUU19RVUVSWSIsIlNlYXJjaCIsImZpbmRJdGVtcyIsInVzZUxhenlRdWVyeSIsImZldGNoUG9saWN5IiwiaXRlbXMiLCJzZWFyY2hUZXJtcyIsImZpbmRJdGVtc0J1dENoaWxsIiwiZGVib3VuY2UiLCJyZXNldElkQ291bnRlciIsImlzT3BlbiIsImlucHV0VmFsdWUiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldEl0ZW1Qcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsInNlYXJjaFRlcm0iLCJvblNlbGVjdGVkSXRlbUNoYW5nZSIsInNlbGVjdGVkSXRlbSIsIml0ZW1Ub1N0cmluZyIsIml0ZW0iLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsImluZGV4IiwibGVuZ3RoIiwiU0lHTk9VVF9NVVRBVElPTiIsIlNpZ25PdXQiLCJzaWdub3V0IiwiYXV0aGVudGljYXRlZEl0ZW0iLCJDYXJ0U3R5bGVzIiwicHJvcHMiLCJvcGVuIiwiQ2xvc2VCdXR0b24iLCJEcm9wRG93biIsIkRyb3BEb3duSXRlbSIsImhpZ2hsaWdodGVkIiwidGhlbWUiLCJsaWdodGdyZXkiLCJnbG93Iiwia2V5ZnJhbWVzIiwiU2VhcmNoU3R5bGVzIiwiTmF2U3R5bGVzIiwiUGFnaW5hdGlvblN0eWxlcyIsIlNpY2tCdXR0b24iLCJTdXByZW1lIiwiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsInNraXAiLCJmaXJzdCIsInJlYWRRdWVyeSIsInBhZ2VzIiwic2xpY2UiLCJmaWx0ZXIiLCJ4IiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiLCJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsIkNhcnRTdGF0ZVByb3ZpZGVyIiwic2V0Q2FydE9wZW4iLCJ0b2dnbGVDYXJ0IiwiYWxsIiwidXNlQ29udGV4dCIsImNyZWF0ZUNsaWVudCIsImhlYWRlcnMiLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiQXBvbGxvTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiZm9yRWFjaCIsImxvY2F0aW9ucyIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVXBsb2FkTGluayIsInVyaSIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYWxsUHJvZHVjdHMiLCJyZXN0b3JlIiwid2l0aEFwb2xsbyIsImdldERhdGFGcm9tVHJlZSIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHVKQUFwQjs7QUFjQSxTQUFTQyxRQUFULENBQWtCO0FBQUVDO0FBQUYsQ0FBbEIsRUFBZ0M7QUFDOUIsUUFBTTtBQUFFQztBQUFGLE1BQWNELFFBQXBCO0FBQ0EsTUFBSSxDQUFDQyxPQUFMLEVBQWMsT0FBTyxJQUFQO0FBQ2Qsc0JBQ0UsOERBQUMsY0FBRDtBQUFBLDRCQUNFO0FBQ0UsV0FBSyxFQUFDLEtBRFI7QUFFRSxTQUFHLEVBQUVBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxLQUFkLENBQW9CQyxvQkFGM0I7QUFHRSxTQUFHLEVBQUVILE9BQU8sQ0FBQ0k7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRTtBQUFBLDhCQUNFO0FBQUEsa0JBQUtKLE9BQU8sQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLG1CQUNHQyx5REFBVyxDQUFDTCxPQUFPLENBQUNNLEtBQVIsR0FBZ0JQLFFBQVEsQ0FBQ1EsUUFBMUIsQ0FEZCxvQkFFRTtBQUFBLHFCQUNHUixRQUFRLENBQUNRLFFBRFosWUFDK0JGLHlEQUFXLENBQUNMLE9BQU8sQ0FBQ00sS0FBVCxDQUQxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFlRSw4REFBQyxvREFBRDtBQUFnQixRQUFFLEVBQUVQLFFBQVEsQ0FBQ1M7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtB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U0Q7O0FBRURGLEtBQUssQ0FBQ0ksZUFBTixHQUF3QixnQkFBZ0I7QUFBRUgsV0FBRjtBQUFhSTtBQUFiLENBQWhCLEVBQW9DO0FBQzFELE1BQUlILFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJRCxTQUFTLENBQUNHLGVBQWQsRUFBK0I7QUFDN0JGLGFBQVMsR0FBRyxNQUFNRCxTQUFTLENBQUNHLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxCO0FBQ0Q7O0FBQ0RILFdBQVMsQ0FBQ2pLLEtBQVYsR0FBa0JvSyxHQUFHLENBQUNwSyxLQUF0QjtBQUNBLFNBQU87QUFBRWlLO0FBQUYsR0FBUDtBQUNELENBUEQ7O0FBU0EsK0RBQWVJLHNEQUFRLENBQUNOLEtBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDYXJ0U3R5bGVzIGZyb20gJy4vc3R5bGVzL0NhcnRTdHlsZXMnO1xyXG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAnLi9zdHlsZXMvQ2xvc2VCdXR0b24nO1xyXG5pbXBvcnQgU3VwcmVtZSBmcm9tICcuL3N0eWxlcy9TdXByZW1lJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgY2FsY1RvdGFsUHJpY2UgZnJvbSAnLi4vbGliL2NsYWNUb3RhbFByaWNlJztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5pbXBvcnQgUmVtb3ZlRnJvbUNhcnQgZnJvbSAnLi9SZW1vdmVGcm9tQ2FydCc7XHJcbmltcG9ydCBDaGVja291dCBmcm9tICcuL0NoZWNrb3V0JztcclxuXHJcbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBoMyxcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IGNhcnRJdGVtIH0pIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGNhcnRJdGVtO1xyXG4gIGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0SXRlbVN0eWxlcz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICBzcmM9e3Byb2R1Y3QucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlICogY2FydEl0ZW0ucXVhbnRpdHkpfS1cclxuICAgICAgICAgIDxlbT5cclxuICAgICAgICAgICAge2NhcnRJdGVtLnF1YW50aXR5fSAmdGltZXM7IHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX0gZWFjaFxyXG4gICAgICAgICAgPC9lbT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UmVtb3ZlRnJvbUNhcnQgaWQ9e2NhcnRJdGVtLmlkfSAvPlxyXG4gICAgPC9DYXJ0SXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHsgY2FydE9wZW4sIGNsb3NlQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG4gIGlmICghbWUpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0eWxlcyBvcGVuPXtjYXJ0T3Blbn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFN1cHJlbWU+e21lLm5hbWV9J3MgQ2FydDwvU3VwcmVtZT5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VDYXJ0fT4mdGltZXM7PC9DbG9zZUJ1dHRvbj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWUuY2FydC5tYXAoKGNhcnRJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxwPntmb3JtYXRNb25leShjYWxjVG90YWxQcmljZShtZS5jYXJ0KSl9PC9wPlxyXG4gICAgICAgIDxDaGVja291dCAvPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvQ2FydFN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IERvdCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBtaW4td2lkdGg6IDNyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICd0bnVtJztcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbmA7XG5cbmNvbnN0IEFuaW1hdGlvblN0eWxlcyA9IHN0eWxlZC5zcGFuYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5jb3VudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAuY291bnQtZW50ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoNCkgcm90YXRlWCgwLjV0dXJuKTtcbiAgfVxuICAuY291bnQtZW50ZXItYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XG4gIH1cbiAgLmNvdW50LWV4aXQge1xuICAgIHRvcDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xuICB9XG4gIC5jb3VudC1leGl0LWFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KSByb3RhdGVYKDAuNXR1cm4pO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0Q291bnQoeyBjb3VudCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGlvblN0eWxlcz5cbiAgICAgIDxUcmFuc2l0aW9uR3JvdXA+XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50XCJcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY291bnRcIlxuICAgICAgICAgIGtleT17Y291bnR9XG4gICAgICAgICAgdGltZW91dD17eyBlbnRlcjogNDAwLCBleGl0OiA0MDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEb3Q+e2NvdW50fTwvRG90PlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICA8L0FuaW1hdGlvblN0eWxlcz5cbiAgKTtcbn1cbiIsImltcG9ydCB7XHJcbiAgQ2FyZEVsZW1lbnQsXHJcbiAgRWxlbWVudHMsXHJcbiAgdXNlRWxlbWVudHMsXHJcbiAgdXNlU3RyaXBlLFxyXG59IGZyb20gJ0BzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzJztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gJy4vc3R5bGVzL1NpY2tCdXR0b24nO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG5gO1xyXG5cclxuY29uc3QgQ1JFQVRFX09SREVSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9PUkRFUl9NVVRBVElPTigkdG9rZW46IFN0cmluZyEpIHtcclxuICAgIGNoZWNrb3V0KHRva2VuOiAkdG9rZW4pIHtcclxuICAgICAgaWRcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBjbG9zZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuICBjb25zdCBbY2hlY2tvdXQsIHsgZXJyb3I6IGdyYXBoUUxFcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgQ1JFQVRFX09SREVSX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgY2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCksXHJcbiAgICB9KTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgIG5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG9yZGVyID0gYXdhaXQgY2hlY2tvdXQoe1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICB0b2tlbjogcGF5bWVudE1ldGhvZC5pZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogYC9vcmRlci9baWRdYCxcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBpZDogb3JkZXIuZGF0YS5jaGVja291dC5pZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY2xvc2VDYXJ0KCk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIG5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAge2Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgIHtncmFwaFFMRXJyb3IgJiYgPHAgc3R5bGU9e3sgZm9udFNpemU6IDEyIH19PntncmFwaFFMRXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICA8Q2FyZEVsZW1lbnQgLz5cclxuICAgICAgPFNpY2tCdXR0b24+Q2hlY2sgT3V0IE5vdzwvU2lja0J1dHRvbj5cclxuICAgIDwvQ2hlY2tvdXRGb3JtU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVMaWJ9PlxyXG4gICAgICA8Q2hlY2tvdXRGb3JtIC8+XHJcbiAgICA8L0VsZW1lbnRzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDYXJ0IGZyb20gJy4vQ2FydCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoJztcclxuXHJcbmNvbnN0IExvZ28gPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTdkZWcpO1xyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclN0eWxlcyA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgLmJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLCBibGFjayk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuXHJcbiAgLnN1Yi1iYXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2ssIGJsYWNrKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXJTdHlsZXM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XHJcbiAgICAgICAgPExvZ28+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlNpY2sgZml0czwvTGluaz5cclxuICAgICAgICA8L0xvZ28+XHJcbiAgICAgICAgPE5hdiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItYmFyXCI+XHJcbiAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENhcnQgLz5cclxuICAgIDwvSGVhZGVyU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5pbXBvcnQgQ2FydENvdW50IGZyb20gJy4vQ2FydENvdW50JztcclxuaW1wb3J0IFNpZ25PdXQgZnJvbSAnLi9TaWduT3V0JztcclxuaW1wb3J0IE5hdlN0eWxlcyBmcm9tICcuL3N0eWxlcy9OYXZTdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHsgb3BlbkNhcnQgfSA9IHVzZUNhcnQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdlN0eWxlcz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlByb2R1Y3RzPC9MaW5rPlxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VsbFwiPlNlbGw8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVyc1wiPk9yZGVyczwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPkFjY291bnQ8L0xpbms+XHJcbiAgICAgICAgICA8U2lnbk91dCAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b3BlbkNhcnR9PlxyXG4gICAgICAgICAgICBNeSBDYXJ0XHJcbiAgICAgICAgICAgIDxDYXJ0Q291bnRcclxuICAgICAgICAgICAgICBjb3VudD17dXNlci5jYXJ0LnJlZHVjZShcclxuICAgICAgICAgICAgICAgICh0YWxseSwgY2FydEl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgIHRhbGx5ICsgKGNhcnRJdGVtLnByb2R1Y3QgPyBjYXJ0SXRlbS5xdWFudGl0eSA6IDApLFxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgeyF1c2VyICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5TaWduIEluPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9OYXZTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnO1xyXG4gICAgc3JjOiB1cmwoJy9zdGF0aWMvcmFkbmlrYW5leHQtbWVkaXVtLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuICBodG1sIHtcclxuICAgIC0tcmVkOiAjZmYwMDAwO1xyXG4gICAgLS1ibGFjazogIzM5MzkzOTtcclxuICAgIC0tZ3JleTogIzNBM0EzQTtcclxuICAgIC0tZ3JheTogdmFyKC0tZ3JleSk7XHJcbiAgICAtLWxpZ2h0R3JleTogI2UxZTFlMTtcclxuICAgIC0tbGlnaHRHcmF5OiB2YXIoLS1saWdodEdyZXkpO1xyXG4gICAgLS1vZmZXaGl0ZTogI2VkZWRlZDtcclxuICAgIC0tbWF4V2lkdGg6IDEwMDBweDtcclxuICAgIC0tYnM6IDAgMTJweCAyNHB4IDAgcmdiYSgwLDAsMCwwLjA5KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnLCAtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MjtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnLCAtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElubmVyU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IHZhcigtLW1heFdpZHRoKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxJbm5lclN0eWxlcz57Y2hpbGRyZW59PC9Jbm5lclN0eWxlcz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5QYWdlLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcclxufTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tICcuL3N0eWxlcy9QYWdpbmF0aW9uU3R5bGVzJztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgUEFHSU5BVElPTl9RVUVSWSB7XHJcbiAgICBfYWxsUHJvZHVjdHNNZXRhIHtcclxuICAgICAgY291bnRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZSB9KSB7XHJcbiAgY29uc3QgeyBlcnJvciwgbG9hZGluZywgZGF0YSB9ID0gdXNlUXVlcnkoUEFHSU5BVElPTl9RVUVSWSk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiAnTG9hZGluZy4uLic7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gIGNvbnN0IHsgY291bnQgfSA9IGRhdGEuX2FsbFByb2R1Y3RzTWV0YTtcclxuICBjb25zdCBwYWdlQ291bnQgPSBNYXRoLmNlaWwoY291bnQgLyBwZXJQYWdlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdpbmF0aW9uU3R5bGVzPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICBTaWNrIEZpdHMgLSBQYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgLSAxfWB9PlxyXG4gICAgICAgIDxhIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPD0gMX0+4oaQIFByZXY8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgUGFnZSB7cGFnZX0gb2Yge3BhZ2VDb3VudH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD57Y291bnR9IEl0ZW1zIFRvdGFsPC9wPlxyXG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSArIDF9YH0+XHJcbiAgICAgICAgPGEgYXJpYS1kaXNhYmxlZD17cGFnZSA+PSBwYWdlQ291bnR9Pk5leHQg4oaSPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L1BhZ2luYXRpb25TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJpZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04oJGlkOiBJRCEpIHtcbiAgICBkZWxldGVDYXJ0SXRlbShpZDogJGlkKSB7XG4gICAgICBpZFxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gdXBkYXRlKGNhY2hlLCBwYXlsb2FkKSB7XG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVDYXJ0SXRlbSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW1vdmVGcm9tQ2FydCh7IGlkIH0pIHtcbiAgY29uc3QgW3JlbW92ZUZyb21DYXJ0LCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gICAgdXBkYXRlLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8QmlnQnV0dG9uXG4gICAgICBvbkNsaWNrPXtyZW1vdmVGcm9tQ2FydH1cbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICB0aXRsZT1cIlJlbW92ZSBUaGlzIEl0ZW0gZnJvbSBDYXJ0XCJcbiAgICA+XG4gICAgICAmdGltZXM7XG4gICAgPC9CaWdCdXR0b24+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gJ2Rvd25zaGlmdCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfSBmcm9tICcuL3N0eWxlcy9Ecm9wRG93bic7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1BST0RVQ1RTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsUHJvZHVjdHMoXHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgT1I6IFtcclxuICAgICAgICAgIHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcbiAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZmluZEl0ZW1zLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxyXG4gICAge1xyXG4gICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcclxuICAgIH1cclxuICApO1xyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XHJcbiAgY29uc3QgZmluZEl0ZW1zQnV0Q2hpbGwgPSBkZWJvdW5jZShmaW5kSXRlbXMsIDM1MCk7XHJcbiAgcmVzZXRJZENvdW50ZXIoKTtcclxuICBjb25zdCB7XHJcbiAgICBpc09wZW4sXHJcbiAgICBpbnB1dFZhbHVlLFxyXG4gICAgZ2V0TWVudVByb3BzLFxyXG4gICAgZ2V0SW5wdXRQcm9wcyxcclxuICAgIGdldENvbWJvYm94UHJvcHMsXHJcbiAgICBnZXRJdGVtUHJvcHMsXHJcbiAgICBoaWdobGlnaHRlZEluZGV4LFxyXG4gIH0gPSB1c2VDb21ib2JveCh7XHJcbiAgICBpdGVtcyxcclxuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuICAgICAgZmluZEl0ZW1zQnV0Q2hpbGwoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgc2VhcmNoVGVybTogaW5wdXRWYWx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSh7IHNlbGVjdGVkSXRlbSB9KSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogYC9wcm9kdWN0LyR7c2VsZWN0ZWRJdGVtLmlkfWAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGl0ZW1Ub1N0cmluZzogKGl0ZW0pID0+IGl0ZW0/Lm5hbWUgfHwgJycsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hTdHlsZXM+XHJcbiAgICAgIDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzZWFyY2gnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBmb3IgYW4gSXRlbScsXHJcbiAgICAgICAgICAgIGlkOiAnc2VhcmNoJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBsb2FkaW5nID8gJ2xvYWRpbmcnIDogbnVsbCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuICAgICAgICB7aXNPcGVuICYmXHJcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxEcm9wRG93bkl0ZW1cclxuICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXggfSl9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtpbmRleCA9PT0gaGlnaGxpZ2h0ZWRJbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICA8L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIHtpc09wZW4gJiYgIWl0ZW1zLmxlbmd0aCAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8RHJvcERvd25JdGVtPlNvcnJ5LCBObyBpdGVtcyBmb3VuZCBmb3Ige2lucHV0VmFsdWV9PC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ecm9wRG93bj5cclxuICAgIDwvU2VhcmNoU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvcmVhY3QnO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgU0lHTk9VVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiB7XHJcbiAgICBlbmRTZXNzaW9uXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbk91dCgpIHtcclxuICBjb25zdCBbc2lnbm91dF0gPSB1c2VNdXRhdGlvbihTSUdOT1VUX01VVEFUSU9OLCB7XHJcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2lnbm91dH0+XHJcbiAgICAgIFNpZ24gT3V0XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgYXV0aGVudGljYXRlZEl0ZW0ge1xyXG4gICAgICAuLi4gb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBjYXJ0IHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgcGhvdG8ge1xyXG4gICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShDVVJSRU5UX1VTRVJfUVVFUlkpO1xyXG4gIHJldHVybiBkYXRhPy5hdXRoZW50aWNhdGVkSXRlbTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ2FydFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAlO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgJHsocHJvcHMpID0+IHByb3BzLm9wZW4gJiYgYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtgfTtcbiAgaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIH1cbiAgZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxMHB4IGRvdWJsZSB2YXIoLS1ibGFjayk7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlcjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICByaWdodDogMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENsb3NlQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IERyb3BEb3duID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcbmA7XG5cbmNvbnN0IERyb3BEb3duSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gJyNmN2Y3ZjcnIDogJ3doaXRlJyl9O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJHsocHJvcHMpID0+IChwcm9wcy5oaWdobGlnaHRlZCA/ICdwYWRkaW5nLWxlZnQ6IDJyZW07JyA6IG51bGwpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWRcbiAgICAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gcHJvcHMudGhlbWUubGlnaHRncmV5IDogJ3doaXRlJyl9O1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgZ2xvdyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCB5ZWxsb3c7XG4gIH1cblxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHllbGxvdztcbiAgfVxuYDtcblxuY29uc3QgU2VhcmNoU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgICYubG9hZGluZyB7XG4gICAgICBhbmltYXRpb246ICR7Z2xvd30gMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZTdHlsZXMgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYSxcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyYXkpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEsIC0wLjY1LCAwLCAyLjMxKTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUGFnaW5hdGlvblN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG4gIH1cbiAgYVthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uU3R5bGVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNpY2tCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XG4gIHRyYW5zZm9ybTogc2tldygtMmRlZyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICZbZGlzYWJsZWRdIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNpY2tCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3VwcmVtZSA9IHN0eWxlZC5oM2BcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA1cHg7XG4gIHRyYW5zZm9ybTogc2tldygtM2RlZyk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA0cmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3VwcmVtZTtcbiIsIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgZmlsbCBtZSBpbiB3aGVuIHdlIGRlcGxveWA7XG5leHBvcnQgY29uc3QgcGVyUGFnZSA9IDI7XG4iLCJpbXBvcnQgeyBQQUdJTkFUSU9OX1FVRVJZIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAga2V5QXJnczogZmFsc2UsXHJcbiAgICByZWFkKGV4aXN0aW5nID0gW10sIHsgYXJncywgY2FjaGUgfSkge1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoeCkgPT4geCk7XHJcblxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QgJiYgcGFnZSA9PT0gcGFnZXMpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIHsgYXJncyB9KSB7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IHNraXA7IGkgPCBza2lwICsgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBtZXJnZWRbaV0gPSBpbmNvbWluZ1tpIC0gc2tpcF07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlcjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtjYXJ0T3Blbiwgc2V0Q2FydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVDYXJ0KCkge1xyXG4gICAgc2V0Q2FydE9wZW4oIWNhcnRPcGVuKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlQ2FydCgpIHtcclxuICAgIHNldENhcnRPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5DYXJ0KCkge1xyXG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvY2FsU3RhdGVQcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGNhcnRPcGVuLFxyXG4gICAgICAgIHNldENhcnRPcGVuLFxyXG4gICAgICAgIHRvZ2dsZUNhcnQsXHJcbiAgICAgICAgY2xvc2VDYXJ0LFxyXG4gICAgICAgIG9wZW5DYXJ0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xyXG4gIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBhbGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCB1c2VDYXJ0IH07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNUb3RhbFByaWNlKGNhcnQpIHtcclxuICByZXR1cm4gY2FydC5yZWR1Y2UoKHRhbGx5LCBjYXJ0SXRlbSkgPT4ge1xyXG4gICAgaWYgKCFjYXJ0SXRlbS5wcm9kdWN0KSByZXR1cm4gdGFsbHk7XHJcbiAgICByZXR1cm4gdGFsbHkgKyBjYXJ0SXRlbS5xdWFudGl0eSAqIGNhcnRJdGVtLnByb2R1Y3QucHJpY2U7XHJcbiAgfSwgMCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ0BhcG9sbG8vbGluay1lcnJvcic7XG5pbXBvcnQgeyBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3InO1xuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50JztcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xuaW1wb3J0IHsgZW5kcG9pbnQsIHByb2RFbmRwb2ludCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgcGFnaW5hdGlvbkZpZWxkIGZyb20gJy4vUGFnaW5hdGlvbkZpZWxkJztcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHsgaGVhZGVycywgaW5pdGlhbFN0YXRlIH0pIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbXG4gICAgICBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgICAgIGlmIChncmFwaFFMRXJyb3JzKVxuICAgICAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn0uIEJhY2tlbmQgaXMgdW5yZWFjaGFibGUuIElzIGl0IHJ1bm5pbmc/YFxuICAgICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIC8vIHRoaXMgdXNlcyBhcG9sbG8tbGluay1odHRwIHVuZGVyIHRoZSBob29kLCBzbyBhbGwgdGhlIG9wdGlvbnMgaGVyZSBjb21lIGZyb20gdGhhdCBwYWNrYWdlXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgICAgICAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IGVuZHBvaW50IDogcHJvZEVuZHBvaW50LFxuICAgICAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9LFxuICAgICAgICAvLyBwYXNzIHRoZSBoZWFkZXJzIGFsb25nIGZyb20gdGhpcyByZXF1ZXN0LiBUaGlzIGVuYWJsZXMgU1NSIHdpdGggbG9nZ2VkIGluIHN0YXRlXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9KSxcbiAgICBdKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBXZSB3aWxsIGFkZCB0aGlzIHRvZ2V0aGVyIVxuICAgICAgICAgICAgYWxsUHJvZHVjdHM6IHBhZ2luYXRpb25GaWVsZCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oY3JlYXRlQ2xpZW50LCB7IGdldERhdGFGcm9tVHJlZSB9KTtcbiIsImltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcclxuaW1wb3J0IHsgQ2FydFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cclxuICAgICAgPENhcnRTdGF0ZVByb3ZpZGVyPlxyXG4gICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgICAgPC9DYXJ0U3RhdGVQcm92aWRlcj5cclxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIH1cclxuICBwYWdlUHJvcHMucXVlcnkgPSBjdHgucXVlcnk7XHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShNeUFwcCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2xpbmstZXJyb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvd25zaGlmdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC5kZWJvdW5jZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==