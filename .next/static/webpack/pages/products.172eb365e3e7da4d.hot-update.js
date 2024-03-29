"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Products; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_FaRegEdit_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaRegEdit!=!react-icons/fa */ \"__barrel_optimize__?names=FaRegEdit!=!./node_modules/react-icons/fa/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_MdDelete_react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=MdDelete!=!react-icons/md */ \"__barrel_optimize__?names=MdDelete!=!./node_modules/react-icons/md/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Products() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/products\").then((response)=>{\n            setProducts(response.data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"btn-primary\",\n                href: \"/products/new\",\n                children: \"Add new products\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"basic mt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: \"Product name\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                    fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: products === null || products === void 0 ? void 0 : products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: product.title\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                className: \"btn-primary\",\n                                                href: \"/products/edit/\" + product._id,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaRegEdit_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaRegEdit, {\n                                                        size: 18\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    \"Edit\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                className: \"btn-red\",\n                                                href: \"/products/delete/\" + product._id,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDelete_react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdDelete, {\n                                                        size: 18\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    \"Delete\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, product._id, true, {\n                                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"WsG59hGLZBv0fpRHcsgwGiAQpQg=\");\n_c = Products;\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2Y7QUFDRztBQUNzQjtBQUNSO0FBQ0Q7QUFFM0IsU0FBU1E7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUE7SUFFeENELGdEQUFTQSxDQUFDO1FBQ1JILGlEQUFTLENBQUMsaUJBQWlCVyxJQUFJLENBQUMsQ0FBQ0M7WUFDL0JILFlBQVlHLFNBQVNDLElBQUk7UUFDM0I7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ2QsMERBQU1BOzswQkFDTCw4REFBQ0Usa0RBQUlBO2dCQUFDYSxXQUFVO2dCQUFjQyxNQUFNOzBCQUFpQjs7Ozs7OzBCQUlyRCw4REFBQ0M7Z0JBQU1GLFdBQVU7O2tDQUNmLDhEQUFDRztrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHTCw4REFBQ0M7a0NBQ0VaLHFCQUFBQSwrQkFBQUEsU0FBVWEsR0FBRyxDQUFDLENBQUNDLHdCQUNkLDhEQUFDSjs7a0RBQ0MsOERBQUNDO2tEQUFJRyxRQUFRQyxLQUFLOzs7Ozs7a0RBQ2xCLDhEQUFDSjs7MERBQ0MsOERBQUNsQixrREFBSUE7Z0RBQ0hhLFdBQVU7Z0RBQ1ZDLE1BQU0sb0JBQW9CTyxRQUFRRSxHQUFHOztrRUFFckMsOERBQUNuQixzRkFBU0E7d0RBQUNvQixNQUFNOzs7Ozs7b0RBQU07Ozs7Ozs7MERBR3pCLDhEQUFDeEIsa0RBQUlBO2dEQUNIYSxXQUFVO2dEQUNWQyxNQUFNLHNCQUFzQk8sUUFBUUUsR0FBRzs7a0VBRXZDLDhEQUFDbEIsb0ZBQVFBO3dEQUFDbUIsTUFBTTs7Ozs7O29EQUFNOzs7Ozs7Ozs7Ozs7OzsrQkFkbkJILFFBQVFFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QmhDO0dBL0N3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzLmpzPzMxNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFSZWdFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IE1kRGVsZXRlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoXCIvYXBpL3Byb2R1Y3RzXCIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIGhyZWY9e1wiL3Byb2R1Y3RzL25ld1wifT5cclxuICAgICAgICBBZGQgbmV3IHByb2R1Y3RzXHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJiYXNpYyBtdC0yXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+UHJvZHVjdCBuYW1lPC90ZD5cclxuICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge3Byb2R1Y3RzPy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17cHJvZHVjdC5faWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC50aXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17XCIvcHJvZHVjdHMvZWRpdC9cIiArIHByb2R1Y3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8RmFSZWdFZGl0IHNpemU9ezE4fSAvPlxyXG4gICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcmVkXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj17XCIvcHJvZHVjdHMvZGVsZXRlL1wiICsgcHJvZHVjdC5faWR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxNZERlbGV0ZSBzaXplPXsxOH0gLz5cclxuICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJheGlvcyIsIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmFSZWdFZGl0IiwiTWREZWxldGUiLCJQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2xhc3NOYW1lIiwiaHJlZiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRkIiwidGJvZHkiLCJtYXAiLCJwcm9kdWN0IiwidGl0bGUiLCJfaWQiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products.js\n"));

/***/ })

});