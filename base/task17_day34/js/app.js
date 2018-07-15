
var checkboxWrapper = document.getElementById("checkbox-wrapper");
var tableWrapper = document.getElementById("table-wrapper");
var region = document.getElementById("region-radio-wrapper");
var product = document.getElementById("product-radio-wrapper");

var checkBox = document.querySelectorAll("input[type='checkbox'");
for(let i = 0; i < checkBox.length; i++) {
	checkBox[i].checked = true;
}
renderTable(tableWrapper, getData());

chooseCheckBox(region);
chooseCheckBox(product);
drawBar(sourceData);
lineChart(sourceData);

checkboxWrapper.onchange = function() {
	let data = getData();
	drawBar(data);
	lineChart(data);
	renderTable(tableWrapper, data);
}

tableWrapper.onmouseover = function(e) {
	let target = e.target;
	let parent = target.parentNode;
	let arr = [];
	let newData = [];
	if(!Number(parent.childNodes[5].innerText)) return; // 如果是表头则不处理
 	for(let i = 0; i < 2; i++) {
 		arr.push(parent.childNodes[i].innerText);
 	}
	for(let i = 0; i < sourceData.length; i++) {
		if(arr.indexOf(sourceData[i].region) !== -1 && arr.indexOf(sourceData[i].product) !== -1) {
			newData.push(sourceData[i]);
		}
	}
	
	drawBar(newData);
	lineChart(newData);
}
tableWrapper.onmouseout = function() {
	drawBar(getData());
	lineChart(getData());
}
