"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/searchpage/page",{

/***/ "(app-pages-browser)/./app/searchpage/page.tsx":
/*!*********************************!*\
  !*** ./app/searchpage/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom.css */ \"(app-pages-browser)/./app/searchpage/custom.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleFocus = ()=>{\n        setIsFocused(true);\n    };\n    const handleInputChange = (event)=>{\n        setQuery(event.target.value);\n    };\n    const handleSubmit = ()=>{\n        // Handle query submission logic here\n        console.log(\"Query submitted:\", query);\n        setResponse(\"\");\n    };\n    const quickQueries = [\n        \"AI for HealthCare\",\n        \"Encryption Project\",\n        \"Gen AI with Llama Project\",\n        \"Amazon clone\",\n        \"Management System\"\n    ];\n    // Updated quick query button click handler\n    const handleQuickQueryClick = (quickQuery)=>{\n        setQuery(quickQuery);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: {\n            backgroundImage: \"url('back.jpg')\",\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            height: \"100vh\",\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    top: 0,\n                    left: 0,\n                    width: \"100%\",\n                    height: \"100%\",\n                    background: \"rgba(255, 255, 255, 0.5)\",\n                    backdropFilter: \"blur(3px)\"\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                style: {\n                    position: \"absolute\",\n                    top: \"35px\",\n                    right: \"65px\",\n                    color: \"black\",\n                    textDecoration: \"none\",\n                    fontSize: \"25px\"\n                },\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    height: \"100%\",\n                    color: \"black\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type to Search\",\n                        value: query,\n                        onChange: handleInputChange,\n                        onFocus: handleFocus,\n                        style: {\n                            padding: \"20px\",\n                            fontSize: \"50px\",\n                            top: \"30%\",\n                            left: \"30%\",\n                            position: \"absolute\",\n                            border: \"none\",\n                            background: \"transparent\",\n                            outline: \"none\",\n                            color: \"black\",\n                            overflowY: \"auto\",\n                            width: \"750px\",\n                            maxHeight: \"200px\"\n                        },\n                        className: \"custom-input\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"absolute\",\n                            top: \"calc(30% + 60px)\",\n                            left: \"calc(28% - 25px)\",\n                            width: \"2px\",\n                            height: \"50px\",\n                            background: \"black\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            position: \"absolute\",\n                            top: \"calc(30% + 60px)\",\n                            left: \"calc(28% + 20px)\",\n                            width: \"4px\",\n                            height: \"80px\",\n                            background: \"black\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginTop: \"20px\",\n                            display: \"flex\",\n                            gap: \"15px\"\n                        },\n                        children: quickQueries.map((quickQuery, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleQuickQueryClick(quickQuery),\n                                style: {\n                                    padding: \"10px\",\n                                    fontSize: \"16px\",\n                                    backgroundColor: \"black\",\n                                    color: \"white\",\n                                    border: \"none\",\n                                    cursor: \"pointer\",\n                                    borderRadius: \"5px\",\n                                    zIndex: \"50000\"\n                                },\n                                children: quickQuery\n                            }, index, false, {\n                                fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        style: {\n                            marginTop: \"20px\",\n                            position: \"absolute\",\n                            top: \"35%\",\n                            left: \"70%\",\n                            padding: \"15px\",\n                            fontSize: \"18px\",\n                            backgroundColor: \"black\",\n                            color: \"white\",\n                            border: \"none\",\n                            cursor: \"pointer\",\n                            zIndex: \"10000\",\n                            borderRadius: \"15%\",\n                            width: \"100px\"\n                        },\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\prohunt\\\\client\\\\app\\\\searchpage\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"K8Rdf74tacSzsImGgbqqasbZLkc=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zZWFyY2hwYWdlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDcUQ7QUFDL0I7QUFFdEIsTUFBTUUsT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUSxjQUFjO1FBQ2xCRCxhQUFhO0lBQ2Y7SUFHQSxNQUFNRSxvQkFBb0IsQ0FBQ0M7UUFDekJQLFNBQVNPLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLE1BQU1DLGVBQWU7UUFDbkIscUNBQXFDO1FBQ3JDQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CYjtRQUNoQ0csWUFBWTtJQUNkO0lBRUEsTUFBTVcsZUFBZTtRQUFDO1FBQXFCO1FBQXNCO1FBQTZCO1FBQWdCO0tBQW9CO0lBRWxJLDJDQUEyQztJQUMzQyxNQUFNQyx3QkFBd0IsQ0FBQ0M7UUFDN0JmLFNBQVNlO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsT0FBTztZQUFFQyxpQkFBaUI7WUFBbUJDLGdCQUFnQjtZQUFTQyxvQkFBb0I7WUFBVUMsUUFBUTtZQUFTQyxVQUFVO1FBQVc7OzBCQUU5SSw4REFBQ0M7Z0JBQUlOLE9BQU87b0JBQ1ZLLFVBQVU7b0JBQ1ZFLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BMLFFBQVE7b0JBQ1JNLFlBQVk7b0JBQ1pDLGdCQUFnQjtnQkFDbEI7Ozs7OzswQkFHQSw4REFBQ0M7Z0JBQUVDLE1BQU07Z0JBQUtiLE9BQU87b0JBQUVLLFVBQVU7b0JBQVlFLEtBQUs7b0JBQVFPLE9BQU87b0JBQVFDLE9BQU87b0JBQVNDLGdCQUFnQjtvQkFBUUMsVUFBVTtnQkFBTzswQkFBRzs7Ozs7OzBCQUtySSw4REFBQ1g7Z0JBQUlOLE9BQU87b0JBQUVrQixTQUFTO29CQUFRQyxlQUFlO29CQUFVQyxZQUFZO29CQUFVQyxnQkFBZ0I7b0JBQVVqQixRQUFRO29CQUFRVyxPQUFPO2dCQUFROztrQ0FFckksOERBQUNPO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaaEMsT0FBT1Y7d0JBQ1AyQyxVQUFVcEM7d0JBQ1ZxQyxTQUFTdEM7d0JBQ1RZLE9BQU87NEJBQ0wyQixTQUFTOzRCQUNUVixVQUFVOzRCQUNWVixLQUFLOzRCQUNMQyxNQUFNOzRCQUNOSCxVQUFVOzRCQUNWdUIsUUFBUTs0QkFDUmxCLFlBQVk7NEJBQ1ptQixTQUFTOzRCQUNUZCxPQUFPOzRCQUNQZSxXQUFXOzRCQUNYckIsT0FBTzs0QkFDUHNCLFdBQVc7d0JBQ2I7d0JBQ0FDLFdBQVU7Ozs7OztrQ0FJWiw4REFBQzFCO3dCQUFJTixPQUFPOzRCQUNWSyxVQUFVOzRCQUNWRSxLQUFLOzRCQUNMQyxNQUFNOzRCQUNOQyxPQUFPOzRCQUNQTCxRQUFROzRCQUNSTSxZQUFZO3dCQUNkOzs7Ozs7a0NBQ0EsOERBQUNKO3dCQUFJTixPQUFPOzRCQUNWSyxVQUFVOzRCQUNWRSxLQUFLOzRCQUNMQyxNQUFNOzRCQUNOQyxPQUFPOzRCQUNQTCxRQUFROzRCQUNSTSxZQUFZO3dCQUNkOzs7Ozs7a0NBRUEsOERBQUNKO3dCQUFJTixPQUFPOzRCQUFFaUMsV0FBVzs0QkFBUWYsU0FBUzs0QkFBUWdCLEtBQUs7d0JBQU87a0NBQzNEdEMsYUFBYXVDLEdBQUcsQ0FBQyxDQUFDckMsWUFBWXNDLHNCQUM3Qiw4REFBQ0M7Z0NBRUNDLFNBQVMsSUFBTXpDLHNCQUFzQkM7Z0NBQ3JDRSxPQUFPO29DQUNMMkIsU0FBUztvQ0FDVFYsVUFBVTtvQ0FDVnNCLGlCQUFpQjtvQ0FDakJ4QixPQUFPO29DQUNQYSxRQUFRO29DQUNSWSxRQUFRO29DQUNSQyxjQUFjO29DQUNkQyxRQUFRO2dDQUNWOzBDQUVDNUM7K0JBYklzQzs7Ozs7Ozs7OztrQ0FpQlgsOERBQUNDO3dCQUNDQyxTQUFTN0M7d0JBQ1RPLE9BQU87NEJBQ0xpQyxXQUFXOzRCQUNYNUIsVUFBVTs0QkFDVkUsS0FBSzs0QkFDTEMsTUFBTTs0QkFDTm1CLFNBQVM7NEJBQ1RWLFVBQVU7NEJBQ1ZzQixpQkFBaUI7NEJBQ2pCeEIsT0FBTzs0QkFDUGEsUUFBUTs0QkFDUlksUUFBUTs0QkFDUkUsUUFBUTs0QkFDUkQsY0FBYzs0QkFDZGhDLE9BQU87d0JBQ1Q7a0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBcElNNUI7S0FBQUE7QUFzSU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NlYXJjaHBhZ2UvcGFnZS50c3g/NjdlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9jdXN0b20uY3NzJztcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0ZvY3VzZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAvLyBIYW5kbGUgcXVlcnkgc3VibWlzc2lvbiBsb2dpYyBoZXJlXHJcbiAgICBjb25zb2xlLmxvZygnUXVlcnkgc3VibWl0dGVkOicsIHF1ZXJ5KTtcclxuICAgIHNldFJlc3BvbnNlKCcnKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHF1aWNrUXVlcmllcyA9IFsnQUkgZm9yIEhlYWx0aENhcmUnLCAnRW5jcnlwdGlvbiBQcm9qZWN0JywgJ0dlbiBBSSB3aXRoIExsYW1hIFByb2plY3QnLCAnQW1hem9uIGNsb25lJywgJ01hbmFnZW1lbnQgU3lzdGVtJ107XHJcblxyXG4gIC8vIFVwZGF0ZWQgcXVpY2sgcXVlcnkgYnV0dG9uIGNsaWNrIGhhbmRsZXJcclxuICBjb25zdCBoYW5kbGVRdWlja1F1ZXJ5Q2xpY2sgPSAocXVpY2tRdWVyeTogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRRdWVyeShxdWlja1F1ZXJ5KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgnYmFjay5qcGcnKVwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJywgaGVpZ2h0OiAnMTAwdmgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgey8qIFNlbWktdHJhbnNwYXJlbnQgd2hpdGUgb3ZlcmxheSAqL31cclxuICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsIC8vIEFkanVzdCB0aGUgYWxwaGEgdmFsdWUgZm9yIHRyYW5zcGFyZW5jeVxyXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cigzcHgpJywgLy8gQXBwbHkgYmx1ciBlZmZlY3RcclxuICAgICAgfX0gLz5cclxuXHJcbiAgICAgIHsvKiBIb21lIEJ1dHRvbiAqL31cclxuICAgICAgPGEgaHJlZj17Jy8nfSBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMzVweCcsIHJpZ2h0OiAnNjVweCcsIGNvbG9yOiAnYmxhY2snLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBmb250U2l6ZTogJzI1cHgnIH19PlxyXG4gICAgICAgIEhvbWVcclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgey8qIFNlYXJjaCBJbnB1dCAqL31cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBoZWlnaHQ6ICcxMDAlJywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgey8qIFNlYXJjaCBJbnB1dCAqL31cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB0byBTZWFyY2hcIlxyXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMjBweCcsIC8vIEluY3JlYXNlZCBwYWRkaW5nXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnNTBweCcsIC8vIEluY3JlYXNlZCBmb250IHNpemVcclxuICAgICAgICAgICAgdG9wOiAnMzAlJyxcclxuICAgICAgICAgICAgbGVmdDogJzMwJScsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgLy8gVHJhbnNwYXJlbnQgYmFja2dyb3VuZFxyXG4gICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLCAvLyBUZXh0IGNvbG9yXHJcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG4gICAgICAgICAgICB3aWR0aDogJzc1MHB4JyxcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMjAwcHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgey8qIFR3byB2ZXJ0aWNhbCBsaW5lcyAqL31cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgIHRvcDogJ2NhbGMoMzAlICsgNjBweCknLCAvLyBBZGp1c3QgcG9zaXRpb24gYmVsb3cgaW5wdXRcclxuICAgICAgICAgIGxlZnQ6ICdjYWxjKDI4JSAtIDI1cHgpJywgLy8gQ2VudGVyZWRcclxuICAgICAgICAgIHdpZHRoOiAnMnB4JywgLy8gQWRqdXN0IGxpbmUgd2lkdGhcclxuICAgICAgICAgIGhlaWdodDogJzUwcHgnLCAvLyBBZGp1c3QgbGluZSBoZWlnaHRcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgIHRvcDogJ2NhbGMoMzAlICsgNjBweCknLCAvLyBBZGp1c3QgcG9zaXRpb24gYmVsb3cgaW5wdXRcclxuICAgICAgICAgIGxlZnQ6ICdjYWxjKDI4JSArIDIwcHgpJywgLy8gQWRqdXN0IHNwYWNlIGJldHdlZW4gbGluZXNcclxuICAgICAgICAgIHdpZHRoOiAnNHB4JywgLy8gQWRqdXN0IGxpbmUgd2lkdGhcclxuICAgICAgICAgIGhlaWdodDogJzgwcHgnLCAvLyBBZGp1c3QgbGluZSBoZWlnaHRcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXHJcbiAgICAgICAgfX0gLz5cclxuICAgICAgICB7LyogUXVpY2sgcXVlcnkgYnV0dG9ucyAqL31cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzE1cHgnIH19PlxyXG4gICAgICAgICAge3F1aWNrUXVlcmllcy5tYXAoKHF1aWNrUXVlcnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVF1aWNrUXVlcnlDbGljayhxdWlja1F1ZXJ5KX0gLy8gVXBkYXRlZCBvbkNsaWNrIGhhbmRsZXJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6ICc1MDAwMCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtxdWlja1F1ZXJ5fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzIwcHgnLCAvLyBBZGp1c3RlZCBtYXJnaW4gZnJvbSB0aGUgaW5wdXQgZmllbGRcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogJzM1JScsXHJcbiAgICAgICAgICAgIGxlZnQ6ICc3MCUnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTVweCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgekluZGV4OiAnMTAwMDAnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNSUnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhZ2UiLCJxdWVyeSIsInNldFF1ZXJ5IiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInF1aWNrUXVlcmllcyIsImhhbmRsZVF1aWNrUXVlcnlDbGljayIsInF1aWNrUXVlcnkiLCJtYWluIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImhlaWdodCIsInBvc2l0aW9uIiwiZGl2IiwidG9wIiwibGVmdCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJhY2tkcm9wRmlsdGVyIiwiYSIsImhyZWYiLCJyaWdodCIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJwYWRkaW5nIiwiYm9yZGVyIiwib3V0bGluZSIsIm92ZXJmbG93WSIsIm1heEhlaWdodCIsImNsYXNzTmFtZSIsIm1hcmdpblRvcCIsImdhcCIsIm1hcCIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsInpJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/searchpage/page.tsx\n"));

/***/ })

});