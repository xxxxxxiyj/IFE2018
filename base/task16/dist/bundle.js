/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const getData = __webpack_require__(1);
const renderTable = __webpack_require__(3);
const chooseCheckBox = __webpack_require__(4);

var regionSelect = document.getElementById("region-radio-wrapper");
var productSelect = document.getElementById("product-radio-wrapper");
var tableWrapper = document.getElementById("table-wrapper");

var checkBox = document.querySelectorAll("input[type='checkbox'");
for(let i = 0; i < checkBox.length; i++) {
	checkBox[i].checked = true;
}
renderTable(tableWrapper, getData(), regionSelect, productSelect);

chooseCheckBox(regionSelect);
chooseCheckBox(productSelect);

regionSelect.onchange = function() {
	let data = getData();
	// console.log(data);
	renderTable(tableWrapper, data, regionSelect, productSelect);
}
productSelect.onchange = function() {
	let data = getData();
	// console.log(data);
	renderTable(tableWrapper, data, regionSelect, productSelect);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const sourceData = __webpack_require__(2);
function getData() {
	let selected = document.querySelectorAll("input[checkbox-type='single']");
	let selectedList = [];
	let dataList = [];
	for(let i = 0; i < selected.length; i++) {
		if(selected[i].checked) {
			selectedList.push(selected[i].value);
		}
	}
	// console.log(selectedList);  dataList无问题
	for(let i = 0; i < sourceData.length; i++) {
		if(selectedList.indexOf(sourceData[i].region) !== -1 && selectedList.indexOf(sourceData[i].product) !== -1) {
			dataList.push(sourceData[i]);
		}
	}
	return dataList;
}

module.exports = getData;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]

module.exports = sourceData;

/***/ }),
/* 3 */
/***/ (function(module, exports) {


function renderTable(container, data, region, product) {
	container.textContent = "";

	let regSel = region.querySelectorAll("input[checkbox-type='single']");
	let proSel = product.querySelectorAll("input[checkbox-type='single']");
	let regSelNum = 0;
	let proSelNum = 0;

	let table = document.createElement("table");
	table.setAttribute("id", "table");
	let thead = document.createElement("tr");
	thead.innerHTML = `
		<th>商品</th>
		<th>地区</th>
		<th>1月</th>
		<th>2月</th>
		<th>3月</th>
		<th>4月</th>
		<th>5月</th>
		<th>6月</th>
		<th>7月</th>
		<th>8月</th>
		<th>9月</th>
		<th>10月</th>
		<th>11月</th>
		<th>12月</th>
	`;

	table.appendChild(thead); // 表头

	for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        // 遍历data
        for (let key in data[i]) {
            if (data[i].hasOwnProperty(key)) {
                // 判断data[i]的value是否是数组，非数组则直接添加到td里
                if (!Array.isArray(data[i][key])) {
                    let td = document.createElement("td");
                    td.innerHTML = data[i][key];
                    tr.appendChild(td);
                } else {
                    // 如果是数组，则遍历数组，将数组中的每一项分别创建并添加到td
                    for (let k = 0; k < data[i][key].length; k++) {
                        let td = document.createElement("td");
                        td.innerHTML = data[i][key][k];
                        tr.appendChild(td);
                    }
                }
            }
        }
        table.appendChild(tr);
    }
	container.appendChild(table);

	/** 当地区选择一个，商品选择多个时交换第一列与第二列 **/
	for(let i = 0; i < regSel.length; i++) {
		if(regSel[i].checked) regSelNum++;
	}
	for(let i = 0; i < proSel.length; i++) {
		if(proSel[i].checked) proSelNum++;
	}
	if(regSelNum === 1 && proSelNum !== 1) {
		for(let i = 0; i < table.rows.length; i++) {
			let temp = table.rows[i].cells[0].innerHTML;
			table.rows[i].cells[0].innerHTML = table.rows[i].cells[1].innerHTML;
			table.rows[i].cells[1].innerHTML = temp;
		}
	}
	// console.log(table);
	mergeCell(1, 0);
}


function mergeCell(start, col) {
	let tab = document.getElementById("table");
	for(let i = start; i < tab.rows.length - 1; i++) {
		// 内容若和第一行相同则合并
		if(tab.rows[start].cells[col].innerHTML === tab.rows[i + 1].cells[0].innerHTML) {
			tab.rows[i + 1].cells[col].style.display = "none";
			tab.rows[start].cells[col].rowSpan += 1;  // 相同内容的第一行设置rowspan
		}else {
			mergeCell(i + 1, 0);  // 若不相同则从当前行开始继续判断
		}
	}
}

module.exports = renderTable;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * 选择框
 * @param  {} parent 容器
 */
function chooseCheckBox(parent) {
    let checkAll  = parent.querySelector("input[checkbox-type = 'all']");  // 获取当前容器下的全选框
    let child = parent.querySelectorAll("input[checkbox-type = 'single']"); // 获取当前容器下的选项选框
    parent.onclick= function(e) {
        let target = e.target;
        if(target.getAttribute("type") === "checkbox") {
            let type = target.getAttribute("checkbox-type");
            if(type === "all") { // 如果点击的为全选框
                checkAll.checked = true;
                for(let i = 0; i < child.length; i++) {
                    child[i].checked = true;
                }
            } else if(type == "single"){
                let num = 0;
                for(let i = 0; i < child.length; i++) {
                    if(child[i].checked) num++;
                }
                if(num === child.length) {
                    checkAll.checked = true;  // 若为全选，则勾选全选状态
                }else if(num === 0){
                    target.checked = true;    // 若其余的都为选中，则至少选中一个，不允许一个都不选
                }else {
                    checkAll.checked = false;
                }
            }
        }
    }
}

module.exports = chooseCheckBox;

/***/ })
/******/ ]);