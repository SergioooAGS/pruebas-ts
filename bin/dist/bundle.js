/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (() => {

eval("const svg2 = d3.select(\"#miSVG\");\n// Tamaño de la ventana\nconst ventanaWidth = 0;\nconst ventanaHeight = 500;\n// Seleccionar el contenedor SVG\nconst svg = d3.select(\"body\").append(\"svg\")\n    .attr(\"width\", ventanaWidth)\n    .attr(\"height\", ventanaHeight);\n// Crear un rectángulo para representar la ventana\nsvg.append(\"rect\")\n    .attr(\"class\", \"ventana\") // Aplicar la clase CSS\n    .attr(\"width\", ventanaWidth)\n    .attr(\"height\", ventanaHeight);\nd3.drag().subject;\n// Definir las coordenadas iniciales del círculo\nlet centerX = 100;\nlet centerY = 100;\nconst radio = 50;\n// Dibujar el círculo\nconst circle = svg.append(\"circle\")\n    .attr(\"cx\", centerX)\n    .attr(\"cy\", centerY)\n    .attr(\"r\", radio)\n    .attr(\"fill\", \"blue\")\n    .attr(\"cursor\", \"grab\"); // Cambiar el cursor para indicar que el círculo es arrastrable\n// Agregar eventos de mouse para el arrastre\ncircle.call(d3.drag()\n    .on(\"start\", dragStart)\n    .on(\"drag\", dragging)\n    .on(\"end\", dragEnd));\nfunction dragStart(event) {\n    // Guardar las coordenadas iniciales del círculo\n    centerX = +circle.attr(\"cx\");\n    centerY = +circle.attr(\"cy\");\n}\nfunction dragging(event) {\n    // Actualizar las coordenadas del círculo según la posición del mouse\n    const newX = centerX + event.dx;\n    const newY = centerY + event.dy;\n    // Aplicar las nuevas coordenadas al círculo\n    circle.attr(\"cx\", newX)\n        .attr(\"cy\", newY);\n}\nfunction dragEnd(event) {\n    // Puedes agregar lógica adicional al finalizar el arrastre si es necesario\n    console.log(\"Arrastre finalizado\");\n}\n\n\n//# sourceURL=webpack://proy/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;