"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/new",{

/***/ "./pages/products/new.js":
/*!*******************************!*\
  !*** ./pages/products/new.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction NewProduct() {\n    _s();\n    const [title, setTitle] = useState(existingTitle || \"\");\n    const [description, setDescription] = useState(\"\");\n    const [category, setCategory] = useState(\"\");\n    const [productProperties, setProductProperties] = useState(\"\");\n    const [price, setPrice] = useState(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"New Product\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Product Name\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: title,\n                placeholder: \"product name\",\n                onChange: (ev)=>setTitle(ev.target.value)\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Description\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"description\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Price (in USD)\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"price\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                type: \"submit\",\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\Programming courses\\\\Projects\\\\Ecommerce\\\\E-commerce\\\\e-commerce-admin\\\\pages\\\\products\\\\new.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(NewProduct, \"n6m6aB46pFxBYDEt00Ouk/gJ6SU=\");\n_c = NewProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProduct);\nvar _c;\n$RefreshReg$(_c, \"NewProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9uZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFDZjtBQUUxQixTQUFTRTs7SUFFTCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0MsU0FBU0MsaUJBQWlCO0lBQ3BELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCxTQUFTO0lBQy9DLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCxTQUFTO0lBQ3pDLE1BQU0sQ0FBQ00sbUJBQW1CQyxxQkFBcUIsR0FBR1AsU0FBUztJQUMzRCxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsU0FBUztJQUVyQyxxQkFDRSw4REFBQ0wsMERBQU1BOzswQkFDTCw4REFBQ2U7MEJBQUc7Ozs7OzswQkFFSiw4REFBQ0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ0M7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU9oQjtnQkFDUGlCLGFBQVk7Z0JBQ1pDLFVBQVUsQ0FBQ0MsS0FBT2xCLFNBQVNrQixHQUFHQyxNQUFNLENBQUNKLEtBQUs7Ozs7OzswQkFHNUMsOERBQUNIOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNRO2dCQUFTSixhQUFZOzs7Ozs7MEJBQ3RCLDhEQUFDSjswQkFBTTs7Ozs7OzBCQUNQLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBU0UsYUFBWTs7Ozs7OzBCQUVqQyw4REFBQ0s7Z0JBQU9DLFdBQVU7Z0JBQWNSLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUtwRDtHQTlCU2hCO0tBQUFBO0FBZ0NULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzL25ldy5qcz8xNzU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTmV3UHJvZHVjdCgpIHtcclxuXHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKGV4aXN0aW5nVGl0bGUgfHwgXCJcIik7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwcm9kdWN0UHJvcGVydGllcywgc2V0UHJvZHVjdFByb3BlcnRpZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGgxPk5ldyBQcm9kdWN0PC9oMT5cclxuXHJcbiAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicHJvZHVjdCBuYW1lXCJcclxuICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBzZXRUaXRsZShldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxyXG4gICAgICA8bGFiZWw+UHJpY2UgKGluIFVTRCk8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwicHJpY2VcIiAvPlxyXG5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICBTYXZlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UHJvZHVjdDtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwiTmV3UHJvZHVjdCIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VTdGF0ZSIsImV4aXN0aW5nVGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInByb2R1Y3RQcm9wZXJ0aWVzIiwic2V0UHJvZHVjdFByb3BlcnRpZXMiLCJwcmljZSIsInNldFByaWNlIiwiaDEiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2IiwidGFyZ2V0IiwidGV4dGFyZWEiLCJidXR0b24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/new.js\n"));

/***/ })

});